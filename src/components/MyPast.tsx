import { useParams } from 'react-router-dom';
import momme from '../assets/momme.jpg';
import meplaying from '../assets/meplaying.jpg';
import internet from '../assets/internet.jpg';
import success from '../assets/success.jpg'

const MyPast = () => {
  const {} = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col items-start space-y-2">
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            ← Página principal
          </a>
        </div>
        <div>
          <a
            href="/about/mypresent"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 transition duration-300 ease-in-out text-sm px-3 py-1 rounded-lg shadow-md"
          >
            Mi realidad actual →
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-4xl font-bold text-center text-[#01022E]">Mi pasado y mi sentido de propósito</h1>
        <p className="text-gray-500 text-center">Noviembre 2024 | Julian Amador</p>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-[#01022E]">Mi razón para vivir: Propósito</h2>
        <p className="mt-4 text-[#01022E]">
          Tengo una fuerte convicción por esto: debe haber una razón por la cual estoy vivo, no es casualidad ni un accidente, hay una razón y debe ser más grande que mi propia existencia.
        </p>
        <p className="mt-4 text-[#01022E]">
          Al nacer, los médicos le dijeron básicamente a mi papá "Pilar está perdiendo mucha sangre internamente, y el bebé se está ahogando en la sangre de su madre. Debes decidir a quién salvamos, ya que uno de los dos morirá".
        </p>
        <p className="mt-4 text-[#01022E]">
          La foto que estás viendo es una muestra de que afortunadamente mi papá no decidió entre ninguno y que los médicos estaban equivocados.
        </p>
        <div className="flex justify-center my-6">
          <img src={momme} alt="Mamá, un piano y yo" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4 text-[#01022E]">
          Desde que me contaron esta historia en mi niñez he sentido que la razón por la cual estoy vivo es importante, que el propósito de mi vida es algo que debo descubrir y es por lo cual debo vivir y luchar.
        </p>
        <h2 className="text-3xl font-semibold text-[#01022E] mt-6">Un mundo de posibilidades infinitas</h2>
        <p className="mt-4 text-[#01022E]">
          Con el tiempo descubrí internet más o menos a los 5 años, me cautivó por tres razones principales:
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
          <li>El poder ver un mundo más allá de mi entorno físico.</li>
          <li>El obtener respuesta a las preguntas que tenía sobre cómo funcionaban los sistemas, el mundo y las personas.</li>
          <li>Las posibilidades de solucionar problemas y crear cosas nuevas.</li>
        </ul>
        <p className="mt-4 text-[#01022E]">
          No tengo fotos de la época, pero mi reacción era algo más o menos así. (sin ser rubio ni de pelo liso)
        </p>
        <div className="flex justify-center my-6">
          <img src={internet} alt="Niño reaccionando a internet" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4 text-[#01022E]">
          El acceso a internet desde temprana edad me permitió aprender de todo lo que me interesara.
        </p>
        <p className="mt-4 text-[#01022E]">
          ¿Empresas? ¿Tecnología? ¿Comportamiento humano? ¿Moda? ¿Trucos de cartas? ¿Cubos de Rubik? Tenía respuesta a TODO lo que me interesaba y no la iba a desaprovechar.
        </p>
        <p className="mt-4 text-[#01022E]">
          Me convertí en alguien que una vez le interesaba algo no se conformaba con solo saber la superficie del tema. Tenía que entender las profundidades del conocimiento que quería obtener, poder practicar ese conocimiento en la vida real, probar cosas, crearlas, destruirlas y crearlas de nuevo mejoradas.
        </p>
        <p className="mt-4 text-[#01022E]">
          Así que fui descubriendo que me gustan y soy bueno en muchas cosas, pero la que más me ha llamado la atención es el emprendimiento, pero ¿Por qué?
        </p>
        <h2 className="text-3xl font-semibold text-[#01022E] mt-6">Mi vocación: El emprendimiento</h2>
        <div className="flex justify-center my-6">
          <img src={meplaying} alt="Yo jugando" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4 text-[#01022E]">
          El descubrimiento de mi vocación empezó muy joven, cuando muy a pesar de mis padres rompía mis juguetes para ver cómo funcionaban y usaba las piezas para combinarlas y hacer "inventos" con funcionalidades para solucionar problemas, me encantaba soñar con mejorar la vida de los demás por medio de mis ideas.
        </p>
        <p className="mt-4 text-[#01022E]">
          Con el tiempo entendí sobre cómo las empresas son máquinas para mejorar la vida de las personas, como en ellas se crea, comercializa y se distribuye valor por medio de cosas inventadas. Y para mayor ajustar ¿VIVEN DE ESO? Debía ser un sueño, yo quería vivir esa realidad.
        </p>
        <p className="mt-4 text-[#01022E]">
          El sentirme capaz de crear y dirigir una empresa me puso un brillo en los ojos que aún no he perdido, y desde el día que descubrí estas realidades hace más de 7 años supe que quería ser un emprendedor ya que ese es el medio por el cual cumplir con mi propósito.
        </p>
        <h2 className="text-3xl font-semibold text-[#01022E] mt-6">¿Qué he creado o emprendido?</h2>
        <div className="flex justify-center my-6">
          <img src={success} alt="Exito Según Churchill" className="rounded-lg shadow-md" width="600" height="513" />
        </div>
        <p className="mt-4 text-[#01022E]">
          A decir verdad, he creado, intentado y lanzado muchas cosas, ninguna de ellas me ha llevado a un exito rotundo, sin embargo me identifico con la idea de Daniel Bilbao cuando se refiere a los experimentos de su equipo Libertas (al cual me encantaría entrar para hacer experimentos diversos): Si intentamos muchas cosas seguramente alguna pega, aunque todas las demás no lo hagan. Creo que está relacionada con la frase de Winston Churchill que viste al inicio de esta sección.
        </p>
        <p className="mt-4 text-[#01022E]">
          Por aquí te dejo una pequeña lista de las cosas que he creado o emprendido.
        </p>
        <ul className="list-disc list-inside mt-4 text-[#01022E]">
            <li>
                Co-creé una comunidad de moda para hombres con mi hermano, queríamos enseñar a los hombres a vestirse mejor y a la larga vender ropa. Cerramos por no poder cubrir los costes de producción.
            </li>
            <li>
                En el colegio creé todo un mini negocio de joyería en el que yo hacía todo, aprendí a trabajar con proveedores, a vender, generar word of mouth y sobre todo cómo se ve cuando creas un producto que a la gente le encante. No seguí porque al graduarme me enfoqué en dedicarme a la industria de la tecnología.
            </li>
            <li>
                Alguna vez tuve un rol de liderazgo en producto en un proyecto blockchain por dos semanas. El proyecto se disolvió. Pero aprendí mucho sobre cómo funcionan los equipos y conceptualización de productos.
            </li>
            <li>
                He co-creado dos empresas de marketing, una enfocada en estrategia de marca y otra enfocada en contenido para redes sociales. Una de ellas la cerré y la otra sigue activa y es de mi hermano.
            </li>
        </ul>
        <p className="mt-4 text-[#01022E]">
                Como puedes ver, la mayoría de estos proyectos o han sido pausados, se han disuelto o no han funcionado muy bien a largo plazo. Dicho eso, ¡Podemos avanzar a mi realidad actual!
        </p>
      </div>
      <div className="flex justify-center mt-8">
    <a
        href="/about/mypresent"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 transition duration-300 ease-in-out text-lg px-6 py-3 rounded-lg shadow-lg"
    >
        Leer más sobre mi realidad actual →
    </a>
</div>
    </div>
  );
};

export default MyPast;