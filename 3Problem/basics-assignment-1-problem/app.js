const app = Vue.createApp({
	data() {
		return {
            myName:"Marcos",
            myAge:39,
            myAgePlus5:myAge + 5,
        };
	},
	methods: {
        myAge(){
            
        }

    },
});
app.mount("#assignment");
