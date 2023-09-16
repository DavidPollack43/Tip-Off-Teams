// Imports array of teams with picture file paths to use for populateTeams()
import teams from './logos/teamArray.js';
// Imports function to put all logos on the index page
import populateTeams from './scripts/teamLogic.js';

// Gets the div where the team logos will go, will be used as a argument in populateTeams()
const teamLogoDiv = document.querySelector(".team-logos")

//Will populate teams. See (./scripts/teamLogic.js)
populateTeams(teamLogoDiv, teams);