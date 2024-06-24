import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import ContactUsPage from "@/views/ContactUsPage";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import TermsofService from "@/views/TermsofService";
import TravelinfoPage from "@/views/TravelInfo";
import HotelsView from "@/views/HotelsPage";
import CookiesPolicy from "./views/cookiesPolicy.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            alias: '/',
            name: 'home'
        },
        {
            path: '/hotels',
            component: HotelsView,
            name: 'hotels'
        },
        {
            path: '/contact',
            component: ContactUsPage,
            name: 'contact'
        },
        {
            path: '/privacy',
            component: PrivacyPolicy,
            name: 'privacy'
        },
        {
            path: '/terms',
            component: TermsofService,
            name: 'terms'
        },
        {
            path: '/cookie-policy',
            component: CookiesPolicy,
            name: 'cookie'
        },
        {
            path: '/travel-info',
            component: TravelinfoPage,
            name: 'travel'
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router;