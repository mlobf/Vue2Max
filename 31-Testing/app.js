const app = Vue.createApp({
	data() {
		return {
			number: 0,
			target: 37,
			counter: 0,
			message: " ",
			timer: 0,
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
	computed: {
		until37() {
			if (this.counter > this.target) {
				return (this.message = "Too much!!!");
			}
			if (this.counter < this.target) {
				return (this.message = "Not there yet");
			}
			if (this.counter === 37) {
				return (this.message = "37");
			}
		},
	},
	watch: {
		until37() {
			const that = this;
			setTimeout(function () {
				that.counter = 0;
			}, 5000);
		},
	},
});

app.mount("#assignment");
