const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			//fullname: "",
			lastName: "",
		};
	},

	computed: {
		fullname() {
			console.log("Running again");
			if (this.name === "" || this.lastName === "") {
				return "";
			}
			return this.name + " " + this.lastName;
		},
	},

	watch: {
		// Other user may be timer or http requests
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
		/*
		name(value) {
			if (value === "") {
				this.fullname = "";
			} else {
				this.fullname = value + " " + "Leme";
			}
		},
		lastName(value) {
			if (value === "") {
				this.fullname = "";
			} else {
				this.fullname = this.name + " " + value;
			}
		},
		*/
	},

	methods: {
		// Computer Properties are as like methods without chain reaction.
		//	Recalculate only if a dependency changes. That is computer trigger.
		// 	Thoose will be re executed only if a related dependencies changed.
		// 	It s the third big configuration of Vue app.
		//	Data , Computed, Method.
		//	TIP,
		// 		Only use method if you want to have this method recalculated by each event.
		//
		setName(event, lastName) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = "";
		},
		// As Vue works recalculating after each call,
		//		use methods for dynamic calculation values
		outputFullName() {
			console.log("Running again...");
			if (this.name === "") {
				return "";
			}
			return this.name + "" + "Leme";
		},
	},
});

app.mount("#events");
