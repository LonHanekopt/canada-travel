<template>
    <div class="bg">
        <div class="container bg-wrapper">
            <div class="heading">
                <h1>Practical Information for Your Trip</h1>
                <p>Planning a trip to Canada is straightforward, thanks to its well-developed tourism infrastructure. The country is known for its safety, cleanliness, and friendly locals who are always ready to help. Whether you need information about visa requirements, transportation options, or accommodation, this guide has you covered. We provide practical tips to ensure your trip is smooth and enjoyable, from the moment you start planning to your return home</p>
            </div>
            <div class="heading">
                <h1>Join a Community of Explorers</h1>
                <p>This travel guide is more than just information—it's a community of explorers sharing their love for Canada. Through our blog, social media channels, and travel stories, we connect like-minded travelers who are passionate about discovering this incredible country. Share your experiences, ask for advice, and find inspiration in the journeys of others</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url("@/assets/alberta.jpg");
    background-attachment: scroll;
    color: #fff;
}

.bg .bg-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: top;
    padding-top: 5em;
    padding-bottom: 2em;
    justify-content: center;
    align-self: center;
    gap: 2em;
}

.bg .bg-wrapper .heading {
    flex: 0 0 40%;
    padding: 2em 0.4em;
    transition: all 0.2s;
    user-select: none;
}

.bg .bg-wrapper .heading:hover {
    transform: scale(1.03);
}

.bg .bg-wrapper .heading h1 {
    letter-spacing: 3px;
    font-size: 2rem;
}

.bg .bg-wrapper .heading p {
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1.2rem;
}

@media (max-width: 1200px) {
    .bg {
        height: auto;
        padding: 3em 0;
    }
}

@media (max-width: 800px) {
    .bg .bg-wrapper {
        flex-wrap: wrap;
        gap: 1rem;
    }

    .bg .bg-wrapper .heading {
        flex: 0 0 40%;
        padding: 2em 0.4em;
        transition: all 0.2s;
        user-select: none;
    }
}

@media (max-width: 500px) {
    .bg .bg-wrapper {
        display: block;
        flex-wrap: wrap;
        gap: 1rem;
    }
}

@media (max-width: 400px) {}
</style>