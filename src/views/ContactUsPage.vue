<template>
   <div class="bg">
      <div class="heading">
         <h1>Contact Us We Will be Glad to Assist You</h1>
      </div>
   </div>
   <div id="container">
      <div class="grid">
         <div class="left flex">
            <h1>{{ $t('company-information-header') }}</h1>
            <p>{{ $t('company-information-content') }}</p>
         </div>
         <form action="" class="center flex">
            <h1>{{ $t('contact-us') }}</h1>
            <label for="name">{{ $t('contact-name') }}</label>
            <input type="text">

            <label for="name">{{ $t('contact-email') }}</label>
            <input type="text">

            <label for="name">{{ $t('contact-message') }}</label>
            <textarea type="text"></textarea>
            <div class="button">
               <a href="#" class="btn ">{{ $t('contact-send-message') }}</a>
            </div>
         </form>
         <div class="right flex">
            <h1>{{ $t('company-address') }}</h1>
            <p>Dept 2, 43 Owston Road, Carcroft, Doncaster, United Kingdom, DN6 8DA
            </p>
            <p><b>{{ $t('follow-us') }}</b></p>
            <div class="socials">
               <div class="elfsight-app-6e57f52d-48b0-4791-b257-73943b891591" data-elfsight-app-lazy></div>

            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   mounted() {

   }
}
</script>

<style scoped>
#container {
   max-width: 84vw;
   margin: auto;
}

.grid {
   display: grid;
   grid-template-columns: 1fr 1.8fr 1fr;
   align-items: center;
   padding: 3rem 0;
}

.center.flex {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   text-align: left;
   width: 80%;
   margin: 0 auto;
}

.center.flex .button {
   align-self: center;
   margin-top: 10px;
}

.flex {
   display: flex;
   flex-direction: column;
   gap: 1rem;
}

.flex textarea {
   height: 100px;
   resize: vertical;
}

.bg {
   background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url("@/assets/saskatchewan.jpg");
   background-attachment: scroll;
   background-position: center;
   background-size: cover;
   color: #fff;
   height: 38vh;
}

.bg .heading {
   margin: auto;
   width: 50vw;
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: 1.3rem;
   justify-content: center;
}

.bg .heading h1 {
   font-size: 3rem;
   letter-spacing: 2px;
   font-weight: 300;
}

h1 {
   font-size: 2rem;
   letter-spacing: 2px;
}

/* .bg .heading p{
   font-size: 1.2rem;
   letter-spacing: 2px;
} */

@media screen and (max-width: 800px) {
   #container {
      max-width: 95vw;
   }

   .bg {
      height: 20vh;
   }

   .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      row-gap: 4rem;
      grid-auto-rows: 1;
      align-items: center;
      padding: 3rem 0;
   }

   .bg .heading {
      width: 80vw;
   }

   .bg .heading h1 {
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: 300;
   }

}
</style>