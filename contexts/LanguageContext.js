import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    royalMushrooms: "Royal Mushrooms",
    consultation: "Consultation",
    liveChat: "Live Chat",
    membership: "Membership",
    premium: "Premium",
    admin: "Admin",
    login: "Login",
    cart: "Cart",
    connected: "Connected",
    disconnected: "Disconnected",
    
    // Hero Section
    heroTitle: "Freshly Harvested Premium Mushrooms",
    heroSubtitle: "Discover a world of flavor with our exquisite selection of organic and sustainably wild-foraged fungi, delivered fresh to your door.",
    shopNow: "Shop Now",
    learnMore: "Learn More",
    
    // Products
    ourSelection: "Our",
    exquisite: "Exquisite",
    selection: "Selection",
    productDescription: "Each mushroom is carefully selected and harvested at peak freshness to deliver the ultimate culinary experience.",
    startingAt: "Starting at",
    addToCart: "Add to Cart",
    per250g: "per 250g",
    fresh: "Fresh",
    
    // Product Names
    forestShiitake: "Forest Shiitake",
    pearlOyster: "Pearl Oyster Mushrooms",
    portobello: "Giant Portobello Caps",
    lionsMane: "Royal Lion's Mane",
    chanterelles: "Golden Chanterelles",
    blackTruffle: "Premium Black Truffle",
    
    // Product Descriptions
    shiitakeDesc: "Rich, umami flavor. Perfect for stir-fries and hearty soups. Hand-picked from sustainable farms.",
    oysterDesc: "Delicate, tender texture with a subtle, savory taste. Ideal for sautéing or as a seafood alternative.",
    portobelloDesc: "Meaty, robust flavor. Excellent grilled, roasted, or stuffed as a vegetarian main course.",
    lionsManeDesc: "Unique, crab-like texture with a mild, sweet flavor. Known for cognitive benefits.",
    chanterellesDesc: "Fruity aroma and peppery undertones. A gourmet favorite for risottos and pasta dishes.",
    truffleDesc: "The crown jewel of fungi. Exquisite flavor and aroma. Available only to premium members.",
    
    // Trust Indicators
    freeDelivery: "Free Delivery",
    ordersOver: "Orders over LKR 500",
    organic: "100% Organic",
    sustainablyGrown: "Sustainably grown",
    freshDaily: "Fresh Daily",
    harvestedToOrder: "Harvested to order",
    premiumQuality: "Premium Quality",
    handSelected: "Hand-selected",
    
    // Cart
    yourCart: "Your Shopping Cart",
    cartEmpty: "Your cart is empty. Start adding some delicious mushrooms!",
    total: "Total",
    proceedCheckout: "Proceed to Checkout",
    
    // Profile
    userProfile: "User Profile",
    premiumMember: "Premium Member",
    logout: "Logout",
    
    // Footer
    allRightsReserved: "All rights reserved.",
    
    // Chat
    supportChat: "Support Chat",
    typeMessage: "Type a message...",
    selectChat: "Select a chat to start messaging",
    online: "Online",
    participants: "participants",
    typing: "typing...",
    
    // Language
    language: "Language",
    english: "English",
    sinhala: "සිංහල"
  },
  
  si: {
    // Header
    royalMushrooms: "රෝයල් හතු",
    consultation: "උපදේශනය",
    liveChat: "සජීවී කතාබස්",
    membership: "සාමාජිකත්වය",
    premium: "ප්‍රිමියම්",
    admin: "පරිපාලක",
    login: "පිවිසුම",
    cart: "කරත්තය",
    connected: "සම්බන්ධ වී ඇත",
    disconnected: "විසන්ධි වී ඇත",
    
    // Hero Section
    heroTitle: "නැවුම් අස්වනු කළ උසස් හතු",
    heroSubtitle: "ඔබගේ ගෙදර ටික දිනයන්, නැවුම් ලෙස ලබා දෙන ලද කාබනික සහ තිරසාර වන අරණ්‍ය හතු වල අපූර්ව තේරීමක් සමඟ රසයන්ගේ ලෝකයක් සොයා ගන්න.",
    shopNow: "දැන් මිලදී ගන්න",
    learnMore: "තව දැනගන්න",
    
    // Products
    ourSelection: "අපගේ",
    exquisite: "සුන්දර",
    selection: "තේරීම",
    productDescription: "සෑම හතුවක්ම ප්‍රමුඛතම පාකයේ රස අත්දැකීම ලබා දෙන්නට ප්‍රවේශමෙන් තෝරා ගෙන අස්වනු කර ගන්නා ලදී.",
    startingAt: "ආරම්භක මිල",
    addToCart: "කරත්තයට එකතු කරන්න",
    per250g: "ග්‍රෑම් 250කට",
    fresh: "නැවුම්",
    
    // Product Names
    forestShiitake: "වන ෂිටේකි",
    pearlOyster: "මුතු ඔයිස්ටර් හතු",
    portobello: "විශාල පෝටෝබෙලෝ",
    lionsMane: "රාජකීය සිංහ මුව",
    chanterelles: "ස්වර්ණ චැන්ටරල්",
    blackTruffle: "උසස් කළු ට්‍රෆල්",
    
    // Product Descriptions
    shiitakeDesc: "පොහොසත්, උමාමි රසය. ස්ටර් ෆ්‍රයිස් සහ හදවත් සුප් සඳහා පරිපූර්ණයි. තිරසාර ගොවිපලවලින් අතින් තෝරා ගත්.",
    oysterDesc: "සියුම්, මෘදු වයනය සමඟ සියුම්, රසවත් රසයක්. බදන්න හෝ මුහුදු ආහාර ආදේශකයක් ලෙස කදිම.",
    portobelloDesc: "මස් සහිත, ශක්තිමත් රසය. ග්‍රිල් කර, රෝස්ට් කර, හෝ නිර්මාංශ ප්‍රධාන ආහාරයක් ලෙස පුරවා ගන්න.",
    lionsManeDesc: "අනන්‍ය, කකුළුවන් වැනි වයනය සමඟ මෘදු, මිහිරි රසයක්. සංජානනීය ප්‍රතිලාභ සඳහා ප්‍රසිද්ධයි.",
    chanterellesDesc: "පලතුරු සුවඳ සහ ගම්මිරිස් පාට. රිසෝටෝ සහ පාස්ටා කෑම සඳහා රසකාරක ප්‍රියතමයක්.",
    truffleDesc: "හතුවල ඔටුන්න මැණික. සුන්දර රසය සහ සුවඳ. ප්‍රිමියම් සාමාජිකයන්ට පමණක් ලබා ගත හැක.",
    
    // Trust Indicators
    freeDelivery: "නොමිලේ බෙදා හැරීම",
    ordersOver: "LKR 500ට වඩා ඇණවුම්",
    organic: "100% කාබනික",
    sustainablyGrown: "තිරසාර ලෙස වගා කර ඇත",
    freshDaily: "දිනපතා නැවුම්",
    harvestedToOrder: "ඇණවුමට අනුව අස්වනු",
    premiumQuality: "ප්‍රිමියම් ගුණත්වය",
    handSelected: "අතින් තෝරා ගත්",
    
    // Cart
    yourCart: "ඔබගේ සාප්පු කරත්තය",
    cartEmpty: "ඔබගේ කරත්තය හිස්ය. රසවත් හතු එකතු කිරීම ආරම්භ කරන්න!",
    total: "සම්පූර්ණ",
    proceedCheckout: "ගෙවීමට ඉදිරියට යන්න",
    
    // Profile
    userProfile: "පරිශීලක පැතිකඩ",
    premiumMember: "ප්‍රිමියම් සාමාජික",
    logout: "පිටවීම",
    
    // Footer
    allRightsReserved: "සියලුම අයිතිවාසිකම් ඇවිරිණි.",
    
    // Chat
    supportChat: "සහාය කතාබස්",
    typeMessage: "පණිවිඩයක් ටයිප් කරන්න...",
    selectChat: "පණිවිඩ යැවීමට කතාබසක් තෝරන්න",
    online: "අන්තර්ජාලගත",
    participants: "සහභාගිවන්නන්",
    typing: "ටයිප් කරමින්...",
    
    // Language
    language: "භාෂාව",
    english: "English",
    sinhala: "සිංහල"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'si')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const switchLanguage = (lang) => {
    if (lang === 'en' || lang === 'si') {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
