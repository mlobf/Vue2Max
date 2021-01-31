const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
			boxDSelected: false,
			boxESelected: false,
			boxFSelected: false,
			myMessage: "Hello World",
		};
	},
	computed: {
		boxAClasses() {
			return { active: this.boxASelected };
		},
	},
	methods: {
		boxSelected(box) {
			if (box === "A") {
				this.boxASelected = !this.boxASelected;
			} else if (box === "B") {
				this.boxBSelected = !this.boxBSelected;
			} else if (box === "C") {
				this.boxCSelected = !this.boxCSelected;
			}
		},
		logOutPut(myMessage) {
			alert(this.myMessage);
		},
	},
});

app.mount("#styling");
