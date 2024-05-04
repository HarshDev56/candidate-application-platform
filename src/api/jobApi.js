// src/api/jobApi.js

export const fetchJobs = async () => {
    try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ limit: 10, offset: 0 }),
        });
        const data = await response.json();
        return data.jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};
