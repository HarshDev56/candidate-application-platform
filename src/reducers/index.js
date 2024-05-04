// src/reducers/index.js

const initialState = {
    jobs: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOBS_SUCCESS':
            console.log('Updated Jobs State:', action.payload); // Log updated state
            return {
                ...state,
                jobs: action.payload.jdList || [], // Assuming jobs array is under 'jcList' property
            };
        default:
            return state;
    }
};

export default rootReducer;
