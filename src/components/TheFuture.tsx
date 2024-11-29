import { useParams } from 'react-router-dom';
import successonly from '../assets/successonly.jpg'
import growth from '../assets/growth.jpg'
import latam from '../assets/latam.png'

const TheFuture = () => {
  const {} = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-[0_10px_20px_rgba(0.7,0.7,0.7,0.7)]">
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
            href="/about/mypresent"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Mi realidad actual
          </a>
        </div>
        <div>
          <a
            href="/value/proposal-truora"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            Mi Propuesta para Truora →
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-4xl font-bold text-center text-[#01022E]">Como veo el futuro</h1>
        <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Como veo el futuro para Latinoamerica</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Yo veo que Latam como región esta avanzando mucho, creo que con el tiempo nos uniremos mas y seguiremos construyendo comunidades y negocios que beneficien el ecosistema y el diario vivir de las personas. Yo creo que todos hemos recibido capacidades y talentos importantes que debemos usar con propósito para hacer cosas buenas, pero eso solo lo haremos si nos atrevemos a dejar los miedos y las creencias limitantes atrás y nos enfocamos en trabajar con propósito.
        </p>
        <div className="flex justify-center my-6">
          <img src={latam} alt="Latino América" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <h2 className="text-2xl font-semibold mt-6" style={{ color: '#01022E' }}>Como veo el futuro para Truora</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Con la propuesta que estoy haciendoo veo dos posibilidades: Entro a Truora o no entro a Truora.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          En cualquiera de los dos casos yo creo firmemente que Truora va a seguir avanzando hacia sus objetivos, creo que algún algún día (mas pronto que tarde) llegarán a 100 millones de dolares en facturación anual o mucho mas y que eventualmente podremos comprar sus acciones en bolsa. Eso sería impresionante y me encantaría.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Si entro quiero impulsar a la compañía en sus objetivos, ya que a la larga se estarían beneficiando la empresa, sus clientes, los inversores y claramente yo.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          La verdad sé que no soy indispensable y no quiero tener ningún tipo de entitlement por lo que puedo hacer. Truora crecerá conmigo o sin mi, pero quiero tener la oportunidad de poder aportar y crecer en Truora dando valor antes de recibir una paga por ello.
        </p>
        <div className="flex justify-center my-6">
          <img src={growth} alt="Growth en Truora" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <h2 className="text-2xl font-semibold" style={{ color: '#01022E' }}>Como veo el futuro para mi</h2>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Yo seguiré creciendo, pensando como, donde y a quien puedo aportar con las capacidades que Dios me ha dado, no pararé por fallar, porque se que tengo una razón importante para vivir y soy bendecido por eso.
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Mientras tenga aliento en mis pulmones seguiré caminando con y por propósito, dando de lo que he recibido y aprendido, puede que sea en Truora como puede que no, pero me interesa no morir sin haberlo intentado.
        </p>
        <div className="flex justify-center my-6">
          <img src={successonly} alt="Success - Mallika Tripathi" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4" style={{ color: '#01022E' }}>
          No veo perdida en intentarlo aunque falle, al final, como diría Mallika Tripathi "Success only comes to those who dare to attempt".
        </p>
        <p className="mt-4" style={{ color: '#01022E' }}>
          Así que ¡Aquí está mi propuesta para hacer algún experimento para Truora en Libertas!
        </p>
      </div>

      {/* Botón al final */}
      <div className="flex justify-center mt-8">
        <a
          href="/value/proposal-truora"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
          Leer mi propuesta para Truora →
        </a>
      </div>
    </div>
  );
};

export default TheFuture;