'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then(r => r.text())
      .then(setMensaje)
      .catch(() => setMensaje('Error al conectar con el backend'));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Estado del Backend</h1>
      <p>{mensaje}</p>
    </main>
  );
}
