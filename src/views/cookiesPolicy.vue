<template>
    <div class="container">
        <div class="heading">
            <h1>{{ $t('Cookie Policy') }}</h1>
        </div>

        <div class="flex">
            <h2>{{ $t('cookiesPolicy-flex-1') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-2') }}</p>
            <p>{{ $t('cookiesPolicy-flex-3') }}</p>

            <h2>{{ $t('cookiesPolicy-flex-4') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-5') }}</p>
            <p>{{ $t('cookiesPolicy-flex-6') }}</p>
            <p>{{ $t('cookiesPolicy-flex-7') }}</p>

            <h2>{{ $t('cookiesPolicy-flex-8') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-9') }}</p>
            <ul>
                <li>{{ $t('cookiesPolicy-flex-10') }}</li>
                <li>{{ $t('cookiesPolicy-flex-11') }}</li>
                <li>{{ $t('cookiesPolicy-flex-12') }}</li>
                <li>{{ $t('cookiesPolicy-flex-13') }}</li>
                <li>{{ $t('cookiesPolicy-flex-14') }}</li>
                <li>{{ $t('cookiesPolicy-flex-15') }}</li>
                <li>{{ $t('cookiesPolicy-flex-16') }}</li>
            </ul>

            <h2>{{ $t('cookiesPolicy-flex-17') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-18') }}</p>
            <p>{{ $t('cookiesPolicy-flex-19') }}</p>
            <p>{{ $t('cookiesPolicy-flex-20') }}</p>
            <p>{{ $t('cookiesPolicy-flex-21') }}</p>
            <p>{{ $t('cookiesPolicy-flex-22') }}</p>

            <h2>{{ $t('cookiesPolicy-flex-23') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-24') }}</p>
            <ul>
                <li>{{ $t('cookiesPolicy-flex-25') }}</li>
                <li>{{ $t('cookiesPolicy-flex-26') }}</li>
                <li>{{ $t('cookiesPolicy-flex-27') }}</li>
                <li>{{ $t('cookiesPolicy-flex-28') }}</li>
                <li>{{ $t('cookiesPolicy-flex-29') }}</li>
            </ul>
            <p>{{ $t('cookiesPolicy-flex-30') }}</p>
            <p>{{ $t('cookiesPolicy-flex-31') }}</p>

            <h2>{{ $t('cookiesPolicy-flex-32') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-33') }}</p>

            <h2>{{ $t('cookiesPolicy-flex-34') }}</h2>
            <p>{{ $t('cookiesPolicy-flex-35') }}</p>
            <p>{{ $t('cookiesPolicy-flex-36') }}</p>
            <p>{{ $t('cookiesPolicy-flex-37') }}</p>
            <p>{{ $t('cookiesPolicy-flex-38') }}</p>
            <ul>
                <li>{{ $t('cookiesPolicy-flex-39') }}</li>
                <li>{{ $t('cookiesPolicy-flex-40') }}</li>
                <li>{{ $t('cookiesPolicy-flex-41') }}</li>
                <li>{{ $t('cookiesPolicy-flex-42') }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 300;
}

h2 {
    font-size: 1.3rem;
}

p {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-top: 1em;
}

.heading {
    /* border: 1px solid black; */
    padding: 3em;
}

.heading h1 {
    font-size: 2.5rem;
    font-weight: 400;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
    padding: 2rem 2rem;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1rem;
    }

    .heading h1 {
        font-size: 2rem;
    }
}
</style>