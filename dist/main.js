/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/train.js":
/*!**********************!*\
  !*** ./src/train.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nlet mixer;\nconst clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\nconst container = document.getElementById('container'); // const stats = new Stats();\n// container.appendChild(stats.dom);\n\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n  antialias: true\n});\nrenderer.setPixelRatio(window.devicePixelRatio);\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;\ncontainer.appendChild(renderer.domElement);\nconst pmremGenerator = new three__WEBPACK_IMPORTED_MODULE_0__.PMREMGenerator(renderer);\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nscene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xbfe3dd); // scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04 ).texture;\n\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);\ncamera.position.set(5, 2, 8); // const controls = new OrbitControls(camera, renderer.domElement);\n// controls.target.set( 0, 0.5, 0);\n// controls.update();\n// controls.enablePan = false;\n// controls.enableDamping = true;\n// const dracoLoader = new DRACOLoader();\n// dracoLoader.setDecoderPath('js/libs/draco/gltf');\n\nconst loader = new GLTFLoader();\nconsole.log('loader', loader);\nloader.setDRACOLoader(dracoLoader);\nloader.load('./src/asset/XYZ_threeJS_AMPMan.gltf', function (gltf) {\n  const model = gltf.scene;\n  model.position.set(2, 2, 0);\n  model.scale.set(0.01, 0.01, 0.01);\n  scene.add(model);\n  mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(model);\n  mixer.clipAction(gltf.animations[0]).play();\n  animate();\n}, undefined, function (e) {\n  console.error(e);\n});\n\nwindow.onresize = function () {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  const delta = clock.getDelta();\n  mixer.update(delta);\n  controls.update();\n  stats.update();\n  renderer.render(scene, camera);\n}\n\n//# sourceURL=webpack://three2/./src/train.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/train.js");
/******/ 	
/******/ })()
;