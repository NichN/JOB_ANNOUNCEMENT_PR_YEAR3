const latest_jobs = [
      {
          "title": "Project Administrator",
          "company": "ProjManage",
          "location": "Denver, CO",
          "posted": "3 days ago",
          "salary": "$55,000 - $70,000",
          "image": "assets/logos/com_2.png",
          "description": "Support project managers in planning and executing projects. Maintain project documentation.",
          "companyDescription": "ProjManage offers project management and administrative support services.",
          "icon": "admin.png",
          "term": "2 year+",
          "position": "Administrator",
          "experience": "3 - 5 years",
          "category": "Administrator"
      },
       {
              "title": "Software Engineer",
              "company": "ABC Tech",
              "location": "New York, NY",
              "posted": "2 days ago",
              "salary": "$80,000 - $100,000",
              "image": "assets/logos/com_9.jpeg",
              "description": "Develop and maintain software applications. Collaborate with cross-functional teams.",
              "companyDescription": "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
              "icon": "it.png",
              "term": "3 year+",
              "position": "Manager",
              "experience": "4 - 6 years",
              "category": "Information Technology"
          },
          {
              "title": "Network Administrator",
              "company": "Net Solutions",
              "location": "San Jose, CA",
              "posted": "1 week ago",
              "salary": "$70,000 - $85,000",
              "image": "assets/logos/com_8.png",
              "description": "Manage and maintain network infrastructure. Ensure network security and performance.",
              "companyDescription": "Net Solutions is a leading provider of network services and solutions.",
              "icon": "it.png",
              "term": "3 year+",
              "position": "Administrator",
              "experience": "3 - 5 years",
              "category": "Information Technology"
          },


];

const popular_jobs = [
   {
             "title": "Project Administrator",
             "company": "ProjManage",
             "location": "Denver, CO",
             "posted": "3 days ago",
             "salary": "$55,000 - $70,000",
             "image": "assets/logos/com_6.jpeg",
             "description": "Support project managers in planning and executing projects. Maintain project documentation.",
             "companyDescription": "ProjManage offers project management and administrative support services.",
             "icon": "admin.png",
             "term": "2 year+",
             "position": "Administrator",
             "experience": "3 - 5 years",
             "category": "Administrator"
         },
          {
                 "title": "Software Engineer",
                 "company": "ABC Tech",
                 "location": "New York, NY",
                 "posted": "2 days ago",
                 "salary": "$80,000 - $100,000",
                 "image": "assets/logos/com_10.png",
                 "description": "Develop and maintain software applications. Collaborate with cross-functional teams.",
                 "companyDescription": "ABC Tech is a leading tech company specializing in software development and IT consulting. We offer a dynamic and inclusive work environment.",
                 "icon": "it.png",
                 "term": "3 year+",
                 "position": "Manager",
                 "experience": "4 - 6 years",
                 "category": "Information Technology"
             },
             {
                 "title": "Network Administrator",
                 "company": "Net Solutions",
                 "location": "San Jose, CA",
                 "posted": "1 week ago",
                 "salary": "$70,000 - $85,000",
                 "image": "assets/logos/com_7.jpeg",
                 "description": "Manage and maintain network infrastructure. Ensure network security and performance.",
                 "companyDescription": "Net Solutions is a leading provider of network services and solutions.",
                 "icon": "it.png",
                 "term": "3 year+",
                 "position": "Administrator",
                 "experience": "3 - 5 years",
                 "category": "Information Technology"
             },
];

const latestJobContainer = document.getElementById('latest-job-container');
const popularJobContainer = document.getElementById('popular-job-container');

latest_jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.onclick = () => window.location.href = `${job.link}?title=${encodeURIComponent(job.category)}`;

    jobCard.innerHTML = `
        <img src="${job.image}" alt="${job.company}">

        <div class="card-content">

         <h3>${job.title}</h3>
        <div class="icon-text">

                        <i class="fas fa-building"></i>
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
                    <div style = "text-align : center;"  class="company-description">
                        <p>${job.companyDescription}</p>
                    </div>
                </div>




    `;

    latestJobContainer.appendChild(jobCard);
});

popular_jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.onclick = () => window.location.href = `${job.link}?title=${encodeURIComponent(job.title)}`;

    jobCard.innerHTML = `
        <img src="${job.image}" alt="${job.company}">
        <div class="card-content"  style = "text-align : center;">
            <h3><a href="job_detail.html?title=${encodeURIComponent(job.title)}" style= "text-decoration: none;">${job.title}</a></h3>
            <div class="icon-text">
                <i class="${job.icon}"></i>
                <p  >${job.company}</p>
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

        </div>
    `;

    popularJobContainer.appendChild(jobCard);
});
