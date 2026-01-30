import { enviarPregunta } from "../lib/api";

export default function Home() {
  async function probar() {
    const respuesta = await enviarPregunta("Hola desde Alma");
    console.log(respuesta);
  }

  probar();

  return (
    <div>
      <h1>Proyecto conectado</h1>
    </div>
  );
}
