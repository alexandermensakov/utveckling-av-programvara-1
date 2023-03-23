fetchGames()
async function fetchGames() {
  const res = await fetch('/api/games');
  let gamesdb = await res.json();
  displayGames(gamesdb);
}

function displayGames(games) {
  document.querySelector('#div').innerHTML = `
        <table>
          <tr>
            <th class="column"> Name </th>
            <th class="column"> Release Date </th>
            <th class="column"> Genre </th>
            <th class="column"> publisher </th>
          </tr>
          ${games.map(game => `
            <tr>
              <td class="column"> ${game.name}</td>
              <td class="column"> ${game.release_date} </td>
              <td class="column"> ${game.genre}</td>
              <td class="column"> ${game.publisher}</td> </tr>`).join('')}
        </table>
      `;
}