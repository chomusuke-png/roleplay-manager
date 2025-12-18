import { useState } from "react";

type Character = {
  id: number;
  name: string;
  class: string;
  campaigns: number[];
};

type Campaign = {
  id: number;
  title: string;
  description: string;
  characters: number[];
};

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Sombras de Valyria",
    description: "Aventura épica.",
    characters: [1, 2],
  },
  {
    id: 2,
    title: "Las Ruinas Perdidas",
    description: "Exploración misteriosa.",
    characters: [3],
  },
  {
    id: 3,
    title: "Dragones del Norte",
    description: "Guerra y dragones.",
    characters: [2, 3],
  },
];

const characters: Character[] = [
  { id: 1, name: "Aranel", class: "Mago", campaigns: [1] },
  { id: 2, name: "Thorek", class: "Guerrero", campaigns: [1, 3] },
  { id: 3, name: "Lyra", class: "Exploradora", campaigns: [2, 3] },
];

export default function Home() {
  const [hoveredCampaign, setHoveredCampaign] = useState<number | null>(null);
  const [hoveredCharacter, setHoveredCharacter] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-12 h-screen bg-gray-900 text-white">
      {/* Sidebar de Campañas */}
      <div className="col-span-3 flex flex-col border-r border-gray-700">
        {/* Lista de campañas */}
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-xl font-bold mb-4">Campañas</h2>
          <ul className="space-y-3">
            {campaigns.map((c) => {
              const isActive =
                hoveredCharacter &&
                characters
                  .find((ch) => ch.id === hoveredCharacter)
                  ?.campaigns.includes(c.id);

              return (
                <li
                  key={c.id}
                  className={`p-3 rounded-lg cursor-pointer transition ${
                    hoveredCampaign === c.id || isActive
                      ? "bg-indigo-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onMouseEnter={() => setHoveredCampaign(c.id)}
                  onMouseLeave={() => setHoveredCampaign(null)}
                >
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-xs text-gray-300">{c.description}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Botones abajo */}
        <div className="p-4 border-t border-gray-700 flex gap-2">
          <button className="flex-1 bg-green-600 py-2 rounded-lg hover:bg-green-500">
            Crear
          </button>
          <button className="flex-1 bg-blue-600 py-2 rounded-lg hover:bg-blue-500">
            Unirse
          </button>
        </div>
      </div>

      {/* Zona de Personajes */}
      <div className="col-span-9 flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Personajes</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {characters.map((ch) => {
              const isActive =
                hoveredCampaign &&
                campaigns
                  .find((c) => c.id === hoveredCampaign)
                  ?.characters.includes(ch.id);

              return (
                <div
                  key={ch.id}
                  className={`p-4 rounded-xl cursor-pointer transition ${
                    hoveredCharacter === ch.id || isActive
                      ? "bg-purple-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onMouseEnter={() => setHoveredCharacter(ch.id)}
                  onMouseLeave={() => setHoveredCharacter(null)}
                >
                  <div className="h-20 w-20 bg-gray-600 rounded-full mb-3 mx-auto" />
                  <h3 className="text-lg font-semibold text-center">
                    {ch.name}
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    {ch.class}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botón crear personaje abajo */}
        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-500">
            Crear personaje
          </button>
        </div>
      </div>
    </div>
  );
}
