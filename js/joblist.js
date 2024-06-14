function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function () {
    const jobListContainer = document.querySelector('.job-list');
    const category = getQueryParameter('category');
    document.getElementById('category-name').textContent = category;

    function createJobListItem(job) {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `
            <h2><a href="job_detail.html?title=${encodeURIComponent(job.title)}">${job.title}</a></h2>
            <img src="${job.image}" alt="${job.title}">
            <p>${job.description}</p>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Posted:</strong> ${job.posted}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Term:</strong> ${job.term}</p>
            <p><strong>Position:</strong> ${job.position}</p>
        
        `;
        return jobItem;
    }

    const filteredJobs = jobs.filter(job => job.category === category);

    filteredJobs.forEach(job => {
        const jobListItem = createJobListItem(job);
        jobListContainer.appendChild(jobListItem);
    });
});
