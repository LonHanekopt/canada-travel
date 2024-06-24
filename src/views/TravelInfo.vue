<template>
    <div class="container">
        <div class="heading">
            <h1>Travel Information and Nuances in Canada</h1>
            <p>Canada is a vast and diverse country offering a unique blend of natural beauty, vibrant cities, and rich
                cultural experiences. When planning a trip to Canada, understanding some key travel nuances can enhance
                your experience. Here’s a comprehensive guide to help you navigate your journey through this magnificent
                country</p>
        </div>
        <div class="image">
            <img src="@/assets/destination.jpg" alt="amsterdam">
        </div>

        <div class="flex">
            <div class="card">
                <h1>Language and Culture</h1>
                <p>Canada is officially bilingual, with English and French as its two official languages. While English
                    is predominantly spoken across the country, French is primarily spoken in Quebec. In cities like
                    Montreal and Quebec City, you’ll find that many signs, menus, and public announcements are in
                    French. It’s helpful to know a few basic French phrases if you’re traveling to Quebec, although many
                    people are bilingual and can assist you in English as well.<br><br>

                    Canadian culture is a mosaic of diverse influences due to its history of immigration. This diversity
                    is reflected in the country's festivals, cuisine, and daily life. Canadians are known for being
                    polite, friendly, and respectful of different cultures. When in Canada, adopting a courteous
                    attitude and respecting local customs will go a long way in making your travel experience enjoyable
                    (Culture) (TouristSecrets).</p>
            </div>

            <div class="card">
                <h1>Weather and Best Time to Visit</h1>
                <p>Canada’s weather varies significantly from region to region due to its vast size. The best time to
                    visit largely depends on the activities you’re interested in. Summer (June to August) is ideal for
                    exploring national parks, city tours, and outdoor festivals. This period offers warm weather and
                    long daylight hours, making it perfect for hiking, kayaking, and sightseeing.<br><br>

                    Winter (December to February) is the season for winter sports enthusiasts. Places like Banff,
                    Whistler, and Mont-Tremblant become havens for skiing, snowboarding, and ice skating. However,
                    winter in Canada can be harsh, with temperatures dropping well below freezing, especially in the
                    northern and interior regions. If you plan to visit during winter, pack appropriate clothing and
                    gear to stay warm (Culture) (Nomadic Matt's Travel Site).</p>
            </div>

            <div class="card">
                <h1>Transportation</h1>
                <p>Canada has a well-developed transportation system that includes flights, trains, buses, and rental
                    cars. For long-distance travel, domestic flights are the most convenient, given the country’s vast
                    size. Airlines like Air Canada and WestJet offer extensive networks connecting major cities.<br><br>

                    For a scenic and leisurely travel experience, consider taking the train. VIA Rail Canada provides
                    cross-country and regional services that offer breathtaking views of the Canadian landscape. The
                    Rocky Mountaineer is a popular luxury train service that traverses the Canadian Rockies, providing a
                    unique travel experience.<br><br>

                    In cities, public transportation is efficient and widely available. Toronto, Montreal, and Vancouver
                    have extensive subway and bus systems. Additionally, ride-sharing services like Uber and Lyft
                    operate in most major cities. Renting a car is a good option if you plan to explore rural areas or
                    national parks, giving you the freedom to travel at your own pace (Culture) (The Green Voyage)
                    (Nomadic Matt's Travel Site).</p>
            </div>

            <div class="card">
                <h1>Entry Requirements</h1>
                <p>Most travelers to Canada will need a valid passport. Depending on your country of origin, you might
                    also need an Electronic Travel Authorization (eTA) or a visitor’s visa. The eTA is a quick online
                    process for residents of certain countries and is valid for five years or until your passport
                    expires. Ensure that you check the latest entry requirements well in advance of your trip, as
                    regulations can change (Culture) (Nomadic Matt's Travel Site).</p>
            </div>

            <div class="card">
                <h1>Health and Safety</h1>
                <p>Canada is known for its high standards of health and safety. The healthcare system is robust, and
                    emergency services are reliable. Travelers are advised to have travel insurance that covers medical
                    expenses, as healthcare costs can be high for non-residents. It’s also a good idea to carry any
                    necessary medications and a basic first-aid kit.<br><br>

                    In terms of safety, Canada is generally very safe for travelers. However, like any destination, it’s
                    important to be aware of your surroundings and take standard precautions. In urban areas, petty
                    crimes like pickpocketing can occur, so keep your belongings secure. When exploring nature, be aware
                    of wildlife and weather conditions. Following park regulations and guidelines will help ensure a
                    safe and enjoyable experience (The Green Voyage) (Nomadic Matt's Travel Site).</p>
            </div>

            <div class="card">
                <h1>Tipping and Etiquette</h1>
                <p>Tipping is customary in Canada and is similar to practices in the United States. In restaurants, a
                    tip of 15-20% of the total bill before tax is standard. Hotel staff, taxi drivers, and hairdressers
                    also expect tips, typically around 10-15%. For exceptional service, a higher tip is
                    appreciated.<br><br>

                    Canadians value politeness and often use phrases like “please,” “thank you,” and “sorry.” It’s
                    important to maintain a respectful and courteous demeanor. When entering someone’s home, it’s
                    customary to remove your shoes. Queuing is taken seriously, so always wait your turn in lines and
                    avoid cutting ahead (The Green Voyage) (Nomadic Matt's Travel Site).</p>
            </div>

            <div class="card">
                <h1>Currency and Payment Methods</h1>
                <p>The official currency in Canada is the Canadian Dollar (CAD). Credit and debit cards are widely
                    accepted, and ATMs are readily available in cities and towns. It’s a good idea to carry some cash
                    for small purchases or in areas where card payment might not be available. Currency exchange
                    services are available at airports, banks, and currency exchange offices.<br><br>

                    Most Canadian businesses accept contactless payment methods, including mobile payments like Apple
                    Pay and Google Pay. When traveling in remote areas, ensure you have sufficient cash as ATM access
                    may be limited (Culture) (Nomadic Matt's Travel Site).</p>
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
    text-align: center;
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 300;
}

p {
    width: 80%;
    margin: 0 auto;
    font-size: 1rem;
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

.flex .card{

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