<template>
    <div id="hotel" ref="hotel" class="hotel">

    </div>
</template>

<script>
export default {
    props: ['type', 'destination'],
    mounted() {
        if (this.type === 'list') {
            const script = document.createElement('script');
            script.src = 'https://tp.media/content?currency=eur&trs=317751&shmarker=509924&type=compact&host=search.hotellook.com&locale=nl&limit=10&powered_by=true&nobooking=&id=1503&categories=center&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101';
            script.async = true;
            script.charset = 'utf-8';
            this.$refs['hotel'].appendChild(script);
        }else if (this.type === 'search'){
            const script = document.createElement('script');
            script.src = 'https://tp.media/content?currency=usd&trs=317751&shmarker=509924&show_hotels=true&powered_by=true&locale=en&searchUrl=search.hotellook.com&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=false&destination=Montreal%2C%20Canada&promo_id=7873&campaign_id=101';
            script.async = true;
            script.charset = 'utf-8';
            this.$refs['hotel'].appendChild(script);
        }
        
    }
}
</script>

<style scoped>
    
</style>