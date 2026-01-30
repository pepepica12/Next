const API_NODE = process.env.NEXT_PUBLIC_API_NODE;

async function getDispositivos() {
  const res = await fetch(`${API_NODE}/dispositivos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener dispositivos");
  }

  return res.json();
}

export default async function Page() {
  const dispositivos = await getDispositivos();

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, marginBottom: 20 }}>Dispositivos</h1>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: 20,
          borderRadius: 8,
          overflowX: "auto",
        }}
      >
        {JSON.stringify(dispositivos, null, 2)}
      </pre>
    </div>
  );
}
