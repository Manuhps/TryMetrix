<template>
    <div class="center-container">
      <div v-if="player" class="player-info">
        <h1>{{ player.first_name }} {{ player.last_name }}</h1>
        <h2>Team: {{ player.team.full_name }}</h2>
        <h2>Position: {{ player.position }}</h2>
        <h2>Height: {{ player.height_feet }}'{{ player.height_inches }}</h2>
        <h2>Weight: {{ player.weight_pounds }} lbs</h2>
        <h2>City: {{ player.team.city }}</h2>
        <h2>Conference: {{ player.team.conference }}</h2>
        <h2>Division: {{ player.team.division }}</h2>
      </div>
      <div class="stats-container">
        <h1>Estatisticas do Jogador</h1>
        <div class="ano">
          <label id="season" for="ano">Season:</label>
          <select v-model="season" @change="handleSeasonChange">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </select>
        </div>
        <table id="playersTable">
          <thead>
            <tr>
              <th>Points</th>
              <th>Assists</th>
              <th>Rebounds</th>
              <th>Blocks</th>
              <th>Steals</th>
              <th>Turnovers</th>
              <th>Minutes</th>
              <th>FGM</th>
              <th>FGA</th>
              <th>FG%</th>
              <th>3PM</th>
              <th>3PA</th>
              <th>3P%</th>
              <th>FTM</th>
              <th>FTA</th>
              <th>FT%</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in stats" :key="stat.id">
              <td>{{ stat.pts }}</td>
              <td>{{ stat.ast }}</td>
              <td>{{ stat.reb }}</td>
              <td>{{ stat.blk }}</td>
              <td>{{ stat.stl }}</td>
              <td>{{ stat.turnover }}</td>
              <td>{{ stat.min }}</td>
              <td>{{ stat.fgm }}</td>
              <td>{{ stat.fga }}</td>
              <td>{{ stat.fg_pct }}</td>
              <td>{{ stat.fg3m }}</td>
              <td>{{ stat.fg3a }}</td>
              <td>{{ stat.fg3_pct }}</td>
              <td>{{ stat.ftm }}</td>
              <td>{{ stat.fta }}</td>
              <td>{{ stat.ft_pct }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="back-button">
        <router-link :to="{ name: 'team', params: { id: player.team.id } }">Back</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { useNBAStore } from '../stores/counter.js';
  
  export default {
    data() {
      return {
        nbaStore: useNBAStore(),
        player: null,
        stats: null,
        season: 2023,
        
      };
    },
    async created() {
      try {
        await this.nbaStore.fetchPlayer(this.$route.params.id);
        this.player = this.nbaStore.getPlayer;
        console.log(this.player);

        await this.nbaStore.fetchPlayerStats(this.$route.params.id);
        this.stats = this.nbaStore.getPlayerStats;
      } catch (error) {
        console.log(error.message);
      }
    },
    methods: {
      async handleSeasonChange() {
        try {
          await this.nbaStore.fetchPlayerStats(this.$route.params.id, this.season);
          this.stats = this.nbaStore.getPlayerStats;
        } catch (error) {
          console.log(error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo global */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  
  /* Estilo para o container centralizado */
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
}
  
  /* Estilo para a equipe detalhada */
  .player-info {
    margin-bottom: 20px;
  }
  
  /* Estilo para o título da equipe detalhada */
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* Estilo para os detalhes da equipe */
  h2 {
    margin-bottom: 5px;
  }
  
  /* Estilo para a tabela de estatísticas */
  #playersTable {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  #playersTable th,
  #playersTable td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  #playersTable th {
    background-color: #4CAF50;
    color: white;
  }
  
  #playersTable tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  /* Estilo para o hover nas linhas */
  #playersTable tr:hover {
    background-color: #ddd;
  }
  
  /* Estilo para a seleção de ano */
  .ano {
    margin-top: 10px;
  }
  
  /* Estilo para o botão de voltar */
  .back-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50; 
  color: white; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

/* Estilo para o hover no botão de voltar */
.back-button:hover {
  background-color: #45a049;
}
</style>