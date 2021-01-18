const app = Vue.createApp({
	data() {
		return {
			myName: "Marcos",
			myAge: 39,
			myAgePlus5: myAge + 5,
		};
	},
	methods: {
		myAge() {
			alert("teste123");
			return this.myName;
		},
	},
});
app.mount("#teste");
