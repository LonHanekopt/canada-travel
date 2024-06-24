<template>
     <div class="bg">
            <div class="heading">
                <h1>These are the Cities in Canada You Cannot Miss</h1>
                <p></p>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.bg{
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url("@/assets/alberta.jpg");
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 38vh;
}

.bg .heading{
    margin: auto;
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    justify-content: center;
}

.bg .heading h1{
    font-size: 2rem;
    letter-spacing: 2px;
}

.bg .heading p{
    font-size: 1.2rem;
    letter-spacing: 2px;
}

@media screen and (max-width: 800px) {
    .bg .heading {
        width: 70vw;
    }
}

@media screen and (max-width: 300px) {
    .bg .heading {
        width: 90vw;
    }
}
</style>