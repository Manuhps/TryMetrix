import { defineStore } from 'pinia';
export const useGamesStore = defineStore('games', {
  state: () => ({
    Games: [
      {
        id: 0,
        time: "2024-01-19T08:00:00.000Z",
        name_event: "Elisa Invitational Fall 2022",
        logo_event: "https://img-cdn.hltv.org/eventlogo/SepkTgHd6Y9hfZaXc33o2R.png?ixlib=java-2.1.0&w=50&s=d17cfaa47e30993ac3f032a627d7805f",
        name_home: "Vitality",
        logo_home: "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=100&s=a0731380d1075205aadb30905a49da55",
        score_home: 0,
        scoreboard_home:[
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
        ],
        name_away: "Natus Vincere",
        logo_away: "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
        score_away: 0,
        scoreboard_away:[
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
        ],
      },
      {
        id: 1,
        time: "2024-01-19T08:00:00.000Z",
        name_event: "CCT South Europe Series 1",
        logo_event: "https://img-cdn.hltv.org/eventlogo/pZilj4KsiWwrk4iXKo1poy.png?ixlib=java-2.1.0&w=50&s=92696169cab8082836ebbe1f8304b013",
        name_home: "Faze Clan",
        logo_home: "https://img-cdn.hltv.org/teamlogo/m-wCSia4m35BeWhGzB9yv1.png?ixlib=java-2.1.0&w=100&s=eb47e50059db6915952ff845a59de3ab",
        score_home: 0,
        scoreboard_home:[
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
        ],
        name_away: "Mousport",
        logo_away: "https://img-cdn.hltv.org/teamlogo/RfR1zmFJ0eP08VmFb6UOu3.png?ixlib=java-2.1.0&w=100&s=b1bf115f05eacdf004c193d48338ff11",
        score_away: 0,
        scoreboard_away:[
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
        ],
      },
      {
        id: 2,
        time: "2024-01-19T08:00:00.000Z",
        name_event: "WePlay League Season 6",
        logo_event: "https://img-cdn.hltv.org/eventlogo/T_ESN442boL7ngbGtrS7nZ.png?ixlib=java-2.1.0&w=50&s=1d372878b0be21c8d3fc7118bfc242eb",
        name_home: "Falcons",
        logo_home: "https://img-cdn.hltv.org/teamlogo/4eJSkDQINNM6Tbs4WvLzkN.png?ixlib=java-2.1.0&w=100&s=01e7f9dd30b34e66f429f43627c2e005",
        score_home: 0,
        scoreboard_home:[
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
        ],
        name_away: "Cloud9",
        logo_away: "https://img-cdn.hltv.org/teamlogo/bEgST6XoNV4ZdenRKzCQyl.svg?ixlib=java-2.1.0&s=bd9b10a8dfe7b3640103745687389e3c",
        score_away: 0,
        scoreboard_away:[
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
          {
            kills: 0,
            assists: 0,
            deaths: 0,
          },
        ],
      },
    ],  
  }),
  getters: {
    getGames: (state) => state.Games,
  },
  actions: {
    async fetchGames() {
      return this.getGames;
    },
  },
});