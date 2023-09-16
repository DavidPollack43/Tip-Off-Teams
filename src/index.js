// Imports array of teams with picture file paths to use for populateTeams()
import teams from './logos/teamArray.js';

//This function will create a div for each team in the above array, and create an image object
//inside each teamDiv. After, it will make the proper children.
function populateTeams(){
    const teamLogoDiv = document.querySelector(".team-logos");
    teams.forEach(team => {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add('team-logo');

        const img = document.createElement('img');
        img.src = `./src/logos/nbaLogos/${team.logo}`;
        img.alt = team.name;

        teamDiv.appendChild(img);
        teamLogoDiv.appendChild(teamDiv);
    })
}

populateTeams();