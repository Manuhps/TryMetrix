<template>
    <div class="container">
        <h1>Main news for {{ teamName }}</h1>
        <br>
        <div v-if="news.length > 0" class="news-list">
            <div class="news-item" v-for="item in news" :key="item.id">
                <div class="news-card">
                    <div class="news-item-content">
                        <h3>{{ item.title }}</h3>
                        <p class="news-source">Source: {{ displaySource(item.source) }}</p>
                        <a :href="item.url" target="_blank" class="read-more-link">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="no-news-message">No news available.</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useTeamsStore } from '@/stores/teams';
import { useRoute } from 'vue-router'; // Import useRoute

export default {
    name: 'TeamNews',

    setup() {
        const newsStore = useNewsStore();
        const teamsStore = useTeamsStore();
        const route = useRoute(); // Use useRoute to access route information
        const news = ref([]);
        const teamName = ref('');

        const getTeamName = async () => {
            console.log('Route Params:', route.params);
            const teamId = route.params.id;
            console.log('Team ID:', teamId);
            teamName.value = await teamsStore.getTeamNameById(teamId);
            console.log('Team Name:', teamName.value)
        };

        const fetchNews = async () => {
            const teamName = route.params.id;
            await newsStore.fetchNewsByTeam(teamName);
            news.value = newsStore.news;
        };

        const displaySource = (source) => {
            const sourceMappings = {
                'nba': 'NBA',
                'nba_canada': 'NBA Canada',
                'espn': 'ESPN',
                'bleacher_report': 'Bleacher Report',
                'yahoo': 'Yahoo',
                'slam': 'SLAM',
            };

            return sourceMappings[source] || source;
        };

        onMounted(async () => {
            await fetchNews();
            await getTeamName();
        });

        return {
            news,
            fetchNews,
            displaySource,
            teams: teamsStore.teams,
            teamName,
            teamId: route.params.id,
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

.news-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.news-item {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
}

.news-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-item-content {
    padding: 16px;
}

h3 {
    font-weight: 700;
    margin-bottom: 8px;
}

.news-source {
    color: #777;
    margin-bottom: 8px;
}

.read-more-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
}

.no-news-message {
    margin: 20px 0;
    font-style: italic;
    color: #777;
}
</style>
