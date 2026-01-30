const BACKEND_URL = "https://conectados-ala-fuente-production.up.railway.app";

export async function enviarPregunta(mensaje) {
  const res = await fetch(`${BACKEND_URL}/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mensaje,
      origen: "frontend",
      debug: true
    })
  });

  return await res.json();
}
