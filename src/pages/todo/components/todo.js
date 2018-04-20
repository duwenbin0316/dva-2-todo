import { connect } from 'dva';
import AddTodo from "./addTodo";
import TOdoList from "./todoList";
import Filter from "./filter";

function Todo(props) {
    const {todos, filter, loading} = props
    return (
        <div>
            <AddTodo />
            <TOdoList todos={todos} loading={loading}/>
            <Filter filter={filter}/>
        </div>
    )
}

function getVisibleTodos(todos, filter) {
    switch(filter) {
        case 'ALL':
        return todos;
        case 'ACTIVE':
        return todos.filter(t => !t.completed);
        case 'COMPLETED':
        return todos.filter(t => t.completed);
        default:
        return todos;
    }
}

const mapStateToProps = (state) => {
    const {todo} = state;
    return {
        ...todo,
        todos: getVisibleTodos(todo.todos, todo.filter),
        loading: state.loading.models.todo,
    }
}

export default connect(mapStateToProps)(Todo);
