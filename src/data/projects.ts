export interface Project {
    title: string
    description: string
    modules: string[]
    technologies: { name: string; component: string; class?: string }[]
    links: { github?: string; live?: string }
    images: { small: string; medium: string; large: string }
    genericImage?: boolean
}

export const projects: Project[] = [
    {
        title: "Web citas médicas",
        description:
            "Permite gestionar citas médicas con la interacción de dos roles (Paciente y doctor), donde el paciente puede tener el Historial de una cita.",
        modules: [
            "Autenticación",
            "Registro de citas",
            "Modificar citas pendientes",
            "Historial clínico en pdf",
            "Atender citas",
            "Citas Atendidas",
        ],
        technologies: [
            { name: "Angular", component: "AngularIcon", class: "w-6 h-6" },
            { name: "NgRx", component: "NgRxIcon", class: "w-6 h-6" },
            { name: "Angular Material", component: "AngularMaterialIcon", class: "w-6 h-6" },
            { name: "Cloudinary", component: "CloudinaryIcon", class: "w-6 h-6" },
            { name: "Node.js", component: "NodejsIcon", class: "w-6 h-6" },
            { name: "Express.js", component: "ExpressjsIcon", class: "w-6 h-6 mt-3 sm:mt-6 lg:mt-4 xl:mt-5" },
            { name: "MySQL", component: "MysqlIcon", class: "w-9 h-9" },
        ],
        links: {
            github: "https://github.com/BryanSoria593",
            live: "https://app-citas-medicas-f9d3b.web.app/auth/login",
        },
        images: {
            small: "/assets/img/MedicineProject-400.avif",
            medium: "/assets/img/MedicineProject-800.avif",
            large: "/assets/img/MedicineProject-1200.avif",
        },
    },
    {
        title: "App móvil Citas médicas",
        description:
            "App móvil desarrollada con Ionic y Angular para gestionar citas médicas con interacción entre Paciente y Doctor, incluyendo historial clínico.",
        modules: [
            "Autenticación",
            "Registro de citas",
            "Modificar citas pendientes",
            "Historial clínico en pdf",
            "Atender citas",
            "Citas Atendidas",
        ],
        technologies: [
            { name: "Ionic", component: "IonicIcon", class: "w-10" },
            { name: "Angular", component: "AngularIcon", class: "w-6 h-6" },
            { name: "PHP", component: "PhpIcon", class: "w-8 h-8" },
            { name: "MySQL", component: "MysqlIcon", class: "w-9 h-9" },
        ],
        links: {
            github: "https://github.com/BryanSoria593",
            live: "https://app-citas-medicas-f9d3b.web.app/auth/login",
        },
        images: {
            small: "/assets/img/Generic-400.avif",
            medium: "/assets/img/Generic-800.avif",
            large: "/assets/img/Generic-1200.avif",
        },
        genericImage: true,
    },
    {
        title: "Dashboard de detección de spam",
        description:
            "Presenta datos estadísticos en gráficos sobre los correos detectados como spam y ham por el algoritmo del servicio de Zimbra, agente-spam-detect.",
        modules: [
            "Autenticación",
            "Dashboard",
            "Historial de correos reportados como spam",
            "Filtrar usuarios spammers",
            "Reportes en PDF y Excel",
        ],
        technologies: [
            { name: "Angular", component: "AngularIcon", class: "w-6 h-6" },
            { name: "Angular Material", component: "AngularMaterialIcon", class: "w-6 h-6" },
            { name: "NgRx", component: "NgRxIcon", class: "w-6 h-6" },
            { name: "Python", component: "PythonIcon", class: "w-6 h-6" },
            { name: "Flask", component: "FlaskIcon", class: "w-6 h-6" },
            { name: "MongoDB", component: "MongodbIcon", class: "w-12 h-12" },
        ],
        links: {
            github: "https://github.com/BryanSoria593",
        },
        images: {
            small: "/assets/img/DashboardProject-400.avif",
            medium: "/assets/img/DashboardProject-800.avif",
            large: "/assets/img/DashboardProject-1200.avif",
        },
    },
    {
        title: "Algoritmo detector de correos spam",
        description:
            "Algoritmo que detecta correos spam y ham en el servicio de email Zimbra, removiéndolos de la bandeja de entrada y enviando notificación de reporte al usuario.",
        modules: [
            "Monitoreo en tiempo real",
            "Implementación de algoritmo Random Forest",
        ],
        technologies: [
            { name: "Python", component: "PythonIcon", class: "w-6 h-6" },
            { name: "Scikit-Learn", component: "ScikitLearnIcon", class: "w-8 h-8" },
            { name: "VMware", component: "VmnwareIcon", class: "w-8 h-8" },
            { name: "Zimbra", component: "ZimbraIcon", class: "w-10 h-10" },
            { name: "MongoDB", component: "MongodbIcon", class: "w-12 h-12" },
        ],
        links: {
            github: "https://github.com/BryanSoria593/agent-spam-detector/",
        },
        images: {
            small: "/assets/img/SpamDetectorProject-400.avif",
            medium: "/assets/img/SpamDetectorProject-800.avif",
            large: "/assets/img/SpamDetectorProject-1200.avif",
        },
    },
    {
        title: "Herramienta de ingeniería para cálculo de tuberías",
        description:
            "Realiza cálculos de mecánica de fluidos para tuberías utilizando las ecuaciones de Colebrook-White y Darcy-Weisbach, así como sus diagramas de flujo.",
        modules: [
            "Comprobación de diseño de tuberías",
            "Cálculo de factor de fricción",
            "Cálculo de potencia de tuberías",
            "Cálculo de diseño de tuberías simples",
        ],
        technologies: [
            { name: "Python", component: "PythonIcon", class: "w-6 h-6" },
        ],
        links: {
            github: "https://github.com/BryanSoria593/tuberias-colebrook-white",
        },
        images: {
            small: "/assets/img/PetroliumProject-400.avif",
            medium: "/assets/img/PetroliumProject-800.avif",
            large: "/assets/img/PetroliumProject-1200.avif",
        },
    },
]
