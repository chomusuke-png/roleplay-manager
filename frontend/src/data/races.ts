/**
 * Definición de estructura para Razas y Subrazas.
 */
export interface SubRace {
  id: string;
  name: string;
}

export interface Race {
  id: string;
  name: string;
  subraces: SubRace[];
}

/**
 * Lista maestra de razas disponibles en el sistema.
 */
export const PLAYABLE_RACES: Race[] = [
  {
    id: "human",
    name: "Humano",
    subraces: [],
  },
  {
    id: "elf",
    name: "Elfo",
    subraces: [
      { id: "high_elf", name: "Alto Elfo" },
      { id: "wood_elf", name: "Elfo de los Bosques" },
      { id: "drow", name: "Drow" },
    ],
  },
  // ... más razas
];