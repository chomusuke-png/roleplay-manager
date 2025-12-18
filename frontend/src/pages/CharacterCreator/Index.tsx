import Attributes from "./components/Attributes";
import LanguageSelector from "./components/LanguageSelector";
import PortraitUploader from "./components/PortraitUploader";

export default function CharacterCreator() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Creador de Personaje
        </h1>
        {/* Portrait */}
        <section>
          <h2 className="text-xl font-semibold border-b border-zinc-700 pb-1">
            Imagen Portada
          </h2>
          <div className="col-span-full mt-4">
            <PortraitUploader
              onChange={(img) => console.log("Retrato:", img)}
            />
          </div>
        </section>

        {/* Información básica */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-zinc-700 pb-1">
            Información básica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Raza</label>
                <select className="w-full bg-zinc-800 border border-zinc-700 rounded p-2">
                  <option>Humano</option>
                  <option>Elfo</option>
                  <option>Enano</option>
                  <option>Mediano</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm mb-1">Subraza</label>
                <select
                  disabled
                  className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-zinc-500 cursor-not-allowed"
                >
                  <option>N/A</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Clase (lvl 1)</label>
              <select className="w-full bg-zinc-800 border border-zinc-700 rounded p-2">
                <option>Guerrero</option>
                <option>Mago</option>
                <option>Pícaro</option>
                <option>Clérigo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Alineamiento</label>
              <select className="w-full bg-zinc-800 border border-zinc-700 rounded p-2">
                <option>Legal Bueno</option>
                <option>Neutral Bueno</option>
                <option>Caótico Bueno</option>
                <option>Legal Neutral</option>
                <option>Neutral</option>
                <option>Caótico Neutral</option>
                <option>Legal Malvado</option>
                <option>Neutral Malvado</option>
                <option>Caótico Malvado</option>
              </select>
            </div>
          </div>
        </section>

        {/* Atributos */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-zinc-700 pb-1">
            Atributos
          </h2>
          <Attributes onChange={(attrs) => console.log("Atributos:", attrs)} />
        </section>

        {/* Descripción */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-zinc-700 pb-1">
            Descripción
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Apariencia</label>
              <textarea className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-zinc-600" />
            </div>
            <div>
              <label className="block text-sm mb-1">Historia</label>
              <textarea className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-zinc-600" />
            </div>
            <div>
              <label className="block text-sm mb-1">Idiomas</label>
              <LanguageSelector
                onChange={(langs) => console.log("Idiomas:", langs)}
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button className="bg-zinc-700 hover:bg-zinc-600 px-6 py-2 rounded-lg font-medium transition">
            Guardar personaje
          </button>
        </div>
      </div>
    </div>
  );
}
