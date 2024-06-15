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
        <a href="job_detail.html?title=${encodeURIComponent(job.title)}" style="text-decoration : none;">


                    <img src="${job.image}" alt="${job.title}">
                      <h2 style = "padding-top : 10px;color : black">${job.title}</h2>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p><strong>Posted:</strong> ${job.posted}</p>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                    <p><strong>Term:</strong> ${job.term}</p>
                    <p><strong>Experience:</strong> ${job.experience}</p>
                    <p><strong>Position:</strong> ${job.position}</p>
                     <p>${job.description}</p>
        </a>

        
        `;
        return jobItem;
    }

    const filteredJobs = jobs.filter(job => job.category === category);

    filteredJobs.forEach(job => {
        const jobListItem = createJobListItem(job);
        jobListContainer.appendChild(jobListItem);
    });
});
