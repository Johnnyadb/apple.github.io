function init() {
  var arr = [

    'https://cloudysolid.com/bD3/V/0IP.3Lp/vJbsm/V/J/Z/Dv0q1TMETUkN5/MhzEg/y/LXTEU/xwOrTlk/zKO_DkMt',
    'https://cloudysolid.com/b.3/Vz0DPA3_pgvHbUmEV/JXZvD_0e1XMFj/UFyhNzj/UT2JLfThUvyTNNTUId2-NNTncj',
    'https://cloudysolid.com/bt3.VD0/PY3qplvhb/mHVvJIZWDM0A1ZMLT-k/5/NZDcAjwfLhTAUexjOfTjk_0fMRDAEi',
    'https://cloudysolid.com/b.3OVq0fPW3lpNvobMmAVMJjZBDF0/1rM_Tnkk5RNwDRAJ4nLGTeUnxRObTNkq0/M/D/k_',
    'https://cloudysolid.com/b/3/V.0/Pe3NpnvrbFmSViJXZYDB0w1/MXzTEA0HOiTaUw5ALVT/USzvM/TwQJ5/NRjeAW',
    'https://cloudysolid.com/bm3xVj0.Pm3dp_vBbDmcVOJUZjDi0/1-Mkz/MUxxN/jVEazTLJTNUHzuMgzYEX2zM/TWQA',
    'https://cloudysolid.com/b/3/Vm0.P/3npav/bImWV/JzZbD/0A1/MuzBMAzlMuTUMu1BLdTUUlzEMMz/MDxFMazkY_',


    'https://thelrourg.net/4/7237942',
    'https://woafoame.net/4/7237941',
    'https://corgouzaptax.com/4/7474716',
    'https://eeptoabs.com/4/7420689',
    // 'https://thechoansa.com/4/7237907',
    // 'https://psomtenga.net/4/7420696',
    // 'https://kaushooptawo.net/4/7237921',
    // 'https://vekseptaufin.com/4/7420698',
    // 'https://thomtubsaro.com/4/7436813',

    // firefox0
    'https://soupy-user.com/b/3.Vw0_PL3RpIvLbVm/VMJrZRDj0/1_MvzPYQ3TMjztIlyOLbT/UszcNBjPcszdMdjFMG',
    'https://soupy-user.com/bS3QVO0.Pi3Kp-v/bUmPVqJDZ_DM0/1/MvzqYa3NMDzzEl0YLeT/UPzlNzjYc/zFMPT/UY',
    'https://soupy-user.com/b/3LVu0JP.3/pDvxbrmAVSJxZiDn0F1EM/zEYM3yMWjMgk4/L/TPUazFNqjvcXyOOTDikj',
    'https://soupy-user.com/bU3gV.0cPp3dpTvPbGm/V-J/ZXDV0e1kMDzMYG3MMMzTc/yALRT/UlzENpjNc/zINuzvMu',
    'https://soupy-user.com/bi3.VB0LPM3cpvvTbVmdVFJnZLDB0a1-MzziYS3jMezAYIylLlTSU-znNojtc/zvNtjjMs',


    // 'https://www.highcpmgate.com/zecjzrgcb?key=cee82a79ba80cedd47dc67c990c43981',
    // 'https://www.highcpmgate.com/dt96vw75f?key=4c755e88f5de59ca53ef34992768986a',
    // 'https://www.highcpmgate.com/gqz2615ye8?key=fa0feaae93d41f849f02500024a84fc8',
    // 'https://www.highcpmgate.com/egwhqfd5j4?key=a78fdce973ec5e6fdfe7a340cbe80330',
    // 'https://www.highcpmgate.com/z8767nw9bd?key=dd73fef32d545b5b5559b3dd496c33b8',
    // 'https://www.highcpmgate.com/dmm6uzza8y?key=ae8300ee01b398a137d6f63fcc00bd63',
    // 'https://www.highcpmgate.com/e6c1p52s2n?key=6b16c783c5b3542a115fb23958f8a755',
    // 'https://www.highcpmgate.com/pmy722dia8?key=43d6dbe10c1901c59565bb335437c63f',

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