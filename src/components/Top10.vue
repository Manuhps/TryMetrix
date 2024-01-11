<template>
    <div class="container">
      <h1>Top 10 NBA Players</h1>
  
      <div class="row">
        <div class="col-md-4">
          <h2>Top Scorers</h2>
          <ul class="table">
            <li v-for="(player, index) in topScorers" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.pts }} points
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Assists</h2>
          <ul class="table">
            <li v-for="(player, index) in topAssists" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.ast }} assists
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Rebounders</h2>
          <ul class="table">
            <li v-for="(player, index) in topRebounders" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.reb }} rebounds
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Blockers</h2>
          <ul class="table">
            <li v-for="(player, index) in topBlockers" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.blk }} blocks
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Stealers</h2>
          <ul class="table">
            <li v-for="(player, index) in topStealers" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.stl }} steals
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
  
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useNBAStore } from '../stores/counter.js';
  import * as api from '../api/api.js';
  
  export default {
    setup() {
      const nbaStore = useNBAStore();
      const topScorers = ref([]);
      const topAssists = ref([]);
      const topBlockers = ref([]);
      const topStealers = ref([]);
      const topRebounders = ref([]);
  
      onMounted(async () => {
        try {
          const currentSeason = '2022';
          const stats = await api.get('https://www.balldontlie.io/api/v1', `stats?seasons[]=${currentSeason}`);
          topScorers.value = getTopScorers(stats.data);
          topAssists.value = getTopAssists(stats.data);
          topBlockers.value = getTopBlockers(stats.data);
          topStealers.value = gettopStealers(stats.data);
          topRebounders.value = gettopRebounders(stats.data);
        } catch (error) {
          console.error(`Error fetching top scorers:`, error);
        }
      });
  
      const getTopScorers = (stats) => {
        const sortedStats = stats.sort((a, b) => b.pts - a.pts);
        return sortedStats.slice(0, 10);
      };
  
      const getTopAssists = (stats) => {
        const sortedStats = stats.sort((a, b) => b.ast - a.ast);
        return sortedStats.slice(0, 10);
      };
  
      const getTopBlockers = (stats) => {
        const sortedStats = stats.sort((a, b) => b.blk - a.blk);
        return sortedStats.slice(0, 10);
      };
      const gettopRebounders = (stats) => {
        const sortedStats = stats.sort((a, b) => b.reb - a.reb);
        return sortedStats.slice(0, 10);
      };
      const gettopStealers = (stats) => {
        const sortedStats = stats.sort((a, b) => b.stl - a.stl);
        return sortedStats.slice(0, 10);
      };
  
      return {
        topScorers,
        topAssists,
        topBlockers,
        topRebounders,
        topStealers
      };
    },
  };
</script>
  
  <style scoped>
  /* Existing styles */
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin-top: 80px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  
  .col-md-4 {
    width: 30%; /* Adjust the width as needed */
  }
  
  .table {
    width: 100%;
    color: #333;
    border-collapse: collapse;
    background-color: #f8f9fa;
    margin-top: 20px;
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
  
  .top-three {
    color: red;
  }
</style>