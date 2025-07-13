import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://legendary-system-75q45wgqwp6cwwrw-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Erro ao buscar atividades:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5 mb-4">Atividades</h1>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
