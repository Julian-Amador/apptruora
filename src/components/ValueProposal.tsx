import React from 'react';
import { TrendingUp, ListChecks, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const ValueProposalItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  checkpoints: string[];
  index: number;
  onClick: () => void;
}> = ({ icon: Icon, title, description, checkpoints, index, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 500 }}
      className="flex flex-col mb-8 w-full"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <div className="glass-card p-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 text-left h-full">
        <div className="card">
          <div className="card-icon">
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              width: '40px',
              height: '40px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-gray-200">{description}</p>
            <div className="mt-4">
              {checkpoints.map((checkpoint, idx) => (
                <div key={idx} className="checkpoint">
                  {checkpoint}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ValueProposal = () => {
  const navigate = useNavigate();

  const handleItemClick = (item: { title: string }) => {
    if (item.title === 'Propuesta multi industria para ZapSign') {
      navigate('/value/proposal-truora');
    } else if (item.title === 'Roadmap'){
      navigate('/value/roadmap');
    } else if (item.title === 'Métricas de éxito'){
      navigate('/value/metrics');
    }
  };

  const timelineData = [
    {
      icon: TrendingUp,
      title: 'Propuesta multi industria para ZapSign',
      description: 'Mi propuesta para crecer la facturación de Truora cada vez más.',
      checkpoints: [
        '- Uso de ZapSign en múltiples industrias',
        '- 7 posibles oportunidades de crecimiento',
      ],
    },
    {
      icon: ListChecks,
      title: 'Roadmap',
      description: 'El plan estructurado para ejecutar la propuesta.',
      checkpoints: [
        '- Roadmap pensado para el equipo Libertas',
        '- Planteamiento de experimentos para probar cada industria',
      ],
    },
    {
      icon: Check,
      title: 'Métricas de éxito',
      description: 'Cómo mediremos el éxito de los experimentos.',
      checkpoints: [
        '- Métricas para Truora',
        '- Métricas para cada industria',
      ]
    }
  ];

  return (
    <section id="journey" className="flex flex-col w-full bg-white rounded-xl shadow-lg p-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl font-bold text-[#01022E] mb-2 text-center"
      >
        Mi Propuesta para Truora
      </motion.h2>
      
      <p className="text-lg text-center font-medium text-[#01022E] mb-4 ">
        Aquí puedes ver mi propuesta para Truora, el roadmap para ejecutarla y las métricas para evaluar el éxito de los experimentos que haremos.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {timelineData.map((item, index) => (
          <ValueProposalItem key={index} {...item} index={index} onClick={() => handleItemClick(item)} />
        ))}
      </div>
    </section>
  );
};

export default ValueProposal;