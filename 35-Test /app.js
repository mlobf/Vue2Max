const app = Vue.createApp({
	data() {
		return {
			name1: name1,
			name2: name2,
			message: "message",
		};
	},
	methods: {
		name(name) {
			if (name === name1) {
				this.name1 = !this.name1;
			}
		},
		click() {
			alert("oi");
		},
	},
});

app.mount("#assigment");
