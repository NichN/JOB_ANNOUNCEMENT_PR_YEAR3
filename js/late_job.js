const jobs = [
    {
        id: '1',
        image: 'assets/images/job1.png',
        title: 'Software Engineer',
        company: 'Tech Corp',
        location: 'New York, NY',
        term: 'Full-time',
        posted: '2023-06-01',
        salary: '$120,000',
        experience: '2+ years',
        description: 'Develop and maintain software applications...',
        companyDescription: 'Tech Corp is a leading software company...',
        responsibilities: 'Responsibilities of the job include...',
        requirements: 'Requirements for the job include...',
        benefits: 'Benefits of the job include...'
    },
    {
        id: '2',
        image: 'assets/images/job2.png',
        title: 'Graphic Designer',
        company: 'Design Studio',
        location: 'Los Angeles, CA',
        term: 'Part-time',
        posted: '2023-05-25',
        salary: '$60,000',
        experience: '1+ years',
        description: 'Create visual concepts to communicate ideas...',
        companyDescription: 'Design Studio specializes in branding and design...',
        responsibilities: 'Responsibilities of the job include...',
        requirements: 'Requirements for the job include...',
        benefits: 'Benefits of the job include...'
    },
    // Add more job objects as needed
];

function createJobCards() {
    const jobCardsContainer = document.getElementById('job-cards-container');
    jobCardsContainer.innerHTML = ''; // Clear existing cards

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.onclick = () => {
            localStorage.setItem('jobId', job.id);
            window.location.href = 'job-details.html';
        };

        jobCard.innerHTML = `
            <img src="${job.image}" alt="${job.company}">
            <div class="card-content">
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>${job.location}</p>
                <p>${job.term}</p>
                <p>Posted: ${job.posted}</p>
                <p>Salary: ${job.salary}</p>
                <p>Experience: ${job.experience}</p>
            </div>
        `;
        jobCardsContainer.appendChild(jobCard);
    });
}

document.addEventListener('DOMContentLoaded', createJobCards);
