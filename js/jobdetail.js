function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function () {
    const title = getQueryParameter('title');
    const job = jobs.find(job => job.title === title);

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
        document.body.innerHTML = '<p>Job not found.</p>';
    }
});
