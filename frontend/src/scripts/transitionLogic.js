import processTeamData from './processTeamData.js';

// This funciton will let the user click on a logo to go to that teams page, as well as put
// in a cool/clean animation that will highlight the team logo and move it to the team page
function selectTeam(){
    const teamLogos = document.querySelectorAll(".team-logo"); //Get every team logo
    const selectTeam = document.querySelector("h2");

    const logoClickHandler = function(event) {
        teamLogos.forEach(l => l.classList.remove('enlarged-logo')); //Housekeeping step, make sure no other enlarged-logo's exist

        // Make a clone node. Why? This is because if you don't then you move the original 
        // logo. This messes up the flex box and shifts every logo. By making a clone
        // we can shift that clone to become the enlarged logo/team page logo, and just make
        // the orignal logo dissapear from view, but still exist. 
        const clone = this.cloneNode(true);
        // These two steps ensure that the correct styling is used on the clone
        clone.classList.remove('team-logo'); 
        clone.classList.add('cloned-team-logo');

        // Get values of the original logo (both dimenstions and styles like margin)
        // Pivitol beacuse the clone image will get the original, huge bloated image 
        // dimenstions/styling before putting it into any flexbox/making it smaller
        const rect = this.getBoundingClientRect();
        const computedStyles = window.getComputedStyle(this);

        const originalImage = this.querySelector('img');  // Get the original image
        const clonedImage = clone.querySelector('img');   // Get the cloned image

        // Apply the styles directly to the cloned image
        clonedImage.style.maxWidth = originalImage.style.maxWidth || '100%';
        clonedImage.style.height = originalImage.style.height || 'auto';
        clonedImage.style.maxHeight = originalImage.style.maxHeight || '13.5vh';

        // Apply styles to cloned div
        clone.style.margin = computedStyles.margin;
        clone.style.width = rect.width + 'px';
        clone.style.height = rect.height + 'px';
        clone.style.top = (rect.top - 10) + 'px'; //Temp fix/Does not work on differing screens
        clone.style.left = (rect.left + 17) + 'px'; //Temp fix/Does not work on differing screens
        clone.style.position = 'absolute';


        
        // This will put cloned class on the clone, this is so we can reference it later
        clone.classList.add('cloned');
        //We need to append the child to the document, or else it won't be on the DOM at all
        document.body.appendChild(clone);

        //Here is were we add the enlarged-logo class to the logo
        setTimeout(() =>{
            clone.classList.add("enlarged-logo");
            setTimeout(() =>{
                clone.style.top = "calc(50% - 50px)"; // top/left puts the logo in the middle, specific for my screen for now
                clone.style.left = "calc(50% + 100px)";
                clone.style.transform = "translate(-50%, -50%) scale(4)"; // Right now top left corner in middle, puts center of logo in middle and scales it up 4
                teamLogos.forEach(l => l.classList.add('fade-out')); // Makes each logo fade
                selectTeam.classList.add('fade-out'); //Makes select a team fade
                // Now we move the logo to the top left...the css styling does not work right now, so doing inline styling
                setTimeout(() => {
                    clone.classList.add("move-to-top-left");
                    clone.style.top = "40px";
                    clone.style.left = "60px";
                    clone.style.transform = "scale(2)";
                    const teamPage = document.querySelector(".team-page");
                    teamPage.style.display = "block";
                    setTimeout(() =>{
                        teamPage.style.opacity = "1";
                    }, 50);
                }, 2000)
            }, 0)
        }, 500);

        this.classList.add('dissapear');

        teamLogos.forEach(logo => {
            logo.removeEventListener("click", logoClickHandler);
            logo.style.cursor = "default";
        })
        //Passing the teamName from the alt as a argument to processTeamData function
        const teamName = event.target.alt;
        processTeamData(teamName);
    }

    teamLogos.forEach(logo => { //Add a event listner to each logo
        logo.addEventListener("click", logoClickHandler);
    });

}

export default selectTeam;