import React, { useState } from 'react';
import { Button } from './ui/button';

export function BuscarPeliculas() {
  const [titulo, setTitulo] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ingrese el título de la película"
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <Button variant="default" className="ml-2">
          Buscar
        </Button>
      </div>
    </div>
  );
}