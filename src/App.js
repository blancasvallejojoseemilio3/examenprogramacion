import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    matricula: '',
    materia: '',
    calificacion: ''
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultado(formData);
  };

  return (
    <div style={styles.container}>
      <h2>Registro de Alumno</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Ingrese el Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Ingrese la Matricula:</label>
          <input
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Ingrese la Materia:</label>
          <input
            type="text"
            name="materia"
            value={formData.materia}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Ingrese la Calificación:</label>
          <input
            type="number"
            name="calificacion"
            min="0"
            max="10"
            step="0.1"
            value={formData.calificacion}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Registrar</button>
      </form>

      {}
      {resultado && (
        <div style={styles.card}>
          <h3>Datos Registrados</h3>
          <p><strong>Nombre:</strong> {resultado.nombre}</p>
          <p><strong>Matrícula:</strong> {resultado.matricula}</p>
          <p><strong>Materia:</strong> {resultado.materia}</p>
          <p>
            <strong>Calificación:</strong> {resultado.calificacion}
            <span style={{
              marginLeft: '10px',
              fontWeight: 'bold',
              color: Number(resultado.calificacion) >= 6 ? 'blue' : 'yellow'
            }}>
              ({Number(resultado.calificacion) >= 6 ? 'Aprobado' : 'Reprobado'})
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '450px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #3d72b3',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '4px',
    fontSize: '14px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  card: {
    marginTop: '25px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    borderLeft: '5px solid #007bff',
    textAlign: 'left'
  }
};

export default App;