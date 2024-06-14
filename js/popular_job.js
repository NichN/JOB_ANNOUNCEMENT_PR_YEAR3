const popular_jobs = [
    {
        title: "Software Engineer",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        link: "job_detail.html",
        icon: "fas fa-laptop-code"
    },
    {
        title: "Product Manager",
        company: "XYZ Inc.",
        location: "San Francisco, CA",
        posted: "5 days ago",
        salary: "$120,000 - $150,000",
        image: "assets/logos/logo_2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "XYZ Inc. is an innovative company at the forefront of the tech industry, known for its creative solutions and strong team culture.",
        link: "job_detail2.html",
        icon: "fas fa-cogs"
    },
    {
        title: "Product Manager",
        company: "XYZ Inc.",
        location: "San Francisco, CA",
        posted: "5 days ago",
        salary: "$120,000 - $150,000",
        image: "assets/logos/logo_2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "XYZ Inc. is an innovative company at the forefront of the tech industry, known for its creative solutions and strong team culture.",
        link: "job_detail2.html",
        icon: "fas fa-cogs"
    }
    {
     title: "Senior Accountant",
              company: "ABC Corp.",
              location: "New York, NY",
              posted: "10 days ago",
              salary: "$90,000 - $110,000",
              image: "assets/logos/logo_3.png",
              description: "Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.",
              companyDescription": "ABC Corp. specializes in financial services and provides top-notch solutions to its clients.",
              link: "job_detail3.html",
              icon: "fas fa-calculator"
    }

];
const popularJobContainer = document.getElementById('popular-job-container');
popular_jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.onclick = () => window.location.href = job.link;

    jobCard.innerHTML = `
        <img src="${job.image}" alt="${job.company}">
        <div class="card-content">
            <h3>${job.title}</h3>
            <div class="icon-text">
                <i class="${job.icon}"></i>
                <p>${job.company}</p>
            </div>
            <div class="icon-text">
                <i class="fas fa-map-marker-alt"></i>
                <p>${job.location}</p>
            </div>
            <div class="icon-text">
                <i class="fas fa-calendar-alt"></i>
                <p>${job.posted}</p>
            </div>
            <div class="icon-text">
                <i class="fas fa-dollar-sign"></i>
                <p class="salary">${job.salary}</p>
            </div>
            <p>${job.description}</p>
            <div class="company-description">
                <p>${job.companyDescription}</p>
            </div>
        </div>
    `;

    popularJobContainer.appendChild(jobCard);
});