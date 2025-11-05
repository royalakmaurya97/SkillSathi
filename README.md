# SkillSathi - Digital Labor Marketplace

![SkillSathi Logo](https://img.shields.io/badge/SkillSathi-Open%20Innovation-blue)
![Team](https://img.shields.io/badge/Team-CodeStorm-green)
![Status](https://img.shields.io/badge/Status-Active-success)

## 🎯 Problem Statement

**Title:** SkillSathi: Bridging the Skill-to-Job Gap through a Digital Labor Marketplace

**Theme:** Open Innovation

**Team Name:** CodeStorm

### The Challenge

Millions of informal and daily wage laborers face significant barriers in accessing timely, reliable, and suitable employment opportunities. The current hiring ecosystem is fragmented, inefficient, and lacks digitization, resulting in:

- Lost income for workers
- Delays for employers
- Lack of skill matching
- Poor communication channels
- Trust issues
- Accessibility barriers for low-literacy users

### Our Solution

SkillSathi is a user-friendly, inclusive digital marketplace that connects skilled laborers and employers in real-time, promoting:

- ✅ **Fairness** - Equal opportunities for all workers
- ✅ **Transparency** - Clear job requirements and expectations
- ✅ **Economic Empowerment** - Better income opportunities for the informal workforce
- ✅ **Real-time Matching** - Instant connection between skills and jobs
- ✅ **Trust Building** - Verified profiles and ratings
- ✅ **Accessibility** - Designed for low-literacy users

## 🚀 Key Features

### For Job Seekers (Laborers)
- 📝 Easy registration with profile creation
- 🔍 Smart job search and filtering
- 💰 Advance payment visibility from employers
- 📱 Mobile-friendly interface
- 🎯 Skill-based job matching
- ⭐ Build reputation through ratings

### For Employers (Recruiters)
- 🏢 Company profile with logo
- 💵 Set advance payment for workers
- 📋 Post job requirements
- 👥 View applicant profiles
- 🔄 Real-time application tracking
- ⚡ Quick hiring process

### Platform Features
- 🔐 Secure authentication
- 🌐 Multi-category job listings
- 🎨 Modern, intuitive UI
- 📊 Dashboard for both parties
- 🔔 Real-time updates
- 📈 Analytics and insights

## 🛠️ Technology Stack

### Frontend
- **Framework:** React.js with Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **UI Components:** Radix UI, Shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **File Upload:** Multer, Cloudinary
- **API:** RESTful APIs

## 📁 Project Structure

```
SkillSithi/
├── backend/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── application.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── application.model.js
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── index.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── admin/
    │   │   ├── auth/
    │   │   ├── shared/
    │   │   └── ui/
    │   ├── hooks/
    │   ├── redux/
    │   └── utils/
    └── package.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Cloudinary Account (for image uploads)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd SkillSithi
```

2. **Backend Setup**
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

Start backend server:
```bash
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
```

Start frontend development server:
```bash
npm run dev
```

4. **Access the Application**
- Frontend: `http://localhost:5173` or `http://localhost:5174`
- Backend API: `http://localhost:8000`

## 📱 User Roles

### Job Seeker (Student/Laborer)
- Register and create profile
- Search and filter jobs
- Apply for jobs
- View application status
- Update profile and skills

### Recruiter (Local Head/Employer)
- Register company with logo
- Set advance payment amount
- Post job openings
- View applicants
- Manage company profile

## 💡 Innovation Highlights

1. **Advance Payment Feature** - Employers can specify upfront payment to attract and support workers
2. **Real-time Skill Matching** - AI-powered job recommendations based on skills
3. **Multi-filter Search** - Filter by location, skill category, availability, and experience
4. **Visual Design** - Clean, modern interface accessible to all literacy levels
5. **Trust Building** - Transparent profiles and ratings system

## 🎨 Design Philosophy

- **Inclusive:** Designed for users with varying literacy levels
- **Accessible:** Simple navigation and clear visual cues
- **Responsive:** Works seamlessly on mobile and desktop
- **Transparent:** Clear information about jobs and payments
- **Empowering:** Puts control in workers' hands

## 🤝 Team CodeStorm

We are a team passionate about solving real-world problems through open innovation and technology.

**Mission:** Empowering the informal workforce through digital transformation

## 📊 Impact Metrics (Projected)

- 🎯 Connect 100,000+ laborers with opportunities
- 💼 Facilitate 50,000+ job placements
- 💰 Enable ₹500M+ in worker earnings
- ⏱️ Reduce job search time by 70%
- 🤝 Increase employer-worker trust by 80%

## 🔮 Future Enhancements

- [ ] Mobile App (iOS & Android)
- [ ] SMS/WhatsApp Integration
- [ ] Voice-based Navigation
- [ ] Regional Language Support
- [ ] AI-powered Skill Assessment
- [ ] Blockchain for Verified Credentials
- [ ] Payment Gateway Integration
- [ ] Geolocation-based Job Matching
- [ ] Worker Training Programs
- [ ] Performance Analytics Dashboard

## 📄 License

This project is part of an Open Innovation initiative.

## 🙏 Acknowledgments

- Team CodeStorm members
- Open Innovation Platform
- All contributors and supporters

## 📞 Contact

For queries and support:
- Email: team.codestorm@skillsathi.com
- Website: www.skillsathi.com

---

**Built with ❤️ by Team CodeStorm**

*Bridging the Skill-to-Job Gap, One Connection at a Time*
