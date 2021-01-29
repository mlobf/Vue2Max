const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	methods: {
		boxSelected(box) {
			if (box === "A") {
				this.boxASelected = false;
			} else if (box === "B") {
				this.boxBSelected = false;
			} else if (box === "C") {
				this.boxCSelected = false;
			}
		},
	},
});

app.mount("#styling");
