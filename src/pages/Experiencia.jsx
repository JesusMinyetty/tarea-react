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
        src="https://drive.google.com/file/d/1bBZpxATOhc2ypbfzA4xTDZPbSEq1rByh/view?usp=sharing "
        title="Mi experiencia"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Experiencia;