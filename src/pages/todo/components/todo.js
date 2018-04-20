import { connect } from 'dva';
import AddTodo from "./addTodo";
import TOdoList from "./todoList";
import Filter from "./filter";

function Todo(props) {
    const {todos, filter} = props
    return (
        <div>
            <AddTodo />
            <TOdoList todos={todos}/>
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

const mapStateToProps = ({todo}) => {
    return {
        ...todo,
        todos: getVisibleTodos(todo.todos, todo.filter)
    }
}

export default connect(mapStateToProps)(Todo);
