function selectTeam(){
    const teamLogos = document.querySelectorAll(".team-logo");

    teamLogos.forEach(logo => {
        logo.addEventListener("click", function(){

            if (this.classList.contains('enlarged-logo')){
                this.classList.remove('enlarged-logo');
                return;
            }

            teamLogos.forEach(l => l.classList.remove('enlarged-logo'));

            this.classList.add('enlarged-logo');
        });
    });
}

export default selectTeam;