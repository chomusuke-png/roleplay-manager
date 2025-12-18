import { useState } from "react";

interface Props {
  onChange?: (attrs: Record<string, number>) => void;
}

const attributeList = [
  "STR (Fuerza)",
  "DEX (Destreza)",
  "CON (Constitución)",
  "INT (Inteligencia)",
  "WIS (Sabiduría)",
  "CHA (Carisma)",
];

export default function Attributes({ onChange }: Props) {
  const [attributes, setAttributes] = useState<Record<string, number>>(
    Object.fromEntries(attributeList.map((a) => [a, 10])) // valor inicial 10
  );

  const handleChange = (attr: string, value: number) => {
    const newAttrs = { ...attributes, [attr]: value };
    setAttributes(newAttrs);
    onChange?.(newAttrs);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {attributeList.map((attr) => (
        <div key={attr}>
          <label className="block text-sm mb-1">{attr}</label>
          <input
            type="number"
            value={attributes[attr]}
            onChange={(e) => handleChange(attr, Number(e.target.value))}
            className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            min={1}
            max={20}
          />
        </div>
      ))}
    </div>
  );
}
