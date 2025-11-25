import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Rahul Taneja",
  role: "Software Engineer II",
  summary: "As a skilled MEAN stack developer, I specialize in creating dynamic, scalable, and efficient web applications. With expertise in MongoDB, Express.js, Angular, and Node.js, I thrive on solving complex problems, optimizing performance, and delivering seamless user experiences. I bring a strong focus on clean code, best practices, and collaborative teamwork.",
  email: "rtaneja1584@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahul-t-6aa439344",
  location: "Dehradun, Uttarakhand, India",
  skills: [
    {
      category: "Frontend",
      items: ["AngularJS", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "Microservices"]
    },
    {
      category: "Database",
      items: ["MongoDB", "Database Architecture"]
    },
    {
      category: "Methodologies & Tools",
      items: ["Agile", "Git", "Unit Testing", "Performance Optimization"]
    }
  ],
  experience: [
    {
      company: "Concentrix Catalyst",
      role: "Software Engineer II (TCF)",
      duration: "January 2025 - Present",
      location: "India",
      description: [
        "Developing scalable backend services using Node.js, Express, and MongoDB.",
        "Building and integrating APIs and microservices for high-performance applications.",
        "Collaborating with cross-functional teams to deliver end-to-end solutions.",
        "Ensuring code quality through unit testing, code reviews, and Agile practices."
      ]
    },
    {
      company: "Accenture",
      role: "Application Development Analyst",
      duration: "February 2022 - December 2024",
      location: "Gurugram, Haryana, India",
      description: [
        "Developed frontend features using Angular to enhance user experience.",
        "Optimized backend APIs with Node.js for secure data processing.",
        "Collaborated with cross-functional teams to deliver tailored solutions."
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "System Engineer",
      duration: "August 2019 - February 2022",
      location: "Remote",
      description: [
        "Optimized application performance, reducing load times by 30%.",
        "Designed and implemented a reusable component library, streamlining frontend development.",
        "Played a key role in modernizing legacy systems by integrating new technologies.",
        "Contributed to enhancing user satisfaction through intuitive and efficient designs."
      ]
    }
  ],
  education: [
    {
      institution: "DIT UNIVERSITY",
      degree: "Bachelor of Technology - Computer Science",
      year: "2015 - 2019"
    },
    {
      institution: "Scholars Home Dehradun",
      degree: "Schooling",
      year: "April 2002 - May 2015"
    }
  ]
};

export const CHAT_SYSTEM_INSTRUCTION = `You are an AI assistant representing Rahul Taneja. Use the following resume context to answer questions about his professional background. Be concise, professional, and friendly.

Context:
Name: Rahul Taneja
Role: Software Engineer II at Concentrix Catalyst
Skills: MEAN Stack (MongoDB, Express, Angular, Node.js), Agile, Microservices, REST APIs.
Experience:
- Concentrix Catalyst (Jan 2025-Present): Scalable backend, APIs, Microservices.
- Accenture (Feb 2022-Dec 2024): Frontend (Angular), Backend (Node), Optimization.
- TCS (Aug 2019-Feb 2022): Performance optimization (30% load time reduction), Reusable component library.
Education: BTech CS from DIT University (2015-2019).

If asked about contact info, provide rtaneja1584@gmail.com.
If asked about a skill not listed, honestly say it's not explicitly mentioned in the resume but emphasize his adaptability.
`;