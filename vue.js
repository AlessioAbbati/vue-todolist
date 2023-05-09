const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            inputError: false,
            todos: [
                
            ],
        };
    },
    methods: {
        addTodo() {
            let cleanedTodo = this.newTodo.trim();
            if (cleanedTodo != '') {
                this.todos.unshift(this.newTodo);
                this.newTodo = '';
                this.inputError = false;
            } else {
                this.inputError = true;
            }

        },

    },
});


app.mount("#app");