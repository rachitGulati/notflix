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
let activity1 = new Activity('surfing', 'imgs/beach.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let activity2 = new Activity('table tennis', 'imgs/tabletennis.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let activity3 = new Activity('boxing', 'imgs/boxing.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let activity4 = new Activity('gym', 'imgs/gym.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let activity5 = new Activity('hiking', 'imgs/hiking.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let activity6 = new Activity('basketball', 'imgs/basketball.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);

// Level 2
let activity7 = new Activity('meditating', 'imgs/meditate.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let activity8 = new Activity('sleeping', 'imgs/sleep.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let activity9 = new Activity('reading', 'imgs/read.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let activity10 = new Activity('theatre', 'imgs/theatre.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);
let activity11 = new Activity('stargazing', 'imgs/stargazing.jpg', 'google.co.uk/related', 1, ['extreme sports', 'water sports']);
let activity12 = new Activity('library', 'imgs/library.jpg', 'google.co.uk/related', 5, ['pillow sports', 'indoors']);

let arr1 = [activity1, activity2, activity3, activity4, activity5, activity6];
let arr2 = [activity7, activity8, activity9, activity10, activity11, activity12];
let currentArr = arr1;
let currentArrLevel = 1;
let allArrs = [arr1, arr2];

let bottomImgs = ['imgs/beach.jpg', 'imgs/read.jpg', 'imgs/stargazing.jpg', 'imgs/library.jpg', 
                  'imgs/boxing.jpg', 'imgs/gym.jpg', 'imgs/hiking.jpg'];

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
let up = document.querySelector('.up');
let down = document.querySelector('.down');
let chillLevel = document.querySelector('.chill-level');
let chillLevelWord = document.querySelector('.chill-level-amount');
let emptyBoxBottom = document.querySelectorAll('.empty-box-bottom');

let x = 0;


rightContainer.addEventListener('click', updateCentralContainer);
up.addEventListener('click', levelUp);
down.addEventListener('click', levelDown);