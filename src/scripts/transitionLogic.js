function selectTeam(){
    const teamLogos = document.querySelectorAll(".team-logo");

    teamLogos.forEach(logo => {
        logo.addEventListener("click", function(){

            if (this.classList.contains('enlarged-logo')){
                this.classList.remove('enlarged-logo');
                const clonedElement = document.querySelector(".cloned");
                if (clonedElement){
                    clonedElement.remove();
                }
                return;
            }

            teamLogos.forEach(l => l.classList.remove('enlarged-logo'));

            const clone = this.cloneNode(true);
            // const rect = this.getBoundingClientRect();
            // clone.style.width = rect.width + 'px';
            // clone.style.height = rect.height + 'px';
            clone.classList.add('cloned');
            document.body.appendChild(clone);
            setTimeout(() =>{
                clone.classList.add("enlarged-logo");
            }, 50);
            
            this.classList.add('dissapear');
        });
    });
}

export default selectTeam;