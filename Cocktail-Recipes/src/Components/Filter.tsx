import { useState, useEffect } from 'react';

interface FilterProps {
  onFilterChange: (filter: string) => void;
  debounceDelay?: number;  
}

function Filter({ onFilterChange, debounceDelay = 300 }: FilterProps) {
  const [input, setInput] = useState('');

  // Debounce the input state
  useEffect(() => {
    const handler = setTimeout(() => {
      onFilterChange(input);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [input, debounceDelay, onFilterChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      value={input}
      onChange={handleInputChange}
      placeholder="Type to filter..."
    />
  );
}

export default Filter;
