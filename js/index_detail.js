document.addEventListener('DOMContentLoaded', function () {
    const jobs = [
        {
            id: '1',
            image: 'assets/images/job1.png',
            title: 'Software Engineerkretj',
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

    const jobId = localStorage.getItem('jobId');
    const jobDetails = jobs.find(job => job.id === jobId);

    if (jobDetails) {
        document.getElementById('job-image').src = jobDetails.image;
        document.getElementById('job-title').textContent = jobDetails.title;
        document.getElementById('job-company').textContent = jobDetails.company;
        document.getElementById('job-location').textContent = jobDetails.location;
        document.getElementById('job-term').textContent = jobDetails.term;
        document.getElementById('job-posted').textContent = `Posted: ${jobDetails.posted}`;
        document.getElementById('job-salary').textContent = `Salary: ${jobDetails.salary}`;
        document.getElementById('job-experience').textContent = `Experience: ${jobDetails.experience}`;
        document.getElementById('about-job').textContent = jobDetails.companyDescription;
        document.getElementById('job-description').textContent = jobDetails.description;
        document.getElementById('job-responsibilities').textContent = jobDetails.responsibilities;
        document.getElementById('job-requirements').textContent = jobDetails.requirements;
        document.getElementById('job-benefits').textContent = jobDetails.benefits;
    } else {
        document.querySelector('.job-details-container').innerHTML = '<p>No job details available.</p>';
    }
});
