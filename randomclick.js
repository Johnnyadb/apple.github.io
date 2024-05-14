function init() {
  var arr = [
    "https://novel-psychology.com/b.3GVQ0NP/3_pqvgbMmjVbJDZZD-0R1LMCTtkq5/M/z/gDyLL/T/Uhx/OOT-kjzwOBD/Mj",
    "https://novel-psychology.com/ba3/V.0/Pg3mp-vXbomKVFJKZMDn0i1DM/jyUbyrNxj/UK2FLZTgUuyFNqTGI_2JN/T/cF",
    "https://novel-psychology.com/b_3IVz0.Pt3/pevDb/msVyJ/Z/D/0y1jMoT/kk5WN/D/AowpLtTQUFxUOPT/kR0/MRDZEY",
    "https://novel-psychology.com/bW3nVI0yP.3Dp_vib/mBVWJJZ/Df0/1aMcTXkQ5/NvDHA/4KLXTTU/xtOATikA0rMxDPkC",
    "https://novel-psychology.com/bs3.Vp0rP-3/pKvob/mqVHJOZ/D-0d1NM/z/EH0BOdTIU/5OL/T/UMzjM/TgQK5bNHjIAf",
    "https://altruisticemergency.com/b.3kVs0jPf3qphv/b_mvVlJYZlDu0b1SMzzsMUxKNBjaEHzQL/T/U-zJMaz/EA2tM_T/Qt",
    "https://altruisticemergency.com/bO3LV_0.Py3ip/vzbdmgVUJXZcDS0z1TMYzfMYzIMFTYMS1/LCToUCzMM/zmMkxNMBz/YK",

    // 'https://shempaurdou.net/4/7436813',
    // 'https://atservineor.com/4/7420696',
    // 'https://glakaits.net/4/7237907',
    // 'https://nabauxou.net/4/7420698',
    // 'https://grunoaph.net/4/7474716',
    // 'https://auptirair.com/4/7237941',
    // 'https://zaltaumi.net/4/7237921',
    // 'https://rausauboocad.net/4/7420689',

    'https://www.highcpmgate.com/gqz2615ye8?key=fa0feaae93d41f849f02500024a84fc8',
    'https://www.highcpmgate.com/z8767nw9bd?key=dd73fef32d545b5b5559b3dd496c33b8',
    'https://www.highcpmgate.com/dmm6uzza8y?key=ae8300ee01b398a137d6f63fcc00bd63',
    'https://www.highcpmgate.com/e6c1p52s2n?key=6b16c783c5b3542a115fb23958f8a755',
    'https://www.highcpmgate.com/egwhqfd5j4?key=a78fdce973ec5e6fdfe7a340cbe80330',
    'https://www.highcpmgate.com/pmy722dia8?key=43d6dbe10c1901c59565bb335437c63f'

    // "https://mango.mjsj.sbs/",
  ];
 
  var didOpen = false;
  // 监听页面的点击事件
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