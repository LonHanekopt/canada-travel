<template>
    <div class="nav">
        <div class="wrapper">
            <div class="logo"><img src="@/assets/logo.jpg" alt="#"></div>
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <RouterLink to="/">{{ $t('Home') }}</RouterLink>
                </li>
                <li class="navbar-item dropdown" v-if="this.$route.path == '/'">
                    <a style="display: flex;" @click.prevent>Explore Regions <span
                            class="material-symbols-outlined">arrow_drop_down</span></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><a href="#bc">British Columbia</a></li>
                        <li class="dropdown-item"><a href="#alberta">Alberta</a></li>
                        <li class="dropdown-item"><a href="#sas">Saskatchewan</a></li>
                        <li class="dropdown-item"><a href="#manitoba">Manitoba</a></li>
                        <li class="dropdown-item"><a href="#ontario">Ontario</a></li>
                        <li class="dropdown-item"><a href="#quebec">Quebec</a></li>
                        <li class="dropdown-item"><a href="#brunswick">New Brunswick</a></li>
                        <li class="dropdown-item"><a href="#scotia">Nova Scotia</a></li>
                        <li class="dropdown-item"><a href="#edward">Prince Edward Island</a></li>
                        <li class="dropdown-item"><a href="#labrador">Newfoundland and Labrador</a></li>

                    </ul>
                </li>
                <li class="navbar-item" v-if="this.$route.path !== '/'">
                    <router-link to="/">Explore Regions</router-link>
                </li>
                <li class="navbar-item">
                    <a href="#food">Cuisine & Restaurants</a>
                </li>
                <li class="navbar-item">
                    <router-link to="/hotels">Hotels</router-link>
                </li>
                <li class="navbar-item">
                    <RouterLink id="" to="/travel-info">{{ $t('travelinfo') }}</RouterLink>
                </li>
                <li class="navbar-item dropdown">
                    <a style="display: flex;" @click.prevent>{{ $t('Infomration') }} <span
                            class="material-symbols-outlined">arrow_drop_down</span></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><router-link to="/contact">{{ $t('contact-us') }}</router-link></li>
                        <li class="dropdown-item"><router-link to="/privacy">Privacy</router-link></li>
                        <li class="dropdown-item"><router-link to="/terms">Terms of Service</router-link></li>
                        <li class="dropdown-item"><router-link to="/cookie-policy">Cookie Policy</router-link></li>
                    </ul>
                </li>
            </ul>
            <div class="mobile-menu" @click="showMenu">
                <img src="@/assets/menu.png" alt="">
            </div>
        </div>
    </div>

    <aside ref="sidemenu" v-show="show">
        <div class="sidemenu">
            <div class="items">
                <span class="material-symbols-outlined" @click.prevent="show = false"> close </span>
                <ul>
                    <li>
                        <RouterLink id="explore-regions" to="/">{{ $t('Home') }}</RouterLink>
                    </li>
                    <li v-if="this.$route.path == '/'">
                        <a @click.prevent>Explore Regions</a>
                        <div class="indent">
                    <li class="dropdown-item"><a href="#bc">British Columbia</a></li>
                    <li class="dropdown-item"><a href="#alberta">Alberta</a></li>
                    <li class="dropdown-item"><a href="#sas">Saskatchewan</a></li>
                    <li class="dropdown-item"><a href="#manitoba">Manitoba</a></li>
                    <li class="dropdown-item"><a href="#ontario">Ontario</a></li>
                    <li class="dropdown-item"><a href="#quebec">Quebec</a></li>
                    <li class="dropdown-item"><a href="#brunswick">New Brunswick</a></li>
                    <li class="dropdown-item"><a href="#scotia">Nova Scotia</a></li>
                    <li class="dropdown-item"><a href="#edward">Prince Edward Island</a></li>
                    <li class="dropdown-item"><a href="#labrador">Newfoundland and Labrador</a></li>
            </div>
            </li>
            <li v-if="this.$route.path !== '/'">
                <router-link to="/">Explore Regions</router-link>

            </li>
            <li>
                <a href="#food">Cuisine & Restaurants</a>
            </li>
            <li>
                <router-link to="/hotels">Hotels</router-link>
            </li>
            <li><router-link to="/travel-info"></router-link></li>
            <li>
                <a href="" @click.prevent>Information</a>
                <div class="indent">
            <li class="dropdown-item"><router-link to="/privacy">Privacy</router-link></li>
            <li class="dropdown-item"><router-link to="/terms">Terms of Service</router-link></li>
            <li class="dropdown-item"><router-link to="/cookie-policy">Cookie Policy</router-link></li>
        </div>
        </li>
        </ul>
        </div>
        </div>
    </aside>
</template>

<script>

export default {
    data() {
        return {
            show: false
        }
    },
    mounted() {
    },
    methods: {
        showMenu() {
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
* {
    list-style: none;
}

aside {
    text-align: left;
    /* display: none; */
}

aside .sidemenu * {
    z-index: 100 !important;
}

.items {
    overflow-y: scroll;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.748);
    height: 100%;
    position: fixed;
    width: 30%;
    color: white;
}

.items span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.4rem;
}

.items ul {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    justify-content: flex-start;
    gap: 1rem;
}

.items a {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
}

.items .indent {
    margin-top: 0.3rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.4em 0;
}

.items .indent a {
    font-size: 0.7rem;
    font-weight: 400;
    text-align: left;
}

.items a.active {
    color: #1fe260;
}

.mobile-menu {
    height: 30px;
    display: none;
}

.mobile-menu span {
    font-size: 2rem;
}

select {
    border: 1px solid rgb(97, 189, 181);
    padding: 1em 2em;
    border-radius: 5px;
}

select:focus {
    outline: none;
}

.nav {}

.nav .wrapper {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.nav .wrapper .logo {
    width: 70px;
    cursor: pointer;
}

.nav .wrapper .logo img {
    border-radius: 1rem;
}

.nav .wrapper .links {
    display: inherit;
    gap: 1rem;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.navbar-item {
    position: relative;
}

.navbar-item a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
}

.navbar-item a:hover {
    color: rgb(73, 255, 137);
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--white);
    padding: 0.5rem 0;
}

.dropdown-item a {
    padding: 0.5rem 1rem;
    display: block;
}

.dropdown-item a:hover {
    background-color: #e3e3e3;
}

.navbar-item.dropdown:hover .dropdown-menu {
    display: block;
}

@media screen and (max-width: 800px) {
    .nav .wrapper {
        justify-content: space-between;
        padding: 0 3em;
    }

    .flex {
        display: flex;
        gap: 2em;
    }

    .mobile-menu {
        display: block;
    }

    .navbar-menu {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 45%;
    }

    .items a {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    .items .indent a {
        font-size: 0.7rem;
        font-weight: 400;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 55%;
    }

    .items ul {
        align-items: center;
    }
}
</style>