const app = Vue.createApp({
    template: `
      <div v-bind:style="style"> Deneme Yazısı </div>
        `,
    data() {
        return {
            style: "color:red"
        }
    },
    methods: {

    },

});


app.mount('.app');