const app = Vue.createApp({
    //     template: `
    //    <ul>
    //    <li v-for="gun in gunler"> {{gun}} </li>
    //    </ul>
    //     `,

    template: `
       <ul>
       <li v-for="person in persons"> Çalışan: {{person.isim}} - Maaş: {{person.maas}}</li>
       </ul>
        `,
    data() {
        return {
            // gunler: [
            //     "Pazartesi",
            //     "Salı",
            //     "Çarşamba",
            //     "Perşembe",
            //     "Cuma",
            //     "Cumartesi",
            //     "Pazar",
            // 

            persons: [
                { isim: "Hüseyin", maas: 4250 },
                { isim: "Mehmet", maas: 8500 },
                { isim: "Furkan", maas: 10000 },
            ]
        }
    },
    methods: {

    },

});


app.mount('.app');