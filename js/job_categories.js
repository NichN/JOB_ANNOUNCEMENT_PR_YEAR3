const jobs = [
    {
        title: "Information Technology",
        company: "ABC1 Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "it.png"
    },
    {
        title: "Administrator",
        company: "ABC 3Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "administrator.png"
    },
    {
        title: "Architecture/Engineering",
        company: "ABC3 Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "architectures.png"
    },
    {
        title: "Accounting",
        company: "ABC6 Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "accounting.png"
    },
    {
        title: "Cashier",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "cashiers.png"
    },
    {
        title: "Banking",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "banking copy.png"
    },
    {
        title: "Education",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "education_training.png"
    },
    {
        title: "Customer Service",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "customer_service.png"
    },
    {
        title: "Graphic Design",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "design.png"
    },
    {
        title: "Software Engineering",
        company: "ABC Tech",
        location: "New York, NY",
        posted: "2 days ago",
        salary: "$80,000 - $100,000",
        image: "assets/logos/logo_1.1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        companyDescription: "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
        icon: "software_dev.png"
    },

];

document.addEventListener('DOMContentLoaded', function () {
    const jobCategoriesContainer = document.querySelector('.job-categories');
    function createJobCategoryButton(jobIndex) {
        const job = jobs[jobIndex];
        const button = document.createElement('div');
        button.className = 'custom-button';
        button.style.backgroundColor = '#A7727D';
        button.innerHTML = `
            <img src="assets/Icons/${job.icon}" alt="Technology Information">
            ${job.title}
        `;
        button.addEventListener('click', () => displayJobDetails(jobIndex));
        return button;
    }

    for (let i = 0; i < jobs.length; i++) {
        const jobButton = createJobCategoryButton(i);
        jobCategoriesContainer.appendChild(jobButton);
    }
});



