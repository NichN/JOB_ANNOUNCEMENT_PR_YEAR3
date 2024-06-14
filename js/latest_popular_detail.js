document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobTitle = urlParams.get('title');

    if (!jobTitle) {
        document.body.innerHTML = '<h1>No job title specified.</h1>';
        return;
    }

    const job = latest_jobs.concat(popular_jobs).find(job => job.title === jobTitle);

    if (!job) {
        document.body.innerHTML = '<h1>Job not found.</h1>';
        return;
    }

    document.getElementById('job-image').src = job.image;
    document.getElementById('job-title').innerText = job.title;
    document.getElementById('job-company').innerText = job.company;
    document.getElementById('job-term').innerText = `Posted: ${job.posted}`;
    document.getElementById('job-position').innerText = `Location: ${job.location}`;
    document.getElementById('job-experience').innerText = `Salary: ${job.salary}`;
    document.getElementById('about-job').innerText = job.companyDescription;
    document.getElementById('job-description').innerText = job.description;
    // Add other job details similarly...
});
