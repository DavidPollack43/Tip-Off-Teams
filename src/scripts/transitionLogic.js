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
            const rect = this.getBoundingClientRect();

            const originalImage = this.querySelector('img');  // Get the original image
            const clonedImage = clone.querySelector('img');   // Get the cloned image
    
            // Apply the styles directly to the cloned image
            clonedImage.style.maxWidth = originalImage.style.maxWidth || '100%';
            clonedImage.style.height = originalImage.style.height || 'auto';
            clonedImage.style.maxHeight = originalImage.style.maxHeight || '13.5vh';

            const OFFSET_X = 29;

            clone.style.width = rect.width + 'px';
            clone.style.height = rect.height + 'px';
            clone.style.top = rect.top + 'px';
            clone.style.left = (rect.left + OFFSET_X) + 'px';
            clone.style.position = 'absolute';

            clone.classList.add('cloned');
            document.body.appendChild(clone);

            setTimeout(() =>{
                clone.classList.add("enlarged-logo");
            }, 500);

            this.classList.add('dissapear');
        });
    });
}

export default selectTeam;