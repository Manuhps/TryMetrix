<template>
  <div class="container">
    <h1 style="  font-weight: bold;">National Basketball Association / Teams LIST</h1><br>
    <div class="team-list">
      <div v-for="team in teams" :key="team.id" class="team-card">
        <div class="team-card-inner" @click=teamNews(team)>
          <img :src="team.logo" alt="Team Logo" class="team-logo" />
          <p class="team-name">{{ team.name }}</p>
        </div>
      </div>
    </div>

    <h1 style="  font-weight: bold;">Latest News</h1>
    <br><br>

    <div v-if="news.length > 0" class="news-list">
      <div class="news-item" v-for="item in news" :key="item.id">
        <div class="news-card">
          <div class="news-item-content">
            <h3>{{ item.title }}</h3>
            <p class="news-source">Source: {{ displaySource(item.source) }}</p>
            <a :href="item.url" target="_blank" class="read-more-link">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="no-news-message">No news available.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useTeamsStore } from '@/stores/teams';

export default {
  name: 'NewsComponent',
  setup() {
    const newsStore = useNewsStore();
    const teamsStore = useTeamsStore();
    const news = ref([]);

    const fetchNews = async () => {
      await newsStore.fetchNews();
      news.value = newsStore.news;
    };

    const displaySource = (source) => {
      const sourceMappings = {
        'nba': 'NBA',
        'nba_canada': 'NBA Canada',
        'espn': 'ESPN',
        'bleacher_report': 'Bleacher Report',
        'yahoo': 'Yahoo',
        'slam': 'SLAM',
      };

      return sourceMappings[source] || source;
    };


    onMounted(() => {
      fetchNews();
    });

    return {
      news,
      fetchNews,
      displaySource,
      teams: teamsStore.teams,
    };
  },

  methods:
  {
    teamNews(team) {
      this.$router.push({ name: 'teamNews', params: { id: team.id } });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin-top: 150px;
}

.team-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}

.team-card {
  padding: 16px;
  margin: 16px;
  text-align: center;
  border-radius: 8px;
  display: inline-block;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-card:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.team-logo {
  max-width: 100px;
  max-height: 100px;
}

.team-name {
  margin-top: 8px;
  font-weight: bold;
  color: black;
}

h1 {
  margin-top: 20px;
  font-size: 24px;
}

.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.news-item {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.news-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-item-content {
  padding: 16px;
}

h3 {
  font-weight: 700;
  margin-bottom: 8px;
}

.news-source {
  color: #777;
  margin-bottom: 8px;
}

.read-more-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
}

.no-news-message {
  margin: 20px 0;
  font-style: italic;
  color: #777;
}
</style>
