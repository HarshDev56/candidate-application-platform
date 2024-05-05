// Async function to fetch jobs from an API endpoint
export const fetchJobs = async () => {
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

        // Return the jobs from the fetched data
        return data.jobs;
    } catch (error) {
        // Log any errors that occur during the fetching process
        console.error("Error fetching jobs:", error);

        // Return an empty array in case of error
        return [];
    }
};
