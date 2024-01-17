<template>
  <div class="container">
    <div class="title-container">
      <h2 class="scoreboard-title">Today's Matches</h2>
    </div>
    <div class="table-col">
      <div v-for="game in games" :key="game.id" @click="goToGameDetails(game.id)" class="match-box">
        <div class="match-info">
          <div class="column date">
            <div class="date-text">{{ formatDate(game.time) }}</div>
          </div>
          <div class="column team-info">
            <div class="team">
              <img :src="game.logo_home" alt="Home Team Logo" class="team-logo">
              {{ game.name_home }}
              ({{ game.score_home }})
            </div>
            <div class="team">
              <img :src="game.logo_away" alt="Visitor Team Logo" class="team-logo">
              {{ game.name_away }}
              ({{ game.score_away }})
            </div>
          </div>
          <div class="column tournament-info">
            <div class="event">
              <img :src="game.logo_event" alt="Event Logo" class="event-logo">
              {{ game.name_event }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGamesStore } from '../stores/games';

export default {
  data() {
    return {
      gamesStore: useGamesStore(),
      start_date: new Date().toISOString().split('T')[0],
      end_date: '',
      games: [],
    };
  },
  created() {
    try {
      this.end_date = this.start_date;
      this.fetchGames();
    } catch (error) {
      alert(error.message);
    }
  },
  methods: {
    async fetchGames() {
      try {
        this.games = await this.gamesStore.fetchGames();
      } catch (error) {
        alert(error.message);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    goToGameDetails(gameId) {
      this.$router.push({ name: 'game', params: { id: gameId } });
    },
  },
};
</script>

<style scoped>
div{
  color: #000;
  font-family: Arimo;;
}
.title-container {
  display: flex;
  align-items: flex-start;
  margin-left: 10px; 
}

.scoreboard-title {
  margin-bottom: 30px; 
}

.column {
  flex: 1;
  padding: 1px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.date {
  font-weight: bold;
  margin-right: 5px; 
  transition: margin 0.3s, box-shadow 0.3s; 
}

.date:hover {
  margin-right: 10px; 
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); 
  cursor: pointer; 
}

.date-text {
  margin: 0;
}

.team-info {
  display: flex;
  flex-direction: column;
  margin-right: 50px; 
}

.team {
  display: flex;
  align-items: center;
}

.team-logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.tournament-info {
  display: flex;
  flex-direction: column;
}

.event-logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin-top: 80px;
}

.match-box {
  border: 2px solid #000;
  border-radius: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
  transition: box-shadow 0.3s; 
}

.match-box:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7); 
}

.match-info {
  display: flex;
  justify-content: space-between;
}

.table-col {
  width: 70%;
}
</style>