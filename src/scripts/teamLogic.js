//This function will create a div for each team in the above array, and create an image object
//inside each teamDiv. After, it will make the proper children.

function populateTeams(teamLogoDiv, teams){
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

export default populateTeams;