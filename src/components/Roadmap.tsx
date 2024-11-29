import { useParams } from 'react-router-dom';
import zapsign from '../assets/zapsign.jpg';

const Roadmap = () => {
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
              href="/value/proposal-truora"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
            >
              ← Propuesta multi industria para ZapSign
            </a>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <a
              href="/value/metrics"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
            >
              ¡Mira las métricas de éxito que propongo! →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4">
      <h1 className="text-4xl font-bold text-center text-[#01022E]">Roadmap para cada experimento</h1>
      <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
      </div>

      <div className="mt-6">
        <p className="mt-4" style={{ color: '#01022E' }}>
          La idea es que se hagan 7 experimentos, uno por cada industria. Cada experimento durará una semana en ser lanzado y una semana de medición para concluir si seguimos con él o no.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          No habrán más de dos semanas de medición por experimento y mientras medimos un experimento preparamos el siguiente.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Así sucesivamente hasta experimentar en las 7 industrias (por lo menos tenemos que sacar algún insight).
        </p>

        <div className="flex justify-center my-6">
          <img src={zapsign} alt="Banner de zapsign" className="rounded-lg shadow-md" />
        </div>
        
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Día 1 (Planeación)</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Definir la hipótesis:</strong> ¿Qué queremos probar? (En este caso sería “La industria X es un buen terreno para incursionar con ZapSign y crecer en revenue").
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Industria objetivo:</strong> ¿Qué industria probaremos? (La industria que elijamos por experimento).
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Definir el alcance:</strong> ¿Qué haremos y qué no haremos en cada industria para probar si es un buen terreno para incursionar?
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Divide y vencerás:</strong> ¿Cómo podemos dividir en tareas este experimento? (Serían las tareas descritas más abajo).
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Asignar responsabilidades:</strong> ¿Quién lidera cada tarea?
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Concluir los recursos necesarios:</strong>¿A quién y qué necesitamos para cada tarea? (Personas, softwares, herramientas NoCode… Etc).
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Establecer métricas clave:</strong> ¿Cómo mediremos el éxito? (En la proxima página encontrarás mis propuestas para métricas de éxito).
        </p>
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Días 2-3 (Desarrollo para lanzar el experimento)</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          El equipo desarrollará en paralelo estas tres tareas:
        </p>
        
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Tarea 1. Landing Page:</strong>  
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
        Una landing para que los negocios interesados se registren.
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
            <li>Mostrar ejemplos de flujos de firma digital adaptados a las necesidades de cada industria.</li>
            <li>UX intuitiva con textos que expresen los beneficios de ZapSign claramente y de manera específica para cada sector (ej.: reducción de tiempos, mayor confianza, cercanía, accesibilidad).</li>
            <li>Textos con Call To Action y sensación de escasez: "Prueba ZapSign gratis con $2,000 en créditos y mejora la eficiencia de tu negocio. Sólo para los 50 primeros negocios en inscribirse".</li>
            <li>Formulario sencillo para hacer onboarding del cliente (puede ser incluso con un flujo de WhatsApp).</li>
            <li>Nada muy complejo, lo justo para conseguir respuesta del mercado.</li>
        </ul>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Tarea 2. Post para LinkedIn:</strong>  
        <p className="mt-4" style={{ color: '#01022E' }}>
        Diseñar un post llamativo para que se publique desde la página oficial de Truora y lo reposteen miembros del equipo.
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
            <li>Diseño llamativo brandeado de Truora y ZapSign.</li>
            <li>Copy con Call To Action y sensación de escasez: "Prueba ZapSign gratis con $2,000 en créditos y mejora la eficiencia de tu negocio. Sólo para los 50 primeros negocios en inscribirse".</li>
        </ul>
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          <strong>Tarea 3. Identificar negocios clave:</strong>  
        </p>
        <p className="mt-2" style={{ color: '#01022E' }}>
          La idea es identificar los negocios con los cuales tenemos oportunidad de trabajar, debemos hacer una lista de ellos y conseguir como contactar a sus decision makers.
        </p>
        <div>
          <p className="mt-2" style={{ color: '#01022E' }}>
            Las siguientes son ideas de negocios que a mi parecer serían ideales para trabajar con ellos, categorizados por industria y con cualidades necesarias para trabajar con ellos (podemos tener esto en cuenta para cada experimento según sea necesario).
          </p>
        </div>
        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Notarías y Servicios de Notariado:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Notarías tradicionales, bufetes de abogados, startups legales (legal tech).</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Experiencia en normativas legales y regulaciones locales.</li>
          <li>Capacidad para implementar sistemas de firma electrónica y validación remota.</li>
          <li>Infraestructura tecnológica robusta para garantizar la seguridad de datos.</li>
          <li>Adaptabilidad a diferentes idiomas y marcos legales internacionales.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Fintech:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Plataformas de préstamos, bancos digitales, startups de inversión, Fintech, Insurtech.</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Conocimiento avanzado en compliance y regulaciones financieras.</li>
          <li>Capacidad para manejar contratos complejos y multilaterales de manera digital.</li>
          <li>Enfoque en la experiencia del usuario y personalización de servicios.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Construcción:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Constructoras, estudios de arquitectura, empresas de ingeniería, subcontratistas especializados.</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Capacidad para integrar herramientas de gestión contractual digital.</li>
          <li>Competencia en la coordinación de múltiples partes interesadas.</li>
          <li>Experiencia en la gestión de proyectos internacionales y acuerdos multilingües.</li>
          <li>Infraestructura para archivar y gestionar grandes volúmenes de documentos.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>E-commerce:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Marketplaces, plataformas de dropshipping, servicios de logística, startups de comercio global.</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Habilidad para gestionar contratos de proveedores y aliados de forma automatizada.</li>
          <li>Sistemas de digitalización de acuerdos eficientes y seguros.</li>
          <li>Enfoque en escalabilidad para soportar la expansión global.</li>
          <li>Capacidad para manejar contratos en múltiples idiomas y adaptarse a diversas legislaciones.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Turismo y Hotelería:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Agencias de viajes, cadenas hoteleras, operadores de tours, plataformas de reserva en línea.</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Herramientas para digitalizar contratos y reservas en tiempo real.</li>
          <li>Capacidad para operar en múltiples zonas horarias e idiomas.</li>
          <li>Enfoque en la experiencia del cliente con flujos de trabajo intuitivos.</li>
          <li>Habilidad para simplificar procesos legales en la gestión de servicios.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Medios Creativos:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Productoras de cine, estudios de diseño, agencias de publicidad, plataformas de distribución de contenido.</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Capacidad para gestionar contratos temporales y derechos de autor de manera clara y eficiente.</li>
          <li>Infraestructura para almacenar y compartir contratos digitales de forma segura.</li>
          <li>Conocimiento en leyes de propiedad intelectual.</li>
          <li>Velocidad en la preparación y cierre de acuerdos para cumplir con plazos ajustados.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Plataformas de Trabajo Freelance:</h3>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Negocios clave: Marketplaces para freelancers (Upwork, Fiverr), startups de reclutamiento digital, plataformas de colaboración remota.</li>
        </ul>
        <p className="mt-2" style={{ color: '#01022E' }}>
          Cualidades necesarias:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#01022E]">
          <li>Enfoque en la seguridad de los datos para proteger tanto a contratantes como a freelancers.</li>
          <li>Implementar cambios o pruebas: Desarrollar prototipos, variaciones, o ajustes necesarios.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Día 4 (Lanzamiento del experimento)</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          De la misma manera que en el día 2 y 3 el equipo desarrollará en paralelo estas tres tareas:
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li>Publicar en LinkedIn el post.</li>
          <li>Desplegar la landing page.</li>
          <li>Contactar negocios clave.</li>
        </ul>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Teniendo la forma de contactar a los decision makers de cada empresa vamos a iniciar conversaciones con ellos para conocerlos, evaluar si son un buen fit para trabajar e implementar nuestra solución con 2.000$ en créditos para ellos.
        </p>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Días 5-12 (Medición e iteración)</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Constantemente vamos a estar evaluando las métricas y tomando decisiones en base a los resultados, para eso vamos a tener en cuenta los siguientes puntos.
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li>Evaluar métricas en tiempo real: Recolección de feedback y medición de resultados diaria.</li>
          <li>Identificar patrones: ¿Qué funcionó y qué no?</li>
          <li>Iteración: Tomar feedback para mejorar nuestra propuesta.</li>
          <li>Conclusión antes del tiempo planeado: Si los resultados van muy mal podemos concluir antes del día 13, aquí hay que priorizar la agilidad.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Día 13 (Conclusión y próximos pasos)</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Comparar con la hipótesis: ¿Se cumplió la predicción? (con base en los resultados y las métricas). Tomar decisiones: Si funciona: Integrar el cambio como parte del producto. Si no funciona: Archivar resultados para referencia futura.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Documentar aprendizajes: Resumen breve de los hallazgos e insights y su impacto. Proponer iteraciones para próximos experimentos: Ideas para mejorar o refinar la hipótesis en el siguiente experimento.
        </p>
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Métricas en la siguiente página</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
            En la siguiente página encontrarás las métricas de éxito que propongo para cada experimento.
        </p>
        <div className="flex justify-center mt-8">
        <a
          href="/value/metrics"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
          Leer más sobre las métricas de éxito que propongo →
        </a>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;