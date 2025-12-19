import { useForm, type SubmitHandler } from "react-hook-form";
import { PLAYABLE_RACES } from "../../data/races";

/**
 * Interfaz que define la estructura de datos del formulario de personaje.
 */
interface CharacterFormInput {
  name: string;
  race: string;
  subrace?: string;
  class: string;
  attributes: Record<string, number>;
  bio: string;
}

/**
 * Página principal de creación de personajes con gestión de estado unificada.
 */
export default function CharacterCreator() {
  const { register, handleSubmit, watch, setValue } = useForm<CharacterFormInput>({
    defaultValues: {
      attributes: { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
    },
  });

  const selectedRaceId = watch("race");
  const selectedRace = PLAYABLE_RACES.find((r) => r.id === selectedRaceId);

  /**
   * Maneja el envío del formulario.
   * @param data - Datos recolectados del formulario.
   */
  const onSubmit: SubmitHandler<CharacterFormInput> = (data) => {
    console.log("Datos listos para enviar al backend/store:", data);
    // Aquí llamarías a tu store de Zustand o API
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-main flex justify-center py-10 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl space-y-8">
        
        <h1 className="text-3xl font-bold text-center mb-6">Nuevo Personaje</h1>

        {/* Ejemplo de Inputs conectados */}
        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Input Nombre */}
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded p-2"
              />
            </div>

            {/* Select Raza (Dinámico) */}
            <div>
              <label className="block text-sm mb-1">Raza</label>
              <select
                {...register("race")}
                className="w-full bg-zinc-800 border border-zinc-700 rounded p-2"
              >
                <option value="">Seleccionar...</option>
                {PLAYABLE_RACES.map((race) => (
                  <option key={race.id} value={race.id}>
                    {race.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Subraza (Condicional) */}
            <div>
              <label className="block text-sm mb-1">Subraza</label>
              <select
                {...register("subrace")}
                disabled={!selectedRace || selectedRace.subraces.length === 0}
                className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 disabled:opacity-50"
              >
                <option value="">N/A</option>
                {selectedRace?.subraces.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </section>

        {/* Botón de Guardar */}
        <div className="flex justify-end">
          <button type="submit" className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg cursor-pointer">
            Crear Personaje
          </button>
        </div>

      </form>
    </div>
  );
}