import { useParams } from 'react-router-dom';
import zapsign from '../assets/zapsign.jpg';

const ProposalTruora = () => {
  const {} = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-[0_10px_20px_rgba(0.7,0.7,0.7,0.7)]">
      <div>
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col items-start space-y-2">
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Página principal
          </a>
          <a
            href="/about/thefuture"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Como veo el futuro
          </a>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <a
            href="/value/roadmap"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ¡Mira el roadmap de este proyecto! →
          </a>
        </div>
      </div>
    </div>

      <div className="mt-4">
      <h1 className="text-4xl font-bold text-center text-[#01022E]">Propuesta multi industria para ZapSign</h1>
      <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
      </div>

      <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Lo que propongo hacer al entrar a Truora</h2>
      <div className="mt-6">
        <p className="mt-4" style={{ color: '#01022E' }}>
          Este sería el trabajo que quiero brindar como valor y propongo hacer al entrar a Truora. Aún si no entro a Truora sientanse libres de implementarlo, me encantaría ver como crece la compañía con esto.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Busqué que la forma de describir, visionar, conceptualizar y planear los experimentos fuera lo más acorde al trabajo ágil que caracteriza a libertas.
        </p>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Justificación</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Para conseguir que Truora crezca en facturación anual hice esta propuesta multi industria para ZapSign, sabiendo que puede fallar la incursión en muchas de ellas, pero con la confianza de que alguna puede ser un éxito que nos haga crecer.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Elegí ZapSign por varias razones:
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Veo que se puede usar en muchas industrias, eso nos va a dar la posibilidad de diversificar nuestros tipos de clientes y no tener que depender de unos pocos (como lo que pasó en 2020 con background checks).</li>
          <li style={{ marginBottom: '8px' }}>ZapSign me da la posibilidad de hacer una propuesta amplia para ejecutar varios experimentos al entrar a Truora, así se amortiza el riesgo si alguno o muchos fallan.</li>
          <li style={{ marginBottom: '8px' }}>Hay que hacer rendir esos 2.3 millones que se invirtieron en comprar la empresa, hay que exprimirlos lo más posible.</li>
        </ul>
        <div className="flex justify-center my-6">
        <img src={zapsign} alt="Banner de zapsign" className="rounded-lg shadow-md" />
        </div>
        <p className="mt-4" style={{ color: '#01022E' }}>
        Dicho esto, vamos con la propuesta.
        </p>
        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Propuesta</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Pensando en ZapSign y en donde se puede ver usada de manera impactante pensé las siguientes 7 industrias, la idea es lanzar un experimento para cada una para evaluar la posibilidad de incursionar en ellas:
        </p>
        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Notarías y Servicios de Notariado</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Digitalización y automatización de procesos notariales, permitiendo la firma electrónica y validación remota de documentos legales, mejorando la seguridad, accesibilidad y cercanía para usuarios y notarios.</li>
          <li style={{ marginBottom: '8px' }}>Gestión eficiente de acuerdos multilingües, eliminando la necesidad de papeles físicos y acelerando los tiempos de certificación.</li>
        </ul>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Fintech</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Digitalización de acuerdos financieros con manejo eficiente de múltiples idiomas y eliminación de documentos físicos, agilizando procesos regulatorios y transacciones.</li>
          <li style={{ marginBottom: '8px' }}>Optimización de la gestión de contratos financieros, incluyendo préstamos, inversiones y servicios personalizados.</li>
        </ul>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Construcción</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Eliminación del uso de documentación física y gestión eficiente de acuerdos multilingües para proyectos internacionales.</li>
          <li style={{ marginBottom: '8px' }}>Simplificación de la gestión contractual para proyectos, subcontratistas y servicios especializados.</li>
        </ul>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>E-commerce</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Automatización de contratos para proveedores, alianzas y servicios personalizados, mejorando la agilidad operativa.</li>
          <li style={{ marginBottom: '8px' }}>Gestión digital de acuerdos multilingües, eliminando la necesidad de papeles físicos y facilitando la expansión global.</li>
        </ul>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Turismo y Hotelería</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Simplificación de la gestión de contratos para tours, servicios personalizados y reservas especiales.</li>
          <li style={{ marginBottom: '8px' }}>Eliminación de la necesidad de documentos físicos y manejo eficiente de acuerdos multilingües.</li>
        </ul>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Medios Creativos</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li style={{ marginBottom: '8px' }}>Optimización de la gestión de derechos de autor y contratos temporales, garantizando claridad en la propiedad intelectual.</li>
          <li style={{ marginBottom: '8px' }}>Agilización de tiempos de producción mediante procesos digitales que reducen el papeleo y mejoran la colaboración.</li>
        </ul>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: '16px', color: '#01022E' }}>Plataformas de trabajo Freelance</h2>
        
        <ul className="list-disc list-inside mt-4 text-[#01022E]" style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Aceleración de procesos de contratación por medio de firma de contratos veloz por WhatsApp.</li>
          <li style={{ marginBottom: '8px' }}>Mayor seguridad en contratos para contratantes y freelancers sin necesidad de procesos complejos de firma digital.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Roadmap en la siguiente página</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          En la siguiente página encontrarás el roadmap que he creado para cada experimento.
        </p>
    </div>
      <div className="flex justify-center mt-8">
        <a
          href="/value/roadmap"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
          Leer más sobre el roadmap de estos experimentos →
        </a>
      </div>
    </div>
  );
};

export default ProposalTruora;