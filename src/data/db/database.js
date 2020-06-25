import Mock from "../mock";

const database = {
  information: {
    name: 'Greg Johnston',
    aboutContent: "I'm a full stack web developer and composer from South Carolina.",
    age: null,
    phone: '920.750.9270',
    nationality: null,
    language: 'English, Conversational Spanish',
    email: 'GCJohnston91@gmail.com',
    address: null,
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: null,
      twitter: 'https://twitter.com/gregisliving',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/greg-johnston-a855974a/',
      dribbble: '',
      github: 'https://github.com/gcj2'
    },
    brandImage: '/images/profile.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 100
    },
    {
      title: "CSS3/LESS/SASS",
      value: 100
    },
    {
      title: "Javascript",
      value: 100
    },
    {
      title: "ReactJS",
      value: 100
    },
    {
      title: "Node",
      value: 100
    },
    {
      title: "Python",
      value: 100
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Cats and Kanye",
      subtitle: "Pictures of cats with quotes from Ye.",
      imageUrl: "/images/catsandkanye.jpg",
      technologies: 'React, Axios, and SASS',
      frontEnd: 'React, Axios, and SASS',
      backend: null,
      apis: ['https://aws.random.cat/',
        'https://kanye.rest/'],
      gitHubLink: 'https://github.com/GCJ2/catsAndKanye',
      url: 'https://cats-and-kanye.herokuapp.com/'
    },
    {
      id: 2,
      title: "GitHub User Search",
      subtitle: "Search for GitHub users using the GitHubAPI",
      imageUrl: "/images/GHUserCard.jpg",
      technologies: 'React, Axios, and SASS',
      frontEnd: 'React, Axios, and SASS',
      backEnd: null,
      apis: ['https://developer.github.com/v3/'],
      gitHubLink: 'https://github.com/GCJ2/React-Github-User-Card',
      url: 'https://gcj2-github-user-search.netlify.app/'
    },
    {
      id: 3,
      title: "Node Express Boiler Plate",
      subtitle: "Sample Express server with auth and custom middleware.",
      imageUrl: "/images/node.jpg",
      technologies: 'React, Axios, and SASS',
      frontEnd: null,
      backEnd: 'Node, Express, JWT, Various Middleware',
      apis: null,
      gitHubLink: 'https://github.com/GCJ2/rpg-charView-db',
      url: null
    }
],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "11/19 - Present",
        position: "Software Engineer Team Lead",
        company: "Lambda School",
        details: "Provided daily feedback and issue resolution of all curriculum through slack help channel or code review\n" +
          "\n" +
          "Delivered one-on-one feedback and code review on a weekly basis\n" +
          "\n" +
          "Led a team of 6 students that emulates a real work environment using Agile methodology\n" +
          "\n" +
          "Mentored students on how to learn effectively and solve programming problems\n" +
          "\n" +
          "Reviewed student code and provided detailed feedback on areas of improvement\n" +
          "\n" +
          "Facilitated daily standup meetings to build camaraderie, facilitate sharing of ideas and work progress, and provide guidance for that week's study material\n" +
          "\n" +
          "Delivered supplemental lectures on various topics related to software engineering",
        detailPoints: [
          "Provided daily feedback and issue resolution of all curriculum through slack help channel or code review",
          "Delivered one-on-one feedback and code review on a weekly basis",
          "Led a team of 6 students that emulates a real work environment using Agile methodology",
          "Mentored students on how to learn effectively and solve programming problems",
          "Reviewed student code and provided detailed feedback on areas of improvement",
          "Facilitated daily standup meetings to build camaraderie, facilitate sharing of ideas and work progress, and provide guidance for that week's study material",
          "Delivered supplemental lectures on various topics related to software engineering",
        ]
      },
      // {
      //   id: 2,
      //   year: "8/17 - 5/19",
      //   position: "Security Officer",
      //   company: "Peacock Automotive",
      //   details: "Responsible for all quality control standards for both safety and security for full company operation\n" +
      //     "\n" +
      //     "Compose daily reports communicating any and all lot activity\n" +
      //     "\n" +
      //     "Liaise between security director and management staff regarding security issues and policy changes\n" +
      //     "\n" +
      //     "Manage daily and weekly security strategy and make recommendations in accordance with process\n" +
      //     "improvements",
      //   detailPoints: [
      //     "Responsible for all quality control standards for both safety and security for full company operation",
      //     "Compose daily reports communicating any and all lot activity",
      //     "Liaise between security director and management staff regarding security issues and policy changes",
      //     "Manage daily and weekly security strategy and make recommendations in accordance with process improvements",
      //   ]
      // },
      {
        id: 3,
        year: "9/14 - 5/18",
        position: "Operations Manager",
        company: "George P. Johnson",
        details: "Dreamforce 2014 – 2017; Cisco Live! 2015 – 2016; 2018; Cisco GSX 2015\n" +
          "\n" +
          "Overall support for operation logistics for conferences with designated areas of focus\n" +
          "\n" +
          "Oversaw training and management of teams ranging from 50 to 750+\n" +
          "\n" +
          "Managed staffing effort for breakout sessions, registration, conference movement, meals, general session load-in and out and jingle presentations\n" +
          "\n" +
          "Company/Client liaison and support for auxiliary functions and overall conference logistics.",
        detailPoints: [
          "Dreamforce 2014 – 2017; Cisco Live! 2015 – 2016; 2018; Cisco GSX 2015",
          "Overall support for operation logistics for conferences with designated areas of focus",
          "Oversaw training and management of teams ranging from 50 to 750+",
          "Managed staffing effort for breakout sessions, registration, conference movement, meals, general session load-in and out and jingle presentations",
          "Company/Client liaison and support for auxiliary functions and overall conference logistics.",
        ]
      },
      {
        id: 4,
        year: "8/14 - 12/17",
        position: "School Coordinator & Assistant Teacher",
        company: "The Harvest Daycare and Preschool",
        details: "Assist in day-to-day school operations including, but not limited to, opening and closing center, processing enrollment paperwork for new students, overseeing logistics for field trips and special events\n" +
          "\n" +
          "Support lead teachers in educating children in basic academic principle\n" +
          "\n" +
          "Communicate with parents regarding child's academic and behavioral progress",
        detailPoints: [
          "Assist in day-to-day school operations including, but not limited to, opening and closing center, processing enrollment paperwork for new students, overseeing logistics for field trips and special events",
          "Support lead teachers in educating children in basic academic principle",
          "Communicate with parents regarding child's academic and behavioral progress"
        ]
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "Full Stack Web Development",
        university: "Lambda School",
        details: "Bootcamp with a project focused environment using React, Node/Express and foundational Computer Science.",
        detailPoints: [
          "Bootcamp with a project focused environment using React, Node/Express and foundational Computer Science."
        ]
      },
      {
        id: 2,
        year: "2018",
        graduation: "Bachelor of Arts (Incomplete), Spanish",
        university: "University of South Carolina",
        details: "Double major in Spanish and Linguistics; 3.75 GPA",
        detailPoints: [
          "Double major in Spanish and Linguistics",
          "3.75 GPA"
        ]
      },
      // {
      //   id: 3,
      //   year: "2011 - 2013",
      //   graduation: "Leadership Training and Pastoral Accreditation",
      //   university: "University of Valley Forge",
      //   details: "Resident Assistant\n" +
      //     "Mission Trip to Madrid Spain (3/12) - Fundraising \n" +
      //     "Financial Processing for Ecuador Mission Trip (3/13) \n" +
      //     "Worship Team Instrumentation \n" +
      //     "Theological Instructor",
      //   detailPoints: [
      //     "Resident Assistant",
      //     "Mission Trip to Madrid Spain (3/12) - Fundraising",
      //     "Financial Processing for Ecuador Mission Trip (3/13)",
      //     "Worship Team Instrumentation",
      //     "Theological Instructor"  ]
      // },
      {
        id: 4,
        year: "2009 - 2011",
        graduation: "Associates of Arts",
        university: "University of Wisconsin",
        details: "3.5 GPA",
        detailPoints: [
          "3.5 GPA."
        ]
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['920.750.9270'],
    emailAddress: ['gcjohnston91@gmail.com'],
    twitter: ['gregisliving'],
    linkedIn: ['https://www.linkedin.com/in/greg-johnston-a855974a/'],
    gitHub: ['https://github.com/gcj2'],
    address: null
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});