import { connect } from 'dva';
import { Form, Input, Button } from "antd";
const FormItem = Form.Item;
let id = 0;

function addTodo(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
              props.dispatch({
                  type: 'todo/add',
                  payload: {
                    id,
                    text: values.todo,
                    completed: false
                  }
              });
              id++;

              // reset form
              props.form.resetFields();
            }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <Form layout="inline" onSubmit={handleSubmit}>
            <FormItem>
            {getFieldDecorator('todo', {
                rules: [{ required: true, message: 'Please input todo item!' }],
            })(
                <Input placeholder="todo" />
            )}
            </FormItem>
            <FormItem>
                <Button type='primary' htmlType='submit'>Add Todo</Button>
            </FormItem>   
        </Form>
    )
}

const mapStateToProps = ({todo}) => {
    return {
        todo
    }
}

export default connect(mapStateToProps)(Form.create()(addTodo));
