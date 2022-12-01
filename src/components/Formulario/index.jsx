import React, { useState } from "react";



const Formulario = ({ crearCita }) => {
  const [cita, setCita] = useState({
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    if (
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    console.log("cita");

    crearCita(cita);

    setCita({
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div type="one">
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error"> Todos los campos son obligatorios</p>
      ) : null}

      <form type="general" onSubmit={submitCita}>
        
        <label htmlFor="">Fecha</label>
        <input
          id="mascota"
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          id="mascota"
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label htmlFor="">Síntomas</label>
        <textarea
          id="mascota"
          type="symptom"
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        >
        </textarea>
        
        <button type="submit" className="u-full-width button-danger">
          Agregar Cita
        </button>
      </form>
    </div>
  );
};


export default Formulario;
