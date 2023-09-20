import { async } from 'regenerator-runtime';
import * as rookies from './data/rookieSim.js';
import { teamStartingFive } from './data/playerMapping.js';

// This function will get player data based on the team selected
async function processTeamData(teamName){

    //Goes to playerMapping.js, gets the array of player id's based on teamName
    const teamData = teamStartingFive[teamName];
    // Gets player stat divs to put in data
    const playerStatDivs = document.querySelectorAll(".player-stats");
    //Will for now, put in each box a players name.
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

//This function handles the API
async function fetchPlayerData(playerID){

    //FIRST, checks to see if the player ID is a rookie, if they are, then we go into rookieSim.js
    //and get that rookies stats (my own made json)
    const rookie = Object.values(rookies).find(rookie => rookie.playerDetails.id === playerID);

    if(rookie) {
        return Promise.resolve({
            player: rookie.playerDetails,
            stats: rookie.playerStats
        });
    }
//-------------------------------------------------------------------------------------------------

    //IF not a rookie: 
    //Establishes the URLs for both general info and playerStats
    // const playerInfoURL = `https://balldontlie.io/api/v1/players/${playerID}`;
    // const playerStatsURL = `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerID}`; //Change this to below
    const apiUrl = process.env.NODE_ENV === 'production' ? '/playerInfo' : 'http://localhost:8000/playerInfo';
    const statsURL = process.env.NODE_ENV === 'production' ? '/playerStats' : 'http://localhost:8000/playerStats'
    //Gets general info (name, height, position, team, etc.)
    const fetchInfo = fetch(apiUrl, {
        headers: {
            playerId: playerID
        }
    }).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Error fetching player information');
        }
        return response.json();
    });

    //Gets stats (points, rebounds, assits, etc.)
    const fetchStats = fetch(statsURL, {
        headers: {
           playerId: playerID
        }
    }).then(response => {
        if (!response.ok){
            throw new Error('Error fetching player stats');
        }
        return response.json();
    });

    //Nifty function that will put general info and stats into one key value hash (player for general info, stats for stas info)
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