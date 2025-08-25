import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import ConsultationBooking from '../components/ConsultationBooking';
import WhatsAppChat from '../components/WhatsAppChat';
import MembershipModal from '../components/MembershipModal';
import CheckoutModal from '../components/CheckoutModal';
import UserProfile from '../components/UserProfile';
import LanguageSwitcher from '../components/LanguageSwitcher';

// Main Next.js Page Component (conventionally named 'Home' for pages/index.js)
const Home = () => {
  const { t, language } = useLanguage();
  
  // Static product data with translation keys
  const productData = [
    {
      id: 1,
      nameKey: 'forestShiitake',
      price: 12.99,
      descriptionKey: 'shiitakeDesc',
      imageUrl: 'https://placehold.co/400x300/e6e0d3/36454F?text=Shiitake',
      isPremiumOnly: false,
    },
    {
      id: 2,
      nameKey: 'pearlOyster',
      price: 10.50,
      descriptionKey: 'oysterDesc',
      imageUrl: 'https://placehold.co/400x300/d3e6e0/36454F?text=Oyster',
      isPremiumOnly: false,
    },
    {
      id: 3,
      nameKey: 'portobello',
      price: 8.75,
      descriptionKey: 'portobelloDesc',
      imageUrl: 'https://placehold.co/400x300/e0d3e6/36454F?text=Portobello',
      isPremiumOnly: false,
    },
    {
      id: 4,
      nameKey: 'lionsMane',
      price: 15.00,
      descriptionKey: 'lionsManeDesc',
      imageUrl: 'https://placehold.co/400x300/d3e0e6/36454F?text=Royal+Lions+Mane',
      isPremiumOnly: true,
    },
    {
      id: 5,
      nameKey: 'chanterelles',
      price: 18.00,
      descriptionKey: 'chanterellesDesc',
      imageUrl: 'https://placehold.co/400x300/e6d3e0/36454F?text=Chanterelle',
      isPremiumOnly: true,
    },
    {
      id: 6,
      nameKey: 'blackTruffle',
      price: 99.99,
      descriptionKey: 'truffleDesc',
      imageUrl: 'https://placehold.co/400x300/2d1810/f0f0f0?text=Black+Truffle',
      isPremiumOnly: true,
    },
  ];
  
  // Products with current translations
  const products = productData.map(product => ({
    ...product,
    name: t(product.nameKey),
    description: t(product.descriptionKey),
  }));

  // State for the shopping cart
  const [cart, setCart] = useState([]);
  // State for controlling cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  // State for controlling profile/auth modal visibility
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // State for controlling consultation modal visibility
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  // State for controlling live chat visibility
  const [isChatOpen, setIsChatOpen] = useState(false);
  // State for controlling membership modal visibility
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  // State for current user
  const [currentUser, setCurrentUser] = useState(null);
  // State for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load user data on component mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setCurrentUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  // Check if user has active membership
  const hasPremiumAccess = () => {
    if (!currentUser) return false;
    if (!currentUser.hasMembership) return false;
    if (!currentUser.membershipExpiry) return false;
    
    const expiryDate = new Date(currentUser.membershipExpiry);
    return expiryDate > new Date();
  };


  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already in cart, increment quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Otherwise, add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true); // Open cart when item is added
  };

  // Function to remove a product from the cart or decrease quantity
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        // If quantity > 1, decrement quantity
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Otherwise, remove item completely
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  // Calculate total price of items in the cart
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Helper function to format price with LKR
  const formatPrice = (price) => {
    return `LKR ${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 font-inter text-gray-900 flex flex-col relative overflow-hidden">
      {/* Custom styles and animations moved here or defined in a global CSS file in a real Next.js app */}
      <style>{`
        /* Custom animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .button-hover-effect:hover {
          filter: brightness(1.1);
          transform: scale(1.02);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl animate-pulse-subtle"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-200 rounded-full blur-lg animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-300 rounded-full blur-2xl animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 text-white p-4 shadow-2xl backdrop-blur-sm relative z-10 border-b border-green-500/20">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-green-900 shadow-lg animate-pulse-subtle">
              🍄
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text-white">
              {t('royalMushrooms')}
            </h1>
          </div>
          <div className="flex space-x-2 sm:space-x-3">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Consultation Button */}
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-800 transition duration-300 rounded-full shadow-md flex items-center space-x-1 sm:space-x-2 text-sm button-hover-effect"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="hidden sm:inline">Consultation</span>
            </button>

            {/* Live Chat Button - Only for premium members */}
            {hasPremiumAccess() && (
              <button
                onClick={() => setIsChatOpen(true)}
                className="px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-800 transition duration-300 rounded-full shadow-md flex items-center space-x-1 sm:space-x-2 text-sm button-hover-effect"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="hidden sm:inline">Live Chat</span>
              </button>
            )}

            {/* Membership Button */}
            <button
              onClick={() => setIsMembershipOpen(true)}
              className={`px-3 sm:px-4 py-2 transition duration-300 rounded-full shadow-md flex items-center space-x-1 sm:space-x-2 text-sm button-hover-effect ${
                hasPremiumAccess() 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-yellow-900' 
                  : 'bg-purple-600 hover:bg-purple-800 text-white'
              }`}
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="hidden sm:inline">
                {hasPremiumAccess() ? 'Premium' : 'Membership'}
              </span>
            </button>

            {/* Admin Dashboard Link - Only for admins */}
            {currentUser?.type === 'admin' && (
              <Link href="/admin/dashboard">
                <button className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-800 transition duration-300 rounded-full shadow-md flex items-center space-x-1 sm:space-x-2 text-sm button-hover-effect">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="hidden sm:inline">Admin</span>
                </button>
              </Link>
            )}

            {/* Profile/Auth Button */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-800 transition duration-300 rounded-full shadow-md flex items-center space-x-1 sm:space-x-2 text-sm button-hover-effect"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{currentUser?.name?.charAt(0) || 'U'}</span>
                  </div>
                  <span className="hidden sm:inline">{currentUser?.name || 'User'}</span>
                  {hasPremiumAccess() && (
                    <span className="text-yellow-300 text-xs">💎</span>
                  )}
                </button>
              </div>
            ) : (
              <Link href="/auth/login">
                <button className="px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-800 transition duration-300 rounded-full shadow-md flex items-center space-x-1 sm:space-x-2 text-sm button-hover-effect">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden sm:inline">Login</span>
                </button>
              </Link>
            )}

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative px-4 sm:px-5 py-2 bg-green-600 hover:bg-green-800 transition duration-300 rounded-full shadow-md flex items-center space-x-2 text-sm sm:text-base button-hover-effect"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0-14V5m0 2v-2m0 2h2m-2 0h-2"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-once">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
        {/* User ID Display - Removed as no Firebase auth */}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20 sm:py-32 text-center shadow-2xl relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-yellow-200 rounded-full blur-2xl animate-pulse-subtle" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-green-200 rounded-full blur-xl animate-pulse-subtle" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-down bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent leading-tight">
              {t('heroTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full animate-fade-in"></div>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-12 opacity-95 animate-fade-in-up leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <button 
                onClick={() => {
                  const productsSection = document.getElementById('products-section');
                  productsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-green-900 font-bold text-lg rounded-full shadow-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 button-hover-effect"
              >
                🛒 Shop Now
              </button>
              <button 
                onClick={() => {
                  const aboutSection = document.getElementById('about-section');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 button-hover-effect"
              >
                🍄 Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1080 80 720 40C360 0 0 40 0 40V120Z" fill="rgb(248, 250, 252)" fillOpacity="0.8"/>
          </svg>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto p-6 flex-grow relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-green-900 mb-4 animate-fade-in">
            Our <span className="gradient-text">Exquisite</span> Selection
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full animate-fade-in"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-up">
            Each mushroom is carefully selected and harvested at peak freshness to deliver the ultimate culinary experience.
          </p>
        </div>

        {/* Product Grid */}
        <div id="products-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between product-card cursor-pointer border border-gray-100 hover:border-green-200 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Fresh
                  </div>
                </div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 border-b-4 border-gradient-to-r from-green-200 to-emerald-200"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/F0F8FF/000?text=Image+Error"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-500">Starting at</span>
                    </div>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-green-900 bg-gradient-to-r from-green-800 to-emerald-800 bg-clip-text text-transparent">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-gray-500">per 250g</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl button-hover-effect overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Add to Cart</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div id="about-section" className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 py-12 border-t border-gray-200">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h4 className="font-bold text-green-800 mb-2">Free Delivery</h4>
            <p className="text-sm text-gray-600">Orders over LKR 500</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h4 className="font-bold text-green-800 mb-2">100% Organic</h4>
            <p className="text-sm text-gray-600">Sustainably grown</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❄️</span>
            </div>
            <h4 className="font-bold text-green-800 mb-2">Fresh Daily</h4>
            <p className="text-sm text-gray-600">Harvested to order</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h4 className="font-bold text-green-800 mb-2">Premium Quality</h4>
            <p className="text-sm text-gray-600">Hand-selected</p>
          </div>
        </div>
      </main>

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 sm:pt-20 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg relative max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-4">
              Your Shopping Cart
            </h2>
            {cart.length === 0 ? (
              <p className="text-gray-600 text-lg text-center py-10">
                Your cart is empty. Start adding some delicious mushrooms!
              </p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b last:border-b-0 py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg text-green-700">
                          {item.name}
                        </h4>
                        <p className="text-gray-600">
                          {formatPrice(item.price)} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 shadow-sm"
                      >
                        -
                      </button>
                      <span className="font-bold text-xl">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 shadow-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-8 pt-4 border-t-2 border-green-200 flex justify-between items-center font-bold text-2xl text-green-900">
                  <span>Total:</span>
                  <span>{formatPrice(totalCartPrice)}</span>
                </div>
                <button className="w-full mt-6 py-4 bg-green-600 text-white font-bold text-xl rounded-xl hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-[1.01] button-hover-effect">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* User Profile Modal */}
      <UserProfile 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)}
        user={currentUser}
        onUserUpdate={(updatedUser) => {
          setCurrentUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }}
      />

      {/* Consultation Booking Modal */}
      <ConsultationBooking 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* WhatsApp Chat Modal */}
      <WhatsAppChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        user={currentUser || { name: 'Guest User', id: 'guest' }}
      />

      {/* Membership Modal */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        user={currentUser}
        onMembershipUpdate={(updatedUser) => {
          setCurrentUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }}
      />

      {/* Footer */}
      <footer className="bg-green-900 text-white p-4 text-center mt-auto rounded-t-3xl shadow-inner">
        <p>&copy; 2024 Royal Mushrooms. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
