const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            inputError: false,
            todos: [
                {
                    Text: 'fare la spesa',
                    done: true,
                },
                {
                    Text: 'passare lo straccio',
                    done: false,
                },
                {
                    Text: 'portare fuori il cane',
                    done: true,
                },
                {
                    Text: 'fare la borsa',
                    done: true,
                },
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
        deleteItem(index) {
            this.todos.splice(index, 1);
        },

    },
});


app.mount("#app");