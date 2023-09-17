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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logos_teamArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/teamArray.js */ \"./src/logos/teamArray.js\");\n/* harmony import */ var _scripts_teamLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/teamLogic.js */ \"./src/scripts/teamLogic.js\");\n/* harmony import */ var _backgrounds_carbonFiberNBAWhite_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backgrounds/carbonFiberNBAWhite.jpg */ \"./src/backgrounds/carbonFiberNBAWhite.jpg\");\n/* harmony import */ var _backgrounds_carbonFiberNBAWhite_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backgrounds_carbonFiberNBAWhite_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_transitionLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/transitionLogic.js */ \"./src/scripts/transitionLogic.js\");\n// Imports array of teams with picture file paths to use for populateTeams()\n\n// Imports function to put all logos on the index page\n\n// Imports the picture for background use\n\ndocument.body.style.backgroundImage = `url(${(_backgrounds_carbonFiberNBAWhite_jpg__WEBPACK_IMPORTED_MODULE_2___default())})`;\n\n// Gets the div where the team logos will go, will be used as a argument in populateTeams()\nconst teamLogoDiv = document.querySelector(\".team-logos\");\n\n//Will populate teams. See (./scripts/teamLogic.js)\n(0,_scripts_teamLogic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(teamLogoDiv, _logos_teamArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n(0,_scripts_transitionLogic_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDeUM7QUFDekM7QUFDbUQ7QUFDbkQ7QUFDMkQ7QUFDM0RHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGVBQWUsR0FBSSxPQUFNSiw2RUFBUSxHQUFFO0FBRUQ7QUFDdEQ7QUFDQSxNQUFNTSxXQUFXLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGFBQWEsQ0FBQzs7QUFFekQ7QUFDQVIsaUVBQWEsQ0FBQ08sV0FBVyxFQUFFUiwyREFBSyxDQUFDO0FBRWpDTyx1RUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBvZmZ0ZWFtcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHMgYXJyYXkgb2YgdGVhbXMgd2l0aCBwaWN0dXJlIGZpbGUgcGF0aHMgdG8gdXNlIGZvciBwb3B1bGF0ZVRlYW1zKClcbmltcG9ydCB0ZWFtcyBmcm9tICcuL2xvZ29zL3RlYW1BcnJheS5qcyc7XG4vLyBJbXBvcnRzIGZ1bmN0aW9uIHRvIHB1dCBhbGwgbG9nb3Mgb24gdGhlIGluZGV4IHBhZ2VcbmltcG9ydCBwb3B1bGF0ZVRlYW1zIGZyb20gJy4vc2NyaXB0cy90ZWFtTG9naWMuanMnO1xuLy8gSW1wb3J0cyB0aGUgcGljdHVyZSBmb3IgYmFja2dyb3VuZCB1c2VcbmltcG9ydCBiZ0ltYWdlIGZyb20gJy4vYmFja2dyb3VuZHMvY2FyYm9uRmliZXJOQkFXaGl0ZS5qcGcnXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltYWdlfSlgXG5cbmltcG9ydCBzZWxlY3RUZWFtIGZyb20gJy4vc2NyaXB0cy90cmFuc2l0aW9uTG9naWMuanMnO1xuLy8gR2V0cyB0aGUgZGl2IHdoZXJlIHRoZSB0ZWFtIGxvZ29zIHdpbGwgZ28sIHdpbGwgYmUgdXNlZCBhcyBhIGFyZ3VtZW50IGluIHBvcHVsYXRlVGVhbXMoKVxuY29uc3QgdGVhbUxvZ29EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW0tbG9nb3NcIilcblxuLy9XaWxsIHBvcHVsYXRlIHRlYW1zLiBTZWUgKC4vc2NyaXB0cy90ZWFtTG9naWMuanMpXG5wb3B1bGF0ZVRlYW1zKHRlYW1Mb2dvRGl2LCB0ZWFtcyk7XG5cbnNlbGVjdFRlYW0oKTsiXSwibmFtZXMiOlsidGVhbXMiLCJwb3B1bGF0ZVRlYW1zIiwiYmdJbWFnZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic2VsZWN0VGVhbSIsInRlYW1Mb2dvRGl2IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/logos/teamArray.js":
/*!********************************!*\
  !*** ./src/logos/teamArray.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// array of objects that have a name (team name) and icon (image of logo)\nconst teams = [{\n  name: \"Hawks\",\n  logo: \"atlantaHawks.png\"\n}, {\n  name: \"Celtics\",\n  logo: \"bostonCeltics.png\"\n}, {\n  name: \"Nets\",\n  logo: \"brooklynNets.png\"\n}, {\n  name: \"Hornets\",\n  logo: \"charlotteHornets.png\"\n}, {\n  name: \"Bulls\",\n  logo: \"chicagoBulls.png\"\n}, {\n  name: \"Cavs\",\n  logo: \"clevelandCavaliers.png\"\n}, {\n  name: \"Mavs\",\n  logo: \"dallasMavs.png\"\n}, {\n  name: \"Nuggets\",\n  logo: \"denverNuggets.png\"\n}, {\n  name: \"Pistons\",\n  logo: \"detroitPistons.png\"\n}, {\n  name: \"Warriors\",\n  logo: \"goldenStateWarriors.png\"\n}, {\n  name: \"Rockets\",\n  logo: \"houstonRockets.png\"\n}, {\n  name: \"Pacers\",\n  logo: \"indianaPacers.png\"\n}, {\n  name: \"Clippers\",\n  logo: \"LAClippers.png\"\n}, {\n  name: \"Lakers\",\n  logo: \"LALakers.png\"\n}, {\n  name: \"Grizzlies\",\n  logo: \"memphisGrizzlies.png\"\n}, {\n  name: \"Heat\",\n  logo: \"miamiHeat.png\"\n}, {\n  name: \"Bucks\",\n  logo: \"milwaukeeBucks.png\"\n}, {\n  name: \"TimberWolves\",\n  logo: \"minnesotaTimberWolves.png\"\n}, {\n  name: \"Pelicans\",\n  logo: \"NOPelicans.png\"\n}, {\n  name: \"Knicks\",\n  logo: \"NYKnicks.png\"\n}, {\n  name: \"Thunder\",\n  logo: \"OKCThunder.png\"\n}, {\n  name: \"Magic\",\n  logo: \"OrlandoMagic.png\"\n}, {\n  name: \"Suns\",\n  logo: \"PheonixSuns.png\"\n}, {\n  name: \"76ers\",\n  logo: \"Philadelphia76ers.png\"\n}, {\n  name: \"TrailBlazers\",\n  logo: \"portlandTrailBlazers.png\"\n}, {\n  name: \"Kings\",\n  logo: \"SacKings.png\"\n}, {\n  name: \"Spurs\",\n  logo: \"SASpurs.png\"\n}, {\n  name: \"Raptors\",\n  logo: \"torontoRaptors.png\"\n}, {\n  name: \"Jazz\",\n  logo: \"utahJazz.png\"\n}, {\n  name: \"Wizards\",\n  logo: \"washingtonWizards.png\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (teams);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9nb3MvdGVhbUFycmF5LmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBLE1BQU1BLEtBQUssR0FBRyxDQUNWO0VBQUNDLElBQUksRUFBRSxPQUFPO0VBQUVDLElBQUksRUFBRTtBQUFrQixDQUFDLEVBQ3pDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFtQixDQUFDLEVBQzVDO0VBQUNELElBQUksRUFBRSxNQUFNO0VBQUVDLElBQUksRUFBRTtBQUFrQixDQUFDLEVBQ3hDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFzQixDQUFDLEVBQy9DO0VBQUNELElBQUksRUFBRSxPQUFPO0VBQUVDLElBQUksRUFBRTtBQUFrQixDQUFDLEVBQ3pDO0VBQUNELElBQUksRUFBRSxNQUFNO0VBQUVDLElBQUksRUFBRTtBQUF3QixDQUFDLEVBQzlDO0VBQUNELElBQUksRUFBRSxNQUFNO0VBQUVDLElBQUksRUFBRTtBQUFnQixDQUFDLEVBQ3RDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFtQixDQUFDLEVBQzVDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFvQixDQUFDLEVBQzdDO0VBQUNELElBQUksRUFBRSxVQUFVO0VBQUVDLElBQUksRUFBRTtBQUF5QixDQUFDLEVBQ25EO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFvQixDQUFDLEVBQzdDO0VBQUNELElBQUksRUFBRSxRQUFRO0VBQUVDLElBQUksRUFBRTtBQUFtQixDQUFDLEVBQzNDO0VBQUNELElBQUksRUFBRSxVQUFVO0VBQUVDLElBQUksRUFBRTtBQUFnQixDQUFDLEVBQzFDO0VBQUNELElBQUksRUFBRSxRQUFRO0VBQUVDLElBQUksRUFBRTtBQUFjLENBQUMsRUFDdEM7RUFBQ0QsSUFBSSxFQUFFLFdBQVc7RUFBRUMsSUFBSSxFQUFFO0FBQXNCLENBQUMsRUFDakQ7RUFBQ0QsSUFBSSxFQUFFLE1BQU07RUFBRUMsSUFBSSxFQUFFO0FBQWUsQ0FBQyxFQUNyQztFQUFDRCxJQUFJLEVBQUUsT0FBTztFQUFFQyxJQUFJLEVBQUU7QUFBb0IsQ0FBQyxFQUMzQztFQUFDRCxJQUFJLEVBQUUsY0FBYztFQUFFQyxJQUFJLEVBQUU7QUFBMkIsQ0FBQyxFQUN6RDtFQUFDRCxJQUFJLEVBQUUsVUFBVTtFQUFFQyxJQUFJLEVBQUU7QUFBZ0IsQ0FBQyxFQUMxQztFQUFDRCxJQUFJLEVBQUUsUUFBUTtFQUFFQyxJQUFJLEVBQUU7QUFBYyxDQUFDLEVBQ3RDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUFnQixDQUFDLEVBQ3pDO0VBQUNELElBQUksRUFBRSxPQUFPO0VBQUVDLElBQUksRUFBRTtBQUFrQixDQUFDLEVBQ3pDO0VBQUNELElBQUksRUFBRSxNQUFNO0VBQUVDLElBQUksRUFBRTtBQUFpQixDQUFDLEVBQ3ZDO0VBQUNELElBQUksRUFBRSxPQUFPO0VBQUVDLElBQUksRUFBRTtBQUF1QixDQUFDLEVBQzlDO0VBQUNELElBQUksRUFBRSxjQUFjO0VBQUVDLElBQUksRUFBRTtBQUEwQixDQUFDLEVBQ3hEO0VBQUNELElBQUksRUFBRSxPQUFPO0VBQUVDLElBQUksRUFBRTtBQUFjLENBQUMsRUFDckM7RUFBQ0QsSUFBSSxFQUFFLE9BQU87RUFBRUMsSUFBSSxFQUFFO0FBQWEsQ0FBQyxFQUNwQztFQUFDRCxJQUFJLEVBQUUsU0FBUztFQUFFQyxJQUFJLEVBQUU7QUFBb0IsQ0FBQyxFQUM3QztFQUFDRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxJQUFJLEVBQUU7QUFBYyxDQUFDLEVBQ3BDO0VBQUNELElBQUksRUFBRSxTQUFTO0VBQUVDLElBQUksRUFBRTtBQUF1QixDQUFDLENBQ25EO0FBRUQsK0RBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBvZmZ0ZWFtcy8uL3NyYy9sb2dvcy90ZWFtQXJyYXkuanM/MDA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcnJheSBvZiBvYmplY3RzIHRoYXQgaGF2ZSBhIG5hbWUgKHRlYW0gbmFtZSkgYW5kIGljb24gKGltYWdlIG9mIGxvZ28pXG5jb25zdCB0ZWFtcyA9IFtcbiAgICB7bmFtZTogXCJIYXdrc1wiLCBsb2dvOiBcImF0bGFudGFIYXdrcy5wbmdcIn0sXG4gICAge25hbWU6IFwiQ2VsdGljc1wiLCBsb2dvOiBcImJvc3RvbkNlbHRpY3MucG5nXCJ9LFxuICAgIHtuYW1lOiBcIk5ldHNcIiwgbG9nbzogXCJicm9va2x5bk5ldHMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkhvcm5ldHNcIiwgbG9nbzogXCJjaGFybG90dGVIb3JuZXRzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJCdWxsc1wiLCBsb2dvOiBcImNoaWNhZ29CdWxscy5wbmdcIn0sXG4gICAge25hbWU6IFwiQ2F2c1wiLCBsb2dvOiBcImNsZXZlbGFuZENhdmFsaWVycy5wbmdcIn0sXG4gICAge25hbWU6IFwiTWF2c1wiLCBsb2dvOiBcImRhbGxhc01hdnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIk51Z2dldHNcIiwgbG9nbzogXCJkZW52ZXJOdWdnZXRzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJQaXN0b25zXCIsIGxvZ286IFwiZGV0cm9pdFBpc3RvbnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIldhcnJpb3JzXCIsIGxvZ286IFwiZ29sZGVuU3RhdGVXYXJyaW9ycy5wbmdcIn0sXG4gICAge25hbWU6IFwiUm9ja2V0c1wiLCBsb2dvOiBcImhvdXN0b25Sb2NrZXRzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJQYWNlcnNcIiwgbG9nbzogXCJpbmRpYW5hUGFjZXJzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJDbGlwcGVyc1wiLCBsb2dvOiBcIkxBQ2xpcHBlcnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkxha2Vyc1wiLCBsb2dvOiBcIkxBTGFrZXJzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJHcml6emxpZXNcIiwgbG9nbzogXCJtZW1waGlzR3JpenpsaWVzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJIZWF0XCIsIGxvZ286IFwibWlhbWlIZWF0LnBuZ1wifSxcbiAgICB7bmFtZTogXCJCdWNrc1wiLCBsb2dvOiBcIm1pbHdhdWtlZUJ1Y2tzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJUaW1iZXJXb2x2ZXNcIiwgbG9nbzogXCJtaW5uZXNvdGFUaW1iZXJXb2x2ZXMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlBlbGljYW5zXCIsIGxvZ286IFwiTk9QZWxpY2Fucy5wbmdcIn0sXG4gICAge25hbWU6IFwiS25pY2tzXCIsIGxvZ286IFwiTllLbmlja3MucG5nXCJ9LFxuICAgIHtuYW1lOiBcIlRodW5kZXJcIiwgbG9nbzogXCJPS0NUaHVuZGVyLnBuZ1wifSxcbiAgICB7bmFtZTogXCJNYWdpY1wiLCBsb2dvOiBcIk9ybGFuZG9NYWdpYy5wbmdcIn0sXG4gICAge25hbWU6IFwiU3Vuc1wiLCBsb2dvOiBcIlBoZW9uaXhTdW5zLnBuZ1wifSxcbiAgICB7bmFtZTogXCI3NmVyc1wiLCBsb2dvOiBcIlBoaWxhZGVscGhpYTc2ZXJzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJUcmFpbEJsYXplcnNcIiwgbG9nbzogXCJwb3J0bGFuZFRyYWlsQmxhemVycy5wbmdcIn0sXG4gICAge25hbWU6IFwiS2luZ3NcIiwgbG9nbzogXCJTYWNLaW5ncy5wbmdcIn0sXG4gICAge25hbWU6IFwiU3B1cnNcIiwgbG9nbzogXCJTQVNwdXJzLnBuZ1wifSxcbiAgICB7bmFtZTogXCJSYXB0b3JzXCIsIGxvZ286IFwidG9yb250b1JhcHRvcnMucG5nXCJ9LFxuICAgIHtuYW1lOiBcIkphenpcIiwgbG9nbzogXCJ1dGFoSmF6ei5wbmdcIn0sXG4gICAge25hbWU6IFwiV2l6YXJkc1wiLCBsb2dvOiBcIndhc2hpbmd0b25XaXphcmRzLnBuZ1wifSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgdGVhbXM7Il0sIm5hbWVzIjpbInRlYW1zIiwibmFtZSIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/logos/teamArray.js\n");

/***/ }),

/***/ "./src/scripts/teamLogic.js":
/*!**********************************!*\
  !*** ./src/scripts/teamLogic.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//This function will create a div for each team in the above array, and create an image object\n//inside each teamDiv. After, it will make the proper children.\n\nfunction populateTeams(teamLogoDiv, teams) {\n  teams.forEach(team => {\n    const teamDiv = document.createElement(\"div\");\n    teamDiv.classList.add('team-logo');\n    const img = document.createElement('img');\n    img.src = `./src/logos/nbaLogos/${team.logo}`;\n    img.alt = team.name;\n    teamDiv.appendChild(img);\n    teamLogoDiv.appendChild(teamDiv);\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (populateTeams);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZWFtTG9naWMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBYUEsQ0FBQ0MsV0FBVyxFQUFFQyxLQUFLLEVBQUM7RUFDdENBLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLElBQUk7SUFDbEIsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0NGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRWxDLE1BQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDRyxHQUFHLENBQUNDLEdBQUcsR0FBSSx3QkFBdUJQLElBQUksQ0FBQ1EsSUFBSyxFQUFDO0lBQzdDRixHQUFHLENBQUNHLEdBQUcsR0FBR1QsSUFBSSxDQUFDVSxJQUFJO0lBRW5CVCxPQUFPLENBQUNVLFdBQVcsQ0FBQ0wsR0FBRyxDQUFDO0lBQ3hCVCxXQUFXLENBQUNjLFdBQVcsQ0FBQ1YsT0FBTyxDQUFDO0VBQ3BDLENBQUMsQ0FBQztBQUNOO0FBRUEsK0RBQWVMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBvZmZ0ZWFtcy8uL3NyYy9zY3JpcHRzL3RlYW1Mb2dpYy5qcz83OGU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vVGhpcyBmdW5jdGlvbiB3aWxsIGNyZWF0ZSBhIGRpdiBmb3IgZWFjaCB0ZWFtIGluIHRoZSBhYm92ZSBhcnJheSwgYW5kIGNyZWF0ZSBhbiBpbWFnZSBvYmplY3Rcbi8vaW5zaWRlIGVhY2ggdGVhbURpdi4gQWZ0ZXIsIGl0IHdpbGwgbWFrZSB0aGUgcHJvcGVyIGNoaWxkcmVuLlxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRlYW1zKHRlYW1Mb2dvRGl2LCB0ZWFtcyl7XG4gICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcbiAgICAgICAgY29uc3QgdGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlYW1EaXYuY2xhc3NMaXN0LmFkZCgndGVhbS1sb2dvJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBgLi9zcmMvbG9nb3MvbmJhTG9nb3MvJHt0ZWFtLmxvZ299YDtcbiAgICAgICAgaW1nLmFsdCA9IHRlYW0ubmFtZTtcblxuICAgICAgICB0ZWFtRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIHRlYW1Mb2dvRGl2LmFwcGVuZENoaWxkKHRlYW1EaXYpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlVGVhbXM7Il0sIm5hbWVzIjpbInBvcHVsYXRlVGVhbXMiLCJ0ZWFtTG9nb0RpdiIsInRlYW1zIiwiZm9yRWFjaCIsInRlYW0iLCJ0ZWFtRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW1nIiwic3JjIiwibG9nbyIsImFsdCIsIm5hbWUiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/teamLogic.js\n");

/***/ }),

/***/ "./src/scripts/transitionLogic.js":
/*!****************************************!*\
  !*** ./src/scripts/transitionLogic.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction selectTeam() {\n  const teamLogos = document.querySelectorAll(\".team-logo\");\n  teamLogos.forEach(logo => {\n    logo.addEventListener(\"click\", function () {\n      if (this.classList.contains('enlarged-logo')) {\n        this.classList.remove('enlarged-logo');\n        const clonedElement = document.querySelector(\".cloned\");\n        if (clonedElement) {\n          clonedElement.remove();\n        }\n        return;\n      }\n      teamLogos.forEach(l => l.classList.remove('enlarged-logo'));\n      const clone = this.cloneNode(true);\n      clone.classList.remove('team-logo');\n      clone.classList.add('cloned-team-logo');\n      const rect = this.getBoundingClientRect();\n      const computedStyles = window.getComputedStyle(this);\n      const originalImage = this.querySelector('img'); // Get the original image\n      const clonedImage = clone.querySelector('img'); // Get the cloned image\n\n      // Apply the styles directly to the cloned image\n      clonedImage.style.maxWidth = originalImage.style.maxWidth || '100%';\n      clonedImage.style.height = originalImage.style.height || 'auto';\n      clonedImage.style.maxHeight = originalImage.style.maxHeight || '13.5vh';\n      clone.style.margin = computedStyles.margin;\n      clone.style.width = rect.width + 'px';\n      clone.style.height = rect.height + 'px';\n      clone.style.top = rect.top - 10 + 'px'; //Temp fix\n      clone.style.left = rect.left + 17 + 'px'; //Temp fix\n      clone.style.position = 'absolute';\n      clone.classList.add('cloned');\n      document.body.appendChild(clone);\n      setTimeout(() => {\n        clone.classList.add(\"enlarged-logo\");\n      }, 500);\n      this.classList.add('dissapear');\n    });\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (selectTeam);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNRLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFFQSwrREFBZWYsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpcG9mZnRlYW1zLy4vc3JjL3NjcmlwdHMvdHJhbnNpdGlvbkxvZ2ljLmpzPzRiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VsZWN0VGVhbSgpe1xuICAgIGNvbnN0IHRlYW1Mb2dvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVhbS1sb2dvXCIpO1xuXG4gICAgdGVhbUxvZ29zLmZvckVhY2gobG9nbyA9PiB7XG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZW5sYXJnZWQtbG9nbycpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2VubGFyZ2VkLWxvZ28nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9uZWRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNsb25lZEVsZW1lbnQpe1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlYW1Mb2dvcy5mb3JFYWNoKGwgPT4gbC5jbGFzc0xpc3QucmVtb3ZlKCdlbmxhcmdlZC1sb2dvJykpO1xuXG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndGVhbS1sb2dvJyk7XG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKCdjbG9uZWQtdGVhbS1sb2dvJyk7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpOyAgLy8gR2V0IHRoZSBvcmlnaW5hbCBpbWFnZVxuICAgICAgICAgICAgY29uc3QgY2xvbmVkSW1hZ2UgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTsgICAvLyBHZXQgdGhlIGNsb25lZCBpbWFnZVxuICAgIFxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIHN0eWxlcyBkaXJlY3RseSB0byB0aGUgY2xvbmVkIGltYWdlXG4gICAgICAgICAgICBjbG9uZWRJbWFnZS5zdHlsZS5tYXhXaWR0aCA9IG9yaWdpbmFsSW1hZ2Uuc3R5bGUubWF4V2lkdGggfHwgJzEwMCUnO1xuICAgICAgICAgICAgY2xvbmVkSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gb3JpZ2luYWxJbWFnZS5zdHlsZS5oZWlnaHQgfHwgJ2F1dG8nO1xuICAgICAgICAgICAgY2xvbmVkSW1hZ2Uuc3R5bGUubWF4SGVpZ2h0ID0gb3JpZ2luYWxJbWFnZS5zdHlsZS5tYXhIZWlnaHQgfHwgJzEzLjV2aCc7XG5cbiAgICAgICAgICAgIGNsb25lLnN0eWxlLm1hcmdpbiA9IGNvbXB1dGVkU3R5bGVzLm1hcmdpbjtcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArICdweCc7XG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5oZWlnaHQgPSByZWN0LmhlaWdodCArICdweCc7XG4gICAgICAgICAgICBjbG9uZS5zdHlsZS50b3AgPSAocmVjdC50b3AgLSAxMCkgKyAncHgnOyAvL1RlbXAgZml4XG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gKHJlY3QubGVmdCArIDE3KSArICdweCc7IC8vVGVtcCBmaXhcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZCgnY2xvbmVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwiZW5sYXJnZWQtbG9nb1wiKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZGlzc2FwZWFyJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RUZWFtOyJdLCJuYW1lcyI6WyJzZWxlY3RUZWFtIiwidGVhbUxvZ29zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxvZ28iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJjbG9uZWRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImwiLCJjbG9uZSIsImNsb25lTm9kZSIsImFkZCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb21wdXRlZFN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJvcmlnaW5hbEltYWdlIiwiY2xvbmVkSW1hZ2UiLCJzdHlsZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwibWFyZ2luIiwid2lkdGgiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/transitionLogic.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBvZmZ0ZWFtcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/backgrounds/carbonFiberNBAWhite.jpg":
/*!*************************************************!*\
  !*** ./src/backgrounds/carbonFiberNBAWhite.jpg ***!
  \*************************************************/
/***/ (function() {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;