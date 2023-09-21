# NBA Team Lineups Data Visualization: Initial Proposal

## Project Name: Tip-Off Teams
By *David Pollack*

## Instructions:

Select a team to view their starters/stats. Once a team is selected, you can view their stats on the screen. Any questions about stats can be answered by clicked the Stats Info button on the top of the screen. Hit the back button to get back to team selection. 

## Project Overview:

The project aims to provide an interactive and visually compelling overview of NBA team starting lineups for the 2023-2024 season. Users will be initially presented with a clean and well-arranged landing page showcasing the logos of all NBA teams. Upon selecting a team logo, they'll be transitioned smoothly to a dedicated team page. This page will be segmented into five distinct sections, each representing a starter from the basketball team. Within these sections, a semi-transparent/faded image of the player will be presented, with the player's stats cleanly overlaying or displayed beside the image.

Above is the MVP (minmal viable product) that I would be satisfied and proud of for my first JS project in this course. If I am able to be ahead of schedule on the project, then I would add more features. These features could include: 

* Team Stats on each page. These stats could also be compared to every other team in the NBA.
* A short blurb by me about each team’s previous season and expectations for next season.
* A separate page for each player that has their stats and maybe even a short blurb by me about their previous season/preseason review of what expectations are for next season.

My main goal is for every user (not just basketball fans) to be interested by the application. To do this, I need a nice looking, not cluttered, interface that makes people want to click on each team logo and read about each team. 

## Functionality & MVPs
In Tip-Off Teams, users will be able to:

* View All NBA Team Logos: On the intro screen, users will see a cleanly laid out grid of all NBA team logos.

* Select an NBA Team: Users can click on a team logo to view the starters for the upcoming season.

* View Team's Starters: Once a team is selected, a smooth transition will take users to a new screen displaying the starting lineup. Each player will be presented with a photo and a brief overview of their statistics.

* Navigate Back: Users can easily navigate back to the main team selection screen if they wish to view another team's lineup.

In addition, this project will include:

* Instructions: A brief tooltip or modal on the first visit, guiding users on how to navigate the application.

* README: A detailed README that includes an overview of the app, technologies used, setup instructions, and credits/attribution for data sources and APIs.

## WireFrames:
[Intro Page](https://wireframe.cc/8bFHom)

[Individual Team Page](https://wireframe.cc/aLuUbU)

APIs/Resources:

[Ball Don't Lie API](https://www.balldontlie.io/home.html#introduction)

* This API will be used because it is super up to date (other then rookies just drafted) and it’s super easy to get data from.

[Article for getting player headshots into project](https://medium.com/@avinash.sarguru/getting-nba-player-pictures-for-you-application-6106d5530943)

* This article explains how to easily get NBA photos into my project. Basically, we find the NBA players ID, and then knowing this we can easily access the nba player picture, because on [nba.com](http://nba.com) we can put in the same basic string and a different player id in order to view a specific player:
Example url: 
https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/[player-id].png
Specific Plyaer examples:
Giannis Antetokumpo
https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png
Ja Morant
https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png	        

## Technologies and Libraries:

* Core Development: JavaScript, HTML, and CSS will be used for the foundational development. The recently acquired knowledge of Webpack will help bundle and serve the project efficiently.

* Data Visualization (Tentative): While D3.js is an option for creating interactive visualizations, its application will be reconsidered after understanding the complexity of the desired visualizations and gauging the learning curve. Before fully diving into D3, a consultation will be conducted to evaluate if simpler alternatives like Chart.js or Google Charts might be more appropriate given the project's scope and timeframe.

## Design Considerations:

* Consistency: A consistent design layout across player sections will ensure a seamless user experience.

* Color Schemes: Utilizing team colors for individual team pages can add an element of personalization and identity to the visualization.

* Typography: Fonts that are both aesthetically pleasing and easy to read will be selected, ensuring the presented statistics are comprehensible.

* Responsiveness: Given the varied devices users might access the platform with, ensuring a responsive design that caters to both mobile and desktop views is paramount.

## Implementation Timeline:
* Friday Afternoon:
    * Finalize project’s scope and MVP
    * Set up project on GitHub
    * Continue geting used to Ball Don’t Lie API and research which specific libraries and tools I want to use
    * Start coding the homepage
* Saturday:
   * Continue coding the homepage
   * Implement the gird layout for team logos and ensure they are clickable
   * Apply initial CSS for layout and styling
* Sunday: 
    * Finish Homepage
   * Try and make smooth transitions to a (for now) empty page
   * Start coding individual team pagte
   * Test flow between pages
* Moday:
    * Finalize the individual team page layout
    * Integrate API data to dynamically display the players/stats
    * Work on misc features to make my application pop
* Tuesday:
    * Polish UI with colors and make it super clean
    * Test and debug to make sure the flow is clean/good
* Wednesday:
    * Prepare for Deployment 
* Thursday: 
    * Finish anything I need to and present
## Conclusion:
This project, while straightforward in concept, has the potential to be both informative and visually stunning. With a clear focus on design aesthetics and user experience, this project can serve as an excellent portfolio piece. Leveraging the identified APIs, the project will present accurate and updated statistics, enhancing its credibility. The choice of visualization tool, whether D3 or an alternative, will be made judiciously to ensure project feasibility within the given timeframe.

