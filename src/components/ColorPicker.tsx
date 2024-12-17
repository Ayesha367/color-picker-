// components/ColorPicker.tsx
"use client"
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState<string>('#ffffff');
  const [mounted, setMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    setMounted(true); // Set mounted to true when the component has mounted
  }, []);

  const handleChangeComplete = (color: { hex: string }) => {
    setColor(color.hex);
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(color); // Copy color to clipboard
      alert(`Color ${color} copied to clipboard!`);
    } catch {
      alert('Failed to copy color!');
    }
  };

  if (!mounted) {
    // Prevent SSR mismatch by not rendering the color picker on the server
    return null;
  }

  return (
    <div className="flex justify-center items-center flex-col space-y-4 p-6 bg-gray-700 text-black "> {/* Background color of color picker area */}
      <h1 className="text-2xl font-bold">Color Picker App</h1>
      <div className="w-48 h-20" style={{ backgroundColor: color }}></div>
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      <p className="text-lg">Selected Color: {color}</p>
      <button
        onClick={handleCopyClick}
        className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-full"
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default ColorPicker;
