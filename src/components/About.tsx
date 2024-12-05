import React from 'react';
import { ArrowBigLeftDash, User, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import astros1 from '../assets/astros1.svg';
import astros2 from '../assets/astros2.svg';
import me from '../assets/me.jpeg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
  animate?: { opacity: number; y: number };
  transition: { type: string; stiffness: number; duration: number; delay: number };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, onClick, className, animate, transition }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animate}
      transition={transition}
      className={`glass-card p-6 cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/20 text-white mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      icon: ArrowBigLeftDash,
      title: 'Mi pasado y mi sentido de propósito',
      description: 'Un parto complicado, curiosidad, internet, emprendimiento y una razón para vivir.',
    },
    {
      icon: User,
      title: 'Mi realidad actual',
      description: 'El reto al que me quiero enfrentar y porque considero que Truora es el lugar correcto para hacerlo.',
    },
    {
      icon: Lightbulb,
      title: 'Como veo el futuro',
      description: 'Mi visión sobre lo que está por venir para Latino América, Truora y yo.',
    },
  ];

  const routeMap: { [key: string]: string } = {
    'Mi pasado y mi sentido de propósito': '/about/mypast',
    'Mi realidad actual': '/about/mypresent',
    'Como veo el futuro': '/about/thefuture',
  };

  const handleCardClick = (feature: Feature) => {
    const route = routeMap[feature.title];
    if (route) {
      navigate(route);
    }
  };

  return (
    <section id="about" className="flex flex-col w-full bg-white rounded-xl shadow-[0_10px_20px_rgba(0.7,0.7,0.7,0.7)] p-4">
      <div className="flex flex-col justify-center items-center h-64 w-full bg-[#4800ff] text-white rounded-xl pt-4">
        <div className="relative w-full">
          <img src={astros1} alt="Ilustración de Astros 1" className="absolute left-10 w-90 h-90 opacity-100 -translate-y-24" />
          <img src={astros2} alt="Ilustración de Astros 2" className="absolute right-10 w-90 h-90 opacity-100 -translate-y-24" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center -mt-8">
            <p className="text-3xl font-bold break-words">Soy un joven de 19 años que quiere trabajar en</p>
            <p className="mt-4 text-3xl font-bold break-words">Truora para ayudar a llevarla a 100M de ARR.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 relative w-full rounded-bl-xl rounded-br-xl">
        <img src={me} alt="Julian Amador" className="h-72 w-72 rounded-full border-4 border-white -mt-32 -ml-16 z-10" />
        <div className="ml-8 col text-left flex flex-col justify-start -mt-6">
          <h2 className="text-2xl font-bold text-[#01022E] mt-4">Julian Amador</h2>
          <h2 className="text-lg font-normal text-[#010203] mt-0">Growth - Producto</h2>
          <a href="https://www.linkedin.com/in/julian-amador-producto-growth-tecnologia/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Perfil en LinkedIn</a>
          <div className="max-w-lg mx-auto">
            <p className="mt-2 max-w-md font-medium text-[#01022E] break-words">
              Soy un joven curioso y apasionado por el emprendimiento y la tecnología.
            </p>
            <p className="mt-1 max-w-md font-medium text-[#01022E] break-words">
              Quiero entrar a Truora para trabajar con Growth y/o Producto. (no tienen que pagarme mientras ven como trabajo)
            </p>
            <p className="mt-1 max-w-md font-medium text-[#01022E] break-words">
             Hice toda esta página web para aplicar a Truora, en ella encontrarás una propuesta de valor que hice para la empresa e información sobre mí.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <Link
          to="/value/proposal-truora"
          rel="noopener noreferrer"
          className="text-white block text-center justify-center text-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out px-5 py-2 rounded-lg shadow-md"
          style={{ width: '400px', height: '55px' }}
        >
          ¡Mira mi propuesta para Truora!
        </Link>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              onClick={() => handleCardClick(feature)}
              className="bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900"
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 500, duration: 0.5, delay: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;