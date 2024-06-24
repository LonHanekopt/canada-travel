<template>
    <div id="airalo" ref="airalo">

    </div>
</template>

<script>
export default {
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://tp.media/content?trs=317751&shmarker=509924&locale=en&powered_by=true&color_button=%23ff8e00&color_focused=%23ff991a&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=7&plain=false&no_labels=true&promo_id=8588&campaign_id=541';
        script.async = true;
        script.charset = 'utf-8';
        this.$refs['airalo'].appendChild(script);
    }
}
</script>

<style scoped></style>