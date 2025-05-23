# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark theme, and a custom cursor.

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Custom Cursor**: Unique cursor animation for desktop users
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Dark Theme**: Modern dark theme with neon accents
- **Contact Form**: Functional contact form integrated with EmailJS
- **TypeScript**: Type-safe code with TypeScript implementation
- **Performance Optimized**: Optimized for the best possible performance and load times

## 🛠️ Built With

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-link]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
REACT_APP_SERVICE_ID="your_service_id"
REACT_APP_TEMPLATE_ID="your_template_id"
REACT_APP_USER_ID="your_user_id"
```

4. Start the development server:
```bash
npm start
```

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## 📂 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AnimateOnScroll.tsx
│   │   ├── Cursor.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── types/
│   │   └── index.ts
│   └── App.tsx
├── .env
└── package.json
```

## 🎨 Customization

### Tailwind Configuration
You can modify the theme, colors, and other design tokens in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#000000",
      secondary: "#02f78d",
    },
    fontFamily: {
      techno: ['Space Grotesk', 'sans-serif'],
    },
  },
}
```

### Environment Variables
Required environment variables:
- `REACT_APP_SERVICE_ID`: EmailJS service ID
- `REACT_APP_TEMPLATE_ID`: EmailJS template ID
- `REACT_APP_USER_ID`: EmailJS user ID

## 🌐 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service of choice (Netlify, Vercel, GitHub Pages, etc.)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Ananthakrishnan - ananthuk0902@gmail.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
