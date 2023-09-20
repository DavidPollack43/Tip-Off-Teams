// Imports array of teams with picture file paths to use for populateTeams()
import teams from './logos/teamArray.js';
// Imports function to put all logos on the index page
import populateTeams from './scripts/teamLogic.js';
// Imports the picture for background use
import bgImage from '../src/backgrounds/carbonFiberNBAWhite.jpg'
document.body.style.backgroundImage = `url(${bgImage})`

import selectTeam from './scripts/transitionLogic.js';
// Gets the div where the team logos will go, will be used as a argument in populateTeams()
const teamLogoDiv = document.querySelector(".team-logos")

//Will populate teams. See (./scripts/teamLogic.js)
populateTeams(teamLogoDiv, teams);

selectTeam();