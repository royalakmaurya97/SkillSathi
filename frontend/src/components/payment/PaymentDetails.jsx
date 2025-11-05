import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ArrowLeft, Download, IndianRupee, Calendar, User, Briefcase, CreditCard, FileText, Phone, Mail } from 'lucide-react'
import axios from 'axios'
import { PAYMENT_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import Navbar from '../shared/Navbar'

const PaymentDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [payment, setPayment] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user } = useSelector(store => store.auth)
    const isWorker = user?.role === 'student'

    useEffect(() => {
        fetchPaymentDetails()
    }, [id])

    const fetchPaymentDetails = async () => {
        try {
            const response = await axios.get(`${PAYMENT_API_END_POINT}/${id}`, {
                withCredentials: true
            })

            if (response.data.success) {
                setPayment(response.data.payment)
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || 'Failed to fetch payment details')
        } finally {
            setLoading(false)
        }
    }

    const getStatusBadge = (status) => {
        const statusConfig = {
            success: { className: 'bg-green-500 text-white', text: 'Success' },
            pending: { className: 'bg-yellow-500 text-white', text: 'Pending' },
            failed: { className: 'bg-red-500 text-white', text: 'Failed' },
            cancelled: { className: 'bg-gray-500 text-white', text: 'Cancelled' },
            refunded: { className: 'bg-blue-500 text-white', text: 'Refunded' }
        }

        const config = statusConfig[status] || statusConfig.pending
        return <Badge className={config.className}>{config.text}</Badge>
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="max-w-4xl mx-auto my-10 px-4">
                    <h1 className="text-2xl font-bold">Loading payment details...</h1>
                </div>
            </div>
        )
    }

    if (!payment) {
        return (
            <div>
                <Navbar />
                <div className="max-w-4xl mx-auto my-10 px-4">
                    <h1 className="text-2xl font-bold">Payment not found</h1>
                    <Button onClick={() => navigate('/payments')} className="mt-4">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Payment History
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto my-10 px-4">
                <Button onClick={() => navigate(-1)} variant="outline" className="mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>

                <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Payment Receipt</h1>
                                <p className="text-indigo-100">Transaction ID: {payment.transactionId}</p>
                            </div>
                            <div>{getStatusBadge(payment.status)}</div>
                        </div>
                    </div>

                    {/* Payment Amount */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border-b">
                        <div className="text-center">
                            <p className="text-gray-600 mb-2">Amount Paid</p>
                            <div className="flex items-center justify-center gap-2">
                                <IndianRupee className="w-8 h-8 text-green-700" />
                                <span className="text-5xl font-bold text-green-700">{payment.amount}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Parties Involved */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* From/To */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <User className="w-5 h-5 text-indigo-600" />
                                    {isWorker ? 'Received From' : 'Paid To'}
                                </h3>
                                <div className="space-y-2">
                                    <p className="font-medium text-lg">
                                        {isWorker ? payment.employer?.fullname : payment.worker?.fullname}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Mail className="w-4 h-4" />
                                        {isWorker ? payment.employer?.email : payment.worker?.email}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Phone className="w-4 h-4" />
                                        {isWorker ? payment.employer?.phoneNumber : payment.worker?.phoneNumber}
                                    </div>
                                </div>
                            </div>

                            {/* Job Details */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-indigo-600" />
                                    Job Details
                                </h3>
                                <div className="space-y-2">
                                    <p className="font-medium text-lg">{payment.job?.title}</p>
                                    <p className="text-sm text-gray-600">{payment.job?.location}</p>
                                    {payment.job?.salary && (
                                        <p className="text-sm text-gray-600">Salary: ₹{payment.job.salary}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-indigo-600" />
                                Payment Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Payment Type</p>
                                    <p className="font-medium capitalize">{payment.paymentType}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Payment Method</p>
                                    <p className="font-medium capitalize">
                                        {payment.paymentMethod.replace('_', ' ')}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Transaction Date</p>
                                    <div className="flex items-center gap-1 font-medium">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(payment.createdAt)}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Receipt Number</p>
                                    <p className="font-mono text-sm">{payment.receiptNumber || payment.transactionId}</p>
                                </div>
                            </div>

                            {/* Payment IDs */}
                            {payment.razorpayPaymentId && (
                                <div className="mt-4 pt-4 border-t">
                                    <div className="space-y-2">
                                        <div>
                                            <p className="text-sm text-gray-600">Payment ID</p>
                                            <p className="font-mono text-sm">{payment.razorpayPaymentId}</p>
                                        </div>
                                        {payment.razorpayOrderId && (
                                            <div>
                                                <p className="text-sm text-gray-600">Order ID</p>
                                                <p className="font-mono text-sm">{payment.razorpayOrderId}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Cash Payment Details */}
                            {payment.paymentMethod === 'local_cash' && payment.cashCollectedBy && (
                                <div className="mt-4 pt-4 border-t">
                                    <div className="space-y-2">
                                        <div>
                                            <p className="text-sm text-gray-600">Cash Collected By</p>
                                            <p className="font-medium">{payment.cashCollectedBy}</p>
                                        </div>
                                        {payment.cashCollectionDate && (
                                            <div>
                                                <p className="text-sm text-gray-600">Collection Date</p>
                                                <p className="font-medium">{formatDate(payment.cashCollectionDate)}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Notes */}
                            {payment.notes && (
                                <div className="mt-4 pt-4 border-t">
                                    <p className="text-sm text-gray-600">Notes</p>
                                    <p className="mt-1">{payment.notes}</p>
                                </div>
                            )}

                            {/* Description */}
                            {payment.description && (
                                <div className="mt-4 pt-4 border-t">
                                    <p className="text-sm text-gray-600">Description</p>
                                    <p className="mt-1">{payment.description}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer with Download Button */}
                    <div className="bg-gray-50 p-6 border-t flex justify-center">
                        <Button
                            onClick={() => {
                                const receiptContent = `
PAYMENT RECEIPT
${'-'.repeat(50)}
Receipt No: ${payment.receiptNumber || payment.transactionId}
Transaction ID: ${payment.transactionId}
Date: ${formatDate(payment.createdAt)}

${isWorker ? 'RECEIVED FROM' : 'PAID TO'}:
Name: ${isWorker ? payment.employer?.fullname : payment.worker?.fullname}
Email: ${isWorker ? payment.employer?.email : payment.worker?.email}
Phone: ${isWorker ? payment.employer?.phoneNumber : payment.worker?.phoneNumber}

JOB DETAILS:
Title: ${payment.job?.title}
Location: ${payment.job?.location}
${payment.job?.salary ? `Salary: ₹${payment.job.salary}` : ''}

PAYMENT DETAILS:
Amount: ₹${payment.amount}
Payment Type: ${payment.paymentType}
Payment Method: ${payment.paymentMethod.replace('_', ' ')}
Status: ${payment.status.toUpperCase()}
${payment.razorpayPaymentId ? `Payment ID: ${payment.razorpayPaymentId}` : ''}
${payment.cashCollectedBy ? `Cash Collected By: ${payment.cashCollectedBy}` : ''}
${payment.notes ? `Notes: ${payment.notes}` : ''}

${'-'.repeat(50)}
Generated on: ${new Date().toLocaleString('en-IN')}
                                `.trim()

                                const blob = new Blob([receiptContent], { type: 'text/plain' })
                                const url = window.URL.createObjectURL(blob)
                                const a = document.createElement('a')
                                a.href = url
                                a.download = `receipt-${payment.transactionId}.txt`
                                document.body.appendChild(a)
                                a.click()
                                window.URL.revokeObjectURL(url)
                                document.body.removeChild(a)
                                toast.success('Receipt downloaded')
                            }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Receipt
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails
