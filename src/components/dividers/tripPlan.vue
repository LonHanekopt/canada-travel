<template>
    <div class="bg-2">
        <div class="heading container">
            <h1>{{ $t('planTrip-h1') }}</h1>
            <p>{{ $t('planTrip-p') }}</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-2 {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url("@/assets/manitoba.jpg");
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 45vh;
}

.bg-2 .heading {
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    justify-content: center;
}

.bg-2 .heading h1 {
    font-size: 2.3rem;
    letter-spacing: 2px;
}

.bg-2 .heading p {
    font-size: 1.2rem;
    letter-spacing: 2px;
}

@media screen and (max-width: 800px) {
    .bg-2 .heading {
        width: 70vw;
    }
}
</style>