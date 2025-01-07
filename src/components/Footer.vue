<template>
    <footer>
        <div class="mainFooter">
            <img :src="logoDetails.logoUrl" :alt="logoDetails.logoCaption" />
            <p>Optio, minima fugiat. Unde quibusdam velit laborum rem, quae deleniti libero illum possimus aspernatur doloribus eveniet. Itaque, vel! Consequuntur corrupti amet sequi inventore aspernatur blanditiis minima exercitationem repellendus quis mollitia!</p>
        </div>
        <div class="subFooter">
            <p>&copy;{{ currentYear }} - To Do Inc. All rights reserved. </p>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        logoDetails: {
            type: Object,
            Required: true
        },
        currentYear: {
            type: Number,
            Required: true
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    margin: 0;
    .mainFooter {
        background-color: rgb(27, 27, 27);
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        img {
            width: 60px;
        }

        p{
            margin: 0;
            text-align: center;
            max-width: 768px;
            color: rgb(231, 235, 216);
        }
    }

    .subFooter {
        background-color: black;

        p{
            margin: 0;
            padding: 10px;
            color: bisque;
            text-align: center;
        }
    }
}
</style>