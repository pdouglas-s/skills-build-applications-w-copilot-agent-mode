import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://legendary-system-75q45wgqwp6cwwrw-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Erro ao buscar leaderboard:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5 mb-4">Leaderboard</h1>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>Usuário</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry._id}>
                  <td>{entry.user?.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
