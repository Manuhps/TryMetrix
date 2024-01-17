<template>
  <div>
    <div class="container">
      <div class="teams-container">
        <div class="team">
          <img :src="gamesStore.getGames[this.gameId].logo_home" alt="Team 1" class="team-image" />
          <div class="team-info">
            <p class="team-name">{{ gamesStore.getGames[this.gameId].name_home }}</p>
            <p class="team-score" id = "Home-team">{{ gamesStore.getGames[this.gameId].score_home }}</p>
          </div>
        </div>

        <div class="team">
          <img :src="gamesStore.getGames[this.gameId].logo_away" alt="Team 2" class="team-image" />
          <div class="team-info">
            <p class="team-name">{{ gamesStore.getGames[this.gameId].name_away }}</p>
            <p class="team-score" id = "Away-team">{{ gamesStore.getGames[this.gameId].score_away }}</p>
          </div>
        </div>
      </div>
    </div>

    <h2>SCOREBOARD</h2>
    <div class="scoreboard-container">
      <div class="scoreboard-title">
        <img :src="gamesStore.getGames[this.gameId].logo_home" alt="Team Logo" class="team-image" />
        <p class="team-name-lineup">{{ gamesStore.getGames[this.gameId].name_home }}</p>
        <p class="scoreboard-label">K   A   D</p>
      </div>

      <div class="scoreboard-body">
        <div class="player-row orange-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_home).players[0].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_home[0].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[0].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[0].deaths }}</p>
        </div>
        <div class="player-row orange-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_home).players[1].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_home[1].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[1].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[1].deaths }}</p>
        </div>
        <div class="player-row orange-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_home).players[2].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_home[2].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[2].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[2].deaths }}</p>
        </div>
        <div class="player-row orange-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_home).players[3].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_home[3].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[3].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[3].deaths }}</p>
        </div>
        <div class="player-row orange-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_home).players[4].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_home[4].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[4].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_home[4].deaths }}</p>
        </div>
      </div>

      <div class="scoreboard-title">
        <img :src="gamesStore.getGames[this.gameId].logo_away" alt="Team Logo" class="team-image" />
        <p class="team-name-lineup">{{ gamesStore.getGames[this.gameId].name_away }}</p>
        <p class="scoreboard-label">K   A   D</p>
      </div>
      <div class="scoreboard-body">
        <div class="player-row blue-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_away).players[0].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_away[0].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[0].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[0].deaths }}</p>
        </div>
        <div class="player-row blue-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_away).players[1].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_away[1].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[1].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[1].deaths }}</p>
        </div>
        <div class="player-row blue-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_away).players[2].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_away[2].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[2].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[2].deaths }}</p>
        </div>
        <div class="player-row blue-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_away).players[3].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_away[3].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[3].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[3].deaths }}</p>
        </div>
        <div class="player-row blue-background">
          <p class="player-name">{{ teamData(gamesStore.getGames[this.gameId].name_away).players[4].nickname }}</p>
          <p class="player-stats">{{ gamesStore.getGames[this.gameId].scoreboard_away[4].kills }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[4].assists }}  {{ gamesStore.getGames[this.gameId].scoreboard_away[4].deaths }}</p>
        </div>
      </div>
    </div>


    <h2>LINEUP</h2>
    <div v-for="(team, index) in [gamesStore.getGames[this.gameId].name_home, gamesStore.getGames[this.gameId].name_away]" :key="index" class="lineup-container">
      <div class="team-lineup">
        <img :src="teamData(team).logo" alt="Team 1" class="team-image" />
        <div class="team-lineup-info">
          <p class="team-lineup-name">{{ team }}</p>
        </div>
      </div>
      <div class="team-lineup-players">
        <div v-for="(player, playerIndex) in teamData(team).players" :key="playerIndex" class="player">
          <img :src="player.image" alt="Player" class="player-image" />
          <p class="player">{{ player.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGamesStore } from '../stores/games';
import { useTeamsStore } from '../stores/teams';
import '@/assets/global.css';

export default {
  data() {
    return {
      gamesStore: useGamesStore(),
      teamsStore: useTeamsStore(),
      gameId: 0,
    };
  },
  mounted() {
    this.gameId = this.$route.params.id;
    setInterval(() => {
      // Every 10 seconds this happens
      this.updateScoreboard();
    }, 10000);
  },
  methods: {
    updateScoreboard() {
      if (this.gamesStore.getGames[this.gameId].score_away === 13) {
        // Checks if either team has won
        document.getElementById('Home-team').style.color = 'Red';
        document.getElementById('Away-team').style.color = 'Green';
      }else if(this.gamesStore.getGames[this.gameId].score_home == 13){
        document.getElementById('Home-team').style.color = 'Green';
        document.getElementById('Away-team').style.color = 'Red';
      }else{
        //Else it leads into changing the content
        this.ScenarioScoreboard()
      }
    },
    RandomNumber(Number){
      return Math.floor(Math.random() * Number);
    },
    ScenarioScoreboard(){
      switch (this.RandomNumber(2)) {
        //There is a 50% chance a team to win a round
        case 0:
        for (let i = 0; i < 5; i++) {
          this.gamesStore.getGames[this.gameId].scoreboard_away[this.RandomNumber(5)].kills +=1
          this.gamesStore.getGames[this.gameId].scoreboard_home[i].deaths +=1
          if(this.RandomNumber(4)==1){
            this.gamesStore.getGames[this.gameId].scoreboard_away[this.RandomNumber(5)].assists +=1
          }
          if(this.RandomNumber(2)==1){
            this.gamesStore.getGames[this.gameId].scoreboard_home[this.RandomNumber(5)].kills +=1
            this.gamesStore.getGames[this.gameId].scoreboard_away[i].deaths +=1
            if(this.RandomNumber(4)==1){
            this.gamesStore.getGames[this.gameId].scoreboard_home[this.RandomNumber(5)].assists +=1
            }
          }
        }
        setTimeout(() => {
          this.gamesStore.getGames[this.gameId].score_away += 1;
        }, 1000);
          return;

        case 1:
        for (let i = 0; i < 5; i++) {
          this.gamesStore.getGames[this.gameId].scoreboard_home[this.RandomNumber(5)].kills +=1
          this.gamesStore.getGames[this.gameId].scoreboard_away[i].deaths +=1
          if(this.RandomNumber(4)==1){
            this.gamesStore.getGames[this.gameId].scoreboard_home[this.RandomNumber(5)].assists +=1
          }
          if(this.RandomNumber(2)==1){
            this.gamesStore.getGames[this.gameId].scoreboard_away[this.RandomNumber(5)].kills +=1
            this.gamesStore.getGames[this.gameId].scoreboard_home[i].deaths +=1
            if(this.RandomNumber(4)==1){
            this.gamesStore.getGames[this.gameId].scoreboard_away[this.RandomNumber(5)].assists +=1
            }
          }
        }
        setTimeout(() => {
          this.gamesStore.getGames[this.gameId].score_home += 1; 
        }, 1000);
          return;
      }
    },
    teamData(teamName) {
      return this.teamsStore.getTeams.find((team) => team.name === teamName) || { logo: '', players: [] };
    },
  },
};
</script>

<style scoped>
div{
  color: #000;
  font-size: 22px;
  font-weight: 700;
  font-family: Arimo;;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-top: 150px;
  margin-bottom: 100px;
}

.teams-container {
  display: flex;
  flex-direction: column;
  background-color: #3b315c;
  border: 2px solid black;
  border-radius: 40px;
  padding: 10px;
  width: 70%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
}

.team {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.team-image {
  width: 50px;
  height: 50px;
}

.team-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.team-name {
  font-weight: bold;
  color: #fff8f0;
  font-size: 22px;
  font-weight: 700;
  font-family: Arimo;;
}

.team-name-lineup{
  font-weight: bold;
  color: #000;
  font-size: 22px;
  font-weight: 700;
  font-family: Arimo;;
}

.team-score {
  margin-right: 15px;
  text-align: right;
}

/* Scoreboard styles */

.scoreboard-container {
  margin-top: 20px;
  margin-bottom: 50px;
  border: 2px solid black;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.scoreboard-title {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #000;
  font-size: 22px;
  font-weight: 700;
  font-family: Arimo;;
}

.scoreboard-label {
  margin-left: auto;
  
}

.scoreboard-body {
  margin-top: 10px;
}

.player-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.blue-background {
  background-color: #0099ff;
}

.orange-background {
  background-color: orange;
}

.player-name {
  font-weight: bold;
  font-family: Source Sans Pro;
  font-size: 20px;
  margin-left: 10px;
}

.player-stats {
  margin-right: 8px;
  font-weight: bold;
  font-family: Source Sans Pro;
      font-size: 20px;
}

/* Lineup styles */

.lineup-container {
  margin-top: 20px;
  margin-bottom: 50px;
  border: 2px solid black;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.team-lineup {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
}


.team-lineup-info {
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: left;
  color: white;
  margin-left: 5px;
}

.team-lineup-name {
  font-weight: bold;
  color: #000;
  font-size: 22px;
  font-weight: 700;
  font-family: Arimo;;
}

.team-lineup-players {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}

.player {
  text-align: center;
  font-weight: bold;
  font-family: Source Sans Pro;
  font-size: 20px;
}

.player-image {
  width: 120px;
  height: auto;
  border-radius: 50%;
}


</style>