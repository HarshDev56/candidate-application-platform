// src/actions/index.js

export const fetchJobsSuccess = (jobs) => ({
    type: 'FETCH_JOBS_SUCCESS',
    payload: jobs,
});

export const fetchJobs = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ limit: 10, offset: 0 }),
            });
            const data = await response.json();
            console.log('Fetched Jobs:', data); // Log fetched jobs
            dispatch(fetchJobsSuccess(data));
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };
};
