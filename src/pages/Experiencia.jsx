import "../styles/app.css";

function Experiencia() {
  return (
    <div className="card">
      <h1>Mi Experiencia</h1>

      <p>
        Video explicando cómo desarrollé la tarea.
      </p>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ABC123XYZ"
        title="Mi experiencia"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Experiencia;