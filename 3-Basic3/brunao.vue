<script>
	import axios from "axios";
	let validate = (token) => {
		return axios({
			url: `/api/user/verify/${token}`,
			method: "GET",
		});
	};
	export default {
		data() {
			return {
				username: "",
				password: "",
				message: "",
			};
		},
		methods: {
			nome() {
				prompt("Testes");
			},
			login(e, social) {
				let _login = (token = false) => {
					let $http = this.$http;
					$http({
						url: login_url,
						method: method,
						data: {
							username: this.username,
							password: this.password,
							token: token,
						},
					})
						.then((response) => {
							if (!response.data.error) {
								this.$store.commit("LOGIN_SUCCESS", response.data.user);
								this.$ga.event({
									eventCategory: "Authentication",
									eventAction: "Login",
									eventLabel: "Login",
									eventValue: 1,
								});
								this.$router.push("/");
							} else {
								new Error(response.data);
							}
						})
						.catch((err) => {
							if (err.response.data.is_active === false) {
								this.$swal({
									title:
										"Confirme seu usuário pelo link enviado ao seu e-mail, caso queira enviar outro link clique no botão abaixo.",
									type: "warning",
									showCancelButton: true,
									confirmButtonText: "Enviar",
									cancelButtonText: "Cancelar",
								}).then((result) => {
									if (result.value) {
										this.enviarEmail();
									}
								});
							} else {
								this.$swal({
									title:
										err.response.data.message ||
										"Ocorreu um erro ao realizar login. Tente novamente.",
									type: "error",
									confirmButtonText: "SAIR",
								});
							}
						});
				};
				e.preventDefault();
				let login_url = "/api/user/login";
				let method = "POST";
				if (social === "facebook") {
					login_url = "/accounts/facebook/login";
					method = "GET";
				}
				this.$recaptcha("login")
					.then((token) => {
						_login(token);
					})
					.catch((err, a) => {
						// any problems with token in development mode bypass recaptcha
						if (process.env.NODE_ENV == "development") {
							_login();
						}
					});
			},
			sendMessage(message, type) {
				this.$swal({
					title: message,
					type: type,
					confirmButtonText: "SAIR",
				});
			},
			enviarEmail() {
				let _login = (token = false) => {
					let $http = this.$http;
					$http({
						url: "/api/user/request/invite",
						method: "POST",
						data: {
							username: this.username,
							password: this.password,
							token: false,
						},
					})
						.then((response) => {
							if (!response.data.error) {
								this.$swal({
									title: "E-mail enviado com sucesso!",
									type: "success",
									confirmButtonText: "Confirmar",
								}).then((result) => {
									if (result.value) {
										this.$router.push("/");
									}
								});
							} else {
								new Error(response.data);
							}
						})
						.catch((err) => {
							this.$swal({
								title: err.response.data.message,
								type: "error",
								confirmButtonText: "SAIR",
							});
						});
				};
				this.$recaptcha("login")
					.then((token) => {
						_login(token);
					})
					.catch((err, a) => {
						// any problems with token in development mode bypass recaptcha
						if (process.env.NODE_ENV == "development") {
							_login();
						}
					});
			},
		},
		beforeRouteEnter(to, from, next) {
			if (to.query.activate) {
				validate(to.query.activate)
					.then(() => {
						next((vm) => {
							vm.sendMessage(
								"Conta verificada com sucesso! Faça seu login",
								"success"
							);
						});
					})
					.catch(() => {
						next((vm) => {
							vm.sendMessage("Token expirado ou inexistente!", "warning");
						});
					});
			} else {
				next();
			}
		},
	};
</script>
