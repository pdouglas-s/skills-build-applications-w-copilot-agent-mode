import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://legendary-system-75q45wgqwp6cwwrw-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Erro ao buscar treinos:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5 mb-4">Treinos</h1>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome do Treino</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
