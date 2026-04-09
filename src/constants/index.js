const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Blog", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "July - August 2025",
        title:
            "Figma Prototype Designs",
        image: "/images/figma-logo.png",
        link: "https://drive.google.com/drive/folders/1CMudTOFIgn9ZvZrciqg-wvhnrdMNEPj0?usp=sharing",
    },

    {
        id: 2,
        date: "April 8, 2026",
        title:
            "Android Project Applications",
        image: "/images/android-logo.png",
        link: "https://github.com/christendeo/Android-Chat-App-gRPC",
    },

    {
        id: 3,
        date: "April 8, 2026",
        title:
            "AI Underwriter: Healthcare Insurance Claim Analyzer",
        image: "/images/google-colab-logo.png",
        link: "https://drive.google.com/drive/folders/1IDxecUR-vBp8mB2UpL7WNLAYU_gnC56H?usp=sharing",
    },

    {
        id: 4,
        date: "April 8, 2026",
        title:
            "Cinema 4D Designs",
        image: "/images/cinema-4d-logo.png",
        link: "https://drive.google.com/drive/folders/1yyIn2J3ErvdQMcC7jJOuON2QkOMBpFY-?usp=sharing",
    },

    {
        id: 5,
        date: "April 8, 2026",
        title:
            "Photography Portfolio",
        image: "/images/camera-logo.png",
        link: "https://drive.google.com/drive/folders/1hDWHPRX2PT31RrgFM1qP6WF_GKZGS1YF?usp=sharing",
    }
];

const techStack = [
    {
        category: "Frontend",
        items: ["HTML", "CSS", "React.js", "Next.js"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Redis", "NestJS"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "GraphQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker", "ElasticSearch"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/christendeo",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/christendeo1010/",
    },
    {
        id: 3,
        text: "Email",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "mailto:christen.deocampo@gmail.com",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    // To implement later
    // {
    //     id: 2,
    //     icon: "/icons/gicon2.svg",
    //     title: "Memories",
    // },
    // {
    //     id: 3,
    //     icon: "/icons/file.svg",
    //     title: "Places",
    // },
    // {
    //     id: 4,
    //     icon: "/icons/gicon4.svg",
    //     title: "People",
    // },
    // {
    //     id: 5,
    //     icon: "/icons/gicon5.svg",
    //     title: "Favorites",
    // },
];

const gallery = [
    {
        id: 1,
        img: "/images/christen-jpmorgan2025.jpg",
    },
    {
        id: 2,
        img: "/images/christen-nsls2022.jpg",
    },
    {
        id: 3, // IMPORTANT
        img: "/images/christen-outintech2025.JPG",
    },
    {
        id: 4,
        img: "/images/christen-cunyservicecorps.jpg",
    },
    {
        id: 5,
        img: "/images/christen-volunteerwalk.JPG",
    },
    {
        id: 6,
        img: "/images/christen-pnawalk2023.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [

        // ▶ Project 1: Rick & Morty Single Page App
        {
            id: 5,
            name: "Rick & Morty Single Page Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[2vh] left-7", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Overview Rick & Morty Website.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5", // icon position inside Finder
                    description: [
                        "The Rick & Morty Application is a single‑page app displaying character data from the public Rick & Morty API using React and Vite to utilize Function Components with useState and useEffect Hooks and React Router.",
                        "The link to the API is: https://rickandmortyapi.com. This is incorporated to implement the React components: Characters, Location, and Episodes.",
                        "As an example, https://rickandmortyapi.com/api/character gives you a list of characters, while https://rickandmortyapi.com/api/character/1 gives you the details for the character with an ID of 1. The same applies to locations and episodes."
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo Rick & Morty Website",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/christendeo/Rick-Morty-Single-Page-App",
                    position: "top-10 left-60",
                },
                {
                    id: 4,
                    name: "Preview Rick & Morty Website.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-42 right-99",
                    imageUrl: "/images/rick-morty-website.png",
                },
            ],
        },

        // ▶ Project 2: Student Information System (SIS)
        {
            id: 6,
            name: "Student Information System (SIS)",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-42 right-99",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Overview Student Information System (SIS).txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5", // icon position inside Finder
                    description: [
                        "This Student Information System (SIS) is mainly designed as a student enrollment website where students are able to enroll into courses while instructors can create courses and manage their students in their classes.",
                        "The backend is handled by the GraphQL server using Apollo Server and other technologies like MongoDB for the student, instructor, and course data types, queries, and mutations, along with Redis for caching.",
                        "The frontend utilizes React with Apollo Client to interact with our backend to provide data to our frontend. "
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo Student Information System (SIS)",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/christendeo/Student-Information-System",
                    position: "top-10 left-60",
                },
                {
                    id: 4,
                    name: "Preview Student Information System (SIS).png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-99",
                    imageUrl: "/images/sis-website.png",
                },
            ],
        },

        // ▶ Project 3: Simple React Todo App
        {
            id: 7,
            name: "Simple React Todo App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-74 left-5",
            windowPosition: "top-[38vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Overview Simple React Todo App.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5", // icon position inside Finder
                    description: [
                        "The Simple React Todo App utilizes state and passing props into React components to keep track of tasks to do and completed ones.",
                        "You can create and even delete as many todo tasks as needed. ",
                        "The app uses 3 main format components: App (the main component), TodoList (displays todos that have not been deleted or marked completed), and CompletedTodos (displays todos that have been completed).",
                        "The App component will hold the state off of the Todos.",
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo Simple React Todo App",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/christendeo/Simple-React-Todo-App",
                    position: "top-10 left-60",
                },
                {
                    id: 4,
                    name: "Preview Simple React Todo App.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-99",
                    imageUrl: "/images/simple-react-todo-app.png",
                },
            ],
        },

        // ▶ Project 4: FuelMe Nutrition App (Group Project)
        {
            id: 8,
            name: "FuelMe Nutrition App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-60",
            windowPosition: "top-[53vh] left-8",
            children: [
                {
                    id: 1,
                    name: "Overview FuelMe Nutrition App.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5", // icon position inside Finder
                    description: [
                        "FuelMe is designed to help users set and achieve fitness goals such as weight loss, muscle gain, and maintenance." +
                        " The application calculates personalized daily calorie and macronutrient targets based on user metadata such as height, weight, activity level, and fitness goals.",
                        "This was a final group project in which I collaborated with a team of 5 and my main contributions are:",
                        "⦿ Focused primarily on the Users collection and full user flow: signup, login, session persistence (localStorage), logout, change password, edit profile, alongside CRUD and GraphQL setup",
                        "⦿ Helped implemented user goal logic and dashboard features like daily target calories (option to have it auto calculated or customized by user), daily progress widget, weekly summary of macro report, and recent activity center tied to blogs and food logs collections",
                        "⦿ Helped form the team, initialize our Git repo, set up README, and contributing to React & Next.js page route approach setup",
                        "⦿ Developed a brief presentation demo script for us to utilize for our recording.",
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo FuelMe Nutrition App",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/christendeo/EdgeRunners",
                    position: "top-10 left-60",
                },
                {
                    id: 4,
                    name: "Preview FuelMe Nutrition App.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-99",
                    imageUrl: "/images/fuel-me-nutrition-app.png",
                },
            ],
        },

        // ▶ Project 5: Christen's macOS Portfolio
        {
            id: 9,
            name: "Christen's macOS Portfolio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-42 left-60",
            windowPosition: "top-[68vh] left-6",
            children: [
                {
                    id: 1,
                    name: "Overview Christen's macOS Portfolio.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5", // icon position inside Finder
                    description: [
                        "My revamped, macOS-style portfolio that I built from scratch using React, GSAP, and Tailwind CSS.",
                        "The site has various interactive features, including the Apple Dock, draggable application windows, animated text and icons, and more.",
                        "I learned how to utilize Higher-Order Components, manage global state with Zustand, implement smooth GSAP animations and clean, reusable React architecture.",
                    ],
                },
                {
                    id: 2,
                    name: "GitHub Repo Christen's macOS Portfolio",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/christendeo/Christen-macOS-Portfolio",
                    position: "top-10 left-60",
                },
                {
                    id: 4,
                    name: "Preview Christen's macOS Portfolio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-99",
                    imageUrl: "/images/christen-macos-portfolio-website.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About Me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Picture of Me.jpg",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/christen-about-me.jpg",
        },
        {
            id: 2,
            name: "About Me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-40 left-5",
            subtitle: "Meet the Developer Behind the Code",
            description: [
                "Hi! I am Christen, an aspiring full-stack web developer who enjoys building clean, responsive, and user‑friendly web apps.",
                "I am passionate about front-end and back-end web development, especially with React, TailwindCSS, Next.js, Node.js, and MongoDB, as well as UX/UI design with Figma, computer hardware, and data analysis.",
                "I am graduating from Stevens Institute of Technology with an M.S. in Computer Science in May 2026, and I also hold a B.S. in Computer Science with a Minor in Mathematics from CUNY Queens College.",
                "I bring a dynamic blend of technical skills and creative energy to every project I take on while staying curious, collaborative, and community-minded.",
                "Fun facts: I like escape rooms, writing music, and spending time with my friends and family, including my dog and two cats!",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "My Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-10 left-5",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "My Old Website.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/old-website-christen.png",
        },
        {
            id: 2,
            name: "My Old Website v2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-5",
            imageUrl: "/images/old-website-christen-v2.png",
        }
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };