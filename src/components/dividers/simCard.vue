<template>
    <div class="bg-2">
        <div class="heading container">
            <div class="icon-holder">
                <div class="icon">
                    <img src="@/assets/sim.png" alt="">
                </div>
            </div>
            <h1>{{ $t('simcard-divider-text') }}</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-2 {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url("@/assets/labrador.jpg");
    background-attachment: scroll;
    background-position: top;
    color: #fff;
    position: relative;
    padding: 3em;
}

.heading {
    margin: auto;
    border-radius: 3rem;
    padding: 2em 4em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.heading .icon-holder {
    flex: 0 0 50%;
}

.heading .icon-holder .icon {
    width: 45%;
    margin: 0 auto;
}

.heading h1 {
    font-size: 1.3rem;
    letter-spacing: 2px;
}

@media (max-width: 1200px) {}

@media (max-width: 800px) {
    .bg-2 {
        padding: 2em 0;
    }

    .heading {
        border-radius: 3rem;
        padding: 2em 0;
    }

    .heading .icon-holder {
        flex: 0 0 40%;
    }
}

@media (max-width: 500px) {
    .heading .icon-holder .icon {
        width: 35%;
        margin: 0 auto;
    }

    .heading {
        border-radius: 3rem;
        padding: 1em 4em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3em;
    }
}
</style>