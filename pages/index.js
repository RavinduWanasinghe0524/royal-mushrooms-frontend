import React, { useState } from 'react';

// Main Next.js Page Component (conventionally named 'Home' for pages/index.js)
const Home = () => {
  // Sample mushroom data with slightly more appealing placeholder images
  const [products] = useState([
    {
      id: 1,
      name: 'Forest Shiitake',
      price: 12.99,
      description: 'Rich, umami flavor. Perfect for stir-fries and hearty soups. Hand-picked from sustainable farms.',
      imageUrl: 'https://placehold.co/400x300/e6e0d3/36454F?text=Shiitake',
    },
    {
      id: 2,
      name: 'Pearl Oyster Mushrooms',
      price: 10.50,
      description: 'Delicate, tender texture with a subtle, savory taste. Ideal for sautéing or as a seafood alternative.',
      imageUrl: 'https://placehold.co/400x300/d3e6e0/36454F?text=Oyster',
    },
    {
      id: 3,
      name: 'Giant Portobello Caps',
      price: 8.75,
      description: 'Meaty, robust flavor. Excellent grilled, roasted, or stuffed as a vegetarian main course.',
      imageUrl: 'https://placehold.co/400x300/e0d3e6/36454F?text=Portobello',
    },
    {
      id: 4,
      name: 'Royal Lion\'s Mane',
      price: 15.00,
      description: 'Unique, crab-like texture with a mild, sweet flavor. Known for cognitive benefits.',
      imageUrl: 'https://placehold.co/400x300/d3e0e6/36454F?text=Royal+Lions+Mane',
    },
    {
      id: 5,
      name: 'Golden Chanterelles',
      price: 18.00,
      description: 'Fruity aroma and peppery undertones. A gourmet favorite for risottos and pasta dishes.',
      imageUrl: 'https://placehold.co/400x300/e6d3e0/36454F?text=Chanterelle',
    },
  ]);

  // State for the shopping cart
  const [cart, setCart] = useState([]);
  // State for controlling cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  // State for controlling profile/auth modal visibility (now just a placeholder profile)
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // State for controlling admin panel modal visibility (now just a placeholder admin panel)
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  // State for controlling consultance modal visibility
  const [isConsultanceOpen, setIsConsultanceOpen] = useState(false);

  // For frontend-only, we simulate a logged-in state or always consider it "logged out"
  // You can toggle this boolean for testing UI states.
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const [isSimulatedAdmin, setIsSimulatedAdmin] = useState(false); // Simulate admin state


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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 font-inter text-gray-800 flex flex-col">
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
      {/* Header */}
      <header className="bg-green-700 text-white p-4 shadow-lg rounded-b-3xl relative z-10">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Royal Mushrooms 🍄</h1>
          <div className="flex space-x-3 sm:space-x-4">
            {/* Consultance Button */}
            <button
              onClick={() => setIsConsultanceOpen(!isConsultanceOpen)}
              className="px-4 sm:px-5 py-2 bg-blue-600 hover:bg-blue-800 transition duration-300 rounded-full shadow-md flex items-center space-x-2 text-sm sm:text-base button-hover-effect"
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
                  d="M8.228 9.228a4.5 4.5 0 110 5.544M15.772 9.228a4.5 4.5 0 100 5.544M11.996 6.5h.005M11.996 17.5h.005L12 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1v4"
                />
              </svg>
              <span className="hidden sm:inline">Consultance</span>
            </button>

            {/* Admin Panel Button (visible only if isSimulatedAdmin is true) */}
            {isSimulatedAdmin && (
              <button
                onClick={() => setIsAdminPanelOpen(!isAdminPanelOpen)}
                className="px-4 sm:px-5 py-2 bg-purple-600 hover:bg-purple-800 transition duration-300 rounded-full shadow-md flex items-center space-x-2 text-sm sm:text-base button-hover-effect"
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.262 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="hidden sm:inline">Admin Panel</span>
              </button>
            )}

            {/* Profile/Auth Button - now just Profile/Toggle Login */}
            <button
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                // Simple toggle for isLoggedIn state for demo purposes
                // In a real app, this would be tied to actual login/logout
                if (!isProfileOpen) {
                  // Only toggle if opening the profile modal
                  setIsLoggedIn(!isLoggedIn);
                  // Simulate admin state toggle too
                  setIsSimulatedAdmin(!isSimulatedAdmin);
                }
              }}
              className="px-4 sm:px-5 py-2 bg-green-600 hover:bg-green-800 transition duration-300 rounded-full shadow-md flex items-center space-x-2 text-sm sm:text-base button-hover-effect"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="hidden sm:inline">{isLoggedIn ? 'Profile' : 'Login Demo'}</span>
            </button>

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
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16 sm:py-24 text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div> {/* Subtle pattern overlay */}
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down">
            Freshly Harvested Mushrooms, Delivered to Your Door
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in-up">
            Discover a world of flavor with our premium selection of organic and wild-foraged fungi.
          </p>
          <button className="px-8 py-4 bg-yellow-400 text-green-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 button-hover-effect">
            Shop Now!
          </button>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto p-6 flex-grow">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 text-center sm:text-left">
          Our Exquisite Selection
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between product-card cursor-pointer"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl border-b-2 border-green-100"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/F0F8FF/000?text=Image+Error"; }}
              />
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-3xl font-bold text-green-900">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg button-hover-effect"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
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

      {/* User Profile / Auth Modal (Frontend only, simplified) */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 sm:pt-20 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg relative max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
            <button
              onClick={() => setIsProfileOpen(false)}
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
              User Profile (Frontend Demo)
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                This is a simulated user profile page. Without a backend, user data is not stored or loaded.
              </p>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsSimulatedAdmin(false);
                    setIsProfileOpen(false);
                  }}
                  className="w-full py-3 mt-4 bg-red-500 text-white font-bold text-lg rounded-xl hover:bg-red-600 transition duration-300 shadow-lg transform hover:scale-[1.01] button-hover-effect"
                >
                  Simulate Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    // You can optionally make this button also toggle admin status for testing
                    // setIsSimulatedAdmin(true);
                    setIsProfileOpen(false);
                  }}
                  className="w-full py-4 bg-green-600 text-white font-bold text-xl rounded-xl hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-[1.01] button-hover-effect"
                >
                  Simulate Login
                </button>
              )}
              <button
                onClick={() => setIsSimulatedAdmin(!isSimulatedAdmin)}
                className="w-full py-3 mt-4 bg-purple-500 text-white font-bold text-lg rounded-xl hover:bg-purple-600 transition duration-300 shadow-lg transform hover:scale-[1.01] button-hover-effect"
              >
                Toggle Admin View (for demo)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Panel Modal (Frontend only, simplified) */}
      {isAdminPanelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 sm:pt-20 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg relative max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
            <button
              onClick={() => setIsAdminPanelOpen(false)}
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
            <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b pb-4">
              Admin Panel (Frontend Demo) 🛠️
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Welcome, **Admin**! This is a simulated admin panel. Without a backend, product or order management features are not functional.
              </p>
              <p className="text-gray-600">
                You could imagine features like:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>Manage Product Inventory</li>
                <li>View Customer Orders</li>
                <li>User Management</li>
              </ul>
              <p className="text-sm text-gray-500 mt-6">
                (To make these functional, you would integrate a backend like Firebase Firestore or a custom API.)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Consultance Modal */}
      {isConsultanceOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 sm:pt-20 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg relative max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
            <button
              onClick={() => setIsConsultanceOpen(false)}
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-4">
              Mushroom Consultation 🍄
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to **Royal Mushrooms Consultation**! Do you have questions about specific mushroom varieties, their culinary uses, health benefits, or how to grow them? Our experts are here to help.
              </p>
              <p>
                We offer personalized advice to help you get the most out of your mushroom experience.
              </p>
              <h3 className="text-xl font-semibold text-blue-700 mt-6">How to get a consultation:</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>**Email Us:** Send your questions to <a href="mailto:consult@royalmushrooms.com" className="text-blue-500 hover:underline">consult@royalmushrooms.com</a>.</li>
                <li>**Book a Call:** Schedule a one-on-one session with our mushroom specialists via our booking portal (coming soon!).</li>
                <li>**FAQ Section:** Check out our comprehensive FAQ for quick answers to common questions.</li>
              </ul>
              <p className="text-sm text-gray-500 mt-6">
                We aim to respond to all email inquiries within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-green-900 text-white p-4 text-center mt-auto rounded-t-3xl shadow-inner">
        <p>&copy; 2023 Royal Mushrooms. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;