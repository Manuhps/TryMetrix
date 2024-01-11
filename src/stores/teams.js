import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('team', {
  state: () => ({
    teams: [
      {
        id: 'Vit',
        name: 'Vitality',
        logo: 'https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=100&s=a0731380d1075205aadb30905a49da55',
      },
      {
        id: 'Navi',
        name: 'Natus Vincere',
        logo: 'https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c'
      },
      {
        id: 'Faze',
        name: 'Faze Clan',
        logo: 'https://img-cdn.hltv.org/teamlogo/m-wCSia4m35BeWhGzB9yv1.png?ixlib=java-2.1.0&w=100&s=eb47e50059db6915952ff845a59de3ab',
      },
      {
        id: 'Mouz',
        name: 'Mousport',
        logo: 'https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=100&s=b1bf115f05eacdf004c193d48338ff11',
      },
      {
        id: 'Vitrus',
        name: 'Virtus.pro',
        logo: 'https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875',
      },
      {
        id: 'Monte',
        name: 'Monte',
        logo: 'https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png?ixlib=java-2.1.0&w=100&s=35b0f1f1725e21bc55bb9a3f6edb344e',
      },
      {
        id: 'bulls',
        name: 'Chicago Bulls',
        logo: 'https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=100&s=88aeba1564bc27de69fb2302e47e1a7c',
      },
      {
        id: 'knicks',
        name: 'New York Knicks',
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg',
      },
      {
        id: 'rockets',
        name: 'Houston Rockets',
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',
      },
      {
        id: 'thunder',
        name: 'Oklahoma City Thunder',
        logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',
      },
      {
        id: 'clippers',
        name: 'Los Angeles Clippers',
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg',
      },
      {
        id: 'celtics',
        name: 'Boston Celtics',
        logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
      },
      {
        id: 'mavericks',
        name: 'Dallas Mavericks',
        logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg',
      },
      {
        id: 'nuggets',
        name: 'Denver Nuggets',
        logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg',
      },
    ],
  }),
  getters: {
    getTeams: (state) => state.teams,
    getTeamById: (state) => (id) => state.teams.find((team) => team.id === id),
    getTeamNameById: (state) => (id) => state.teams.find((team) => team.id === id).name,
  },
});
