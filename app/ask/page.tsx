"use client";

import { useState } from "react";

export default function AskPage() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const sendQuery = async () => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("https://TU_BACKEND_REALWEY/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Error al conectar con el motor cognitivo." });
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Motor Cognitivo Global</h1>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe tu pregunta..."
        style={{ width: "100%", height: 120, marginBottom: 20 }}
      />

      <button
        onClick={sendQuery}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: "#333",
          color: "white",
          borderRadius: 6,
        }}
      >
        {loading ? "Procesando..." : "Enviar"}
      </button>

      {response && (
        <pre
          style={{
            marginTop: 20,
            padding: 20,
            background: "#111",
            color: "#0f0",
            borderRadius: 6,
            whiteSpace: "pre-wrap",
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
