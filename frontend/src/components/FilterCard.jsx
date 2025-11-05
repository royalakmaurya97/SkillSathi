import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Skill Category",
    array: ["Daily Wage Laborer", "Construction Worker", "Electrician", "Plumber", "Carpenter"]
  },
  {
    filterType: "Availability",
    array: ["Full-time", "Part-time", "Daily basis", "Seasonal"]
  },
  {
    filterType: "Experience Level",
    array: ["Beginner", "Intermediate", "Expert"]
  }
]

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setSelectedFilters(prev => [...prev, value]);
    } else {
      setSelectedFilters(prev => prev.filter(item => item !== value));
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([]);
  }

  useEffect(() => {
    // Join all selected filters into a single search query
    const query = selectedFilters.join(' ');
    dispatch(setSearchedQuery(query));
  }, [selectedFilters, dispatch]);

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        {selectedFilters.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-xs"
          >
            Clear All
          </Button>
        )}
      </div>
      <hr className='mb-3' />
      {
        filterData.map((data, index) => (
          <div key={index} className='mb-4'>
            <h2 className='font-semibold text-md mb-2'>{data.filterType}</h2>
            {
              data.array.map((item, idx) => {
                const itemId = `filter-${index}-${idx}`;
                const isChecked = selectedFilters.includes(item);
                
                return (
                  <div className='flex items-center space-x-2 my-2' key={itemId}>
                    <Checkbox 
                      id={itemId}
                      checked={isChecked}
                      onCheckedChange={(checked) => handleCheckboxChange(item, checked)}
                    />
                    <Label 
                      htmlFor={itemId}
                      className="cursor-pointer text-sm font-normal"
                    >
                      {item}
                    </Label>
                  </div>
                )
              })
            }
          </div>
        ))
      }
      {selectedFilters.length > 0 && (
        <div className='mt-4 p-2 bg-gray-100 rounded-md'>
          <p className='text-xs font-semibold mb-1'>Active Filters:</p>
          <div className='flex flex-wrap gap-1'>
            {selectedFilters.map((filter, idx) => (
              <span 
                key={idx} 
                className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full'
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterCard;
