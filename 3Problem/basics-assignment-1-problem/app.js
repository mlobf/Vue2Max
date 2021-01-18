const app = Vue.createApp({
	data() {
		return {
			name: "Marcos",
			age: 31,
		};
	},
	methods: {
		calculateAge() {
			return this.age + 5;
		},
		randNumber(){
			return Math.random();
		},
		displayPicture(){
			return "https://diolinux.com.br/wp-content/uploads/2021/01/sandbox.jpg"
		}
	},
});
app.mount("#teste");
