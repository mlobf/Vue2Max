const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: "",
			confirmedName: "",
		};
	},
	methods: {
		add(num) {
			return (this.counter = this.counter + num);
		},
		remove(num) {
			return (this.counter = this.counter - num);
		},
		setName(event) {
			this.name = event.target.value;
		},
		submitForm() {
			alert("Submitted!!");
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		newTest() {
			return alert(this.name);
		},
	},
});

app.mount("#events");
