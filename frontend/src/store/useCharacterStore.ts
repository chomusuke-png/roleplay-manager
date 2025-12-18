import { create } from 'zustand';

interface Character {
  id: string;
  name: string;
  class: string;
  race: string;
}

interface CharacterState {
  characters: Character[];
  addCharacter: (char: Character) => void;
}

/**
 * Store global para gestionar la lista de personajes en el frontend.
 */
export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [], // Aquí podrías cargar datos iniciales o localStorage
  addCharacter: (char) => set((state) => ({ 
    characters: [...state.characters, char] 
  })),
}));