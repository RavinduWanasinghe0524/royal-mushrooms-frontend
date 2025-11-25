# 🍄 Royal Mushrooms - Premium Organic Fungi

A modern, responsive e-commerce platform for premium organic mushrooms built with Next.js 16, React 19, and TailwindCSS.

## 🌐 Live Site

**[View Live Site →](https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/)**

## ✨ Features

### 🛒 E-Commerce Functionality
- **Product Catalog**: Browse premium organic mushroom varieties
- **Shopping Cart**: Add products, manage quantities, and checkout
- **User Authentication**: Secure login and signup with Firebase
- **User Profiles**: Manage personal information and order history
- **Membership System**: Exclusive benefits for registered members

### 🎨 Modern Design
- **Vibrant UI**: Green, white, and orange color scheme reflecting organic nature
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Premium Aesthetics**: Glassmorphism effects and modern typography

### 📱 Pages & Sections
- **Home**: Hero section, features, benefits, testimonials, and process overview
- **Products**: Complete mushroom product catalog with filtering
- **About**: Company story and mission
- **Consultation**: Expert consultation booking
- **Contact**: Get in touch form
- **Cart**: Shopping cart management
- **Login/Signup**: User authentication
- **Profile**: User dashboard
- **Membership**: Membership plans and benefits

### 🔧 Technical Features
- **Next.js 16**: Latest features with App Router
- **React 19**: Modern React with server components
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first styling
- **Firebase**: Authentication and backend services
- **Framer Motion**: Smooth animations
- **Stripe Integration**: Payment processing (ready)
- **Static Export**: Optimized for GitHub Pages deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RavinduWanasinghe0524/royal-mushrooms-frontend.git
   cd royal-mushrooms-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Local Build
```bash
npm run build
```

### Deploy to GitHub Pages
The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be live at: `https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/`

## 📦 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.9 |
| **Styling** | TailwindCSS 3.4 |
| **Animations** | Framer Motion 12 |
| **Authentication** | Firebase 12 |
| **Icons** | Lucide React |
| **Payments** | Stripe (Integration Ready) |
| **Deployment** | GitHub Pages |

## 📁 Project Structure

```
royal-mushrooms-frontend/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   ├── images/                 # Static images
│   └── logo.png               # Site logo
├── src/
│   ├── app/
│   │   ├── about/             # About page
│   │   ├── cart/              # Shopping cart
│   │   ├── consultation/      # Consultation booking
│   │   ├── contact/           # Contact page
│   │   ├── login/             # Login page
│   │   ├── membership/        # Membership page
│   │   ├── products/          # Products catalog
│   │   ├── profile/           # User profile
│   │   ├── signup/            # Signup page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navbar.tsx         # Navigation bar
│       ├── Footer.tsx         # Footer
│       ├── Hero.tsx           # Hero section
│       ├── Features.tsx       # Features section
│       ├── Benefits.tsx       # Benefits section
│       ├── Process.tsx        # Process section
│       └── Testimonials.tsx   # Testimonials
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # TailwindCSS configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#22c55e` - Main brand color
- **Dark Green**: `#16a34a` - Hover states
- **Orange Accent**: `#f97316` - Call-to-action
- **White**: `#ffffff` - Clean backgrounds
- **Dark**: `#1a1a1a` - Text and contrast

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Ravindu Wanasinghe**
- GitHub: [@RavinduWanasinghe0524](https://github.com/RavinduWanasinghe0524)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Inspiration from modern e-commerce platforms

---

**[🌐 Visit Live Site](https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/)** | **[📧 Contact](https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/contact)** | **[🛒 Shop Now](https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/products)**
