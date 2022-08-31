const MyNameApp = {
    data() {
        return{
            name: "",
            age: "32",
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            
            e.preventDefault();
            this.name = this.input_name
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")