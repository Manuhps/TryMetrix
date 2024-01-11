<template>
  <div class="container">
    <div class="game-details-container">
      <div class="game-details">
        <h2 class="final-score">
          <strong>{{ game.home_team.abbreviation }}</strong> 
          {{ game.home_team_score }} - {{ game.visitor_team_score }} 
          <strong>{{ game.visitor_team.abbreviation }}</strong></h2>
        <p class="date">Date: {{ formatGameDate(game.date) }}</p>
        <p class="status">Status: {{ game.status }}</p>
        <p class="season">Season: {{ game.season }}</p>
        <p class="period">Period: {{ game.period }}</p>
        <p class="postseason">Postseason: {{ game.postseason ? 'Yes' : 'No' }}</p>
        <div class="teams">
          <div class="home-team">
            <h3>{{ game.home_team.full_name }}</h3>
            <p>{{ game.home_team.city }} {{ game.home_team.name }}</p>
            <p>Conference: {{ game.home_team.conference }}</p>
            <p>Division: {{ game.home_team.division }}</p>
          </div>
          <div class="visitor-team">
            <h3>{{ game.visitor_team.full_name }}</h3>
            <p>{{ game.visitor_team.city }} {{ game.visitor_team.name }}</p>
            <p>Conference: {{ game.visitor_team.conference }}</p>
            <p>Division: {{ game.visitor_team.division }}</p>
          </div>
        </div>
      </div>
      <br>
      <button @click="goBack" class="back-button">Back</button>
    </div>
  </div>
</template>

<script>
import { useNBAStore } from '../stores/counter.js';

export default {
  data() {
    return {
      nbaStore: useNBAStore(),
      game: null,
    };
  },
  async created() {
    try {
      await this.nbaStore.fetchGame(this.$route.params.id);
      this.game = this.nbaStore.getGame;
    } catch (error) {
      alert(error.message);
    }
  },
  methods: {
    formatGameDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    goBack() {
      this.$router.go(-1); // Go back to the previous route
    },
  },
};
</script>

<style scoped>

.game-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.back-button {
  background-color: #4caf50;
  /* Green */
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.game-details {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  width: 100%;
}

h2.final-score {
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center; /* Center the final score */
}

p {
  color: #666;
  margin-bottom: 8px;
  text-align: center; /* Center other paragraphs */
}

.teams {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.home-team,
.visitor-team {
  flex: 1;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center team information */
}

h3 {
  color: #333;
  margin-bottom: 8px;
}
</style>