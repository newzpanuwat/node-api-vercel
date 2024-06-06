const expLists = [
  {
    id: 13,
    projectName: "Digital Services",
    companyName: "Extend-IT OS at SCB Digital Services",
    position: "Full Stack Developer",
    companyColor: "purple.500",
    frontend: "React JS",
    backend: "Java",
    devops: "",
    database: "SQL",
    year: "Nov 2023 - Present",
    description:
      "Develop and implement web application features to enhance user experience and functionality, Identify and fix bugs in each task to maintain application integrity and usability",
  },
  {
    id: 12,
    projectName: "tks console",
    companyName: "True IDC",
    position: "Senior Frontend Engineer",
    companyColor: "red.500",
    frontend: "Next JS",
    backend: "",
    devops: "Kubernetes",
    database: "",
    year: "Dec 2022 - Oct 2023",
    description:
      "In part of frontend development in TKS Console team at True IDC, handle data flow k8s and another APIs from backend and k8s API, develop extended features TKS console details of Deployment, Service, Pod, Ingress etc, and collaborate with Product Owner and (Team / Squad ) Lead Developer with whole app data flow and design",
  },
  {
    id: 11,
    projectName: "iService",
    companyName: "Apar Technologies OS at ไทยประกันชีวิต",
    position: "Full Stack Developer (React)",
    companyColor: "blue.500",
    frontend: "Next JS",
    backend: "Java Spring Boot",
    devops: "Kubernetes",
    database: "Postgres",
    year: "July 2022 - Nov 2022",
    description:
      "Working with exitsing project iService (Gathering existing partner services into one service), In this project I've designed and develop frontend application using Next JS and connect API, in Backend section is RESTful API, and deployment with Kubernetes On-Premise",
  },
  {
    id: 10,
    projectName: "Solar Web",
    companyName: "Apar Technologies OS at ไทยประกันชีวิต",
    position: "Full Stack Developer (React)",
    companyColor: "blue.500",
    frontend: "Next JS",
    backend: "Java Spring Boot",
    devops: "CI/CD Jenkins",
    database: "Postgres",
    year: "June 2022 - July 2022",
    description:
      "This project working about financial data of customers, CRUD data, Upload xlsx files to cloud storage, send and receive requests with RESTful API backend , And Generate report from json data, I've designed project structure Next js and pick up suitable libraries for developer in our team.",
  },
  {
    id: 9,
    projectName: "Prithailand",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "React JS",
    backend: "Ruby On Rails",
    devops: "Docker",
    database: "Postgres",
    year: "June 2021 - May 2022",
    description:
      "This project I've built Web Application about questionnaire for officer's government to keep data source from children and family issues, then gathering data respnse to any charts response solutions to that family, I built Front and Backend stack React js and Ruby on Rails",
  },
  {
    id: 8,
    projectName: "BI Suite",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "Next JS",
    backend: "Python",
    devops: "Docker",
    database: "Postgres",
    year: "Mar 2021 - Apr 2021",
    description:
      "I've built feature in frontend feature, Color Scheme, change theme in app any color u want, Pick the color by hexcode then save data into Postgres DB, and upload images to Django python",
  },
  {
    id: 7,
    projectName: "Chat SmartFarmer",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "Flutter (Mobile)",
    backend: "",
    devops: "",
    database: "",
    year: "Nov 2020 - Feb 2021",
    description:
      "Designed structure and develop features Chat SmartFarmer(ฉัตร สมาร์ทฟาร์มเมอร์) With Flutter Mobule cross platform, connect with APIs CPI backend.",
  },
  {
    id: 6,
    projectName: "KU Terebinth AWS Project",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer / Devops",
    companyColor: "red.500",
    frontend: "",
    backend: "",
    devops: "Amazon Web Service EKS",
    database: "",
    year: "Oct 2020 - Nov 2020",
    description:
      "My reponsible is research and deploy Terebinth Web application to Amazon Web Service EKS, for KU",
  },
  {
    id: 5,
    projectName: "Terebinth ERP",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "React js",
    backend: "Ruby On Rails",
    devops: "",
    database: "Mongo DB",
    year: "Mar 2019 - Sep 2020",
    description:
      "Terebinth ERP is a business process management and information system (ERP) on the Cloud within the organization that integrates the functionality of every department or corporate units within a single system.",
  },
  {
    id: 4,
    projectName: "Ardala",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "Vue js",
    backend: "Ruby On Rails",
    devops: "",
    database: "Mongo DB",
    year: "Sep 2018 - Feb 2019",
    description:
      "Ardala is an online platform bringing together startups and service providers, In this project I've built Frontend Vue js and Backend Ruby on Rails.",
  },
  {
    id: 3,
    projectName: "Schoolbus Tracker",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "Jquery",
    backend: "Ruby On Rails",
    devops: "",
    database: "Mongo DB",
    year: "Mar 2018 - Aug 2018",
    description:
      "School bus Tracker is GPS tracking system school bus of each bus of that school will know where your children is on the road. In this project I've built Frontend Jquery and Backend Ruby on Rails.",
  },
  {
    id: 2,
    projectName: "10DK",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "Angular JS",
    backend: "Ruby On Rails",
    devops: "",
    database: "Mongo DB",
    year: "Jan 2018 - Feb 2018",
    description:
      "Single Page Application with Angular JS / 10DK Web Application, This my section project on production, I've built Angular JS",
  },
  {
    id: 1,
    projectName: "Thumbprint",
    companyName: "Swiftlet Co Ltd",
    position: "Software Engineer",
    companyColor: "red.500",
    frontend: "Jquery",
    backend: "Ruby On Rails",
    devops: "",
    database: "Mongo DB",
    year: "Aug 2017 - Dec 2017",
    description:
      "This is my first official project, It’s Swiftlet Internal project, for tracking clock in time and clock out time employees, I've built existing features e.g Generate report each employee to xlsx, built approve / request timesheet",
  },
];

module.exports = { expLists };
