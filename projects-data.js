const projectsData = [
    {
        id: 1,
        num: "01",
        category: "Design",
        title: "Interface Design For Ice Cream Shop",
        technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
        image: "C:/Users/PC/.gemini/antigravity/brain/fc184322-fc35-4030-a823-82d60cf1fe9a/project_interface_design_1772570436090.png",
        link: "#"
    },
    {
        id: 2,
        num: "02",
        category: "Web",
        title: "SEO For Coffee Websites",
        technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
        image: "C:/Users/PC/.gemini/antigravity/brain/fc184322-fc35-4030-a823-82d60cf1fe9a/project_seo_coffee_1772570452148.png",
        link: "#"
    },
    {
        id: 3,
        num: "03",
        category: "Design",
        title: "Web Design For Restaurant",
        technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
        image: "C:/Users/PC/.gemini/antigravity/brain/fc184322-fc35-4030-a823-82d60cf1fe9a/project_web_restaurant_1772570468334.png",
        link: "#"
    }
];


// If using in Admin Panel, try to load from localStorage first
const storageData = localStorage.getItem('portfolioProjects');
const projects = storageData ? JSON.parse(storageData) : projectsData;
