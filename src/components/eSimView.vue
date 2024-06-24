<template>
    <div class="container">
        <div class="heading">

        </div>

        <div class="widget">
            <airaloWidget />
        </div>

        <div class="flex">
            <div class="card">
                <h1>Global Coverage</h1>
                <p>Airalo offers eSIMs for more than 200 countries and regions, ensuring you stay connected regardless
                    of your travel destination.</p>
            </div>

            <div class="card">
                <h1>Affordable Data Plans</h1>
                <p>Airalo provides budget-friendly data plans that are often much cheaper than international roaming
                    fees. They offer a variety of packages, including local, regional, and global plans. For instance,
                    global packages begin at $9 for 1GB of data.</p>
            </div>

            <div class="card">
                <h1>Data-Only Service</h1>
                <p>Airalo eSIMs are designed primarily for data usage. While they don't support traditional voice calls
                    or SMS, you can use data-based communication apps like WhatsApp, Skype, and iMessage for your
                    calling and messaging needs.</p>
            </div>

            <div class="card">
                <h1>Convenience for Travelers</h1>
                <p>With Airalo, there's no need to swap out physical SIM cards or visit local stores in each country to
                    purchase new ones. This convenience saves time and spares you the hassle of managing multiple SIM
                    cards.</p>
            </div>

            <div class="card">
                <h1>Compatibility</h1>
                <p>Airalo eSIMs are compatible with a wide range of modern smartphones, including recent iPhone models
                    (iPhone XS and newer) and several Android devices like Google Pixel. Always verify device
                    compatibility before making a purchase.</p>
            </div>

            <div class="card">
                <h1>Easy Installation</h1>
                <p>Installing an Airalo eSIM is simple. You can buy a plan through their website or mobile app, receive
                    a QR code, and scan it to activate the eSIM on your device. The whole process takes just a few
                    minutes.</p>
            </div>

        </div>

        <h1 class="how-to-text">Guide for Setting Up an eSIM
        </h1>

        <div class="flex instructions">
            <div class="card">
                <h1>Step 1: Verify Compatibility</h1>
                <p>Ensure your phone supports eSIM technology by checking its specifications or visiting the
                    manufacturer's website. Make sure your phone's operating system is updated to the latest version.
                </p>
            </div>

            <div class="card">
                <h1>Step 2: Purchase and Activate the eSIM Card</h1>
                <p>Buy an eSIM card from a reputable provider, such as a mobile carrier or an online retailer. Follow
                    the activation instructions, which may include setting up an account, providing identification, and
                    verifying payment details.</p>
            </div>

            <div class="card">
                <h1>Step 3: Insert the eSIM Card</h1>
                <p>Locate the eSIM card tray on your phone, usually found on the side or top. Carefully insert the eSIM
                    card into the tray, following any specific instructions from your phone's manufacturer.</p>
            </div>

            <div class="card">
                <h1>Step 4: Activate the eSIM</h1>
                <p>Open the Settings app on your phone. Navigate to "Mobile Network" or "Network" settings. Enable the
                    eSIM option, which might be labeled "eSIM" or "Embedded SIM."</p>
            </div>

            <div class="card">
                <h1>Step 5: Choose an eSIM Plan</h1>
                <p>After enabling the eSIM, select a plan from your provider that suits your needs. Follow the on-screen
                    instructions to complete the setup process.</p>
            </div>

            <div class="card">
                <h1>Step 6: Confirm Your Connection</h1>
                <p>Allow your phone to detect the eSIM connection. Check your phone's signal strength and data usage to
                    ensure you're connected. If you encounter issues, try restarting your phone or performing a network
                    reset.</p>
            </div>



        </div>
    </div>
</template>

<script>
import airaloWidget from '@/components/widgets/airaloWidget'

export default {
    components: {
        airaloWidget
    }
}
</script>

<style scoped>
h1 {
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.widget {
    margin: 3rem auto;
}

.flex {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    text-align: left;
}

.flex .card {}


.flex .card p {
    margin: 1em 0;
    font-size: 1rem;
}

.how-to-text {
    font-size: 2.3rem;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.instructions {
    width: 80%;
    margin-bottom: 2rem;
}

.instructions h1 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 3px;
    margin: 2rem auto;
}
</style>