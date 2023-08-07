import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import {  FiUser, FiSend } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai'

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sejal',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Aggarwal',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Near Shiv Mandir, Sikandrabad, Dist. Bulandshahr, UP, 203205',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91 8384855065',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'sejalaggarwal0@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1.5',
    title: 'Years of <br /> Experience in Cvent',
  },

  {
    id: 2,
    no: '6+',
    title: 'Completed few React Projects and MERN Projects',
  },

  {
    id: 3,
    no: '2',
    title: ' Awards <br /> Won - ROCKSTAR Award(CVENT)',
  },
  {
    id: 4,
    no: '500+',
    title: ' Data Structure & Algorithm Questions',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jul 2022 - PRESENT',
    title: 'Application Engineer',
    desc: '•Have received two Rockstar Awards for best performance in Cvent. •Addition to that, get a 5+ exceptional rating on the client ticket on providing quick resolution/workaround for solving the issues very quickly. •Have contributed to the project and bux fixing of the application. •Monitoring tools such as Datadogs, NewRelic, and Splunk were used to monitor production, troubleshoot 80+ bugs, and suggest code fixes. •Created DD synthesis to track performance of website and determine where the alert is coming from in order to easily diagnose the error. •Excelled at troubleshooting customer-specific issues by providing technical expertise and resolution to 700+ client tickets, as well as providing customer-specific data and reports using SQL, Postgres, and Couchbase data storages, as well as Code Level Troubleshooting to identify bugs and potential issues in the applicationʼs smooth operation. •Actively participated in the team building activities as well.'
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jan 2022 - Jun 2022',
    title: 'Application Engineer Intern',
    desc: '•Worked on Datadog, Elastic Search, NewRelic, Splunk, and Couchbase •Have expertise in Advanced SQL'
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2022',
    title: 'Engineering Degree <span> Noida Institute of Engineering and Technology, Greater Noida </span>',
    desc: '•Have good understanding of the Data Structure and Programming. •Have learnt DSA and prepared few projects on Machine Learning.',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: '12th - Divine Educational Institute',
    
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015-2016',
    title: '10th - Divine Educational Institute',
    
  }
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 4,
    title: 'React',
    percentage: '90',
  },

  {
    id: 5,
    title: 'Bootstrap',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '50',
  },

  {
    id: 8,
    title: 'Next.js',
    percentage: '45',
  },
];
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Library Management System',
    details: [
   
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'It is an application used to store the data for the library management using the Jframe work•Availability of the book can be checked •Administrator can check who has the book handy after the due date and fine can also be imposed depending on the number of due days',
      },
      {
        icon: <FaCode />,
        title: 'Technology Used : ',
        desc: 'Jetbeans',
      },
      {
        icon: <AiOutlineLink />,
        title: 'Github : ',
        desc: <a href="https://github.com/sejal175/Library-Management-System"><FiSend /></a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Textutils',
    details: [
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'It is a website where we can play with the words, i.e. reverse, copy, clear, bold, italics, underline, lower and upper conversion •It would give us the functionality to count the words. •It has a dark and light theme available •Each function after completion shows an alert',
      },
      {
        icon: <FaCode />,
        title: 'Technology Used : ',
        desc: 'React JS',
      },
      {
        icon: <AiOutlineLink />,
        title: 'Github : ',
        desc: <a href="https://github.com/sejal175/Textutils-React"><FiSend /></a>,
      },
      {
        icon: <AiOutlineLink />,
        title: 'Website : ',
        desc: <a href="https://textutils.aggarwalsejal.com/"><FiSend /></a>,
      }
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'News App',
    details: [
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'This is a news website where we can find the day-to-day updates on different categories like science, business, entertainment, technology etc. •It was built with the help of a NEWS API call. Have embedded that api in my website •Have loading spinner and infinite scroll bar added •With the news, we can also see the author and resource of that news',
      },
      {
        icon: <FaCode />,
        title: 'Technology Used : ',
        desc: 'React JS',
      },
      {
        icon: <AiOutlineLink />,
        title: 'Github : ',
        desc: <a href="https://github.com/sejal175/Newsapp-react"><FiSend /></a>,
      },
      
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'E-Notes',
    details: [
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'This is a complete MERN based project •Have created an e-notes platform where we can store all our day-to-day notes •Have created APIs using thunder client •Deletion, update and addition of notes is available',
      },
      {
        icon: <FaCode />,
        title: 'Technology Used : ',
        desc: 'React JS',
      },
      {
        icon: <AiOutlineLink />,
        title: 'Github : ',
        desc: <a href="https://github.com/sejal175/ENotes-React"><FiSend /></a>,
      },
      {
        icon: <AiOutlineLink />,
        title: 'Website : ',
        desc: <a href="https://enotes-ui.aggarwalsejal.com/"><FiSend /></a>,
      }
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'MS Excel Clone',
    details: [
      {
        title: 'Desc : ',
        desc: 'This is an Excel application which has the feature liken open, save, cut, paste and copy. Various Formulas can be evaluated where values are present in different cells. Cycle detection in the formaula leading to create dependency. New open save fuctionality is added.',
      },
      {
        title: 'Technology Used : ',
        desc: 'Javascript, HTML, CSS',
      },
      {
        icon: <AiOutlineLink />,
        title: 'Github : ',
        desc: <a href="https://github.com/sejal175/MS-Excel-Clone"><FiSend /></a>,
      },
      {
        icon: <AiOutlineLink />,
        title: 'Website : ',
        desc: <a href="https://ms-excel-l4f3.onrender.com"><FiSend /></a>,
      }
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Camera App',
    details: [
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 't has functionalities such as Zoom In, Zoom Out, & Filters •Flexibility to Download and Delete Photos on the fly'
      },
      {
        icon: <FaCode />,
        title: 'Technology Used : ',
        desc: 'Javascript, HTML, CSS, BOM, DOM, IndexedDB',
      },
      {
        icon: <AiOutlineLink />,
        title: 'Github : ',
        desc: <a href="https://github.com/sejal175/Camera-App"><FiSend /></a>,
      },
      {
        icon: <AiOutlineLink />,
        title: 'Website : ',
        desc: <a href="https://camera.aggarwalsejal.com/"><FiSend /></a>,
      }
    ],
  },
];


export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];