import { connect } from 'dva';
import { List } from "antd";

function todoList(props) {

    const { todos, dispatch, loading } = props;

    function handleToggle(id) {
        dispatch({
            type: 'todo/toggle',
            payload: id
        })
    }

    function handleDelete(id) {
        dispatch({
            type: 'todo/remove',
            payload: id
        })
    }

    function renderItem(item) {
        return (
            <List.Item actions={[<a onClick={() => handleToggle(item.id)}>toogle</a>, <a onClick={() => handleDelete(item.id)}>delete</a>]}>
                <div>{item.text} - {item.completed ? "已完成" : "未完成"}</div>
            </List.Item>
        )
    }

    return (
        <List
        header={<h3>Todos:</h3>}
        dataSource={todos}
        renderItem={renderItem}
        loading={loading}
        >
        </List>
    )
}

export default connect()(todoList);
