// Define the initial state for your Redux store
const initialState = {
    jobs: [], // Initialize jobs array as empty
};

// Define the root reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Define a case for handling the action type 'FETCH_JOBS_SUCCESS'
        case 'FETCH_JOBS_SUCCESS':
            // When 'FETCH_JOBS_SUCCESS' action is dispatched, update the state
            return {
                ...state, // Keep the current state
                jobs: action.payload.jdList || [], // Update the 'jobs' array with the payload from the action
            };
        // If the action type doesn't match any defined case, return the current state
        default:
            return state;
    }
};

// Export the root reducer function
export default rootReducer;
