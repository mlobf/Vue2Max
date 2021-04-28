const app = Vue.createApp({
	data() {
		return {
			name: "Marcos",
			age: 31,
			myImage: "https://diolinux.com.br/wp-content/uploads/2021/01/sandbox.jpg",
			job: "programmer",
		};
	},
	methods: {
		calculateAge() {
			return this.age + 5;
		},
		randNumber() {
			return Math.random();
		},
		simpleSum() {
			const newAge = this.age;
			return newAge;
		},
	},
});
app.mount("#teste");
