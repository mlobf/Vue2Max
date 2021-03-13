const app = Vue.createApp({
	data() {
		return {
			name: "Marcos",
			age: 31,
			myImage: "https://diolinux.com.br/wp-content/uploads/2021/01/sandbox.jpg",
		};
	},
	methods: {
		calculateAge() {
			return this.age + 5;
		},
		randNumber() {
			return Math.random();
		},
	},
});
app.mount("#teste");
