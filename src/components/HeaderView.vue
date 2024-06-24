<template>
    <div class="bg">
        <div class="wrapper container">
            <h1>Your Ultimate Canada Travel Guide
            </h1>
            <p>Canada, the second-largest country in the world, offers an incredible variety of experiences for every traveler. From its bustling cities to its serene landscapes, Canada promises an unforgettable journey. This guide is designed to help you discover the best of what this vast nation has to offer, ensuring your trip is filled with memorable moments</p>
            <!-- <div class="button">
                <a class="btn" href="#learn-more">
                    Learn More
                </a>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5)), url("@/assets/alberta.jpg");
    color: #fff;
    background-position: center;
    height: 80vh;
    background-attachment: scroll;
}

.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.wrapper h1 {
    width: 100%;
    letter-spacing: 2px;
}

.wrapper p {
    letter-spacing: 1px;
    font-size: 1.3rem;
    font-weight: 300;
    width: 65%;
}

@media (max-width: 1200px) {}

@media (max-width: 800px) {
    .bg {
        height: auto;
        padding: 3rem 0;
    }
}

@media (max-width: 500px) {}
</style>