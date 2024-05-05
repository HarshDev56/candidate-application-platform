// Action creator for successful job fetching
export const fetchJobsSuccess = (jobs) => ({
    type: 'FETCH_JOBS_SUCCESS', // Action type
    payload: jobs, // Payload containing the fetched jobs
});

// Async action creator to fetch jobs from an API endpoint
export const fetchJobs = () => {
    return async (dispatch) => { // Returns a function that accepts dispatch as an argument
        try {
            // Make a POST request to the API endpoint
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ limit: 10, offset: 0 }), // Include specific parameters in the request body
            });

            // Extract JSON data from the response
            const data = await response.json();

            // Dispatch the fetchJobsSuccess action with the fetched jobs
            dispatch(fetchJobsSuccess(data));
        } catch (error) {
            // Log any errors that occur during the fetching process
            console.error("Error fetching jobs:", error);
        }
    };
};
