const app = Vue.createApp({
	data() {
		return {
			message: "Send my SOS",
			name: "",
		};
	},
	methods: {
		alert() {
			alert(this.message);
		},
		keydownEvent(event) {
			this.name = event.target.value;
		},
	},
});
app.mount("#assignment");
