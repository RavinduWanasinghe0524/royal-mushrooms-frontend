import React, { useState, useEffect } from 'react';
import { format, addMonths, differenceInDays } from 'date-fns';

const MembershipModal = ({ isOpen, onClose, user, onMembershipUpdate }) => {
  const [membershipData, setMembershipData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const membershipPlans = {
    monthly: {
      name: 'Monthly Premium',
      price: 100,
      duration: 1,
      unit: 'month',
      features: [
        'Live chat support 24/7',
        'Expert consultations (discounted rates)',
        'Priority delivery (free shipping)',
        'Exclusive mushroom varieties',
        'Growing guides & tutorials',
        'Community forum access',
        'Monthly care packages'
      ],
      savings: 0
    },
    quarterly: {
      name: 'Quarterly Premium',
      price: 270,
      duration: 3,
      unit: 'months',
      features: [
        'All Monthly Premium features',
        '10% discount on consultations',
        'Free consultation once per quarter',
        'Priority chat support',
        'Advanced growing masterclasses',
        'Seasonal growing calendar'
      ],
      savings: 30
    },
    annual: {
      name: 'Annual Premium',
      price: 1000,
      duration: 12,
      unit: 'months',
      features: [
        'All Quarterly Premium features',
        '20% discount on consultations',
        'Free home consultation once per year',
        'VIP customer status',
        'Exclusive member events',
        'Annual mushroom starter kit',
        'Personal growing mentor'
      ],
      savings: 200
    }
  };

  useEffect(() => {
    if (user && isOpen) {
      // Load membership data from localStorage or API
      const membershipInfo = {
        hasMembership: user.hasMembership || false,
        membershipType: user.membershipType || null,
        membershipExpiry: user.membershipExpiry ? new Date(user.membershipExpiry) : null,
        membershipStarted: user.membershipStarted ? new Date(user.membershipStarted) : null,
        autoRenew: user.autoRenew || false
      };
      setMembershipData(membershipInfo);
    }
  }, [user, isOpen]);

  const calculateExpiryDate = (plan) => {
    const now = new Date();
    if (plan === 'monthly') return addMonths(now, 1);
    if (plan === 'quarterly') return addMonths(now, 3);
    if (plan === 'annual') return addMonths(now, 12);
    return now;
  };

  const getDaysRemaining = () => {
    if (!membershipData?.membershipExpiry) return 0;
    return Math.max(0, differenceInDays(membershipData.membershipExpiry, new Date()));
  };

  const handleSubscribe = async () => {
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const plan = membershipPlans[selectedPlan];
      const newMembershipData = {
        hasMembership: true,
        membershipType: selectedPlan,
        membershipExpiry: calculateExpiryDate(selectedPlan),
        membershipStarted: new Date(),
        autoRenew: true,
        lastPayment: {
          amount: plan.price,
          date: new Date(),
          method: paymentMethod,
          transactionId: Math.random().toString(36).substr(2, 9)
        }
      };
      
      setMembershipData(newMembershipData);
      
      // Update user data
      const updatedUser = {
        ...user,
        ...newMembershipData
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      if (onMembershipUpdate) {
        onMembershipUpdate(updatedUser);
      }
      
      setIsLoading(false);
    }, 3000);
  };

  const handleCancelMembership = () => {
    const updatedMembershipData = {
      ...membershipData,
      autoRenew: false
    };
    
    setMembershipData(updatedMembershipData);
    
    // Update user data
    const updatedUser = {
      ...user,
      ...updatedMembershipData
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    if (onMembershipUpdate) {
      onMembershipUpdate(updatedUser);
    }
  };

  const handleRenewMembership = () => {
    const updatedMembershipData = {
      ...membershipData,
      autoRenew: true
    };
    
    setMembershipData(updatedMembershipData);
    
    const updatedUser = {
      ...user,
      ...updatedMembershipData
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    if (onMembershipUpdate) {
      onMembershipUpdate(updatedUser);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-4 z-50 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-4xl relative max-h-[95vh] overflow-y-auto transform scale-95 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Premium Membership</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>

        {/* Current Membership Status */}
        {membershipData && (
          <div className="mb-8">
            {membershipData.hasMembership ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">Active Membership</h3>
                    <div className="space-y-1 text-sm text-green-700">
                      <div><strong>Plan:</strong> {membershipPlans[membershipData.membershipType]?.name}</div>
                      <div><strong>Expires:</strong> {format(membershipData.membershipExpiry, 'MMM dd, yyyy')}</div>
                      <div><strong>Days remaining:</strong> {getDaysRemaining()} days</div>
                      <div><strong>Auto-renew:</strong> {membershipData.autoRenew ? 'Enabled' : 'Disabled'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-green-600 mb-2">💎</div>
                    <div className="text-sm font-medium text-green-800">Premium Member</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-200">
                  <div className="flex gap-3">
                    {!membershipData.autoRenew ? (
                      <button
                        onClick={handleRenewMembership}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                      >
                        Enable Auto-Renew
                      </button>
                    ) : (
                      <button
                        onClick={handleCancelMembership}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                      >
                        Cancel Auto-Renew
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">⭐</div>
                  <div>
                    <h3 className="text-lg font-bold text-yellow-800 mb-1">Upgrade to Premium</h3>
                    <p className="text-yellow-700">Unlock exclusive features and premium support for just ₹100/month!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Membership Plans */}
        {(!membershipData?.hasMembership) && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Your Plan</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(membershipPlans).map(([key, plan]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedPlan === key
                        ? 'border-green-500 bg-green-50 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                  >
                    {plan.savings > 0 && (
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Save ₹{plan.savings}
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{plan.name}</h4>
                      <div className="text-3xl font-bold text-green-600 mb-2">₹{plan.price}</div>
                      <div className="text-sm text-gray-600">per {plan.unit}</div>
                      {key !== 'monthly' && (
                        <div className="text-sm text-green-600 mt-1">
                          (₹{Math.round(plan.price / plan.duration)}/month)
                        </div>
                      )}
                    </div>
                    
                    <ul className="text-sm text-gray-600 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
                  { id: 'upi', name: 'UPI', icon: '📱' },
                  { id: 'netbanking', name: 'Net Banking', icon: '🏦' }
                ].map((method) => (
                  <label key={method.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3 text-green-600"
                    />
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-medium">{method.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Subscribe Button */}
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>Total Amount:</span>
                <span className="text-green-600">₹{membershipPlans[selectedPlan].price}</span>
              </div>
              <button
                onClick={handleSubscribe}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-300 transform hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Subscribe to ${membershipPlans[selectedPlan].name} - ₹${membershipPlans[selectedPlan].price}`
                )}
              </button>
              
              <p className="text-xs text-gray-600 text-center mt-3">
                By subscribing, you agree to our terms of service. Cancel anytime.
              </p>
            </div>
          </>
        )}

        {/* Benefits Overview */}
        <div className="mt-8 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Why Choose Premium Membership?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-2xl mr-3">💬</div>
                <div>
                  <h4 className="font-medium text-gray-800">24/7 Live Chat Support</h4>
                  <p className="text-sm text-gray-600">Get instant help from mushroom experts anytime you need it.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">🎯</div>
                <div>
                  <h4 className="font-medium text-gray-800">Expert Consultations</h4>
                  <p className="text-sm text-gray-600">Access to specialized consultants with discounted rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">🚚</div>
                <div>
                  <h4 className="font-medium text-gray-800">Priority Delivery</h4>
                  <p className="text-sm text-gray-600">Free shipping and priority handling on all orders.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-2xl mr-3">🍄</div>
                <div>
                  <h4 className="font-medium text-gray-800">Exclusive Varieties</h4>
                  <p className="text-sm text-gray-600">Access to rare and premium mushroom varieties.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">📚</div>
                <div>
                  <h4 className="font-medium text-gray-800">Growing Guides</h4>
                  <p className="text-sm text-gray-600">Comprehensive tutorials and cultivation guides.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">🎁</div>
                <div>
                  <h4 className="font-medium text-gray-800">Monthly Care Packages</h4>
                  <p className="text-sm text-gray-600">Special packages with growing supplies and treats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
