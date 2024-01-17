import { defineStore } from 'pinia';
export const useNewsStore = defineStore('news', {
  state: () => ({
    News: [
      {
        id:"1",
        title: "9INE snatch spot at ESL Pro League Season 17 Conference",
        description: "The Poles clinched a place in the event after a full-distance, best-of-five grand final.",
        link: "https://www.hltv.org/news/34876/9ine-snatch-spot-at-esl-pro-league-season-17-conference",
        time: "2022-10-23T22:17:00.000Z"
      },
      {
        id:"2",
        title: "Heroic win Danish derby; punch ticket to BLAST Fall Final",
        description: "Casper \"cadiaN\" Møller's side will play in front of their home crowd in the Royal Arena.",
        link: "https://www.hltv.org/news/34875/heroic-win-danish-derby-punch-ticket-to-blast-fall-final",
        time: "2022-10-23T20:31:00.000Z"
      },
      {
        id:"3",
        title: "IEM Rio Major profile: Ninjas in Pyjamas",
        description: "With a new AWPer, new in-game leader, new language, and former shotcaller and X-factor player looking unleashed, Ninjas in Pyjamas hope to continue their honeymoon phase in Rio.",
        link: "https://www.hltv.org/news/34870/iem-rio-major-profile-ninjas-in-pyjamas",
        time: "2022-10-23T18:00:00.000Z"
      },
      {
        id:"4",
        title: "Lynn Vision qualify for ESL Pro League Season 17 Conference",
        description: "The Chinese roster won ESL Challenger League Season 42 Asia-Pacific to advance to the upcoming Maltese LAN.",
        link: "https://www.hltv.org/news/34874/lynn-vision-qualify-for-esl-pro-league-season-17-conference",
        time: "2022-10-23T16:10:00.000Z"
      },
    ],
  }),
  getters: {
    getTitle: (state) => state.title,
  },
});