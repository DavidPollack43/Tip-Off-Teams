import { async } from 'regenerator-runtime';
import * as rookies from './data/rookieSim.js';
import { teamStartingFive } from './data/playerMapping.js';

// This function will get player data based on the team selected
async function processTeamData(teamName){

    const teamStatsDiv = document.querySelector(".team-stats");

    const name = teamName;

    const nameOfTeam = document.createElement('h2');
    nameOfTeam.textContent = teamName;
    nameOfTeam.classList.add('team-name');
    teamStatsDiv.appendChild(nameOfTeam);

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

            // let playerHeight = `${playerData.player.height_feet}'${playerData.player.height_inches}`;
            // let playerWeight = playerData.player.weight_pounds;

            let playerPPG = playerData.stats.pts;
            let playerAPG = playerData.stats.ast;
            let playerRPG = playerData.stats.reb;
            let playerSPG = playerData.stats.stl;
            let playerBPG = playerData.stats.blk;
            let playerTPG = playerData.stats.turnover;
            let playerFG = playerData.stats.fg_pct;
            let playerTFG = playerData.stats.fg3_pct;

            const nameElement = document.createElement('h2');
            nameElement.textContent = playerName;
            nameElement.classList.add('player-name');

            // const heightElement = document.createElement('p');
            // heightElement.textContent = playerHeight;
            // heightElement.classList.add('player-attribute');

            // const weightElement = document.createElement('p');
            // weightElement.textContent = playerWeight;
            // weightElement.classList.add('player-attribute');

            const ppgElement = document.createElement('p');
            ppgElement.textContent = `${playerPPG} ppg`;
            ppgElement.classList.add('player-attribute');

            const apgElement = document.createElement('p');
            apgElement.textContent = `${playerAPG} apg`;
            apgElement.classList.add('player-attribute');

            const rpgElement = document.createElement('p');
            rpgElement.textContent = `${playerRPG} rpg`;
            rpgElement.classList.add('player-attribute');

            const spgElement = document.createElement('p');
            spgElement.textContent = `${playerSPG} spg`;
            spgElement.classList.add('player-attribute');

            const bpgElement = document.createElement('p');
            bpgElement.textContent = `${playerBPG} bpg`;
            bpgElement.classList.add('player-attribute');

            const tpgElement = document.createElement('p');
            tpgElement.textContent = `${playerTPG} tpg`;
            tpgElement.classList.add('player-attribute');

            const fgElement = document.createElement('p');
            fgElement.textContent = `${playerFG} fg%`;
            fgElement.classList.add('player-attribute');

            const tfgElement = document.createElement('p');
            tfgElement.textContent = `${playerTFG} 3fg%`;
            tfgElement.classList.add('player-attribute');

            playerStatDivs[i].appendChild(nameElement);
            // playerStatDivs[i].appendChild(heightElement);
            // playerStatDivs[i].appendChild(weightElement);
            playerStatDivs[i].appendChild(ppgElement);
            playerStatDivs[i].appendChild(apgElement);
            playerStatDivs[i].appendChild(rpgElement);
            playerStatDivs[i].appendChild(spgElement);
            playerStatDivs[i].appendChild(bpgElement);
            playerStatDivs[i].appendChild(tpgElement);
            playerStatDivs[i].appendChild(fgElement);
            playerStatDivs[i].appendChild(tfgElement);
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