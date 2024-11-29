import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import TruoraLogo from '../assets/truora-logo.svg';
import { X, Menu } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Sobre mí' },
    { href: '/value', label: 'Propuesta de valor' },
    { href: '/my-process', label: 'Proceso' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#01022E] transition-all duration-300">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="hidden md:flex items-center space-x-36">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a href="https://truora.com" target="_blank" rel="noopener noreferrer" className="block">
              <img src={TruoraLogo} alt="Truora Logo" className="h-12 w-auto" />
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-4 text-l">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  to={item.href}
                  className={`text-white ${location.pathname === item.href ? 'font-bold' : ''}`}
                >
                  {item.label}
                </Link>
                {location.pathname === item.href && (
                  <div className="absolute left-0 right-0 h-0.5 bg-white bg-opacity-70 shadow-md rounded-full mt-1"></div>
                )}
              </div>
            ))}
          </nav>
          </div>
          <div className="contact-buttons flex space-x-4">
            <p className="mt-1 text-lg font-bold">
              ¡Contáctame! →
            </p>
            <a href= 'https://www.linkedin.com/in/julian-amador-producto-growth-tecnologia/'
               target="_blank"
               rel="noopener noreferrer"
               className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md flex items-center justify-center"        
            ><FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
            <a href='https://wa.me/573107470062?text=¡Hola%20Julian!%20Vengo%20de%20ver%20tu%20pagina%20web%20para%20aplicar%20a%20Truora'
               target="_blank"
               rel="noopener noreferrer"
               className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md flex items-center justify-center"        
            ><FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            </a>
            <a href="mailto:julianamador1w@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md flex items-center justify-center"        
            ><FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;