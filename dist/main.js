!function(){"use strict";var e,o,n={};n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var o=n.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),o=n.p+"images/carbonFiberNBAWhite.jpg",document.body.style.backgroundImage=`url(${o})`,e=document.querySelector(".team-logos"),[{name:"Hawks",logo:"atlantaHawks.png"},{name:"Celtics",logo:"bostonCeltics.png"},{name:"Nets",logo:"brooklynNets.png"},{name:"Hornets",logo:"charlotteHornets.png"},{name:"Bulls",logo:"chicagoBulls.png"},{name:"Cavs",logo:"clevelandCavaliers.png"},{name:"Mavs",logo:"dallasMavs.png"},{name:"Nuggets",logo:"denverNuggets.png"},{name:"Pistons",logo:"detroitPistons.png"},{name:"Warriors",logo:"goldenStateWarriors.png"},{name:"Rockets",logo:"houstonRockets.png"},{name:"Pacers",logo:"indianaPacers.png"},{name:"Clippers",logo:"LAClippers.png"},{name:"Lakers",logo:"LALakers.png"},{name:"Grizzlies",logo:"memphisGrizzlies.png"},{name:"Heat",logo:"miamiHeat.png"},{name:"Bucks",logo:"milwaukeeBucks.png"},{name:"TimberWolves",logo:"minnesotaTimberWolves.png"},{name:"Pelicans",logo:"NOPelicans.png"},{name:"Knicks",logo:"NYKnicks.png"},{name:"Thunder",logo:"OKCThunder.png"},{name:"Magic",logo:"OrlandoMagic.png"},{name:"Suns",logo:"PheonixSuns.png"},{name:"76ers",logo:"Philadelphia76ers.png"},{name:"TrailBlazers",logo:"portlandTrailBlazers.png"},{name:"Kings",logo:"SacKings.png"},{name:"Spurs",logo:"SASpurs.png"},{name:"Raptors",logo:"torontoRaptors.png"},{name:"Jazz",logo:"utahJazz.png"},{name:"Wizards",logo:"washingtonWizards.png"}].forEach((o=>{const n=document.createElement("div");n.classList.add("team-logo");const t=document.createElement("img");t.src=`./src/logos/nbaLogos/${o.logo}`,t.alt=o.name,n.appendChild(t),e.appendChild(n)})),function(){const e=document.querySelectorAll(".team-logo");e.forEach((o=>{o.addEventListener("click",(function(){if(this.classList.contains("enlarged-logo")){this.classList.remove("enlarged-logo");const e=document.querySelector(".cloned");return void(e&&e.remove())}e.forEach((e=>e.classList.remove("enlarged-logo")));const o=this.cloneNode(!0),n=this.getBoundingClientRect(),t=this.querySelector("img"),a=o.querySelector("img");a.style.maxWidth=t.style.maxWidth||"100%",a.style.height=t.style.height||"auto",a.style.maxHeight=t.style.maxHeight||"13.5vh",o.style.width=n.width+"px",o.style.height=n.height+"px",o.style.top=n.top+"px",o.style.left=n.left+29+"px",o.style.position="absolute",o.classList.add("cloned"),document.body.appendChild(o),setTimeout((()=>{o.classList.add("enlarged-logo")}),500),this.classList.add("dissapear")}))}))}()}();
//# sourceMappingURL=main.js.map