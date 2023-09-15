/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// array of objects that have a name (team name) and icon (image of logo)\nconst teams = [{\n  name: \"Hawks\",\n  logo: \"atlantaHawks.png\"\n}, {\n  name: \"Celtics\",\n  logo: \"bostonCeltics.png\"\n}, {\n  name: \"Nets\",\n  logo: \"brooklynNets.png\"\n}, {\n  name: \"Hornets\",\n  logo: \"charlotteHornets.png\"\n}, {\n  name: \"Bulls\",\n  logo: \"chicagoBulls.png\"\n}, {\n  name: \"Cavs\",\n  logo: \"clevelandCavaliers.png\"\n}, {\n  name: \"Mavs\",\n  logo: \"dallasMavs.png\"\n}, {\n  name: \"Nuggets\",\n  logo: \"denverNuggets.png\"\n}, {\n  name: \"Pistons\",\n  logo: \"detroitPistons.png\"\n}, {\n  name: \"Warriors\",\n  logo: \"goldenStateWarriors.png\"\n}, {\n  name: \"Rockets\",\n  logo: \"houstonRockets.png\"\n}, {\n  name: \"Pacers\",\n  logo: \"indianaPacers.png\"\n}, {\n  name: \"Clippers\",\n  logo: \"LAClippers.png\"\n}, {\n  name: \"Lakers\",\n  logo: \"LALakers.png\"\n}, {\n  name: \"Grizzlies\",\n  logo: \"memphisGrizzlies.png\"\n}, {\n  name: \"Heat\",\n  logo: \"miamiHeat.png\"\n}, {\n  name: \"Bucks\",\n  logo: \"milwaukeeBucks.png\"\n}, {\n  name: \"TimberWolves\",\n  logo: \"minnesotaTimberWolves.png\"\n}, {\n  name: \"Pelicans\",\n  logo: \"NOPelicans.png\"\n}, {\n  name: \"Knicks\",\n  logo: \"NYKnicks.png\"\n}, {\n  name: \"Thunder\",\n  logo: \"OKCThunder.png\"\n}, {\n  name: \"Magic\",\n  logo: \"OrlandoMagic.png\"\n}, {\n  name: \"Suns\",\n  logo: \"PheonixSuns.png\"\n}, {\n  name: \"76ers\",\n  logo: \"Philadelphia76ers.png\"\n}, {\n  name: \"TrailBlazers\",\n  logo: \"portlandTrailBlazers.png\"\n}, {\n  name: \"Kings\",\n  logo: \"SacKings.png\"\n}, {\n  name: \"Spurs\",\n  logo: \"SASpurs.png\"\n}, {\n  name: \"Raptors\",\n  logo: \"torontoRaptors.png\"\n}, {\n  name: \"Jazz\",\n  logo: \"utahJazz.png\"\n}, {\n  name: \"Wizards\",\n  logo: \"washingtonWizards.png\"\n}];\n//This function will create a div for each team in the above array, and create an image object\n//inside each teamDiv. After, it will make the proper children.\nfunction populateTeams() {\n  const teamLogoDiv = document.querySelector(\".team-logos\");\n  teams.forEach(team => {\n    const teamDiv = document.createElement(\"div\");\n    teamDiv.classList.add('team-logo');\n    const img = document.createElement('img');\n    img.src = `./src/nbaLogos/${team.logo}`;\n    img.alt = team.name;\n    teamDiv.appendChild(img);\n    teamLogoDiv.appendChild(teamDiv);\n  });\n}\npopulateTeams();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJ0ZWFtcyIsIm5hbWUiLCJsb2dvIiwicG9wdWxhdGVUZWFtcyIsInRlYW1Mb2dvRGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsInRlYW0iLCJ0ZWFtRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImltZyIsInNyYyIsImFsdCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBvZmZ0ZWFtcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFycmF5IG9mIG9iamVjdHMgdGhhdCBoYXZlIGEgbmFtZSAodGVhbSBuYW1lKSBhbmQgaWNvbiAoaW1hZ2Ugb2YgbG9nbylcbmNvbnN0IHRlYW1zID0gW1xuICAgIHtuYW1lOiBcIkhhd2tzXCIsIGxvZ286IFwiYXRsYW50YUhhd2tzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJDZWx0aWNzXCIsIGxvZ286IFwiYm9zdG9uQ2VsdGljcy5wbmdcIn0sXG4gICAge25hbWU6IFwiTmV0c1wiLCBsb2dvOiBcImJyb29rbHluTmV0cy5wbmdcIn0sXG4gICAge25hbWU6IFwiSG9ybmV0c1wiLCBsb2dvOiBcImNoYXJsb3R0ZUhvcm5ldHMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkJ1bGxzXCIsIGxvZ286IFwiY2hpY2Fnb0J1bGxzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJDYXZzXCIsIGxvZ286IFwiY2xldmVsYW5kQ2F2YWxpZXJzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJNYXZzXCIsIGxvZ286IFwiZGFsbGFzTWF2cy5wbmdcIn0sXG4gICAge25hbWU6IFwiTnVnZ2V0c1wiLCBsb2dvOiBcImRlbnZlck51Z2dldHMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlBpc3RvbnNcIiwgbG9nbzogXCJkZXRyb2l0UGlzdG9ucy5wbmdcIn0sXG4gICAge25hbWU6IFwiV2FycmlvcnNcIiwgbG9nbzogXCJnb2xkZW5TdGF0ZVdhcnJpb3JzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJSb2NrZXRzXCIsIGxvZ286IFwiaG91c3RvblJvY2tldHMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlBhY2Vyc1wiLCBsb2dvOiBcImluZGlhbmFQYWNlcnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkNsaXBwZXJzXCIsIGxvZ286IFwiTEFDbGlwcGVycy5wbmdcIn0sXG4gICAge25hbWU6IFwiTGFrZXJzXCIsIGxvZ286IFwiTEFMYWtlcnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkdyaXp6bGllc1wiLCBsb2dvOiBcIm1lbXBoaXNHcml6emxpZXMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkhlYXRcIiwgbG9nbzogXCJtaWFtaUhlYXQucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkJ1Y2tzXCIsIGxvZ286IFwibWlsd2F1a2VlQnVja3MucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlRpbWJlcldvbHZlc1wiLCBsb2dvOiBcIm1pbm5lc290YVRpbWJlcldvbHZlcy5wbmdcIn0sXG4gICAge25hbWU6IFwiUGVsaWNhbnNcIiwgbG9nbzogXCJOT1BlbGljYW5zLnBuZ1wifSxcbiAgICB7bmFtZTogXCJLbmlja3NcIiwgbG9nbzogXCJOWUtuaWNrcy5wbmdcIn0sXG4gICAge25hbWU6IFwiVGh1bmRlclwiLCBsb2dvOiBcIk9LQ1RodW5kZXIucG5nXCJ9LFxuICAgIHtuYW1lOiBcIk1hZ2ljXCIsIGxvZ286IFwiT3JsYW5kb01hZ2ljLnBuZ1wifSxcbiAgICB7bmFtZTogXCJTdW5zXCIsIGxvZ286IFwiUGhlb25peFN1bnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIjc2ZXJzXCIsIGxvZ286IFwiUGhpbGFkZWxwaGlhNzZlcnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlRyYWlsQmxhemVyc1wiLCBsb2dvOiBcInBvcnRsYW5kVHJhaWxCbGF6ZXJzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJLaW5nc1wiLCBsb2dvOiBcIlNhY0tpbmdzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJTcHVyc1wiLCBsb2dvOiBcIlNBU3B1cnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlJhcHRvcnNcIiwgbG9nbzogXCJ0b3JvbnRvUmFwdG9ycy5wbmdcIn0sXG4gICAge25hbWU6IFwiSmF6elwiLCBsb2dvOiBcInV0YWhKYXp6LnBuZ1wifSxcbiAgICB7bmFtZTogXCJXaXphcmRzXCIsIGxvZ286IFwid2FzaGluZ3RvbldpemFyZHMucG5nXCJ9LFxuXVxuLy9UaGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIGEgZGl2IGZvciBlYWNoIHRlYW0gaW4gdGhlIGFib3ZlIGFycmF5LCBhbmQgY3JlYXRlIGFuIGltYWdlIG9iamVjdFxuLy9pbnNpZGUgZWFjaCB0ZWFtRGl2LiBBZnRlciwgaXQgd2lsbCBtYWtlIHRoZSBwcm9wZXIgY2hpbGRyZW4uXG5mdW5jdGlvbiBwb3B1bGF0ZVRlYW1zKCl7XG4gICAgY29uc3QgdGVhbUxvZ29EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW0tbG9nb3NcIik7XG4gICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcbiAgICAgICAgY29uc3QgdGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlYW1EaXYuY2xhc3NMaXN0LmFkZCgndGVhbS1sb2dvJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBgLi9zcmMvbmJhTG9nb3MvJHt0ZWFtLmxvZ299YDtcbiAgICAgICAgaW1nLmFsdCA9IHRlYW0ubmFtZTtcblxuICAgICAgICB0ZWFtRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIHRlYW1Mb2dvRGl2LmFwcGVuZENoaWxkKHRlYW1EaXYpO1xuICAgIH0pXG59XG5cbnBvcHVsYXRlVGVhbXMoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsS0FBSyxHQUFHLENBQ1Y7RUFBQ0MsSUFBSSxFQUFFLE9BQU87RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDekM7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQW1CLENBQUMsRUFDNUM7RUFBQ0QsSUFBSSxFQUFFLE1BQU07RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDeEM7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQXNCLENBQUMsRUFDL0M7RUFBQ0QsSUFBSSxFQUFFLE9BQU87RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDekM7RUFBQ0QsSUFBSSxFQUFFLE1BQU07RUFBRUMsSUFBSSxFQUFFO0FBQXdCLENBQUMsRUFDOUM7RUFBQ0QsSUFBSSxFQUFFLE1BQU07RUFBRUMsSUFBSSxFQUFFO0FBQWdCLENBQUMsRUFDdEM7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQW1CLENBQUMsRUFDNUM7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQW9CLENBQUMsRUFDN0M7RUFBQ0QsSUFBSSxFQUFFLFVBQVU7RUFBRUMsSUFBSSxFQUFFO0FBQXlCLENBQUMsRUFDbkQ7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQW9CLENBQUMsRUFDN0M7RUFBQ0QsSUFBSSxFQUFFLFFBQVE7RUFBRUMsSUFBSSxFQUFFO0FBQW1CLENBQUMsRUFDM0M7RUFBQ0QsSUFBSSxFQUFFLFVBQVU7RUFBRUMsSUFBSSxFQUFFO0FBQWdCLENBQUMsRUFDMUM7RUFBQ0QsSUFBSSxFQUFFLFFBQVE7RUFBRUMsSUFBSSxFQUFFO0FBQWMsQ0FBQyxFQUN0QztFQUFDRCxJQUFJLEVBQUUsV0FBVztFQUFFQyxJQUFJLEVBQUU7QUFBc0IsQ0FBQyxFQUNqRDtFQUFDRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxJQUFJLEVBQUU7QUFBZSxDQUFDLEVBQ3JDO0VBQUNELElBQUksRUFBRSxPQUFPO0VBQUVDLElBQUksRUFBRTtBQUFvQixDQUFDLEVBQzNDO0VBQUNELElBQUksRUFBRSxjQUFjO0VBQUVDLElBQUksRUFBRTtBQUEyQixDQUFDLEVBQ3pEO0VBQUNELElBQUksRUFBRSxVQUFVO0VBQUVDLElBQUksRUFBRTtBQUFnQixDQUFDLEVBQzFDO0VBQUNELElBQUksRUFBRSxRQUFRO0VBQUVDLElBQUksRUFBRTtBQUFjLENBQUMsRUFDdEM7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQWdCLENBQUMsRUFDekM7RUFBQ0QsSUFBSSxFQUFFLE9BQU87RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDekM7RUFBQ0QsSUFBSSxFQUFFLE1BQU07RUFBRUMsSUFBSSxFQUFFO0FBQWlCLENBQUMsRUFDdkM7RUFBQ0QsSUFBSSxFQUFFLE9BQU87RUFBRUMsSUFBSSxFQUFFO0FBQXVCLENBQUMsRUFDOUM7RUFBQ0QsSUFBSSxFQUFFLGNBQWM7RUFBRUMsSUFBSSxFQUFFO0FBQTBCLENBQUMsRUFDeEQ7RUFBQ0QsSUFBSSxFQUFFLE9BQU87RUFBRUMsSUFBSSxFQUFFO0FBQWMsQ0FBQyxFQUNyQztFQUFDRCxJQUFJLEVBQUUsT0FBTztFQUFFQyxJQUFJLEVBQUU7QUFBYSxDQUFDLEVBQ3BDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFvQixDQUFDLEVBQzdDO0VBQUNELElBQUksRUFBRSxNQUFNO0VBQUVDLElBQUksRUFBRTtBQUFjLENBQUMsRUFDcEM7RUFBQ0QsSUFBSSxFQUFFLFNBQVM7RUFBRUMsSUFBSSxFQUFFO0FBQXVCLENBQUMsQ0FDbkQ7QUFDRDtBQUNBO0FBQ0EsU0FBU0MsYUFBYUEsQ0FBQSxFQUFFO0VBQ3BCLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ3pETixLQUFLLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO0lBQ2xCLE1BQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDRCxPQUFPLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUVsQyxNQUFNQyxHQUFHLEdBQUdSLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6Q0csR0FBRyxDQUFDQyxHQUFHLEdBQUksa0JBQWlCTixJQUFJLENBQUNOLElBQUssRUFBQztJQUN2Q1csR0FBRyxDQUFDRSxHQUFHLEdBQUdQLElBQUksQ0FBQ1AsSUFBSTtJQUVuQlEsT0FBTyxDQUFDTyxXQUFXLENBQUNILEdBQUcsQ0FBQztJQUN4QlQsV0FBVyxDQUFDWSxXQUFXLENBQUNQLE9BQU8sQ0FBQztFQUNwQyxDQUFDLENBQUM7QUFDTjtBQUVBTixhQUFhLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBvZmZ0ZWFtcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;