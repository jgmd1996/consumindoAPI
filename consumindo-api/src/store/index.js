import { createStore} from 'redux';

import rootReducer from '../modules/rootReducer';

const store = createStore(
    rootReducer,
    + window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    export default store;