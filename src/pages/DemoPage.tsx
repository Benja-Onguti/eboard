import React, { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Shield,
  Send,
  CheckCircle,
  AlertCircle,
  Star,
  Mail,
  Building,
  Phone,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
  startOfDay,
} from 'date-fns';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

// ==================== Types & Configuration ====================

interface TimeSlot {
  id: string;
  startTime: string; // "09:00"
  endTime: string; // "09:30"
  display: string; // "09:00 AM"
}

// Configure your available time slots (you can later fetch from an API)
const DEFAULT_TIME_SLOTS: TimeSlot[] = [
  { id: '1', startTime: '09:00', endTime: '09:30', display: '09:00 AM' },
  { id: '2', startTime: '09:30', endTime: '10:00', display: '09:30 AM' },
  { id: '3', startTime: '10:00', endTime: '10:30', display: '10:00 AM' },
  { id: '4', startTime: '10:30', endTime: '11:00', display: '10:30 AM' },
  { id: '5', startTime: '11:00', endTime: '11:30', display: '11:00 AM' },
  { id: '6', startTime: '11:30', endTime: '12:00', display: '11:30 AM' },
  { id: '7', startTime: '13:00', endTime: '13:30', display: '01:00 PM' },
  { id: '8', startTime: '13:30', endTime: '14:00', display: '01:30 PM' },
  { id: '9', startTime: '14:00', endTime: '14:30', display: '02:00 PM' },
  { id: '10', startTime: '14:30', endTime: '15:00', display: '02:30 PM' },
  { id: '11', startTime: '15:00', endTime: '15:30', display: '03:00 PM' },
  { id: '12', startTime: '15:30', endTime: '16:00', display: '03:30 PM' },
];

// Which weekdays are available? (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const AVAILABLE_WEEKDAYS = [1, 2, 3, 4, 5]; // Monday to Friday

// Validation schema for user info step
const userInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(2, 'Organization name is required'),
  organizationType: z.enum(['education', 'government', 'ngo', 'corporate', 'other']).optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type UserInfoData = z.infer<typeof userInfoSchema>;

const organizationTypes = [
  { value: 'education', label: 'Educational Institution' },
  { value: 'government', label: 'Government / Public Sector' },
  { value: 'ngo', label: 'NGO / Nonprofit' },
  { value: 'corporate', label: 'Corporate / Enterprise' },
  { value: 'other', label: 'Other' },
];

const faqs = [
  {
    question: 'How long is the demo?',
    answer:
      'A typical demo session runs 30-45 minutes, giving us enough time to cover the features most relevant to your organization.',
  },
  {
    question: 'Is the demo tailored to my industry?',
    answer:
      'Absolutely. Before the session, we learn about your governance needs and customize the walkthrough for education, government, NGO, or enterprise use cases.',
  },
  {
    question: 'Do I need to install anything?',
    answer: 'No. Kikao360 is a web-based platform — just bring your browser and your questions.',
  },
  {
    question: 'What happens after the demo?',
    answer:
      'You will receive a follow-up email with a summary, pricing options, and a free trial link. No obligation, no pressure.',
  },
];

const testimonials = [
  {
    quote:
      'The demo was eye-opening — we saw exactly how Kika0360 would transform our board meetings.',
    name: 'Sarah Chen',
    title: 'Board Secretary',
    org: 'Metro School District',
    rating: 5,
  },
  {
    quote: 'Professional, thorough, and directly relevant to our governance challenges.',
    name: 'James Okafor',
    title: 'Director of Operations',
    org: 'National Health NGO',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Organizations Trust Us' },
  { value: '50K+', label: 'Meetings Managed' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '4.9/5', label: 'Customer Satisfaction' },
];

// Helper: disable dates that are in the past or not available
const isDateSelectable = (date: Date): boolean => {
  const today = startOfDay(new Date());
  if (isBefore(date, today)) return false;
  const dayOfWeek = date.getDay();
  return AVAILABLE_WEEKDAYS.includes(dayOfWeek);
};

// ==================== Main Component ====================

export const DemoPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<'datetime' | 'info'>('datetime');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [bookingReference, setBookingReference] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserInfoData>({
    resolver: zodResolver(userInfoSchema),
  });

  // ---- Calendar generation ----
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // ---- Time slots logic ----
  // Return available time slots for the selected date (if any)
  // In a real implementation, you would fetch booked slots from backend and filter.
  const getAvailableTimeSlots = (date: Date | null): TimeSlot[] => {
    if (!date) return [];
    // Here you could call an API to get already booked slots for that date
    // For now, we return all default slots.
    return DEFAULT_TIME_SLOTS;
  };

  const availableSlots = getAvailableTimeSlots(selectedDate);

  // ---- Step handlers ----
  const handleDateSelect = (date: Date) => {
    if (!isDateSelectable(date)) return;
    setSelectedDate(date);
    setSelectedTimeSlot(null); // reset time slot when date changes
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot);
  };

  const handleNext = () => {
    if (selectedDate && selectedTimeSlot) {
      setStep('info');
    }
  };

  const handleBack = () => {
    setStep('datetime');
    setSubmitStatus(null);
  };

  const onSubmit = async (data: UserInfoData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare booking payload
      const payload = {
        ...data,
        selectedDate: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
        selectedTimeSlot: selectedTimeSlot,
      };

      // 🔁 Replace with your actual API endpoint
      const response = await fetch('/api/demo/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Booking failed');

      const result = await response.json();
      setBookingReference(result.reference || `DEMO-${Date.now()}`);
      setSubmitStatus('success');
      // Reset form and go back to step 1 after success? We'll keep success message.
      reset();
      setStep('datetime');
      setSelectedDate(null);
      setSelectedTimeSlot(null);
    } catch (error) {
      console.error('Demo booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calendar header (weekday names)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const seo = getSeoConfig('demo');
  const structuredData = defaultStructuredData;

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Book Your EBoard Demo.
              <br />
              <span className="text-primary-600">We Won't Waste Your Time!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a personalized walkthrough of the platform tailored to your organization's needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-primary-600" />
                30–45 Minutes
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-green-600" />
                Personalized
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-purple-600" />
                No Obligation
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Step Progress Indicator */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                  step === 'datetime'
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-green-600 text-white'
                }`}
              >
                {step === 'info' ? <CheckCircle className="w-5 h-5" /> : '1'}
              </div>
              <div
                className={`w-20 h-1 mx-3 rounded-full transition-all ${
                  step === 'info' ? 'bg-green-600' : 'bg-gray-200'
                }`}
              />
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                  step === 'info'
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                2
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-16 mb-10 -mt-6">
            <span className="text-sm font-medium text-gray-700">Pick Date & Time</span>
            <span className="text-sm font-medium text-gray-400">Your Details</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  variant="elevated"
                  className="p-6 sticky top-24 bg-gradient-to-br from-white to-primary-50/30"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <CalendarIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-4">What to expect</h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="pt-1">
                        30–45 minute live session covering your priorities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="pt-1">
                        Tailored demo based on your industry (education, government, NGO,
                        enterprise)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="pt-1">No sales pressure – just insights and answers</span>
                    </li>
                  </ul>
                  <hr className="my-5" />
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-4 border border-primary-200/50">
                    <p className="text-sm font-medium text-primary-800 mb-1">
                      Need a different time?
                    </p>
                    <p className="text-xs text-primary-700 mb-3">
                      Contact our team to arrange a custom slot.
                    </p>
                    <a
                      href="mailto:sales@eboard-solutions.com"
                      className="text-xs text-primary-600 font-medium hover:underline inline-flex items-center"
                    >
                      Contact us →
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Main Booking Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card
                  variant="elevated"
                  className="p-6 md:p-8 border-0 shadow-2xl shadow-gray-200/50"
                >
                  {/* Success / error messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-800">Demo booked successfully!</p>
                        <p className="text-sm text-green-700">
                          Reference: {bookingReference}. We'll send a calendar invitation to your
                          email within 2 hours.
                        </p>
                        <button
                          onClick={() => setSubmitStatus(null)}
                          className="mt-2 text-sm text-green-700 hover:underline"
                        >
                          Book another demo
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800">Booking failed</p>
                        <p className="text-sm text-red-700">
                          Please try again or email us directly at{' '}
                          <a href="mailto:sales@eboard-solutions.com" className="underline">
                            sales@eboard-solutions.com
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: Date & Time Selection */}
                  {step === 'datetime' && (
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <CalendarIcon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">Select a Date & Time</h2>
                          <p className="text-gray-500 text-sm">Choose your preferred slot</p>
                        </div>
                      </div>
                      <div className="h-px bg-gray-100 my-6" />

                      {/* Calendar */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                          <button
                            onClick={goToPreviousMonth}
                            className="p-2.5 hover:bg-gray-100 rounded-xl transition-all hover:shadow-sm"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                          </button>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {format(currentMonth, 'MMMM yyyy')}
                          </h3>
                          <button
                            onClick={goToNextMonth}
                            className="p-2.5 hover:bg-gray-100 rounded-xl transition-all hover:shadow-sm"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>

                        {/* Weekday headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {weekDays.map((day) => (
                            <div
                              key={day}
                              className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-2"
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar days */}
                        <div className="grid grid-cols-7 gap-1">
                          {daysInMonth.map((date) => {
                            const isSelectable = isDateSelectable(date);
                            const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
                            const isCurrentMonth = isSameMonth(date, currentMonth);
                            const isTodayDate = isToday(date);
                            return (
                              <button
                                key={date.toISOString()}
                                onClick={() => isSelectable && handleDateSelect(date)}
                                disabled={!isSelectable}
                                className={`
                                  py-2.5 text-sm rounded-xl transition-all font-medium
                                  ${!isCurrentMonth && 'text-gray-200'}
                                  ${isSelectable && !isSelected && 'hover:bg-primary-50 hover:text-primary-600 cursor-pointer'}
                                  ${isSelected && 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20'}
                                  ${isTodayDate && !isSelected && 'ring-2 ring-primary-300 bg-primary-50 text-primary-600'}
                                  ${!isSelectable && 'text-gray-200 cursor-not-allowed'}
                                `}
                              >
                                {format(date, 'd')}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Slots */}
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-8"
                        >
                          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary-600" />
                            Available times on {format(selectedDate, 'MMMM dd, yyyy')}
                          </h3>
                          {availableSlots.length === 0 ? (
                            <p className="text-sm text-gray-500">
                              No available slots for this date. Please select another day.
                            </p>
                          ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                              {availableSlots.map((slot) => (
                                <button
                                  key={slot.id}
                                  onClick={() => handleTimeSlotSelect(slot)}
                                  className={`
                                    px-3 py-2.5 text-sm rounded-xl border font-medium transition-all
                                    ${
                                      selectedTimeSlot?.id === slot.id
                                        ? 'border-primary-600 bg-primary-50 text-primary-700 ring-2 ring-primary-200 shadow-sm'
                                        : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50/50'
                                    }
                                  `}
                                >
                                  {slot.display}
                                </button>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* Next button */}
                      <div className="flex justify-end pt-4">
                        <Button
                          onClick={handleNext}
                          disabled={!selectedDate || !selectedTimeSlot}
                          size="lg"
                        >
                          Next: Your Details →
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: User Information Form */}
                  {step === 'info' && selectedDate && selectedTimeSlot && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                              <CalendarIcon className="w-3.5 h-3.5" />
                              {format(selectedDate, 'EEEE, MMMM do, yyyy')} at{' '}
                              {selectedTimeSlot.display}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleBack}
                          className="text-sm text-gray-500 hover:text-primary-600 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>
                      <div className="h-px bg-gray-100 my-6" />

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                {...register('name')}
                                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                                  errors.name
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                placeholder="John Smith"
                              />
                            </div>
                            {errors.name && (
                              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.name.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Work Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="email"
                                {...register('email')}
                                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                                  errors.email
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                placeholder="john@organization.org"
                              />
                            </div>
                            {errors.email && (
                              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Organization <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                {...register('organization')}
                                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                                  errors.organization
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                placeholder="Your organization"
                              />
                            </div>
                            {errors.organization && (
                              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.organization.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Organization Type
                            </label>
                            <select
                              {...register('organizationType')}
                              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none hover:border-gray-300 transition"
                            >
                              <option value="">Select type</option>
                              {organizationTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Phone Number (optional)
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="tel"
                                {...register('phone')}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none hover:border-gray-300 transition"
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                          </div>
                          <div></div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Additional Notes (optional)
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <textarea
                              rows={3}
                              {...register('message')}
                              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none hover:border-gray-300 transition"
                              placeholder="Tell us about your governance challenges or specific questions..."
                            />
                          </div>
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button
                            type="submit"
                            size="lg"
                            isLoading={isSubmitting}
                            rightIcon={<Send className="w-4 h-4" />}
                          >
                            Book Demo
                          </Button>
                        </div>

                        <p className="text-xs text-gray-400 text-center mt-2">
                          By submitting, you agree to our{' '}
                          <a href="/privacy" className="text-primary-600 hover:underline">
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </form>
                    </div>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <Badge variant="primary" className="mb-3">
              Trusted by Teams Worldwide
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">
                        {testimonial.title}, {testimonial.org}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-3">
              FAQ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card variant="elevated" className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to transform your governance?
          </h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Join 500+ organizations that trust EBoard for secure, efficient board management.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#root">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                Book Your Demo
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;
