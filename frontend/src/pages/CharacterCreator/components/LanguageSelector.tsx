import { useState } from "react";

interface Props {
  onChange?: (langs: string[]) => void;
}

const allLanguages = [
  "Común",
  "Élfico",
  "Enano",
  "Dracónico",
  "Orco",
  "Gnomo",
  "Halfling",
];

export default function LanguageSelector({ onChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    const newList = selected.includes(lang)
      ? selected.filter((l) => l !== lang)
      : [...selected, lang];
    setSelected(newList);
    onChange?.(newList);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {selected.map((lang) => (
        <button
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className="px-3 py-1 border border-zinc-500 rounded-full text-sm hover:bg-zinc-700 transition"
        >
          {lang} ✕
        </button>
      ))}

      {/* Chip para agregar */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-1 border border-zinc-500 rounded-full text-sm hover:bg-zinc-700 transition"
        >
          +
        </button>

        {open && (
          <div className="absolute bottom-full mb-2 bg-zinc-800 border border-zinc-600 rounded-md shadow-lg p-2 z-10">
            {allLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => toggleLanguage(lang)}
                className={`block text-left px-3 py-1 w-full rounded hover:bg-zinc-700 ${
                  selected.includes(lang) ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={selected.includes(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
