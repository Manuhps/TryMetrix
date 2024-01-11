<template>
  <div class="center-container">
    <div class="team-details">
      <h2>{{ team.full_name }}</h2>
      <p>City: {{ team.city }}</p>
      <p>Conference: {{ team.conference }}</p>
      <p>Division: {{ team.division }}</p>
      <p>Abbreviation: {{ team.abbreviation }}</p>
      <p>Team Name: {{ team.name }}</p>
      <br>
      <button @click="goBack" class="back-button">Back</button>
    </div>
    <br>
    <h1>Plantel - {{ team.full_name }}</h1>
    <table id="playersTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Info Jogador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.first_name }}</td>
          <td>{{ player.last_name }}</td>
          <td>{{ player.position }}</td>
          <td>
            <router-link :to="{ name: 'player', params: { id: player.id } }">Info</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useNBAStore } from '../stores/counter.js';

export default {
  data() {
    return {
      nbaStore: useNBAStore(),
      team: null,
      players: [],
    };
  },
  async created() {
    try {
      await this.nbaStore.fetchTeam(this.$route.params.id);
      this.team = this.nbaStore.getTeam;
      await this.nbaStore.fetchPlayers();
      this.players = this.nbaStore.playersByTeam(parseInt(this.$route.params.id));
    } catch (error) {
      console.error(error.message);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
  margin: 0;
  padding: 0;
}

/* Estilo para o container centralizado */
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
}

/* Estilo para a equipe detalhada */
.team-details {
  margin-bottom: 20px;
}

/* Estilo para o título da equipe detalhada */
h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Estilo para os detalhes da equipe */
p {
  margin-bottom: 5px;
}

/* Estilo para o botão de voltar */
.back-button {
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

/* Estilo para a tabela de jogadores */
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
</style>