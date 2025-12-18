import { useState } from "react";

interface Props {
  onChange?: (img: string | null) => void;
}

export default function PortraitUploader({ onChange }: Props) {
  const [portrait, setPortrait] = useState<string | null>(null);

  const handlePortraitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPortrait(result);
      onChange?.(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center">
      <label className="block text-sm mb-2">Retrato</label>

      <div className="relative w-32 h-32 rounded-full border-2 border-zinc-600 overflow-hidden">
        {portrait ? (
          <img
            src={portrait}
            alt="Retrato"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-zinc-500 text-sm">
            Sin imagen
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handlePortraitChange}
        className="mt-2 text-sm"
      />
    </div>
  );
}
