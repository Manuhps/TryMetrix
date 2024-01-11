<template>
  <div>
    <h1 class="titulo">Teams</h1>
    <div class="conference-table">
      <div class="west-table">
        <h2>Western Conference</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>City</th>
              <th>Division</th>
              <th>Info Team</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="team in westConference" :key="team.id">
              <td>{{ team.full_name }}</td>
              <td>{{ team.city }}</td>
              <td>{{ team.division }}</td>
              <td>
                <router-link :to="{ name: 'team', params: { id: team.id } }">Info</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="east-table">
        <h2>Eastern Conference</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>City</th>
              <th>Division</th>
              <th>Info Team</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="team in eastConference" :key="team.id">
              <td>{{ team.full_name }}</td>
              <td>{{ team.city }}</td>
              <td>{{ team.division }}</td>
              <td>
                <router-link :to="{ name: 'team', params: { id: team.id } }">Info</router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
    };
  },
  created() {
    try {
      this.nbaStore.fetchTeams();
    } catch (error) {
      alert(error.message);
    }
  },
  computed: {
    westConference() {
      return this.nbaStore.teams.filter(team => team.conference === 'West');
    },
    eastConference() {
      return this.nbaStore.teams.filter(team => team.conference === 'East');
    },
  },
};
</script>

<style>
  /* Estilo global */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
  }

  /* Estilo para o componente Teams */
  .conference-table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 200px;
    justify-content: space-between;
    margin-top: 20px;
  }

  /* Estilo para a tabela da Conferência Oeste */
  .west-table {
    width: 48%; /* Defina a largura desejada */
  }

  /* Estilo para a tabela da Conferência Este */
  .east-table {
    width: 48%; /* Defina a largura desejada */
  }

  /* Estilo para as tabelas */
  table {
    width: 300%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #4CAF50; /* Cor de fundo do cabeçalho da tabela */
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2; /* Cor de fundo para linhas pares */
  }

  /* Estilo para o hover nas linhas */
  tr:hover {
    background-color: #ddd;
  }

  /* Estilo para o título */
  .titulo {
    margin-top: 70px;
    text-align: center;
    font-size: 36px;
    line-height: 42px;
    font-weight: bold;
  }
</style>



