# 🥋 Karate Admin Portal

A dedicated admin dashboard for managing Kyokushin Karate dojo operations, including student management, tournaments, camps, and system settings.

## 🔥 Features

- **Secure Authentication**: Login system for authorized admin users
- **Student Management**: Track student progress, belts, and status
- **Tournament Management**: Create and manage karate tournaments
- **Camp Administration**: Schedule and manage training camps
- **Dashboard Analytics**: Overview of key metrics and statistics
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Real-time Updates**: Dynamic interface with React hooks

## 🚀 Live Demo

Visit the admin portal: [https://anshumansaged.github.io/karate_admin/](https://anshumansaged.github.io/karate_admin/)

## 🛠️ Technology Stack

- React 19
- Vite 7
- Tailwind CSS 3.4
- Framer Motion
- Modern JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/anshumansaged/karate_admin.git
cd karate_admin
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5174](http://localhost:5174) in your browser

## 🔐 Demo Credentials

For testing purposes, use these demo accounts:

- **Admin**: admin@karate.com / admin123
- **Sensei**: sensei@dojo.com / sensei123
- **Shihan**: shihan@kyokushin.com / shihan123

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)
- Push to `main` branch automatically deploys to GitHub Pages
- GitHub Actions workflow handles build and deployment

### Manual Deployment
```bash
npm run deploy
```

## 📁 Project Structure

```
karate_admin/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AdminGatekeeper.jsx    # Authentication component
│   │   └── AdminPanel.jsx         # Main admin dashboard
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                      # This file
```

## 🎨 Features Overview

### Dashboard
- Student count analytics
- Tournament overview
- Camp statistics
- Revenue tracking

### Student Management
- Student profiles with belt rankings
- Status tracking (Active/On Hold)
- Easy student addition and editing

### Tournament Management
- Tournament creation and editing
- Participant tracking
- Event scheduling

### System Settings
- User management
- Backup and restore
- System logs
- General configuration

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Customization

The admin portal uses a custom color scheme defined in `tailwind.config.js`:

- **karate-red**: Primary brand color
- **karate-black**: Dark theme color
- **admin-blue**: Action buttons
- **admin-green**: Success states
- **admin-gray**: Secondary elements

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for Kyokushin Karate community**
# karate_admin
