export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Bienvenido a <span className="text-yellow-300">IWantToEat</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Tu app para descubrir, organizar y compartir lo que más te gusta comer 🍕🍜🍩.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 hover:text-black transition">
          ¡Explorar ahora!
        </button>
      </section>
    );
  }