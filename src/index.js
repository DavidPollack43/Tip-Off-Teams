// array of objects that have a name (team name) and icon (image of logo)
const teams = [
    {name: "Hawks", logo: "atlantaHawks.png"},
    {name: "Celtics", logo: "bostonCeltics.png"},
    {name: "Nets", logo: "brooklynNets.png"},
    {name: "Hornets", logo: "charlotteHornets.png"},
    {name: "Bulls", logo: "chicagoBulls.png"},
    {name: "Cavs", logo: "clevelandCavaliers.png"},
    {name: "Mavs", logo: "dallasMavs.png"},
    {name: "Nuggets", logo: "denverNuggets.png"},
    {name: "Pistons", logo: "detroitPistons.png"},
    {name: "Warriors", logo: "goldenStateWarriors.png"},
    {name: "Rockets", logo: "houstonRockets.png"},
    {name: "Pacers", logo: "indianaPacers.png"},
    {name: "Clippers", logo: "LAClippers.png"},
    {name: "Lakers", logo: "LALakers.png"},
    {name: "Grizzlies", logo: "memphisGrizzlies.png"},
    {name: "Heat", logo: "miamiHeat.png"},
    {name: "Bucks", logo: "milwaukeeBucks.png"},
    {name: "TimberWolves", logo: "minnesotaTimberWolves.png"},
    {name: "Pelicans", logo: "NOPelicans.png"},
    {name: "Knicks", logo: "NYKnicks.png"},
    {name: "Thunder", logo: "OKCThunder.png"},
    {name: "Magic", logo: "OrlandoMagic.png"},
    {name: "Suns", logo: "PheonixSuns.png"},
    {name: "76ers", logo: "Philadelphia76ers.png"},
    {name: "TrailBlazers", logo: "portlandTrailBlazers.png"},
    {name: "Kings", logo: "SacKings.png"},
    {name: "Spurs", logo: "SASpurs.png"},
    {name: "Raptors", logo: "torontoRaptors.png"},
    {name: "Jazz", logo: "utahJazz.png"},
    {name: "Wizards", logo: "washingtonWizards.png"},
]
//This function will create a div for each team in the above array, and create an image object
//inside each teamDiv. After, it will make the proper children.
function populateTeams(){
    const teamLogoDiv = document.querySelector(".team-logos");
    teams.forEach(team => {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add('team-logo');

        const img = document.createElement('img');
        img.src = `./src/nbaLogos/${team.logo}`;
        img.alt = team.name;

        teamDiv.appendChild(img);
        teamLogoDiv.appendChild(teamDiv);
    })
}

populateTeams();