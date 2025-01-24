<template>
    <div class="card" :style="{ backgroundImage: `url(${quoteDetail.imageURL})` }">
        <div class="overlay"></div>
        <div class="card__content">
            <!--  
            <div class="card__quote">
                <p>{{ quoteDetail.quote }}</p>
            </div>
            -->
            <!-- above can be written as:  -->
            <div class="card__quote" v-html="quoteDetail.quote">
            </div>
            <div class="card__author">
                <p>{{ quoteDetail.author }}</p>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    /*
    props: {
        imageURL: String,
        quote: String,
        author: String
    }
    */
   //the above can be written as 
   props: {
    quoteDetail: Object,
   },
}
</script>

<style scoped lang="scss">
.card {
    position: relative;
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.425);
        z-index: 1;
    }

    &__content {
        position: relative;
        z-index: 2;
    }

    &__quote {
        margin: 0;
        font-size: 1.2em;
    }

    &__author {
        display: block;
        margin-top: 10px;
        font-size: 0.8em;
        opacity: 0.8;
    }
}
</style>
