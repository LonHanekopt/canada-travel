<template>
    <div id="kiwi" ref="kiwi">

    </div>
</template>

<script>
export default {
    props: ['lang'],
    mounted() {
        const script = document.createElement('script');
        script.src = `https://c1.travelpayouts.com/content?currency=EUR&trs=317751&shmarker=509924&locale=en&from=&to=&country=Netherlands&powered_by=true&height=&wtype=true&transfers_limit=10&bg_color=%23FFFFff&button_color=%2321f166&button_font_color=%23ffffff&button_hover_color=%231fe260&border_color=%23ff8e00&input_font_color=%234A4A4A&input_bg_color=%23ffffff&input_label_color=%23c8ced4&icon_bg_color=%23FF8E00&icon_arrow_color=%23FFFFFFff&icon_bg_color_mobile=%231ADCF9ff&icon_arrow_color_mobile=%23FFFFFFFF&autocomplete_font_color=%23373f47&autocomplete_bg_color=%23ffffff&autocomplete_font_color_active=%23ffffff&autocomplete_bg_color_active=%231FE260&loader_color=%23f9ac1a&empty_color=%23373f47&info_bg_color=%231fe260&info_icon_color=%23FFFFFFff&info_caption_color=%234a4a4a&class_background=%23ffffff&class_font_color=%23373f47&class_header_color=%236c7c8c&class_button_background=%2326a65b&class_button_font_color=%23ffffff&class_button_background_hover=%230274da&class_comment_background=%23bfc0c4&class_comment_font=%23bfc0c4&more_background=&more_background_hover=&more_font_color=%230267c1&notification_background=%23f6f1ec&notification_border_color=%23e37f17&notification_color=%23373f47&transfer_background=%23f6f7f8&transfer_background_hover=%23f6f7f8&transfer_font_color=%23373f47&promo_id=2949`;
        script.async = true;
        script.charset = 'utf-8';
        this.$refs['kiwi'].appendChild(script);
    }
}
</script>

<style scoped></style>