'use client'

import { useEffect, useState } from 'react'

export default function TestConexion() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL

    fetch(`${api}/usuarios`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Prueba de conexión</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </div>
  )
}
