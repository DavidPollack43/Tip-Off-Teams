import { async } from 'regenerator-runtime';
import * as rookies from './data/rookieSim.js';
import { teamStartingFive } from './data/playerMapping.js';
import playersList from './data/players.json';
import teamImageData from './data/playerTeam.json'

// This function will get player data based on the team selected
async function processTeamData(teamName, retryCount = 3){

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

    const positions = ["PG", "SG", "SF", "PF", "C"];
    //Will for now, put in each box a players name.
    if (teamData) {
        for(let i = 0; i < 5; i++){
            let playerID = teamData[i];
            let playerData = await fetchPlayerData(playerID);

            let playerName = `${playerData.player.first_name} ${playerData.player.last_name}`;
            let playerNamePos = `${playerData.player.first_name} ${playerData.player.last_name} (${positions[i]})`

            const teamFullName = playerData.player.team.full_name;

            let teamID = teamImageData[teamFullName] && teamImageData[teamFullName].TeamID;
            if (!teamID) {
                console.error(`No TeamID found for team: ${teamFullName}`);
                return;  // or handle this error as you see fit
            }

            // let playerHeight = `${playerData.player.height_feet}'${playerData.player.height_inches}`;
            // let playerWeight = playerData.player.weight_pounds;

            
            let playerPhotoData = playersList.find(player => player.player_index_full_name == playerName);
            let imageURL;
            
            const playerImageElement = document.createElement('img');

            let nonNBAStats;
            let imagePlayerID;
            if (playerPhotoData) {
                imagePlayerID = playerPhotoData.player_index_id;
                if (playerName === "Jakob Poeltl"){
                    teamID = 1610612759;
                }
                imageURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${teamID}/2022/260x190/${imagePlayerID}.png`
            } else {
                imageURL = "https://static.thenounproject.com/png/354384-200.png"
                playerImageElement.classList.add('fallback-image');
                nonNBAStats = "Non NBA Stats"
            }
            

            playerImageElement.src = imageURL;
            playerImageElement.alt = playerName;
            playerImageElement.classList.add('player-image');

            let statWarning;
            if(nonNBAStats){
                statWarning = document.createElement('p');
                statWarning.textContent = nonNBAStats;
                statWarning.classList.add('stat-warning');
            }

            let playerPPG = playerData.stats.pts;
            let playerAPG = playerData.stats.ast;
            let playerRPG = playerData.stats.reb;
            let playerSPG = playerData.stats.stl;
            let playerBPG = playerData.stats.blk;
            let playerTPG = playerData.stats.turnover;
            let playerFG = playerData.stats.fg_pct;
            let playerTFG = playerData.stats.fg3_pct;

            const nameElement = document.createElement('h2');
            nameElement.textContent = playerNamePos;
            nameElement.classList.add('player-name');

            // const heightElement = document.createElement('p');
            // heightElement.textContent = playerHeight;
            // heightElement.classList.add('player-attribute');

            // const weightElement = document.createElement('p');
            // weightElement.textContent = playerWeight;
            // weightElement.classList.add('player-attribute');

            const ppgElement = document.createElement('p');
            ppgElement.textContent = `${playerPPG} PPG`;
            ppgElement.classList.add('player-attribute');

            const apgElement = document.createElement('p');
            apgElement.textContent = `${playerAPG} APG`;
            apgElement.classList.add('player-attribute');

            const rpgElement = document.createElement('p');
            rpgElement.textContent = `${playerRPG} RPG`;
            rpgElement.classList.add('player-attribute');

            const spgElement = document.createElement('p');
            spgElement.textContent = `${playerSPG} SPG`;
            spgElement.classList.add('player-attribute');

            const bpgElement = document.createElement('p');
            bpgElement.textContent = `${playerBPG} BPG`;
            bpgElement.classList.add('player-attribute');

            const tpgElement = document.createElement('p');
            tpgElement.textContent = `${playerTPG} TPG`;
            tpgElement.classList.add('player-attribute');

            const fgElement = document.createElement('p');
            fgElement.textContent = `${playerFG} FG%`;
            fgElement.classList.add('player-attribute');

            const tfgElement = document.createElement('p');
            tfgElement.textContent = `${playerTFG} 3FG%`;
            tfgElement.classList.add('player-attribute');

            playerStatDivs[i].appendChild(playerImageElement);
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
            if (statWarning){
                playerStatDivs[i].appendChild(statWarning);
            }
        }
    }else{
        console.error(`Attempt ${4 - retryCount}: No data found for team: ${teamName}`);

        if (retryCount > 1){
            setTimeout(() => processTeamData(teamName, retryCount - 1), 1000); //retry after 1 second
        }else{
            console.error("Final attempt failed. Could not fetch data for team: ", teamName);
        }
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
    const fetchInfo = await fetch(apiUrl, {
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
    const fetchStats = await fetch(statsURL, {
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