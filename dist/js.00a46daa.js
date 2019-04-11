// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Activity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Activity = function Activity(name, media, link, chillLevel, categories, font) {
  _classCallCheck(this, Activity);

  this.name = name;
  this.media = media;
  this.link = link;
  this.chillLevel = chillLevel;
  this.categories = categories;
  this.font = font;
};

exports.default = Activity;
},{}],"imgs/boxing.jpg":[function(require,module,exports) {
module.exports = "/boxing.66a7a7f8.jpg";
},{}],"imgs/beach.jpg":[function(require,module,exports) {
module.exports = "/beach.c402afdc.jpg";
},{}],"imgs/tabletennis.jpg":[function(require,module,exports) {
module.exports = "/tabletennis.d21ed894.jpg";
},{}],"imgs/gym.jpg":[function(require,module,exports) {
module.exports = "/gym.5c929283.jpg";
},{}],"imgs/hiking.jpg":[function(require,module,exports) {
module.exports = "/hiking.bccd355f.jpg";
},{}],"imgs/basketball.jpg":[function(require,module,exports) {
module.exports = "/basketball.c504d923.jpg";
},{}],"imgs/meditate.jpg":[function(require,module,exports) {
module.exports = "/meditate.1d029eb0.jpg";
},{}],"imgs/sleep.jpg":[function(require,module,exports) {
module.exports = "/sleep.0c87020b.jpg";
},{}],"imgs/read.jpg":[function(require,module,exports) {
module.exports = "/read.01b8d2ba.jpg";
},{}],"imgs/theatre.jpg":[function(require,module,exports) {
module.exports = "/theatre.9dab0659.jpg";
},{}],"imgs/stargazing.jpg":[function(require,module,exports) {
module.exports = "/stargazing.6e86685b.jpg";
},{}],"imgs/library.jpg":[function(require,module,exports) {
module.exports = "/library.564c57b4.jpg";
},{}],"js/activities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allArrs = exports.chillLevelArr = exports.arr3 = exports.arr2 = exports.arr1 = exports.lvl3activity6 = exports.lvl3activity5 = exports.lvl3activity4 = exports.lvl3activity3 = exports.lvl3activity2 = exports.lvl3activity1 = exports.lvl2activity6 = exports.lvl2activity5 = exports.lvl2activity4 = exports.lvl2activity3 = exports.lvl2activity2 = exports.lvl2activity1 = exports.lvl1activity6 = exports.lvl1activity5 = exports.lvl1activity4 = exports.lvl1activity3 = exports.lvl1activity2 = exports.lvl1activity1 = void 0;

var _Activity = _interopRequireDefault(require("./Activity.js"));

var _boxing = _interopRequireDefault(require("../imgs/boxing.jpg"));

var _beach = _interopRequireDefault(require("../imgs/beach.jpg"));

var _tabletennis = _interopRequireDefault(require("../imgs/tabletennis.jpg"));

var _gym = _interopRequireDefault(require("../imgs/gym.jpg"));

var _hiking = _interopRequireDefault(require("../imgs/hiking.jpg"));

var _basketball = _interopRequireDefault(require("../imgs/basketball.jpg"));

var _meditate = _interopRequireDefault(require("../imgs/meditate.jpg"));

var _sleep = _interopRequireDefault(require("../imgs/sleep.jpg"));

var _read = _interopRequireDefault(require("../imgs/read.jpg"));

var _theatre = _interopRequireDefault(require("../imgs/theatre.jpg"));

var _stargazing = _interopRequireDefault(require("../imgs/stargazing.jpg"));

var _library = _interopRequireDefault(require("../imgs/library.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Level 1
var lvl1activity1 = new _Activity.default("surfing", _beach.default, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl1activity1 = lvl1activity1;
var lvl1activity2 = new _Activity.default("table tennis", _tabletennis.default, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl1activity2 = lvl1activity2;
var lvl1activity3 = new _Activity.default("boxing", _boxing.default, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl1activity3 = lvl1activity3;
var lvl1activity4 = new _Activity.default("gym", _gym.default, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl1activity4 = lvl1activity4;
var lvl1activity5 = new _Activity.default("hiking", _hiking.default, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl1activity5 = lvl1activity5;
var lvl1activity6 = new _Activity.default("basketball", _basketball.default, "google.co.uk/related", 5, ["pillow sports", "indoors"]); // Level 2

exports.lvl1activity6 = lvl1activity6;
var lvl2activity1 = new _Activity.default("meditating", "imgs/meditate.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl2activity1 = lvl2activity1;
var lvl2activity2 = new _Activity.default("sleeping", "imgs/sleep.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl2activity2 = lvl2activity2;
var lvl2activity3 = new _Activity.default("reading", "imgs/read.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl2activity3 = lvl2activity3;
var lvl2activity4 = new _Activity.default("theatre", "imgs/theatre.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl2activity4 = lvl2activity4;
var lvl2activity5 = new _Activity.default("stargazing", "imgs/stargazing.jpg", "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl2activity5 = lvl2activity5;
var lvl2activity6 = new _Activity.default("library", "imgs/library.jpg", "google.co.uk/related", 5, ["pillow sports", "indoors"]); // Level 3 

exports.lvl2activity6 = lvl2activity6;
var lvl3activity1 = new _Activity.default("meditating", _meditate.default, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl3activity1 = lvl3activity1;
var lvl3activity2 = new _Activity.default("sleeping", _sleep.default, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl3activity2 = lvl3activity2;
var lvl3activity3 = new _Activity.default("reading", _read.default, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl3activity3 = lvl3activity3;
var lvl3activity4 = new _Activity.default("theatre", _theatre.default, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl3activity4 = lvl3activity4;
var lvl3activity5 = new _Activity.default("stargazing", _stargazing.default, "google.co.uk/related", 1, ["extreme sports", "water sports"]);
exports.lvl3activity5 = lvl3activity5;
var lvl3activity6 = new _Activity.default("library", _library.default, "google.co.uk/related", 5, ["pillow sports", "indoors"]);
exports.lvl3activity6 = lvl3activity6;
var arr1 = [lvl1activity1, lvl1activity2, lvl1activity3, lvl1activity4, lvl1activity5, lvl1activity6];
exports.arr1 = arr1;
var arr2 = [lvl2activity1, lvl2activity2, lvl2activity3, lvl2activity4, lvl2activity5, lvl2activity6];
exports.arr2 = arr2;
var arr3 = [lvl3activity1, lvl3activity2, lvl3activity3, lvl3activity4, lvl3activity5, lvl3activity6];
exports.arr3 = arr3;
var chillLevelArr = ["LOW", "MEDIUM", "HIGH"];
exports.chillLevelArr = chillLevelArr;
var allArrs = [arr1, arr2, arr3];
exports.allArrs = allArrs;
},{"./Activity.js":"js/Activity.js","../imgs/boxing.jpg":"imgs/boxing.jpg","../imgs/beach.jpg":"imgs/beach.jpg","../imgs/tabletennis.jpg":"imgs/tabletennis.jpg","../imgs/gym.jpg":"imgs/gym.jpg","../imgs/hiking.jpg":"imgs/hiking.jpg","../imgs/basketball.jpg":"imgs/basketball.jpg","../imgs/meditate.jpg":"imgs/meditate.jpg","../imgs/sleep.jpg":"imgs/sleep.jpg","../imgs/read.jpg":"imgs/read.jpg","../imgs/theatre.jpg":"imgs/theatre.jpg","../imgs/stargazing.jpg":"imgs/stargazing.jpg","../imgs/library.jpg":"imgs/library.jpg"}],"js/fonts-styling.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.justifyAlignSelf = exports.lineHeight = exports.letterSpacing = exports.colours = exports.fontVariant = exports.fontStyle = exports.fontWeight = exports.vws = exports.fonts = void 0;
var fonts = ["Roboto", "Helvetica", "Raleway", "Chonburi", "Inconsolata", "Anton", "Josefin Sans", "Lobster", "Pacifico", "Nova Flat"];
exports.fonts = fonts;
var vws = ["3vw", "4vw", "5vw", "6vw"];
exports.vws = vws;
var fontWeight = ["normal", "bold"];
exports.fontWeight = fontWeight;
var fontStyle = ["normal", "italic"];
exports.fontStyle = fontStyle;
var fontVariant = ["normal", "small-caps"];
exports.fontVariant = fontVariant;
var colours = ["#ff0000", "#ffffff", "#e6e600", "#6d77e8", "#479949", "#895289"];
exports.colours = colours;
var letterSpacing = ["1px", "2px", "3px", "4px", "5px", "6px", "7px", "8px", "9px", "10px"];
exports.letterSpacing = letterSpacing;
var lineHeight = ["1", "1.2", "1.4"];
exports.lineHeight = lineHeight;
var justifyAlignSelf = ["left", "center", "end"];
exports.justifyAlignSelf = justifyAlignSelf;
},{}],"js/shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shuffle;

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
},{}],"js/levelChange.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levelUp = levelUp;
exports.levelDown = levelDown;
exports.currentArr = exports.currentArrLevel = void 0;

var _activities = require("./activities.js");

var _index = require("./index.js");

var currentArrLevel = 1;
exports.currentArrLevel = currentArrLevel;
var currentArr = _activities.arr1;
exports.currentArr = currentArr;

function levelUp() {
  if (currentArrLevel < 2) {
    exports.currentArrLevel = currentArrLevel = currentArrLevel + 1;
    exports.currentArr = currentArr = _activities.allArrs[currentArrLevel];

    _index.chillLevelWord.forEach(function (clw) {
      return clw.innerHTML = "".concat(_activities.chillLevelArr[currentArrLevel]);
    });
  } else {
    console.log("no higher level");
  }
}

function levelDown() {
  if (currentArrLevel > 0) {
    exports.currentArrLevel = currentArrLevel = currentArrLevel - 1;
    exports.currentArr = currentArr = _activities.allArrs[currentArrLevel];

    _index.chillLevelWord.forEach(function (clw) {
      return clw.innerHTML = "".concat(_activities.chillLevelArr[currentArrLevel]);
    });
  } else {
    console.log("no lower level");
  }
}
},{"./activities.js":"js/activities.js","./index.js":"js/index.js"}],"js/updateCentralContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateCentralContainer;

var _Activity = _interopRequireDefault(require("./Activity.js"));

var activities = _interopRequireWildcard(require("./activities.js"));

var fontsStyling = _interopRequireWildcard(require("./fonts-styling.js"));

var _shuffle = _interopRequireDefault(require("./shuffle.js"));

var _levelChange = require("./levelChange.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var img = document.querySelector(".img"); // let arr1 = [activities.lvl1activity1, activities.lvl1activity2, activities.lvl1activity3, activities.lvl1activity4, activities.lvl1activity5, activities.lvl1activity6];

var x = 0;
var name = document.querySelector(".name");
var activityInfoA = document.querySelector(".activity-info-a");
var categories = document.querySelector(".categories");

function updateCentralContainer() {
  // if we have reached the end of the array, shuffle the array and start again
  if (x == _levelChange.currentArr.length) {
    (0, _shuffle.default)(_levelChange.currentArr);
    x = 0;
  }

  img.style.background = "url('".concat(_levelChange.currentArr[x].media, "')");
  img.style.backgroundSize = "cover";
  name.innerHTML = _levelChange.currentArr[x].name;
  var str = name.innerHTML;
  str = str.replace(/ /g, "+");
  activityInfoA.setAttribute("href", "https://www.google.com/search?q=".concat(str, "+near+me")); // var rand = myArray[Math.floor(Math.random() * myArray.length)];
  // Choose a random font from the fonts array

  name.style.fontFamily = fontsStyling.fonts[Math.floor(Math.random() * fontsStyling.fonts.length)];
  name.style.fontSize = fontsStyling.vws[Math.floor(Math.random() * fontsStyling.vws.length)];
  name.style.fontWeight = fontsStyling.fontWeight[Math.floor(Math.random() * fontsStyling.fontWeight.length)];
  name.style.fontStyle = fontsStyling.fontStyle[Math.floor(Math.random() * fontsStyling.fontStyle.length)];
  name.style.fontVariant = fontsStyling.fontVariant[Math.floor(Math.random() * fontsStyling.fontVariant.length)];
  name.style.color = fontsStyling.colours[Math.floor(Math.random() * fontsStyling.colours.length)];
  name.style.letterSpacing = fontsStyling.letterSpacing[Math.floor(Math.random() * fontsStyling.letterSpacing.length)];
  name.style.lineHeight = fontsStyling.lineHeight[Math.floor(Math.random() * fontsStyling.lineHeight.length)];
  name.style.justifySelf = fontsStyling.justifyAlignSelf[Math.floor(Math.random() * fontsStyling.justifyAlignSelf.length)];
  name.style.alignSelf = fontsStyling.justifyAlignSelf[Math.floor(Math.random() * fontsStyling.justifyAlignSelf.length)];
  categories.innerHTML = _levelChange.currentArr[x].categories.toString().replace(/,/g, " ⸰ ");
  x++;
}
},{"./Activity.js":"js/Activity.js","./activities.js":"js/activities.js","./fonts-styling.js":"js/fonts-styling.js","./shuffle.js":"js/shuffle.js","./levelChange.js":"js/levelChange.js"}],"js/fillBottomBoxes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fillBottomBoxes;

function fillBottomBoxes() {
  emptyBoxBottom.forEach(function (box) {
    // get random number from the length of the array
    num = Math.floor(Math.random() * bottomImgs.length); // add image to background of box

    box.style.background = "url(".concat(bottomImgs[num], ")"); // when img is added to box, remove from array so doesn't get used again on another box (no duplicates)

    bottomImgs.splice(num, 1);
  });
}
},{}],"js/loadingScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadingScreen;

// let loadingScreen = () => {
// //     let action = new TimelineMax({repeat:3, repeatDelay:1})
// // .to('.notflix',0.1,{autoAlpha:1},1)
// // .to('.notflix',0.5,{scale:2.5, ease: Power2.easeInOut, transformOrigin:"center", repeat:1, yoyo:true},1);
//     // TweenMax.to('.notflix', 1, {
//     //     scaleX: 2,
//     //     scaleY: 2
//     // });
// TweenLite.from('.central-container', 1, {
//    left: '100px',
//   });
// }
function loadingScreen() {
  var tl = new TimelineMax();
  tl.from(".notflix", 1.5, {
    y: "100%",
    opacity: 0
  }).to(".notflix", 1.2, {
    scale: 1.2,
    ease: Power2.easeInOut,
    transformOrigin: "center",
    repeat: 3,
    yoyo: true
  }).to(".notflix", 1.5, {
    y: "100%",
    opacity: 0
  }).to("#preloader", 1, {
    y: "100%",
    ease: Power2.easeInOut
  });
}
},{}],"js/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNav = openNav;
exports.closeNav = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    document.getElementById("side-nav").style.width = "100%"; // document.querySelector("side-nav-p").style.width = "70vh";

    document.querySelectorAll(".side-nav-p").forEach(function (x) {
      return x.style.width = "275px";
    });
  } else if (window.matchMedia("(max-width: 850px)").matches) {
    document.getElementById("side-nav").style.width = "100%"; // document.querySelector("side-nav-p").style.width = "70vh";

    document.querySelectorAll(".side-nav-p").forEach(function (x) {
      return x.style.width = "450px";
    });
  } else if (window.matchMedia("(max-width: 1100px)").matches) {
    document.getElementById("side-nav").style.width = "45%"; // document.querySelector("side-nav-p").style.width = "70vh";

    document.querySelectorAll(".side-nav-p").forEach(function (x) {
      return x.style.width = "300px";
    });
  } else {
    document.getElementById("side-nav").style.width = "45%";
    document.querySelectorAll(".side-nav-p").forEach(function (x) {
      return x.style.width = "350px";
    });
  }
}
/* Set the width of the side navigation to 0 */


function closeNav() {
  document.getElementById("side-nav").style.width = "0";
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chillLevelWord = void 0;

var _updateCentralContainer = _interopRequireDefault(require("./updateCentralContainer.js"));

var _levelChange = require("./levelChange.js");

var _fillBottomBoxes = _interopRequireDefault(require("./fillBottomBoxes.js"));

var _loadingScreen = _interopRequireDefault(require("./loadingScreen.js"));

var _nav = require("./nav.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bottomImgs = ["imgs/beach.jpg", "imgs/read.jpg", "imgs/stargazing.jpg", "imgs/library.jpg", "imgs/boxing.jpg", "imgs/gym.jpg", "imgs/hiking.jpg"];
var leftContainer = document.querySelector(".left-container");
var centralContainer = document.querySelector(".central-container");
var rightContainer = document.querySelector(".right-container");
var categories = document.querySelector(".categories");
var up = document.querySelectorAll(".up");
var down = document.querySelectorAll(".down");
var chillLevel = document.querySelector(".chill-level");
var chillLevelWord = document.querySelectorAll(".chill-level-amount");
exports.chillLevelWord = chillLevelWord;
var emptyBoxBottom = document.querySelectorAll(".empty-box-bottom");
var refresh = document.querySelectorAll(".refresh");
var tagLine = document.querySelector(".tag-line");
var activityInfo = document.querySelector(".activity-info");
var body = document.getElementsByTagName("BODY")[0];
var closeBtn = document.querySelector(".closebtn");
var openBtn = document.querySelector(".learn-more-btn");
body.addEventListener("load", function () {
  return (0, _updateCentralContainer.default)();
});
body.addEventListener("load", function () {
  return (0, _fillBottomBoxes.default)();
});
body.addEventListener("load", function () {
  return (0, _loadingScreen.default)();
});
openBtn.addEventListener("click", function () {
  return (0, _nav.openNav)();
});
closeBtn.addEventListener("click", function () {
  return (0, _nav.closeNav)();
});
refresh.forEach(function (refresh) {
  return refresh.addEventListener("click", _updateCentralContainer.default);
});
up.forEach(function (up) {
  return up.addEventListener("click", _levelChange.levelUp);
});
down.forEach(function (down) {
  return down.addEventListener("click", _levelChange.levelDown);
}); // if (window.matchMedia("(min-width: 480px)").matches) {
//   console.log('update level');
//   updateLevel();
// }
// else {
//   console.log('update level');
//   updateLevel();
// }
},{"./updateCentralContainer.js":"js/updateCentralContainer.js","./levelChange.js":"js/levelChange.js","./fillBottomBoxes.js":"js/fillBottomBoxes.js","./loadingScreen.js":"js/loadingScreen.js","./nav.js":"js/nav.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55352" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map