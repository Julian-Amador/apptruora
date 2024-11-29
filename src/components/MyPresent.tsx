import { useParams } from 'react-router-dom';
import danielosopodcast from '../assets/danielosopodcast.jpg'
import eluniverso from '../assets/eluniversodetruora.svg'
import bigbang2023 from '../assets/bigbang2023.jpg'
import theobstacle from '../assets/theobstacleistheway.jpg'


const MyPresent = () => {
  const {} = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-[0_10px_20px_rgba(0.7,0.7,0.7,0.7)]">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start space-y-2">
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Página principal
          </a>
          <a
            href="/about/mypast"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Mi pasado y mi sentido de propósito
          </a>
        </div>
        <div>
          <a
            href="/about/thefuture"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            Como veo el futuro →
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-4xl font-bold text-center text-[#01022E]">Mi realidad actual</h1>
        <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold" style={{ color: '#01022E' }}>El presente en mi vida</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          En este momento de mi vida me siento preparado para un reto más grande: Entrar en una empresa de tecnología en la que pueda poner a prueba mis habilidades y conocimientos aportando valor en Producto y Growth, trabajando con gente impresionante, solucionando problemas impactantes en la sociedad y así seguir preparándome y aprendiendo para seguir emprendiendo.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Me siento preparado ya que aunque en el pasado haya fallado varias veces tengo la convicción de que podemos aprender de los fracasos, como diría Ryan Holiday: "The obstacle is the way". Así que he tomado los fracasos como oportunidades de avanzar con más fuerza aprendiendo de tecnología, conducta humana, desarrollo de productos, gestión de equipos, emprendimiento y muchas cosas más.
        </p>
        <div className="flex justify-center my-6">
          <img src={theobstacle} alt="The obstacle is the way - Ryan Holliday" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Como conocí Truora</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Hace más o menos 6 meses descubrí Truora por el podcast que hizo Daniel Bilbao con Oso Trava, seguí a Daniel en LinkedIn y seguí aprendiendo poco a poco de Truora por los medios que he encontrado, uno de ellos es su podcast.
        </p>
        <div className="flex justify-center my-6">
          <img src={danielosopodcast} alt="Miniatura de Youtube - Oso Trava" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Quiero decir esto con total convicción: El universo de Truora es de los mejores podcasts sobre startups que he escuchado en mi vida. Me encantó ¡Fue amor a primera escucha!
        </p>
        <div className="flex justify-center my-6">
          <img src={eluniverso} alt="El universo de Truora" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>¿Por qué Truora?</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Como mencioné antes, busco hacer las cosas en mi vida con un sentido de propósito. Me interesan otras cosas, como la misión de la empresa en la que trabajaré, el crecimiento personal que tendré, su cultura, las personas que conoceré, las experiencias y los retos que harán de mí alguien mejor cada día.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          En Truora veo un lugar donde puedo aportar valor, crecer personal y profesionalmente, conocer personas impresionantes y trabajar en un propósito que va más allá de solo el dinero, realmente empatizo con sus valores, con su cultura y con su misión de combatir el fraude en latam,
        </p>
        <div className="flex justify-center my-6">
          <img src={bigbang2023} alt="BigBang Truora 2023" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Por eso me interesa entrar para aportar en areas como producto o growth (me llama mucho la atención el equipo Libertas), para demostrar lo que soy, lo que puedo aportar y cómo quiero crecer, de hecho no demando dinero inicialmente. Estoy dispuesto a entrar por un tiempo para mostrar lo que puedo hacer sin pedir retribución. (No quiero entrar a Truora por querer viajar cada año a los BigBang, puse la foto del BigBang 2023 porque fue la unica que encontré donde estuviera la mayor parte del equipo)
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Este es un buen momento para ver como veo el futuro.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/about/thefuture"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
          Leer mas sobre como veo el futuro →
        </a>
      </div>
    </div>
  );
};

export default MyPresent;