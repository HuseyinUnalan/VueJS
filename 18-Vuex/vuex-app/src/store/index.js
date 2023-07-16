import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [
            { id: 1, todo: "Ders Çalış", done: false },
            { id: 2, todo: "Film İzle", done: true },
            { id: 3, todo: "Koşu Yap", done: false },
            { id: 4, todo: "Yemek Ye", done: true },
        ],
    },
    getters: {
        todoTotalCount(state) {
            return state.todos.length
        },
        todoDoneCount(state) {
            return state.todos.filter(x => x.done == true).length
        },
        todoNotDoneCount(state) {
            return state.todos.filter(x => x.done == false).length
        }
    },
    mutations: {
        addTodo(state, { newTodo, done }) {
            let todo = {
                id: Math.floor(Math.random() * 1000000),
                todo: newTodo,
                done: done,
            };
            state.todos.push(todo)
        }
    },
    actions: {
        addTodoAction(contex, todoObject) {
            console.log(contex)
            contex.commit("addTodo", todoObject)
        }
    },
    modules: {}
})