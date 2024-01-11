import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const NBA_API_URL = 'https://www.balldontlie.io/api/v1'

export const useNBAStore = defineStore('nbastore', {
  state: () => ({
    players:[],
    player:{},
    pages:[],
    games:[],
    game:{},
    teams:[],
    team:{},
    stats:{}
  }),
  getters: {
    getPlayers: (state) => state.players,
    getPlayer: (state) => state.player,
    getGames: (state) => state.games,
    getGame: (state) =>state.game,
    getTeams: (state) => state.teams,
    getTeam: (state) => state.team,
    getPlayersByTeam: (state) => (id) => state.players.filter(
      player => player.team.id === id
    ),
    getPlayerStats: (state) => state.stats
  },
  actions:{
    async fetchPlayers() {
      let perPage = 100;
      let current_page = 1
      try {
        /* const players = await api.get(NBA_API_URL, `players?per_page=${perPage}&page=${currentPage}`)
        this.players = players.data
        this.pages = players.meta
 */
        for (let i = current_page; i <= 10; i++) {
          const players = await api.get(NBA_API_URL, `players?per_page=${perPage}&page=${i}`)
          this.players = players.data
          this.pages = players.meta
        }
      } catch (error) {
        console.error(`Error fetching players:`, error)
        throw error
      }
    },
    async fetchPlayer(id) {
      try {
        const player = await api.get(NBA_API_URL, `players/${id}`)
        this.player = player
      } catch (error) {
        console.error(`Error fetching player:`, error)
        throw error
      }
    },
    async fetchGames(start_date,end_date) {
      try {
        const games = await api.get(NBA_API_URL, `games?dates[]=${start_date}&dates[]=${end_date}`)
        this.games = games.data
      } catch (error) {
        console.error(`Error fetching games:`, error)
        throw error
      }
    },
    async fetchGame(id) {
      try {
        const game = await api.get(NBA_API_URL, `games/${id}`)
        this.game = game
      } catch (error) {
        console.error(`Error fetching game:`, error)
        throw error
      }
    },
    async fetchTeams() {
      try {
        const teams = await api.get(NBA_API_URL, 'teams')
        this.teams = teams.data
      } catch (error) {
        console.error(`Error fetching teams:`, error)
        throw error
      }
    },
    async fetchTeam(id) {
      try {
        const team = await api.get(NBA_API_URL, `teams/${id}`)
        this.team = team
      } catch (error) {
        console.error(`Error fetching team:`, error)
        throw error
      }
    },
    async fetchPlayerStats(season, id) {
      try {
        const stats = await api.get(NBA_API_URL, `stats?seasons=[]=${season}&player_ids[]?${id}`)
        this.stats = stats.data
      } catch (error) {
        console.error(`Error fetching stats:`, error)
        throw error
      }
    },
    playersByTeam(id) {
      const players = this.players.filter(player => player.team.id == id)
      return players
    },
  }
})

