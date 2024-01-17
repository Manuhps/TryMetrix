<template>
  <div class="container">
    <h1 style="font-weight: bold;">World Ranking</h1><br>
     <div class="team-list">
      <div v-for="team in teams" :key="team.id" :class="['team-card', { 'team-card-special': team.special, 'team-card-vit': team.id === 'Vit'}]">
       <div class="team-card-inner">
        <img :src="team.logo" alt="Team Logo" class="team-logo" />
         <p :class="['team-name', { 'team-name-special': team.special}]">{{ team.name }}</p>
          <p v-if="team.id !=='Vit'" class="team-ranking"># {{ team.ranking }}</p>
       <div v-if="team.id === 'Vit'">
        <p class="team-ranking-vit"># {{ team.ranking }}</p>

          <div class="player-list">
            <div v-for="player in team.players" :key="player.id" class="player-card">
              <img :src="player.image" alt="Player img" class="player-img" />
                <p class="player-name">{{ player.nickname }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 style="font-weight: bold;">Latest News</h2>
    <br><br>

    <div v-if="news.length > 0" class="news-list">
      <div class="news-item" v-for="newsItem in news" :key="newsItem.id">
        <div class="news-card">
          <div class="news-item-content">
            <h3>{{ newsItem.title }}</h3>
            <p class="news-source">{{ newsItem.description }}</p>
            <a :href="newsItem.link" target="_blank" class="read-more-link">Read More</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useTeamsStore } from '@/stores/teams';
import '@/assets/global.css';

export default {
  name: 'NewsComponent',
  setup() {
    const newsStore = useNewsStore();
    const teamsStore = useTeamsStore();
    const news = ref([]);

    const fetchNews = async () => {
      news.value = newsStore.News;
    };

    onMounted(() => {
      fetchNews();
    });

    return {
      news,
      fetchNews,
      teams: teamsStore.teams,
    };
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
  margin: auto;
  margin-left: 150px;
}

.team-card {
  padding: 25px;
  margin: 15px;
  border-radius: 15px;
  display: inline-block;
  background-color: #afaea1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 700px;
  height: 100px;
  overflow: hidden;
}

.team-card-vit {
  width: 820px;
  height: 180px;
}


.team-card:hover {
  background-color: #f0f0f0;
  transform: scale(1.01);
  transition: transform 0.5s ease;
}

.team-logo {
  margin-top: -5px;
  margin-left: auto;
  max-width: 40px;
  max-height: 40px;
}

.team-name {
  margin-left:-5px;
  margin-top: auto;
  font-family: Arimo;
  font-size: 12px;
  font-weight: bold;
  color: black;
}

.team-name-special {
  margin-left: auto;
}

.team-card-inner {
  position: relative;
}


.team-ranking {
 font-family: Arimo;
 color: black;
 position: absolute;
 top: -40px;
 left: 25px;
 padding: 50px;
 z-index: 1;
}

.team-card-vit {
  position: relative;
  font-family: Arimo;
  color: black;
  top: 5px;
  left: 5px;
  padding: 20px;
  z-index: 1;
}

.team-points {
  position: absolute;
  color: black;
  font-family: Arimo;
  top: -40px; 
  left: 65px;
  padding: 50px;
  z-index: 1;
}

.player-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px; 
}

.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-img {
  position: relative;
  top:-25px;
  width: 100px; 
  height: 100px; 
  object-fit: cover;
  margin:-50px;
  margin-left: 5px;
}

.player-name {
  position: relative;
  top:-22px;
  color: #392f5a;
  text-align: center;
  font-family: Arimo;
  margin:50px;
  margin-right: -5px;
}

h1 {
  color: #f81;
  margin-top: 20px;
  font-size: 24px;
  font-family: Arimo;
  margin-left:100px;
}

h2{
  color: #f81;
  margin-top: 20px;
  font-size: 24px;
  font-family: Arimo;
  margin-left:500px;
}


.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center; 
}

.news-item {
  width: 100%;
  max-width: 400px;
  margin: 20px auto 20px 0;
  margin-left: 85px;
}

.news-card {
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 250px;
  overflow: hidden;
  margin-left: 90px;
}
.news-item-content {
  padding: 16px;
}

h3 {
  color: #f81;
  font-weight: 700;
  font-family: Arimo;
  margin-bottom: 8px;
}

.news-source {
  color: #000;
  margin-bottom: 8px;
  font-family: Source sans Pro;
}

.read-more-link {
  color: #392f5a;
  text-decoration: none;
  font-weight: bold;
  font-family: Arimo;
  display: inline-block;
}

</style>
