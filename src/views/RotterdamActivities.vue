<template>
    <div class="container">
        <div class="heading">
            <h1>{{$t('rotterdam-activities-header-text')}}</h1>
        </div>
        <div class="image">
            <img src="@/assets/alberta.jpg" alt="amsterdam">
        </div>

        <div class="flex">
            <div class="card">
    <h1>{{$t('rotterdam-activities-heading-1')}}</h1>
    <p>{{$t('rotterdam-activities-content-1')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-2')}}</h1>
    <p>{{$t('rotterdam-activities-content-2')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-3')}}</h1>
    <p>{{$t('rotterdam-activities-content-3')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-4')}}</h1>
    <p>{{$t('rotterdam-activities-content-4')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-5')}}</h1>
    <p>{{$t('rotterdam-activities-content-5')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-6')}}</h1>
    <p>{{$t('rotterdam-activities-content-6')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-7')}}</h1>
    <p>{{$t('rotterdam-activities-content-7')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-8')}}</h1>
    <p>{{$t('rotterdam-activities-content-8')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-9')}}</h1>
    <p>{{$t('rotterdam-activities-content-9')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-10')}}</h1>
    <p>{{$t('rotterdam-activities-content-10')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-11')}}</h1>
    <p>{{$t('rotterdam-activities-content-11')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-12')}}</h1>
    <p>{{$t('rotterdam-activities-content-12')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-13')}}</h1>
    <p>{{$t('rotterdam-activities-content-13')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-14')}}</h1>
    <p>{{$t('rotterdam-activities-content-14')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-15')}}</h1>
    <p>{{$t('rotterdam-activities-content-15')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-16')}}</h1>
    <p>{{$t('rotterdam-activities-content-16')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-17')}}</h1>
    <p>{{$t('rotterdam-activities-content-17')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-18')}}</h1>
    <p>{{$t('rotterdam-activities-content-18')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-19')}}</h1>
    <p>{{$t('rotterdam-activities-content-19')}}</p>
</div>

<div class="card">
    <h1>{{$t('rotterdam-activities-heading-20')}}</h1>
    <p>{{$t('rotterdam-activities-content-20')}}</p>
</div>

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

p {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-top: 1em;
}

.image {
    width: 65%;
    margin: 0 auto;
}

.image img {
    border-radius: 2rem;
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