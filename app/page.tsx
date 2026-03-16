'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      setError('API URL no configurada');
      setLoading(false);
      return;
    }

    fetch(`${apiUrl}/`)
      .then(r => r.text())
      .then(setMensaje)
      .catch(err => setError(`Error al conectar con el backend: ${err.message || ''}`))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="main-container">
      <h1>Estado del Backend</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{mensaje}</p>
      )}
    </main>
  );
}
