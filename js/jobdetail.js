function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get(name);
    console.log(`Query Parameter - ${name}:`, param); // Log the parameter value
    return param;
}

document.addEventListener('DOMContentLoaded', function () {
    const title = getQueryParameter('title');
    if (!title) {
        console.error('No title query parameter found.');
        document.body.innerHTML = '<p>No job title specified.</p>';
        return;
    }

    const job = jobs.find(job => job.title === title);
    console.log('Matched Job:', job);

    if (job) {
        document.getElementById('job-title').textContent = job.title;
        document.getElementById('job-image').src = job.image;
        document.getElementById('job-description').textContent = job.description;
        document.getElementById('job-company').textContent = job.company;
        document.getElementById('job-location').textContent = job.location;
        document.getElementById('job-posted').textContent = job.posted;
        document.getElementById('job-salary').textContent = job.salary;
        document.getElementById('job-term').textContent = job.term;
        document.getElementById('job-position').textContent = job.position;
        document.getElementById('job-experience').textContent = job.experience;
        document.getElementById('job-company-description').textContent = job.companyDescription;
    } else {
        console.error('Job not found for the given title.');
        document.body.innerHTML = '<p>Job not found.</p>';
    }
});