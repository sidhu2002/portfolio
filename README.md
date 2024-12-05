# K Siddeshwar Reddy - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- Responsive design that works on all devices
- Interactive UI with smooth animations
- Project showcase with filtering options
- Experience timeline
- Skills showcase
- Contact form with EmailJS integration
- Particle.js background effects
- Dark theme

## 🛠️ Built With

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- React Parallax Tilt
- Particles.js

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/sidhu2002/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

## 📦 Deployment

### Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com)
2. Install Vercel CLI:

```bash
npm i -g vercel
```

3. Run the following command in your project directory:

```bash
vercel
```

4. Follow the prompts to deploy your application

### Alternative Deployment Options

#### Build for Production

```bash
npm run build
# or
yarn build
```

#### Start Production Server

```bash
npm run start
# or
yarn start
```

## 🔧 Environment Variables

Make sure to set these environment variables in your deployment platform:

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## 📝 Project Structure

```
portfolio/
├── public/          # Static files
├── src/
│   ├── app/         # App router pages
│   ├── components/  # React components
│   └── styles/      # Global styles
├── tailwind.config.ts
└── next.config.js
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE)

## 📧 Contact

K Siddeshwar Reddy - k.siddeshwarreddy@gmail.com

Project Link: [https://github.com/sidhu2002/portfolio](https://github.com/sidhu2002/portfolio)
