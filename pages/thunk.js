import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {}

const reducer = (state = initialState, action) => {
    if (action.type) {
        return state
    }
    return state
}

const store = createStore(reducer, initialState)

export default props => (
    <Provider store={store}>
        <div>Redux</div>
    </Provider>
)