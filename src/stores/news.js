import { defineStore } from 'pinia';

const NEWS_API_BASE_URL = 'https://nba-latest-news.p.rapidapi.com';
const OTHER_API_BASE_URL = 'https://other-api.com';

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [],
  }),
  actions: {
    async fetchNews() {
      try {
        const response = await fetch(`${NEWS_API_BASE_URL}/articles`, {
          headers: {
            'X-RapidAPI-Key': '8b35b51645msh8ae0cd485175b9cp12bb59jsn4cbb51136964',
            'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.news = data;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
    async fetchNewsByTeam(teamName) {
      try {
        const response = await fetch(`${NEWS_API_BASE_URL}/articles?team=${teamName}`, {
          headers: {
            'X-RapidAPI-Key': '8b35b51645msh8ae0cd485175b9cp12bb59jsn4cbb51136964',
            'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        const data = await response.json();
        this.news = data;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
  },
});
