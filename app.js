new Vue({
    el: '#app',
    
});


const app = Vue.createApp({

    data(){
        return{
            showModal: false,
            username: '',
            password: ''
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        login() {
            // Implement login logic here, for example:
            if (this.username === 'admin' && this.password === 'password') {
                alert('Login successful!');
                this.showModal = false;
                // Reset the form fields
                this.username = '';
                this.password = '';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        }
    }
})