<template>
  <div class="container">
    <div  class="advertising-row">
      <div class="ad-col">
          <img src="../assets/nbaWP.png" alt="Advertisement" class="ad-image">
      </div>
    <div>
        <div class="date-input-container">
          <label for="start-date" style="color: white;">Select Date:</label>
          <input type="date" id="start-date" v-model="start_date" @change="handleStartDateChange" class="date-input" />
      </div>
        <div class="table-col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Home Team</th>
                <th scope="col">Visitor Team</th>
                <th scope="col">Game Info</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="game in nbaStore.getGames" :key="game.id">
                <td>{{ formatDate(game.date) }}</td>
                <td>{{ game.home_team.abbreviation }} - {{ game.home_team_score }}</td>
                <td>{{ game.visitor_team.abbreviation }} - {{ game.visitor_team_score }}</td>
                <td><button class="info-button" @click="verInfoJogo(game)">Ver</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { useNBAStore } from '../stores/counter.js';

export default {
  data() {
    return {
      nbaStore: useNBAStore(),
      start_date: new Date().toISOString().split('T')[0],
      end_date: '',
    };
  },
  created() {
    try {
      this.end_date = this.start_date;
      this.nbaStore.fetchGames(this.start_date, this.end_date);
    } catch (error) {
      alert(error.message);
    }
  },
  methods: {
    handleStartDateChange() {
      try {
        this.end_date = this.start_date;
        this.nbaStore.fetchGames(this.start_date, this.end_date);
      } catch (error) {
        alert(error.message);
      }
    },
    verInfoJogo(game) {
      this.$router.push({ name: 'game', params: { id: game.id } });
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin-top: 80px;
}

.table {
  width: 90%; 
  margin: 20px auto; 
  color: #333;
  border-collapse: collapse;
  background-color: #f8f9fa; 
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #e9ecef;
  font-weight: bold;
}

tbody tr:hover {
  background-color: #e2e8ed; 
}
.advertising-row {
  width: 100%;
  overflow: hidden;
}

.ad-col {
  margin-bottom: 20px; /* Adjust the margin as needed */
}

.ad-image {
  max-width: 50%; /* Ensure the image takes the full width of the column */
  height: auto;
  margin-left: 300px; /* Maintain aspect ratio */
}


.date-input-container {
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
}

.date-input {
  width: 500px; 
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 100px;
}

.info-button {
  background-color: #007bff; 
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
