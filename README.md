# 🎬 MERNFLIX - Netflix Clone

A comprehensive Netflix-like streaming platform built with the MERN stack. Users can subscribe to monthly or yearly plans to stream premium video content including movies and TV series. The platform features personalized user profiles, AI-powered recommendations, integrated video player, and robust subscription management with recurring billing capabilities. Administrators have full control over the content library with video upload functionality and comprehensive subscriber analytics monitoring.

## 🚀 Features

### 🎥 **Core Streaming Platform**
- **Video Streaming**: High-quality streaming of movies and TV series with Video.js player
- **Content Library**: Extensive collection of movies and series with categorization
- **Multi-Device Support**: Responsive design works across desktop, tablet, and mobile
- **User Profiles**: Individual user profiles with viewing history and preferences
- **Video Player Integration**: Advanced video controls, quality settings, and playback features

### 💳 **Subscription Management**
- **Monthly/Yearly Plans**: Flexible subscription options with different pricing tiers
- **Recurring Billing**: Automated billing cycles with Razorpay payment gateway
- **Plan Changes**: Users can upgrade, downgrade, or modify subscription plans
- **Subscription Cancellation**: Easy cancellation with grace period management
- **Payment Processing**: Secure payment handling with multiple payment methods
- **Billing History**: Complete transaction and payment history for users

### 🎯 **Personalized Recommendations**
- **AI-Powered Suggestions**: Machine learning algorithms for content recommendations
- **Viewing History Analysis**: Recommendations based on watch history and preferences
- **Age Group Targeting**: Content suggestions for Kids (Under 13), Teens (13-17), Adults (18+)
- **Gender-Based Recommendations**: Targeted content for different demographics
- **Genre Intelligence**: Smart recommendations based on favorite genres and similar content
- **Collaborative Filtering**: Recommendations based on similar user preferences
- **Trending Content**: Real-time trending and popular content suggestions
- **Smart Filtering**: Multi-parameter content filtering and search

### 👑 **Admin Content Management**
- **Video Upload System**: Seamless video upload with Cloudinary integration for movies and series
- **Content Library Management**: Add, edit, delete, and organize video content
- **Metadata Management**: Set titles, descriptions, genres, ratings, and thumbnails
- **Access Control**: Configure free vs premium content access levels
- **Episode Management**: Upload and manage TV series with multiple episodes
- **Content Analytics**: Track most watched content and user engagement metrics

### 📊 **Subscriber Analytics & Monitoring**
- **Real-time Dashboard**: Live subscriber count and engagement metrics
- **Revenue Analytics**: Track subscription revenue, growth, and churn rates
- **User Behavior Insights**: Monitor viewing patterns, popular content, and user preferences
- **Subscription Analytics**: Track active subscribers, cancellations, and plan distributions
- **Content Performance**: Analyze which movies/series are most popular
- **Geographic Analytics**: Monitor subscriber distribution and regional preferences
- **Retention Metrics**: Track user retention rates and subscription lifecycle

### � **Enterprise Subscription Features**
- **Multiple Payment Gateways**: Razorpay integration with support for cards, UPI, wallets
- **Automated Billing Cycles**: Monthly and yearly recurring payment processing
- **Proration Handling**: Smart billing adjustments for plan changes mid-cycle
- **Failed Payment Recovery**: Automatic retry mechanisms and grace period management
- **Subscription Lifecycle**: Complete management from signup to cancellation
- **Revenue Optimization**: Dynamic pricing and promotional discount management
- **Access Control**: Granular free vs premium content access management

## 🛠️ Tech Stack

### **Frontend**
- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Video.js** - HTML5 video player
- **Axios** - HTTP client

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload handling

### **Third-Party Services**
- **Cloudinary** - Video and image storage/streaming
- **Razorpay** - Payment gateway
- **Nodemailer** - Email notifications

## 📁 Project Structure

```
MERNFLIX/
├── backend/                    # Node.js backend
│   ├── config/                # Configuration files
│   │   ├── cloudinary.js      # Cloudinary setup
│   │   ├── database.js        # MongoDB connection
│   │   └── email.js           # Email configuration
│   ├── controllers/           # Route controllers
│   │   ├── authController.js  # Authentication logic
│   │   ├── contentController.js # Content management
│   │   ├── paymentController.js # Payment processing
│   │   ├── recommendationController.js # Recommendations
│   │   └── analyticsController.js # Analytics
│   ├── middleware/            # Custom middleware
│   │   └── auth.js            # JWT authentication
│   ├── models/                # Mongoose models
│   │   ├── User.js            # User schema
│   │   └── Content.js         # Content schema
│   ├── routes/                # API routes
│   │   ├── authRoutes.js      # Auth endpoints
│   │   ├── contentRoutes.js   # Content endpoints
│   │   ├── paymentRoutes.js   # Payment endpoints
│   │   ├── recommendRoutes.js # Recommendation endpoints
│   │   └── adminRoutes.js     # Admin endpoints
│   ├── package.json
│   └── server.js              # Express server
├── frontend/                  # React frontend
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminContentManager.jsx
│   │   │   ├── AdminAnalytics.jsx
│   │   │   ├── ContentCard.jsx
│   │   │   ├── ContentList.jsx
│   │   │   ├── VideoPlayer.jsx
│   │   │   ├── SeriesDetail.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── SubscriptionPlans.jsx
│   │   │   ├── SubscriptionManage.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Loader.jsx
│   │   ├── redux/             # Redux store
│   │   │   ├── store.js
│   │   │   └── slices/
│   │   │       ├── authSlice.js
│   │   │       ├── contentSlice.js
│   │   │       └── subscriptionSlice.js
│   │   ├── services/          # API services
│   │   │   └── api.js
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # App entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **Cloudinary Account** (for video storage)
- **Razorpay Account** (for payments)

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MERNFLIX
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   
   Create `.env` file in the backend directory:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/mernflix
   # or MongoDB Atlas: mongodb+srv://<username>:<password>@cluster.mongodb.net/mernflix
   
   # JWT
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRES_IN=7d
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Razorpay
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Email (Optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   
   # Server
   PORT=5000
   NODE_ENV=development
   ```

5. **Run the Application**
   
   **Start Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   **Start Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📚 API Documentation

### **Authentication Endpoints**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### **Content Endpoints**
- `GET /api/content` - Get all content (with filters)
- `GET /api/content/:id` - Get content by ID
- `POST /api/content/upload` - Upload new content (Admin)
- `PUT /api/content/:id` - Update content (Admin)
- `DELETE /api/content/:id` - Delete content (Admin)

### **Subscription & Payment Endpoints**
- `GET /api/payment/plans` - Get all subscription plans (monthly/yearly)
- `POST /api/payment/create-order` - Create Razorpay payment order
- `POST /api/payment/verify` - Verify and process payment
- `POST /api/payment/subscribe` - Subscribe user to a plan
- `PUT /api/payment/change-plan` - Change subscription plan (with proration)
- `POST /api/payment/cancel` - Cancel subscription (with grace period)
- `GET /api/payment/billing-history` - Get user's billing history
- `POST /api/payment/retry-failed` - Retry failed recurring payments

### **Recommendation Endpoints**
- `GET /api/recommendations` - Get personalized recommendations
- `POST /api/recommendations/track` - Track user interaction

### **Admin Analytics & Management Endpoints**
- `GET /api/admin/analytics/dashboard` - Get comprehensive analytics dashboard
- `GET /api/admin/analytics/revenue` - Get revenue and subscription analytics
- `GET /api/admin/analytics/content` - Get content performance metrics
- `GET /api/admin/analytics/users` - Get user engagement and retention data
- `GET /api/admin/subscribers` - Get all subscribers with status
- `GET /api/admin/subscribers/active` - Get active subscribers count
- `GET /api/admin/subscribers/churn` - Get subscription churn analytics
- `PUT /api/admin/users/:id/subscription` - Manage user subscription status
- `POST /api/admin/content/upload` - Upload new video content
- `GET /api/admin/content/library` - Get complete content library management

## 🎨 UI Components

### **Content Management**
- **ContentCard**: Displays movie/series with admin controls
- **AdminContentManager**: Full content management interface with filtering
- **VideoPlayer**: Custom video player with Video.js

### **User Interface**
- **Navbar**: Navigation with authentication status
- **SubscriptionPlans**: Payment integration with Razorpay
- **Profile**: User profile management
- **Recommendations**: Personalized content suggestions

### **Admin Dashboard**
- **AdminAnalytics**: User engagement and content statistics
- **Content Upload**: Drag-and-drop video upload interface
- **User Management**: Monitor subscriptions and activity

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Server-side input sanitization
- **File Upload Security**: Secure file handling with Multer

## 🎯 Content Recommendation System

The recommendation engine uses multiple factors:

### **User-Based Filtering**
- Age group preferences (Kids, Teens, Adults)
- Gender-based content targeting
- Viewing history and preferences
- Subscription level (Free/Premium)

### **Content-Based Filtering**
- Genre matching and similarity
- Release year and popularity
- Content rating and reviews
- Watch time and engagement metrics

## 🚀 Deployment

### **Backend Deployment (Heroku/Railway)**
1. Set environment variables in hosting platform
2. Configure MongoDB Atlas connection
3. Set up Cloudinary and Razorpay accounts
4. Deploy with `npm start`

### **Frontend Deployment (Vercel/Netlify)**
1. Update API base URL in `src/services/api.js`
2. Build project: `npm run build`
3. Deploy `dist` folder

### **Database Setup (MongoDB Atlas)**
1. Create MongoDB Atlas cluster
2. Set up database user and network access
3. Update `MONGO_URI` in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Netflix** - UI/UX inspiration
- **React Community** - Amazing ecosystem and libraries
- **Cloudinary** - Excellent media management platform
- **Razorpay** - Seamless payment integration

---

## 📧 Contact

**Project Maintainer**: [Your Name]
- Email: prem.2023ca74@mnnit.ac.in
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

<div align="center">
  
### 🎬 **MERNFLIX** - *Where Entertainment Meets Technology*

**Built with ❤️ using the MERN Stack**

</div>