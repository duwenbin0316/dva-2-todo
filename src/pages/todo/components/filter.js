import { connect } from 'dva';
import { routerRedux } from 'dva/router';

function filter(props) {
    const { filter, dispatch } = props;

    function handleChange(_filter) {
        dispatch(routerRedux.push({
            pathname: '/todo',
            query: { 
                filter: _filter
            },
        }));
    }

    function addFilterItem(_filter, text) {
        if(_filter === filter){
            return text;
        }

        return (
            <a onClick={() => { handleChange(_filter) }}>{text}</a>
        )
    }

    return (
        <div>
            <strong>SHOW:</strong>
            {' '}
            { addFilterItem("ALL", "SHOW_ALL") }
            {' | '}
            { addFilterItem("ACTIVE", "SHOW_ACTIVE") }
            {' | '}
            { addFilterItem("COMPLETED", "SHOW_COMPLETED") }
        </div>
    )
}

export default connect()(filter);
