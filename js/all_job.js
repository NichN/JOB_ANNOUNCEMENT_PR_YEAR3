const latest_jobs = [
    {
        title: "Software Engineer",
        company: "ABC Tech",
        location: "New York, NY",
        term : "3 year+",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "../../assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        link: "../../job_detail.html",
        icon: "fas fa-laptop-code"
    },
        {
            title: "Software Engineer",
            company: "ABC Tech",
            location: "New York, NY",
            term : "3 year+",
            posted: "2 days ago",
            salary: "$80,000 - $100,000",
            image: "../../assets/logos/logo_1.1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
            link: "../../job_detail.html",
            icon: "fas fa-laptop-code"
        },
            {
                title: "Software Engineer",
                company: "ABC Tech",
                location: "New York, NY",
                term : "3 year+",
                posted: "2 days ago",
                salary: "$80,000 - $100,000",
                image: "../../assets/logos/logo_1.1.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
                companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
                link: "../../job_detail.html",
                icon: "fas fa-laptop-code"
            },
                {
                    title: "Software Engineer",
                    company: "ABC Tech",
                    location: "New York, NY",
                    term : "3 year+",
                    posted: "2 days ago",
                    salary: "$80,000 - $100,000",
                    image: "../../assets/logos/logo_1.1.png",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
                    companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
                    link: "../../job_detail.html",
                    icon: "fas fa-laptop-code"
                },
                    {
                        title: "Software Engineer",
                        company: "ABC Tech",
                        location: "New York, NY",
                        term : "3 year+",
                        posted: "2 days ago",
                        salary: "$80,000 - $100,000",
                        image: "../../assets/logos/logo_1.1.png",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
                        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
                        link: "../../job_detail.html",
                        icon: "fas fa-laptop-code"
                    },
    {
        title: "Product Manager",
        company: "XYZ Inc.",
        term : "2 - 3 year+",
        location: "San Francisco, CA",
        posted: "5 days ago",
        salary: "$120,000 - $150,000",
        image: "../../assets/logos/logo_2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "XYZ Inc. is an innovative company at the forefront of the tech industry, known for its creative solutions and strong team culture.",
        link: "job_detail.html",
        icon: "fas fa-cogs"
    },
    {
        title: "Product Manager",
        company: "XYZ Inc.",
        term : "5 - 10 year+",
        location: "San Francisco, CA",
        posted: "5 days ago",
        salary: "$120,000 - $150,000",
        image: "../../assets/logos/logo_2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "XYZ Inc. is an innovative company at the forefront of the tech industry, known for its creative solutions and strong team culture.",
        link: "job_detail.html",
        icon: "fas fa-cogs"
    }
];
const latestJobContainer = document.getElementById('all-job-container');

latest_jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.onclick = () => {
        localStorage.setItem('jobDetails', JSON.stringify(job));
        window.location.href = job.link;
    };

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

    latestJobContainer.appendChild(jobCard);
});