import { useParams } from 'react-router-dom';
import truorabanner from '../assets/truorabanner.jpg';
import { Link } from 'react-router-dom';

const Metrics = () => {
    const {} = useParams();
  
    return (
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-[0_10px_20px_rgba(0.7,0.7,0.7,0.7)]">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col items-start space-y-2">
              <Link
                to="/"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
              >
                ← Página principal
              </Link>
              <Link
                to="/value/roadmap"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
              >
                ← Roadmap para cada experimento
              </Link>
            </div>
            <div className="flex flex-col items-finish space-y-2">
              <Link
                to="/about/mypast"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
              >
                ¡Conoce más sobre quien soy! →
              </Link>
              <Link
                to="/my-process"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
              >
                ¡Mira el proceso de este proyecto! →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4">
        <h1 className="text-4xl font-bold text-center text-[#01022E]">Métricas de Éxito</h1>
        <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
        </div>


    <div>
    <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Métricas de Éxito para Truora</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
        <li><strong>Volumen de operaciones:</strong>     Número de verificaciones y operaciones gestionadas en sectores clave, comparado con periodos anteriores.</li>
        <li><strong>Expansión interna:</strong> Número de áreas de negocio dentro de empresas piloto que adoptan la herramienta.</li>
        <li><strong>Tiempo de adopción:</strong> Velocidad promedio en que empresas piloto implementan la solución en sus procesos.</li>
        <li><strong>Retención:</strong> Porcentaje de empresas que renuevan o expanden sus contratos con Truora.</li>
        </ul>
        <div className="flex justify-center my-6">
          <img src={truorabanner} alt="Banner de Truora" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
      <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Métricas de Éxito para cada Industria</h2>
      <h2 className="text-2xl font-semibold mt-4" style={{ color: '#01022E' }}>Notarías y Servicios de Notariado:</h2>
      <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Tiempos de procesamiento:</strong> Reducción en el tiempo promedio necesario para completar un trámite notarial.</li>
          <li><strong>Digitalización:</strong> Porcentaje de transacciones realizadas sin documentos físicos.</li>
          <li><strong>Tasa de adopción:</strong> Número de usuarios que optan por la firma electrónica y validación remota.</li>
          <li><strong>Gestión multilingüe:</strong> Cantidad de acuerdos certificados en idiomas diferentes al nativo.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Fintech:</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Conversión de usuarios:</strong> Incremento en el número de préstamos aprobados y cuentas abiertas digitalmente.</li>
          <li><strong>Reducción de tiempos:</strong> Disminución del tiempo necesario para formalizar contratos financieros.</li>
          <li><strong>Cumplimiento regulatorio automatizado:</strong> Porcentaje de contratos generados que cumplen con estándares legales sin intervención manual.</li>
          <li><strong>Adopción de firma digital:</strong> Porcentaje de usuarios que utilizan la solución para cerrar acuerdos financieros.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Construcción:</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Reducción de retrasos:</strong> Tiempo promedio para la aprobación de contratos de subcontratistas y proyectos clave.</li>
          <li><strong>Gestión de contratos:</strong> Porcentaje de contratos gestionados sin necesidad de papel.</li>
          <li><strong>Cumplimiento de plazos internacionales:</strong> Porcentaje de acuerdos multilingües cerrados dentro de los plazos establecidos.</li>
          <li><strong>Resolución de conflictos:</strong> Tiempo promedio para solucionar discrepancias contractuales.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>E-commerce:</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Velocidad de onboarding:</strong> Tiempo promedio para incorporar nuevos vendedores a la plataforma.</li>
          <li><strong>Automatización de contratos:</strong> Porcentaje de acuerdos gestionados sin intervención manual.</li>
          <li><strong>Crecimiento del catálogo:</strong> Incremento en el número de productos disponibles tras la integración de nuevos vendedores.</li>
          <li><strong>Satisfacción del usuario:</strong> Puntuación en encuestas sobre la experiencia de incorporación y uso de la herramienta.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Turismo y Hotelería:</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Reducción de tiempos de autorización:</strong> Tiempo promedio para confirmar reservas y tours.</li>
          <li><strong>Gestión multilingüe eficiente:</strong> Porcentaje de transacciones realizadas en idiomas distintos al nativo.</li>
          <li><strong>Satisfacción del cliente:</strong> Puntuaciones de usuarios sobre la facilidad del proceso de contratación.</li>
          <li><strong>Tasa de retorno:</strong> Porcentaje de clientes que vuelven a utilizar el servicio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Medios Creativos:</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Gestión de derechos de autor:</strong> Porcentaje de contratos de derechos de autor generados y gestionados digitalmente.</li>
          <li><strong>Reducción de tiempos de producción:</strong> Tiempo promedio desde la creación hasta la firma de un acuerdo.</li>
          <li><strong>Claridad contractual:</strong> Disminución en las disputas relacionadas con derechos de autor o contratos temporales.</li>
          <li><strong>Satisfacción de colaboradores:</strong> Puntuación en encuestas de usuarios sobre la facilidad y rapidez del sistema.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Plataformas de Trabajo Freelance:</h2>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li><strong>Velocidad de formalización:</strong> Tiempo promedio desde el acuerdo inicial hasta la firma del contrato.</li>
          <li><strong>Tasa de éxito:</strong> Porcentaje de contratos completados correctamente sin ajustes posteriores.</li>
          <li><strong>Seguridad contractual:</strong> Número de contratos cerrados con garantías de protección para ambas partes.</li>
        </ul>
        <p className="mt-4" style={{ color: '#01022E' }}>
            Con estas métricas podremos evaluar el éxito de cada experimento y tomar decisiones con respecto a la incursión en cada industria.
        </p>
        <p className="font-bold mt-4" style={{ color: '#01022E' }}>
            Dicho eso, me encantaría saber qué piensan sobre esto, trabajar en Truora es un reto al que me quiero sumar y esta es mi primera idea de cómo hacerlo. ¿Qué les parece la propuesta? Estoy disponible para conversar cuando deseen :D
        </p>
        <div className="flex justify-center mt-8 space-x-4">
        <Link
        to="/"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
        ¡Contáctame! Da click a la opción que prefieras en el Header
        </Link>
        <Link
          to="/my-process"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
          Mira el proceso de este proyecto →
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Metrics;