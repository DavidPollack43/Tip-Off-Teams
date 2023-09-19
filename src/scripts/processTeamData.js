import { async } from 'regenerator-runtime';
import * as rookies from './data/rookieSim.js';
import { teamStartingFive } from './data/playerMapping.js';

async function processTeamData(teamName){
    const teamData = teamStartingFive[teamName];
    const playerStatDivs = document.querySelectorAll(".player-stats");
    if (teamData) {
        for(let i = 0; i < 5; i++){
            let playerID = teamData[i];
            let playerData = await fetchPlayerData(playerID);
            let playerName = `${playerData.player.first_name} ${playerData.player.last_name}`;

            const nameElement = document.createElement('h2');
            nameElement.textContent = playerName;
            nameElement.classList.add('player-name');

            playerStatDivs[i].appendChild(nameElement);
        }
    }else{
        console.error(`No data found for team: ${teamName}`);
    }
}

async function fetchPlayerData(playerID){

    const rookie = Object.values(rookies).find(rookie => rookie.playerDetails.id === playerID);

    if(rookie) {
        return Promise.resolve({
            player: rookie.playerDetails,
            stats: rookie.playerStats
        });
    }

    const playerInfoURL = `https://balldontlie.io/api/v1/players/${playerID}`;
    const playerStatsURL = `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerID}`;

    const fetchInfo = fetch(playerInfoURL).then(response => {
        if (!response.ok) {
            throw new Error('Error fetching player information');
        }
        return response.json();
    });

    const fetchStats = fetch(playerStatsURL).then(response => {
        if (!response.ok){
            throw new Error('Error fetching player stats');
        }
        return response.json();
    });

    return Promise.all([fetchInfo, fetchStats]).then(results => {
        const [infoData, statsData] = results;
        return {
            player: infoData,
            stats: statsData.data[0]
        };
    })
    .catch(error => {
        console.error("There was an error fetching player data:", error.message);
        throw error;
    })
}

export default processTeamData;