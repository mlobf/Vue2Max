const app = Vue.createApp({
	data() {
		return {
			number: 0,
			target: 37,
			counter: 0,
			message: "",
		};
	},
	methods: {
		add5() {
			return (this.counter = this.counter + 5);
		},
		add1() {
			return (this.counter = this.counter + 1);
		},
	},
	watch: {
		until37() {
			if (this.counter > this.target) {
				return (this.message = "oi");
			} else {
				return (this.message = "n oi");
			}
		},
	},
});

app.mount("#assignment");
