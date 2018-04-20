import { connect } from 'dva';
import { List } from "antd";

function todoList(props) {

    const { todos, dispatch } = props;

    function handleToggle(id) {
        dispatch({
            type: 'todo/toggle',
            payload: id
        })
    }

    function renderItem(item) {
        return (
            <List.Item actions={[<a onClick={() => handleToggle(item.id)}>toogle</a>, <a>delete</a>]}>
                <div>{item.text} - {item.completed ? "已完成" : "未完成"}</div>
            </List.Item>
        )
    }

    return (
        <List
        header={<h3>Todos:</h3>}
        dataSource={todos}
        renderItem={renderItem}
        >
        </List>
    )
}

export default connect()(todoList);
