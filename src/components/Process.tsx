import { useParams } from 'react-router-dom';
import cursor1 from '../assets/cursor1.png';
import cursor2 from '../assets/cursor2.png';
import cursor3 from '../assets/cursor3.png';
import colours from '../assets/colourstruora.png';
import codeando from '../assets/codeando.png';
import learning from '../assets/learningtruora.png';
import email from '../assets/emailstruora.jpeg';
import prompt from '../assets/promptruora.png';
import iniciando from '../assets/iniciando.jpeg'

const Process = () => {
  const { } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col items-start space-y-2">
          <a
            href="/value/metrics"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Métricas de éxito de la propuesta
          </a>
        </div>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            Página principal →
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-4xl font-bold text-center text-[#01022E]">Mi proceso para hacer esto</h1>
        <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
      </div>

      <div className="mt-6">

        <h2 className="text-3xl font-semibold text-[#01022E] mt-6">El inicio: Análisis y planeación.</h2>
        <p className="mt-4 text-[#01022E]">
        Una vez me decidí a aplicar a Truora me puse a aprender más aún de lo que ya sabía, leí, escuché podcasts y vi videos para saber lo más posible de la empresa.
        </p>
        <div className="flex justify-center my-6">
          <img src={learning} alt="Aprendiendo más sobre Truora" className="rounded-lg shadow-md" width="600" height="300" />
        </div>
        <p className="mt-4 text-[#01022E]">
        Todo esto mientras planeaba que iba a hacer para aplicar. Decidí hacer una página web porque creo que es muy auténtico en alguien como yo que no sea precisamente un perfil técnico (Se programar un poco, aunque no le dedique tantísimo tiempo).
        </p>
        <div className="flex justify-center my-6">
          <img src={iniciando} alt="Iniciando a trabajar" className="rounded-lg shadow-md" width="600" />
        </div>
        <p className="mt-4 text-[#01022E]">
        Así que analicé la página de Truora, pensé una estructura para la mía , recopilé los colores de Truora y me puse a trabajar.
        </p>
        <div className="flex justify-center my-6">
          <img src={colours} alt="Colores de la página de Truora" className="rounded-lg shadow-md" width="600" height="300" />
        </div>

        <h2 className="text-3xl font-semibold text-[#01022E] mt-6">Manos a la obra</h2>
        <p className="mt-4 text-[#01022E]">
        Como no sabía hacer páginas web de este nivel pedí ayuda a ChatGPT para hacer un prompt para Bolt.new, una herramienta con la que puedes hacer una maquetación básica de una página con prompts, con eso ya podría empezar a programar en con Cursor.
        </p>
        <div className="flex justify-center my-6">
          <img src={prompt} alt="ChatGPT ayudando a crear el proyecto" className="rounded-lg shadow-md" width="600" height="300" />
        </div>
        <p className="mt-4 text-[#01022E]">
        Cursor sería mi super poder para este proyecto, es impresionante lo que se puede hacer sin tener conocimientos profundos de una tecnología como lo es React (la que usé).
        </p>
        <p className="mt-4 text-[#01022E]">
        Para ser muy sincero, usé mucho los superpoderes y el free trial se me acabó… Dos veces, entonces creé dos cuentas nuevas para seguir. 
        </p>
        <div className="flex justify-center my-6">
          <img src={codeando} alt="Empezando a codear con Cursor" className="rounded-lg shadow-md" width="600" height="300" />
        </div>
        <p className="mt-4 text-[#01022E]">
        Esta fué mi primera cuenta de Cursor.
        </p>
        <div className="flex justify-center my-6">
          <img src={cursor1} alt="Primera cuenta de Cursor" className="rounded-lg shadow-md" width="600" height="300" />
        </div>
        <p className="mt-4 text-[#01022E]">
        Esta es la segunda cuenta de Cursor.
        </p>
        <div className="flex justify-center my-6">
          <img src={cursor2} alt="Segunda cuenta de Cursor" className="rounded-lg shadow-md" width="600" height="300" />
        </div>
        <p className="mt-4 text-[#01022E]">
        Y esta es la tercera y actual, la que espero sea la última.
        </p>
        <div className="flex justify-center my-6">
          <img src={cursor3} alt="Tercera cuenta de Cursor" className="rounded-lg shadow-md" width="600" height="300" />
        </div>

        <h2 className="text-3xl font-semibold text-[#01022E] mt-6"></h2>
        <p className="mt-4 text-[#01022E]">
        Por último me propuse hacer algunas conexiones en LinkedIn para darme a conocer en Truora y que este proyecto no quede en el olvido, si no puedo conectar pienso en usar el free trial de Sales Navigator para escribirles o escribir por correo.
        </p>
        <p className="mt-4 text-[#01022E]">
        Me puse a recopilar emails de personas en Truora que me interesa que me conozcan y vean el proyecto, lo hice con una herramienta llamada Snov.io que aprendí a usar prospectando clientes para las agencias de marketing que he creado y ayudé a crear. 
        </p>
        <div className="flex justify-center my-6">
          <img src={email} alt="Recolectando Emails de Truora" className="rounded-lg shadow-md" width="600" height="300" />
        </div>
        <p className="mt-4 text-[#01022E]">
        En la imagen se muestra como se usa la extensión para navegador, borré los emails para no hacer ningún tipo de daño si alguien malicioso ve esta página.
        </p>
        <p className="mt-4 text-[#01022E]">
        Y hasta aquí llegamos, después de mucho aprendizaje y unas ganas implacables de entrar a Truora hoy 29 de Noviembre he terminado el desarrollo de esta página y he publicado el proyecto en Github Pages (Lo hice en Github Pages  porque no tengo como pagar un servicio de hosting profesional ni un dominio, pero eso no me iba a parar).
        </p>
        <p className="mt-4 text-[#01022E]">
          Puede que muchos digan que esto me debe dar miedo o vergüenza... Para ser sincero estoy algo nervioso pero no importa, ya que el upside si esto funciona es desproporcionalmente mayor al downside de si esto falla.
        </p>
        <p className="mt-4 text-[#01022E]">
        Gracias por tu tiempo y por leerme, me gustaría recibir feedback sobre el proyecto así que sientete libre de dar click arriba en el header en la opción que mejor te sirva para contactarme.
        </p>
        
      
        <p className="mt-4 text-[#01022E] text-lg">
          ¡Saludos!
        </p>

        <p className="mt-4 text-[#01022E] text-right text-lg">
          - Julian Amador.
        </p>

      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
        >
          ¡Contáctame! Da click a la opción que prefieras en el Header
        </a>
      </div>
    </div>
  );
};

export default Process;