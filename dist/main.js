!function(){"use strict";var o,e,n={};n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),function(){var o;n.g.importScripts&&(o=n.g.location+"");var e=n.g.document;if(!o&&e&&(e.currentScript&&(o=e.currentScript.src),!o)){var a=e.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&!o;)o=a[s--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=o}(),e=n.p+"images/carbonFiberNBAWhite.jpg",document.body.style.backgroundImage=`url(${e})`,o=document.querySelector(".team-logos"),[{name:"Hawks",logo:"atlantaHawks.png"},{name:"Celtics",logo:"bostonCeltics.png"},{name:"Nets",logo:"brooklynNets.png"},{name:"Hornets",logo:"charlotteHornets.png"},{name:"Bulls",logo:"chicagoBulls.png"},{name:"Cavs",logo:"clevelandCavaliers.png"},{name:"Mavs",logo:"dallasMavs.png"},{name:"Nuggets",logo:"denverNuggets.png"},{name:"Pistons",logo:"detroitPistons.png"},{name:"Warriors",logo:"goldenStateWarriors.png"},{name:"Rockets",logo:"houstonRockets.png"},{name:"Pacers",logo:"indianaPacers.png"},{name:"Clippers",logo:"LAClippers.png"},{name:"Lakers",logo:"LALakers.png"},{name:"Grizzlies",logo:"memphisGrizzlies.png"},{name:"Heat",logo:"miamiHeat.png"},{name:"Bucks",logo:"milwaukeeBucks.png"},{name:"TimberWolves",logo:"minnesotaTimberWolves.png"},{name:"Pelicans",logo:"NOPelicans.png"},{name:"Knicks",logo:"NYKnicks.png"},{name:"Thunder",logo:"OKCThunder.png"},{name:"Magic",logo:"OrlandoMagic.png"},{name:"Suns",logo:"PheonixSuns.png"},{name:"76ers",logo:"Philadelphia76ers.png"},{name:"TrailBlazers",logo:"portlandTrailBlazers.png"},{name:"Kings",logo:"SacKings.png"},{name:"Spurs",logo:"SASpurs.png"},{name:"Raptors",logo:"torontoRaptors.png"},{name:"Jazz",logo:"utahJazz.png"},{name:"Wizards",logo:"washingtonWizards.png"}].forEach((e=>{const n=document.createElement("div");n.classList.add("team-logo");const a=document.createElement("img");a.src=`./src/logos/nbaLogos/${e.logo}`,a.alt=e.name,n.appendChild(a),o.appendChild(n)})),function(){const o=document.querySelectorAll(".team-logo");o.forEach((e=>{e.addEventListener("click",(function(){this.classList.contains("enlarged-logo")?this.classList.remove("enlarged-logo"):(o.forEach((o=>o.classList.remove("enlarged-logo"))),this.classList.add("enlarged-logo"))}))}))}()}();
//# sourceMappingURL=main.js.map