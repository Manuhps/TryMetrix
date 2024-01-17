import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('team', {
  state: () => ({
    teams: [
      {
        id: 'Vit',
        name: 'Vitality',
        logo: 'https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=100&s=a0731380d1075205aadb30905a49da55',
        special: true,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/Y91mh9-x8Ks9JV-WhO_r91.png?ixlib=java-2.1.0&w=400&s=cc5a5e025a9b787ae55796d83fbd75df",
            nickname: "apEX",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/RoTpFBevmVDbeCBJLSUV8o.png?ixlib=java-2.1.0&w=400&s=6d65cb68c0cbfbfe0f14d16971615c4b",
            nickname: "ZywOo",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/7FqEy5LGzqczVMjhE8ZCBd.png?ixlib=java-2.1.0&w=400&s=64095121b4aa4cbd73057f5ae20e890a",
            nickname: "Flamez",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/tLkyuJMkGunXQD7-CAKsFE.png?ixlib=java-2.1.0&w=400&s=a605fe434f8a458fa8c1d20e82e49eaf",
            nickname: "SpinX",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/lWjJ7ajhajKvfnaOzncFrs.png?ixlib=java-2.1.0&w=400&s=eabd773df715bf2c097e95cd20e0a0ac",
            nickname: "mezzi",
          }
        ],
        ranking: 1,
      },
      {
        id: 'Navi',
        name: 'Natus Vincere',
        logo: 'https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c',
        ranking: 2,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/4-Np-rU8A5smN0HOkoBF1S.png?ixlib=java-2.1.0&w=400&s=bca40c742d51fe5f79420fee71ecab34",
            nickname: "Aleksib",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/E5f7dxodOI8wWBNoTLyWJu.png?ixlib=java-2.1.0&w=400&s=fa2d65c52f79e286d1e92c4ee6110b74",
            nickname: "iM",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/b29J2ESjLLqO1XxMSOjRR9.png?ixlib=java-2.1.0&w=400&s=247d23aa96632ab1fa5c77b5c7d1a62a",
            nickname: "b1t",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/SkSJ7ErL-8eNeIxlUaHOjp.png?ixlib=java-2.1.0&w=400&s=9a2022dfa6f154b51bd8b7f63d52ff72",
            nickname: "jL",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/5rF2y0CYgGthv6O3qyfQlK.png?ixlib=java-2.1.0&w=400&s=aac1842164cf6f247fdabfb18a57009e",
            nickname: "w0nderful",
          }
        ]
      },
      {
        id: 'Faze',
        name: 'Faze Clan',
        logo: 'https://img-cdn.hltv.org/teamlogo/m-wCSia4m35BeWhGzB9yv1.png?ixlib=java-2.1.0&w=100&s=eb47e50059db6915952ff845a59de3ab',
        ranking: 3,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/7xNUYJWQ2UD1WYEMJfAp2a.png?ixlib=java-2.1.0&w=400&s=11c47c21f9b16abaa29adaca460a575c",
            nickname: "Karrigan",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/me3Q2ue15YY77MF7dR5Acj.png?ixlib=java-2.1.0&w=400&s=ac072a05cdd8a214df94718b987da5eb",
            nickname: "Rain",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/qnHrMIU5Ud8IYT5j_SlXvN.png?ixlib=java-2.1.0&w=400&s=0d14a7d0ba70339fd6a534b4f6156135",
            nickname: "Frozen",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/z7mlBNbUIhdpFu61k9Z7Ao.png?ixlib=java-2.1.0&w=400&s=4079a3406072a2f6c0afbe74d33aa810",
            nickname: "Ropz",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/s8WJZpMPv0YBCr9l8rXJT4.png?ixlib=java-2.1.0&w=400&s=451b9fa69a6d7bf382a975638f274f24",
            nickname: "Broky",
          }
        ]
      },
      {
        id: 'Mouz',
        name: 'Mousport',
        logo: 'https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=100&s=b1bf115f05eacdf004c193d48338ff11',
        ranking: 4,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/HKN2bgoRzpb0RZqFMSCUnQ.png?ixlib=java-2.1.0&w=400&s=9b2900fc15d3af67de42ca2e57707a9e",
            nickname: "Brollan",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/L5VdlAHF0ihBn2HyZtkji1.png?ixlib=java-2.1.0&w=400&s=c1a8927c0ccba70dd796359e2ef66ad0",
            nickname: "Siuhy",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/j4T6CAChfHuPD303TkY6bJ.png?ixlib=java-2.1.0&w=400&s=8a139e1f92ceb612287df9b3740176f5",
            nickname: "Torzsi",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/VqB0egkyFbg7J5VpGy5mwA.png?ixlib=java-2.1.0&w=400&s=0a1199cc585d4af409db19705e68a3d6",
            nickname: "Jimpphat",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/ukW2IrnckoVVGQhr8I9h4x.png?ixlib=java-2.1.0&w=400&s=7757aa310718304275253a6f6743028c",
            nickname: "XertioN",
          }
        ]
      },
      {
        id: 'Vitrus',
        name: 'Virtus.pro',
        logo: 'https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875',
        ranking: 5,
      },
      {
        id: 'Monte',
        name: 'Monte',
        logo: 'https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=100&s=35b0f1f1725e21bc55bb9a3f6edb344e',
        ranking: 6,
      },
      {
        id: 'G2',
        name: 'Gamers2',
        logo: 'https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=100&s=88aeba1564bc27de69fb2302e47e1a7c',
        ranking: 7,
      },
      {
        id: 'Comp',
        name: 'Complexity',
        logo: 'https://img-cdn.hltv.org/teamlogo/0-i_bEjrf3v4eYqaG0Bix7.svg?ixlib=java-2.1.0&s=4eecbec277f018772a9b92c22da1a459',
        ranking: 8,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/Iba6Szy_G9atMUElBWwNey.png?ixlib=java-2.1.0&w=400&s=8c389c708aa9d23f5afa24db0613111c",
            nickname: "EliGE",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/Vu4hGRnLdZ4wH6pIGnKeJU.png?ixlib=java-2.1.0&w=400&s=ca0ce7c05f4ceafe92d983b1049e38b1",
            nickname: "JT",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/VKFlZiSR6INFsY08K7RVqH.png?ixlib=java-2.1.0&w=400&s=baaab85f806f09cf63c9a7b525f7264a",
            nickname: "Floppy",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/3SdibZ_oqucJUBCConvz-i.png?ixlib=java-2.1.0&w=400&s=5422f7ad3bc727f4bfe598b74938ecc0",
            nickname: "hallzerk",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/A2o6WpEnqH_48Bl7207VGL.png?ixlib=java-2.1.0&w=400&s=a19e556d8483d5e262d80278465c9441",
            nickname: "Grim",
          }
        ]
      },
      {
        id: 'C9',
        name: 'Cloud9',
        logo: 'https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c',
        ranking: 9,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/YgbRr8L9gQZYQ6bIYPC2tK.png?ixlib=java-2.1.0&w=400&s=a77dce9655bf819bd4cb070156b728de",
            nickname: "H0bbit",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/5-nVcYrzJwqMrokPxDzhU1.png?ixlib=java-2.1.0&w=400&s=511af9a011c3a7efe44e9325967c3f06",
            nickname: "EletroNic",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/7U0gjWuEypzVnacDMWyE1R.png?ixlib=java-2.1.0&w=400&s=71383dcd5081d78992022aaf5b613f20",
            nickname: "Boombl4",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/gcNKzylgfc4hpbAeiDakw7.png?ixlib=java-2.1.0&w=400&s=11e3f9f7a62c8631ac2cb2752239f3c4",
            nickname: "Ax1le",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/s-Dho-dtAwuTBHnctlhES8.png?ixlib=java-2.1.0&w=400&s=87c35e4c3e1ec7fd15e166cc09b8b75a",
            nickname: "Perfecto",
          }
        ]
      },
      {
        id: 'Falcons',
        name: 'Falcons',
        logo: 'https://img-cdn.hltv.org/teamlogo/4eJSkDQINNM6Tbs4WvLzkN.png?ixlib=java-2.1.0&w=100&s=01e7f9dd30b34e66f429f43627c2e005',
        ranking: 10,
        players: [
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/KRtd5ZnIds7gRZFqBQgNg2.png?ixlib=java-2.1.0&w=400&s=dcfd2624386d6ae6ed1c1dd10258b9be",
            nickname: "Snappi",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/Eh8F51-H4Y0PoPmjlSVoh6.png?ixlib=java-2.1.0&w=400&s=b80a1aa8d4b34bb4dd19078663c0bbeb",
            nickname: "Magisk",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/eWztTZfDLsjLqx2t_yszqr.png?ixlib=java-2.1.0&w=400&s=84ecf6576132bfb94a20a2a3455e09da",
            nickname: "Maden",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/eq0Ca0uwTMx7tFrb5xUtBB.png?ixlib=java-2.1.0&w=400&s=97808d3cf6233d53dabfc13216d16eb8",
            nickname: "SunPayus",
          },
          {
            image: "https://img-cdn.hltv.org/playerbodyshot/v3oeN4mtb9bl1HjbMC6lxc.png?ixlib=java-2.1.0&w=400&s=e5c552b60c59fdc452d0a1f96eaafed6",
            nickname: "BOROS",
          }
        ]
      },
    ],
  }),
  getters: {
    getTeams: (state) => state.teams,
    getTeamById: (state) => (id) => state.teams.find((team) => team.id === id),
    getTeamNameById: (state) => (id) => state.teams.find((team) => team.id === id).name,
  },
});
