// Import necessary functions from Redux
import { createStore, applyMiddleware } from 'redux';

// Import the root reducer, which combines all your reducers
import rootReducer from '../reducers';

// Import thunk middleware for handling asynchronous actions
import { thunk } from 'redux-thunk';

// Create the Redux store with the root reducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Export the created Redux store
export default store;
