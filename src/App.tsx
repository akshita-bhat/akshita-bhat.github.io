import { useState } from 'react';
import './styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { FloatingTechStack } from './components/FloatingTechStack';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'about' | 'portfolio'>('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {currentPage === 'about' ? <AboutPage /> : <PortfolioPage />}
        </motion.div>
      </AnimatePresence>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 75, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-green-200/20 dark:bg-green-800/20 rounded-full blur-3xl"
          animate={{
            x: [0, -75, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}