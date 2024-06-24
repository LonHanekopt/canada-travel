<template>
    <div class="container">

        <div class="heading">
            <h1>Why Canada is an Amasing Choise For Travelers</h1>
            <p>Canada is a land of diversity, both in its geography and culture. The country's ten provinces and three
                territories each offer unique attractions. From the stunning coastal regions of British Columbia and the
                Maritime Provinces to the rugged beauty of the Prairies and the historical charm of Quebec and Ontario,
                there is something for everyone. Learn about the distinct characteristics of each region and plan your
                itinerary to make the most of your visit</p>

            <h1>1. The Canadas Breathtaking Natural Beauty</h1>
            <p>Imagine standing at the edge of the Niagara Falls, feeling the mist on your face, or hiking through the
                lush forests of British Columbia, where each trail promises a new discovery. Canada is home to some of
                the world's most breathtaking natural wonders. The Rocky Mountains, with their majestic peaks and
                pristine lakes, provide the perfect backdrop for both adventure and relaxation. The expansive Great
                Plains offer a serene escape, while the coastal beauty of the Maritimes captivates with its rugged
                cliffs and tranquil bays.
            </p>

            <h1>2. Embrace the Urban Vibe</h1>
            <p>Canada's cities are a blend of historic charm and modern innovation. In Toronto, the iconic CN Tower
                pierces the skyline, offering panoramic views of a city teeming with life. Vancouver, nestled between
                mountains and the Pacific Ocean, is known for its vibrant arts scene and culinary delights. Montreal,
                with its cobblestone streets and rich history, feels like a slice of Europe in North America. Each city
                has its unique character, inviting you to explore its neighborhoods, indulge in its cuisine, and
                experience its culture.
            </p>

            <h1>3. A Cultural Mosaic</h1>
            <p>
                Canada prides itself on being a cultural mosaic, where diversity is celebrated and different cultures
                come together to
                create a rich tapestry of traditions and customs. This diversity is evident in the numerous festivals,
                events, and
                cultural landmarks found throughout the country. From the French influence in Quebec to the indigenous
                heritage
                celebrated across the land, Canada's cultural landscape is both varied and deeply rooted. Attend a
                powwow, enjoy the
                music at a jazz festival, or visit a museum to gain insight into the country's history and traditions.
            </p>

            <h1>4. A Year-Round Destination</h1>
            <p>
                Canada is a year-round destination, offering different experiences in every season. In the winter, the
                country transforms
                into a wonderland of snow and ice. Skiing in Whistler, ice skating on Ottawa's Rideau Canal, or
                witnessing the northern
                lights in the Yukon are just a few of the winter activities that await. Spring and summer bring milder
                weather, perfect
                for hiking, camping, and exploring the national parks. Fall, with its stunning foliage, offers scenic
                drives and harvest
                festivals.
            </p>
            
            <h1>To Summerize</h1>
            <p>
                Canada is a destination that offers something for everyone. If you're drawn by the stunning
                landscapes, the vibrant
                cities, or the rich cultural heritage, your journey here will be one to remember. This guide is your
                starting point,
                providing the information and inspiration you need to plan your perfect trip. Welcome to Canada your
                adventure awaits.
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.heading {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 75%;
    margin: 0 auto;

}

.heading h1 {
    font-size: 2.4rem;
}

.heading p {
    font-size: 1.3rem;
    text-align: left;
}

.flex .text h1 {
    font-size: 1.7rem;
}

.flex .text p {
    font-size: 0.8rem;
}


@media (max-width: 1200px) {
    .heading p {
        width: 75%;
    }
}

@media (max-width: 1024px) {
    .flex {}
}

@media (max-width: 800px) {
    .heading {
        padding-top: 3rem;
        gap: 2rem;
    }

    .heading h1 {
        font-size: 2.5rem;
    }

    .heading p {
        font-size: 1.4rem;
    }
}

@media (max-width: 500px) {}
</style>