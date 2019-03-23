class Activity {
  constructor(name, media, link, chillLevel, categories, font) {
    this.name = name;
    this.media = media;
    this.link = link;
    this.chillLevel = chillLevel;
    this.categories = categories;
    this.font = font;
  }
}
// Level 1
let lvl1activity1 = new Activity('surfing', 'imgs/beach.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl1activity2 = new Activity('table tennis', 'imgs/tabletennis.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let lvl1activity3 = new Activity('boxing', 'imgs/boxing.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl1activity4 = new Activity('gym', 'imgs/gym.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let lvl1activity5 = new Activity('hiking', 'imgs/hiking.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl1activity6 = new Activity('basketball', 'imgs/basketball.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);

// Level 2
let lvl2activity1 = new Activity('meditating', 'imgs/meditate.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl2activity2 = new Activity('sleeping', 'imgs/sleep.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let lvl2activity3 = new Activity('reading', 'imgs/read.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl2activity4 = new Activity('theatre', 'imgs/theatre.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let lvl2activity5 = new Activity('stargazing', 'imgs/stargazing.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl2activity6 = new Activity('library', 'imgs/library.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);

// Level 3 
let lvl3activity1 = new Activity('meditating', 'imgs/meditate.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl3activity2 = new Activity('sleeping', 'imgs/sleep.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let lvl3activity3 = new Activity('reading', 'imgs/read.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl3activity4 = new Activity('theatre', 'imgs/theatre.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let lvl3activity5 = new Activity('stargazing', 'imgs/stargazing.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let lvl3activity6 = new Activity('library', 'imgs/library.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);

let arr1 = [lvl1activity1, lvl1activity2, lvl1activity3, lvl1activity4, lvl1activity5, lvl1activity6];
let arr2 = [lvl2activity1, lvl2activity2, lvl2activity3, lvl2activity4, lvl2activity5, lvl2activity6];
let arr3 = [lvl3activity1, lvl3activity2, lvl3activity3, lvl3activity4, lvl3activity5, lvl3activity6];
let currentArr = arr1;
let currentArrLevel = 1;
let allArrs = [arr1, arr2, arr3];

let bottomImgs = ['imgs/beach.jpg', 'imgs/read.jpg', 'imgs/stargazing.jpg', 'imgs/library.jpg',
  'imgs/boxing.jpg', 'imgs/gym.jpg', 'imgs/hiking.jpg'
];

let chillLevelArr = ['LOW', 'MEDIUM', 'HIGH'];
let vws = ['3vw', '4vw', '5vw', '6vw'];
let fontWeight = ['normal', 'bold'];
let fontStyle = ['normal', 'italic'];
let fontVariant = ['normal', 'small-caps'];
let colours = ['#ff0000', '#ffffff', '#e6e600', '#6d77e8', '#479949', '#895289'];
let letterSpacing = ['1px', '2px', '3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px'];
let lineHeight = ['1', '1.2', '1.4'];
let justifyAlignSelf = ['left', 'center', 'end'];

let fonts = ['Roboto', 'Helvetica', 'Raleway', 'Chonburi', 'Inconsolata',
  'Anton', 'Josefin Sans', 'Lobster', 'Pacifico', 'Nova Flat'
]

let leftContainer = document.querySelector('.left-container');
let centralContainer = document.querySelector('.central-container');
let rightContainer = document.querySelector('.right-container');
let img = document.querySelector('.img');
let name = document.querySelector('.name');
let categories = document.querySelector('.categories');
let up = document.querySelectorAll('.up');
let down = document.querySelectorAll('.down');
let chillLevel = document.querySelector('.chill-level');
let chillLevelWord = document.querySelectorAll('.chill-level-amount');
let emptyBoxBottom = document.querySelectorAll('.empty-box-bottom');
let refresh = document.querySelectorAll('.refresh');
let tagLine = document.querySelector('.tag-line');

let x = 0;


refresh.forEach(refresh => refresh.addEventListener('click', updateCentralContainer));
up.forEach(up => up.addEventListener('click', levelUp));
down.forEach(down => down.addEventListener('click', levelDown));


// if (window.matchMedia("(min-width: 480px)").matches) {
//   console.log('update level');
//   updateLevel();
// }
// else {
//   console.log('update level');
//   updateLevel();
// }