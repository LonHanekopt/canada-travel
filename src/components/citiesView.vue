<template>
    <div class="container">
        <div class="content">
            <div class="header">
                <h1>Must Visit Cities in Canada
                </h1>
                <p>Canada's cities offer a blend of vibrant urban life, rich cultural experiences, and stunning natural
                    beauty. Here’s an in depth look at seven must visit cities in Canada, each with its unique charm and
                    attractions.
                </p>
            </div>

            <div class="wrapper">
                <div class="flex">
                    <div class="card">
                        <h1>1. Toronto, Ontario</h1>
                        <div class="image"><img src="@/assets/ontario.jpg" alt=""></div>
                        <p>Toronto is Canada's largest city and a melting pot of cultures. This bustling metropolis is
                            known for its iconic CN Tower, which offers panoramic views of the city and Lake Ontario.
                            For art and history enthusiasts, the Royal Ontario Museum and the Art Gallery of Ontario are
                            must visit spots. Toronto's diverse neighborhoods, like Kensington Market and Queen West,
                            are perfect for exploring eclectic shops, eateries, and street art. The city's waterfront,
                            featuring Harbourfront Centre and Toronto Islands, provides a serene escape from the urban
                            hustle</p>
                    </div>
                    <div class="card">
                        <h1>2. Vancouver, British Columbia</h1>
                        <div class="image"><img src="@/assets/vancouver.jpg" alt=""></div>
                        <p>Nestled between the Pacific Ocean and the mountains, Vancouver is a city where urban
                            sophistication meets outdoor adventure. Stanley Park, with its scenic seawall, offers a
                            beautiful setting for cycling and walking. Granville Island is a hub for arts and crafts,
                            boasting a vibrant public market. Vancouver's culinary scene is a reflection of its
                            multicultural population, featuring a variety of international cuisines. The city’s
                            proximity to nature allows for easy access to hiking, skiing, and water sports (Culture)
                            (The Green Voyage)</p>
                    </div>
                    <div class="card">
                        <h1>3. Montreal, Quebec
                        </h1>
                        <div class="image"><img src="@/assets/quebec-city.jpg" alt=""></div>
                        <p>Montreal is a city that beautifully blends French and English cultures. Its historic
                            district, Old Montreal, is known for its cobblestone streets, charming boutiques, and the
                            stunning Notre Dame Basilica. Montreal is also famous for its festivals, including the
                            Montreal International Jazz Festival and Just for Laughs. Foodies will enjoy the city’s
                            diverse culinary offerings, from poutine to world renowned bagels. The city's vibrant
                            neighborhoods, like Plateau Mont Royal, are perfect for leisurely strolls and discovering
                            local cafes and shops (Lonely Planet) (TouristSecrets).

                        </p>
                    </div>
                    <div class="card">
                        <h1>4. Calgary, Alberta
                        </h1>
                        <div class="image"><img src="@/assets/calgary.jpg" alt=""></div>

                        <p>Located near the Canadian Rockies, Calgary offers a unique mix of urban life and outdoor
                            adventure. The Calgary Stampede, known as "The Greatest Outdoor Show on Earth," is a
                            must see event featuring rodeos, concerts, and parades. Calgary’s vibrant downtown area,
                            with attractions like the Calgary Tower and Stephen Avenue Walk, provides plenty of
                            entertainment and dining options. For nature enthusiasts, nearby Banff and Jasper National
                            Parks offer breathtaking landscapes and outdoor activities like hiking and skiing (Nomadic
                            Matt's Travel Site) (TouristSecrets)

                        </p>
                    </div>
                    <div class="card">
                        <h1>5. Quebec City, Quebec
                        </h1>
                        <div class="image"><img src="@/assets/montreal.jpg" alt=""></div>

                        <p>Quebec City is a slice of old Europe in North America, known for its historical charm and
                            French heritage. The city’s heart, Vieux-Québec, is a UNESCO World Heritage Site with
                            cobblestone streets, historic buildings, and the iconic Château Frontenac. Walking along the
                            city’s fortifications offers stunning views of the St. Lawrence River. Quebec City’s
                            culinary scene blends traditional French cuisine with local flavors, making it a paradise
                            for food lovers. In winter, the city transforms into a snowy wonderland with the famous
                            Winter Carnival (The Green Voyage) (Lonely Planet)

                        </p>
                    </div>
                    <div class="card">
                        <h1>6. Halifax, Nova Scotia
                        </h1>
                        <div class="image"><img src="@/assets/halifax.jpg" alt=""></div>

                        <p>Halifax combines maritime charm with rich history. The city’s historic waterfront is home to
                            the Maritime Museum of the Atlantic, which tells the story of Nova Scotia’s seafaring past.
                            The Halifax Citadel offers a glimpse into the city’s military history. Fresh seafood is a
                            highlight, with local specialties available at the Halifax Seaport Farmers’ Market. The
                            city’s vibrant arts scene and live music venues make it a cultural hotspot. Halifax is also
                            the gateway to exploring the scenic beauty of Nova Scotia, including the picturesque Cabot
                            Trail (Nomadic Matt's Travel Site) (TouristSecrets)

                        </p>
                    </div>
                    <div class="card">
                        <h1>7. Ottawa, Ontario
                        </h1>
                        <div class="image"><img src="@/assets/ottawa.jpg" alt=""></div>

                        <p>As the capital of Canada, Ottawa is rich in history and culture. Parliament Hill, with its
                            Gothic Revival architecture, is a must visit, especially during the changing of the guard
                            ceremony. The city’s national museums, such as the Canadian War Museum and the National
                            Gallery of Canada, offer deep insights into the country’s heritage. The Rideau Canal, a
                            UNESCO World Heritage Site, becomes the world’s largest skating rink in winter, providing a
                            unique experience. Ottawa’s Byward Market is a lively area filled with shops, restaurants,
                            and artisan stalls (Nomadic Matt's Travel Site) (Lonely Planet)
                        </p>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    padding: 3rem 0;
}

.content .header{
    width: 70%;
    margin: 0 auto;
}
.content .header p{
    margin: 2rem auto 0 auto;
    width: 70%;
}
.wrapper{

}

.wrapper .flex{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.wrapper .flex .card{
    display: flex;
    flex-direction: column;
    gap: 2em;
}
.wrapper .flex .card .image{
    width: 60%;
    margin: 0 auto;
}

.wrapper .flex .card h1{
    font-weight: 300;
}

.wrapper .flex .card p{
    width: 60%;
    margin: 0 auto;
}
</style>