
const delay = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    })
}

export default {
    namespace: 'todo',
    state: {
        todos: [],
        filter: null
    },
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    payload
                ]
            }
        },
        toggle(state, { payload }) {
            return {
                ...state,
                todos: state.todos.map(t => {
                    if(t.id === payload){
                        t.completed = !t.completed;
                    }
                    return t;
                })
            }
        },
        remove(state, { payload }) {
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== payload)
            }
        },
        setFilter(state, { payload }) {
            return {
                ...state,
                filter: payload
            }
        }
    },
    effects: {
        *add({ payload }, { call, put }) {
            yield call(delay, 500);
            yield put({
                type: 'save',
                payload
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if(pathname === "/todo") {
                    dispatch({
                        type: 'setFilter',
                        payload: query.filter || 'ALL'
                    })
                }
            })
        }
    }
}