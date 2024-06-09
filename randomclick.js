function init() {
  var arr = [
    // first
    'https://cloudysolid.com/bD3/V/0IP.3Lp/vJbsm/V/J/Z/Dv0q1TMETUkN5/MhzEg/y/LXTEU/xwOrTlk/zKO_DkMt',
    'https://cloudysolid.com/b.3/Vz0DPA3_pgvHbUmEV/JXZvD_0e1XMFj/UFyhNzj/UT2JLfThUvyTNNTUId2-NNTncj',
    'https://cloudysolid.com/bt3.VD0/PY3qplvhb/mHVvJIZWDM0A1ZMLT-k/5/NZDcAjwfLhTAUexjOfTjk_0fMRDAEi',
    'https://cloudysolid.com/b.3OVq0fPW3lpNvobMmAVMJjZBDF0/1rM_Tnkk5RNwDRAJ4nLGTeUnxRObTNkq0/M/D/k_',
    'https://cloudysolid.com/b/3/V.0/Pe3NpnvrbFmSViJXZYDB0w1/MXzTEA0HOiTaUw5ALVT/USzvM/TwQJ5/NRjeAW',
    'https://cloudysolid.com/bf3wV/0.PQ3/pYvObTmMVkJrZND-0l1gM_zaMcxZNuj/EgzfLETnULzlM/z/E/2/MITUQZ',
    'https://cloudysolid.com/bs3fVP0jP.3xpqvzbImmVkJPZ/Dp0x1/MZzfMuzgMFTJMQ1rLOTfU/zCM/zGMHx/Maz-YI',
    'https://cloudysolid.com/b.3MVw0hP/3rpRv/bBmcV/J/ZcDR0K1cM/z/cm5_MWjwU/2FLmTsUYztNvzNkgy/NLTXcb',
    'https://cloudysolid.com/bc3.Vo0CPe3lp/v/bLmDV/J-Z/Dj0o1zM/zTcO5JMhj/Yg0sL/T/U/zTNjzwkRynNWjVUs',
    'https://cloudysolid.com/b/3.Ve0QPV3ipdvjbdmhVVJHZ/D/0T1uM_z_c/5DM/j/c/yLLWT/UdzQNBzNkYywNDzCMw',

    // db123
    'https://yummy-repeat.com/b.3WVy0qP_3tpXvhbCmtViJVZyDh0D1/MrzzcmylMqzlAwy/LqTsUozpNnz/IkzcMTDrMR',
    'https://yummy-repeat.com/bs3QVQ0.PU3ip/vDbwmCVBJrZaDp0I1IMHzjcPypMJz/E/wXL/T/UszjNIzfI_zKMoTDEu',
    'https://yummy-repeat.com/b.3qVi0SPb3bpsvdbcmpVcJWZJD/0Y1yM/zeg/x_NSDdAQ4wLETMUGzKOXD/EZ0/MVDwkd',
    // 'https://yummy-repeat.com/bq3AVd0jP.3tprvdbDmMVPJ/ZBDg0_1tM/zPgLx/NDDSEO2/LbTEUZzfOsD/EK0WMCTqcB',
    // 'https://yummy-repeat.com/b/3nV.0JP/3qp-vxbemdVMJMZVDr0/1hMvzDgYxTNoDLI-0KLZTjUUzKOjD_E/0rMpjEUs',

    // jacklove
    'https://fussynight.com/b/3sV.0/P_3Jpdv/bemvVfJ/Z_Dl0w1oM/zLgcx/MeDfApwqLLT/UczpOpDKE/wrMiDkEN',
    'https://fussynight.com/bl3/V_0.PI3mpZvjbgm/VlJnZcDS0R1kMRzTg-xOMbDLAk4BLsTnUjzFOgDuEfwvMLDIkb',
    // 'https://fussynight.com/bv3.VW0rPc3kp/vKbVmaVaJpZTDL0_1/MCz_gWxlM/DKEK2FLQTCU/zdOjD/ERwoMeTPcu',
    // 'https://fussynight.com/bs3NV.0DPB3spLvLb/mOVcJLZzDF0/1RMKzjgHxCMOz/Yu4aLuTSU/zuOhDkEyz-Ndjikg',
    // 'https://fussynight.com/bn3.VT0xPv3/pKvDbQmNV/JxZQDU0/1JMFzcgPxfMBz/gc0aLWTEUyzpOEDoE/zoO/DPU-',

    // // john(decline)
    // 'https://soupy-user.com/b/3.Vw0_PL3RpIvLbVm/VMJrZRDj0/1_MvzPYQ3TMjztIlyOLbT/UszcNBjPcszdMdjFMG',
    // 'https://soupy-user.com/bS3QVO0.Pi3Kp-v/bUmPVqJDZ_DM0/1/MvzqYa3NMDzzEl0YLeT/UPzlNzjYc/zFMPT/UY',
    // 'https://soupy-user.com/b/3LVu0JP.3/pDvxbrmAVSJxZiDn0F1EM/zEYM3yMWjMgk4/L/TPUazFNqjvcXyOOTDikj',
    // 'https://soupy-user.com/bU3gV.0cPp3dpTvPbGm/V-J/ZXDV0e1kMDzMYG3MMMzTc/yALRT/UlzENpjNc/zINuzvMu',
    // 'https://soupy-user.com/bi3.VB0LPM3cpvvTbVmdVFJnZLDB0a1-MzziYS3jMezAYIylLlTSU-znNojtc/zvNtjjMs',

    // // lucy(block)
    // 'https://mutedpoetry.com/bV3.Vz0kP/3opVvIb/mYVdJyZoDK0/1ZMyzXYl4kNWzfM/y-LBTkUOzjN/jng/3_MWzSMG',
    // 'https://mutedpoetry.com/b.3zVQ0/P/3Wp_vYbOmQVLJVZ/DN0z1qMEzeYr4fNOzOIn0ULPTrUWztNgjIgZ3rM-jnUp',
    // 'https://mutedpoetry.com/bl3fVE0/P.3/ptvzbcmxVlJDZVDi0-1/MlzYYJ4DNTzWE/2kLmTDU/zXNEjFgS3vM/T/cn',
    // 'https://mutedpoetry.com/bp3fVy0/P.3YpUvebimjV/JtZjDe0/1-M/zaYa4/N-jXk/4oLBTLUOzcNpj/gk2NOHTekv',

    // mon
    // 'https://thelrourg.net/4/7237942',
    // 'https://woafoame.net/4/7237941',
    // 'https://corgouzaptax.com/4/7474716',
    // 'https://eeptoabs.com/4/7420689',
    // 'https://thechoansa.com/4/7237907',
    // 'https://psomtenga.net/4/7420696',
    // 'https://kaushooptawo.net/4/7237921',
    // 'https://vekseptaufin.com/4/7420698',
    // 'https://thomtubsaro.com/4/7436813',

    // // beta(block)
    // 'https://www.highcpmgate.com/zecjzrgcb?key=cee82a79ba80cedd47dc67c990c43981',
    // 'https://www.highcpmgate.com/dt96vw75f?key=4c755e88f5de59ca53ef34992768986a',
    // 'https://www.highcpmgate.com/gqz2615ye8?key=fa0feaae93d41f849f02500024a84fc8',
    // 'https://www.highcpmgate.com/egwhqfd5j4?key=a78fdce973ec5e6fdfe7a340cbe80330',
    // 'https://www.highcpmgate.com/z8767nw9bd?key=dd73fef32d545b5b5559b3dd496c33b8',
    // 'https://www.highcpmgate.com/dmm6uzza8y?key=ae8300ee01b398a137d6f63fcc00bd63',
    // 'https://www.highcpmgate.com/e6c1p52s2n?key=6b16c783c5b3542a115fb23958f8a755',
    // 'https://www.highcpmgate.com/pmy722dia8?key=43d6dbe10c1901c59565bb335437c63f',

    // John beta(block)
    // 'https://www.highcpmgate.com/mggp0d1rd?key=4a8cc439d8f03fbe93ede925886e0967',
    // 'https://www.highcpmgate.com/d61bt4eq5?key=50e22b35ce929782b3d0e55721cf6291',
    // 'https://www.highcpmgate.com/u2f5xpf0sh?key=35d46124492e301d6b7f93d0e323cd15',

    // Jack beta(block)
    // 'https://www.highcpmgate.com/wa4ni64n7?key=94a693ff93ae2f33305c8039fd3c1a7b',
    // 'https://www.highcpmgate.com/t3y2ebta?key=540b4b6dee7d82872a8ad8935ecf83a4',
    // 'https://www.highcpmgate.com/n5zwpc5h1?key=1dfa9fa5cffeb00bfffbfda37a43407f',
    // 'https://www.highcpmgate.com/y1i91ubt?key=12078ca6790ca0e3e0183b6d53dcc0f3',
    // 'https://www.highcpmgate.com/nqiy56uena?key=26807e7e722e2080c7a364711501aa5d',
    
    // Lucy beta
    'https://www.highcpmgate.com/bu71hki7pg?key=b3d0aabe20e37ad2a080cef996e523a8',
    'https://www.highcpmgate.com/spw4aigpi?key=2bfe09727d8f45c16edc5be8ce11fe73',
    'https://www.highcpmgate.com/eeuiwn19?key=a0e1b3b183cb8921ed2aaca0c4cb4490',
    'https://www.highcpmgate.com/q5kx6qdha?key=ba303090626471c9f450339de19b98be',
    'https://www.highcpmgate.com/csdvh2ud?key=cb18caab3a96de3cec11deee57f1e7bc',

    // Emily beta
    'https://www.highcpmgate.com/unjjajw4d?key=0cf45e318a7b88f458419087aa350ccc',
    'https://www.highcpmgate.com/z2vva4za?key=58882b5697cf027450b33d8e82ebc4b9',
    'https://www.highcpmgate.com/hpf7uuustd?key=ef91f1af82729948024a1f219624bdd9',
    'https://www.highcpmgate.com/v381fsbtns?key=681a319357ee76a75910c90cb4b5c011',
    'https://www.highcpmgate.com/gk3yvw2t?key=d2a556fe1d3e00914675176678c85903',

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