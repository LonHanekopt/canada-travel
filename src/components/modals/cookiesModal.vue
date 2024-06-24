<template>
    <div class="modal" v-if="cookiesModalShow">
        <div class="flex container">
            <h1>{{ $t('cookies-h1') }}</h1>
            <div class="button">
                <a href="" class="btn" @click.prevent="cookiesModalShow = false">{{ $t('cookies-p') }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cookiesModalShow: false,
        }
    },
    mounted() {
        this.cookiesModalShow = false;
    }
}
</script>

<style scoped>
.modal {
    z-index: 100;
    position: fixed;
    bottom: 0;
    height: 100px;
    background-color: rgb(29, 34, 37);
    color: #fff;
    width: 100%;
    text-transform: capitalize;
}

.flex {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3em;
}

.flex h1 {
    font-size: 1.4rem;
    letter-spacing: 2px;
    font-weight: 300;
}

@media (max-width: 1200px) {}

@media (max-width: 800px) {}

@media (max-width: 500px) {
    .flex h1 {
        font-size: 1rem;
    }
    .flex .btn{
        font-size: 0.6rem;
    }
}

@media (max-width: 400px) {
    .flex h1 {
        font-size: 0.7rem;
        letter-spacing: 2px;
        font-weight: 300;
    }
}
</style>