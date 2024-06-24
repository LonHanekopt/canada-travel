<template>
    <div v-if="type === 1" id="aviasales" ref="aviasales">
        
    </div>
    <div v-if="type === 2" id="aviasales2" ref="aviasales2">
        
    </div>
    <div v-if="type === 3" id="aviasales3" ref="aviasales3">
        
    </div>
    <div v-if="type === 4" id="aviasales4" ref="aviasales4">
        
    </div>
    <div v-if="type === 5" id="aviasales5" ref="aviasales5">
        
    </div>
</template>

<script>
export default {
    props: ['type', 'destination', 'origin'],
    data() {
        return {
        }
    },
    mounted() {
        if (this.type === 1) {
            const script = document.createElement('script');
            script.src = 'https://tp.media/content?currency=eur&trs=317751&shmarker=509924&show_hotels=true&powered_by=true&locale=nl&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100';
            script.async = true;
            script.charset = 'utf-8';
            this.$refs['aviasales'].appendChild(script);
        }
        else if (this.type === 2) {
            const script2 = document.createElement('script');
            script2.src = `https://tp.media/content?trs=317751&shmarker=509924&color_button=%23FF0000&target_host=www.aviasales.com%2Fsearch&locale=en&powered_by=true&origin=${this.origin}&destination=${this.destination}&with_fallback=true&non_direct_flights=false&min_lines=5&border_radius=0&color_background=%23FFFFFF&color_text=%23000000&color_border=%23FFFFFF&promo_id=2811&campaign_id=100`;
            script2.async = true;
            script2.charset = 'utf-8';
            this.$refs['aviasales2'].appendChild(script2);
        } else if (this.type === 3) {
            const script3 = document.createElement('script');
            script3.src = 'https://tp.media/content?currency=eur&trs=317751&shmarker=509924&searchUrl=www.aviasales.com%2Fsearch&locale=nl&powered_by=true&origin=LON&destination=BKK&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%230C73FE&color_background=%23FFFFFF&dark=%23000000&light=%23FFFFFF&achieve=%2345AD35&promo_id=4041&campaign_id=100';
            script3.async = true;
            script3.charset = 'utf-8';
            this.$refs['aviasales3'].appendChild(script3);
        }
        else if (this.type === 4) {
            const script4 = document.createElement('script');
            script4.src = `https://tp.media/content?currency=eur&trs=317751&shmarker=509924&destination=${this.destination}&target_host=www.aviasales.com%2Fsearch&locale=nl&limit=10&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100`;
            script4.async = true;
            script4.charset = 'utf-8';
            this.$refs['aviasales4'].appendChild(script4);
        } else if (this.type === 5) {
            const script5 = document.createElement('script');
            script5.src = 'https://tp.media/content?currency=eur&trs=317751&shmarker=509924&lat=&lng=&powered_by=true&search_host=www.aviasales.com%2Fsearch&locale=en&origin=LON&value_min=0&value_max=1000000&round_trip=true&only_direct=false&radius=1&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=true&primary=%233FABDB&secondary=%233FABDB&light=%23ffffff&width=1500&height=500&zoom=3&promo_id=4054&campaign_id=100';
            script5.async = true;
            script5.charset = 'utf-8';
            this.$refs['aviasales5'].appendChild(script5);
        }
    }
}
</script>

<style scoped></style>
