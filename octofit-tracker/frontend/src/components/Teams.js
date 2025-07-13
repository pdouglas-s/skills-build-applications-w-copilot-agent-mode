import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://legendary-system-75q45wgqwp6cwwrw-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Erro ao buscar equipes:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5 mb-4">Equipes</h1>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome da Equipe</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
