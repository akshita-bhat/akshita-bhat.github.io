import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: 'about' | 'portfolio';
  setCurrentPage: (page: 'about' | 'portfolio') => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">J</span>
          </div>
          <span className="font-bold text-lg">John Doe</span>
        </motion.div>
        
        <div className="flex items-center space-x-1">
          <Button
            variant={currentPage === 'about' ? 'default' : 'ghost'}
            onClick={() => setCurrentPage('about')}
            className="flex items-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span>About</span>
          </Button>
          <Button
            variant={currentPage === 'portfolio' ? 'default' : 'ghost'}
            onClick={() => setCurrentPage('portfolio')}
            className="flex items-center space-x-2"
          >
            <Briefcase className="w-4 h-4" />
            <span>Portfolio</span>
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:john@example.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}