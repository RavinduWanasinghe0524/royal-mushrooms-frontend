import React, { useState, useEffect } from 'react';
import { format, addDays, isToday, isTomorrow } from 'date-fns';

const ConsultationBooking = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState('online');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultantType, setConsultantType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: ''
  });
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1: Type, 2: Details, 3: Confirmation

  const consultationTypes = {
    online: {
      title: 'Online Consultation',
      price: 500,
      duration: '30-45 minutes',
      features: [
        'Video call with expert',
        'Screen sharing capabilities',
        'Digital consultation notes',
        'Follow-up email summary',
        'Access to chat support for 7 days'
      ],
      icon: '💻'
    },
    home: {
      title: 'Home Visit Consultation',
      price: 1500,
      duration: '1-2 hours',
      features: [
        'Expert visits your location',
        'Hands-on mushroom inspection',
        'Growing environment assessment',
        'Personalized cultivation plan',
        'Take-home care guide',
        '30-day follow-up support'
      ],
      icon: '🏠'
    }
  };

  const consultantTypes = {
    general: { name: 'General Mushroom Expert', additionalCost: 0 },
    cultivation: { name: 'Cultivation Specialist', additionalCost: 200 },
    nutrition: { name: 'Nutrition & Health Expert', additionalCost: 300 },
    commercial: { name: 'Commercial Growing Consultant', additionalCost: 500 }
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  // Generate next 14 days for booking
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i + 1));

  const getTotalPrice = () => {
    const basePrice = consultationTypes[selectedType].price;
    const consultantPrice = consultantTypes[consultantType].additionalCost;
    return basePrice + consultantPrice;
  };

  const formatDate = (date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'MMM dd, yyyy');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = async () => {
    setIsBooking(true);
    
    // Simulate booking API call
    setTimeout(() => {
      const booking = {
        id: Math.random().toString(36).substr(2, 9),
        type: selectedType,
        consultant: consultantTypes[consultantType].name,
        date: selectedDate,
        time: selectedTime,
        totalPrice: getTotalPrice(),
        customerInfo: formData,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };
      
      // Store booking in localStorage for demo
      const existingBookings = JSON.parse(localStorage.getItem('consultationBookings') || '[]');
      existingBookings.push(booking);
      localStorage.setItem('consultationBookings', JSON.stringify(existingBookings));
      
      setIsBooking(false);
      setBookingStep(3);
    }, 2000);
  };

  const resetForm = () => {
    setBookingStep(1);
    setSelectedType('online');
    setSelectedDate('');
    setSelectedTime('');
    setConsultantType('general');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      specialRequests: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-4 z-50 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-2xl relative max-h-[95vh] overflow-y-auto transform scale-95 animate-scale-in">
        <button
          onClick={() => {
            onClose();
            resetForm();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Book Expert Consultation</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  bookingStep >= step 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    bookingStep > step ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 1: Consultation Type Selection */}
        {bookingStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Consultation Type</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(consultationTypes).map(([key, type]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedType(key)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedType === key
                        ? 'border-green-500 bg-green-50 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{type.title}</h4>
                      <div className="text-2xl font-bold text-green-600 mb-3">₹{type.price}</div>
                      <div className="text-sm text-gray-600 mb-4">{type.duration}</div>
                      <ul className="text-sm text-gray-600 space-y-1 text-left">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Expert Type</h3>
              <div className="grid gap-3">
                {Object.entries(consultantTypes).map(([key, consultant]) => (
                  <label key={key} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="consultantType"
                      value={key}
                      checked={consultantType === key}
                      onChange={(e) => setConsultantType(e.target.value)}
                      className="mr-3 text-green-600"
                    />
                    <div className="flex-grow">
                      <div className="font-medium">{consultant.name}</div>
                      {consultant.additionalCost > 0 && (
                        <div className="text-sm text-green-600">+₹{consultant.additionalCost}</div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Cost:</span>
                <span className="text-green-600">₹{getTotalPrice()}</span>
              </div>
            </div>

            <button
              onClick={() => setBookingStep(2)}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-300 transform hover:scale-[1.01] shadow-lg"
            >
              Continue to Booking Details
            </button>
          </div>
        )}

        {/* Step 2: Booking Details */}
        {bookingStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Booking Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Choose date</option>
                  {availableDates.map((date) => (
                    <option key={date.toISOString()} value={date.toISOString()}>
                      {formatDate(date)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Choose time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
              {selectedType === 'home' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Full address for home visit"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Any specific topics or questions you'd like to discuss..."
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setBookingStep(1)}
                className="flex-1 border border-gray-300 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
              >
                Back
              </button>
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone || (selectedType === 'home' && !formData.address) || isBooking}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-300 transform hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isBooking ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Booking...
                  </div>
                ) : (
                  `Book Now - ₹${getTotalPrice()}`
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {bookingStep === 3 && (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-800">Booking Confirmed!</h3>
            <div className="bg-green-50 p-6 rounded-lg text-left">
              <h4 className="font-semibold text-green-800 mb-3">Booking Details:</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Type:</strong> {consultationTypes[selectedType].title}</div>
                <div><strong>Expert:</strong> {consultantTypes[consultantType].name}</div>
                <div><strong>Date:</strong> {formatDate(new Date(selectedDate))}</div>
                <div><strong>Time:</strong> {selectedTime}</div>
                <div><strong>Total Paid:</strong> ₹{getTotalPrice()}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>A confirmation email has been sent to {formData.email}</p>
              <p>You will receive a call/message 24 hours before your consultation.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                resetForm();
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationBooking;
