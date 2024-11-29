import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-300"
  >
    <div className="bg-white/10 p-3 rounded-full">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="text-sm text-white">{label}</p>
      <p className="font-thin">{value}</p>
    </div>
  </motion.a>
);

const Footer = () => {
  const contacts = [
    {
      icon: Linkedin,
      label: '¡Mira mi LinkedIn!',
      value: 'Julian Amador',
      href: 'https://www.linkedin.com/in/julian-amador-producto-growth-tecnologia/',
      delay: 0.1
    },
    {
      icon: Phone,
      label: '¡Escribeme por WhatsApp!',
      value: '+57 310 747 0062',
      href: 'https://wa.me/573107470062?text=¡Hola%20Julian!%20Vengo%20de%20ver%20tu%20pagina%20web%20para%20aplicar%20a%20Truora',
      delay: 0.3
    },
    {
      icon: Mail,
      label: '¡Contáctame por Email!',
      value: 'julianamador1w@gmail.com',
      href: 'mailto:julianamador1w@gmail.com',
      delay: 0.2
    }
  ];

  return (
    <footer className="bg-[#01022E] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">¡Contactame!</h2>
          <p className="text-gray-300">¡Dale click a la opción que mejor te parezca y conversemos sobre cómo puedo aportar al equipo de Truora!</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contacts.map((contact) => (
            <ContactItem key={contact.label} {...contact} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Julian Amador. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;