export interface Experience {
    title: string
    company: string
    period: { start: string; end: string }
    location: string
    description: string[]
    technologies: string[]
    bgColor: string
    iconColor: string
}

export const experience: Experience[] = [
    {
        title: "Desarrollador de Software",
        company: "Agrosoft Latam",
        period: { start: "Ago 2024", end: "Actualidad" },
        location: "Guayaquil, Ecuador",
        description: [
            "Desarrollo de aplicaciones móviles híbridas con Ionic, integrando WatermelonDB para soporte offline-first eficiente en dispositivos de gama media/baja.",
            "Desarrollo e Implementación de plugins nativos en Java para Android, mejorando la integración con funcionalidades del sistema.",
            "Construcción de servicios web RESTful utilizando .NET, siguiendo buenas prácticas de arquitectura.",
            "Desarrollo de interfaces interactivas con Blazor (WebAssembly y Server), incluyendo manejo de estado y componentes reutilizables.",
        ],
        technologies: ["Ionic", "Java", ".NET", "Blazor", "WatermelonDB"],
        bgColor: "from-indigo-500 to-purple-600",
        iconColor: "text-indigo-400",
    },
    {
        title: "Desarrollador de software interno",
        company: "Tinkin Tech Partner",
        period: { start: "Oct 2023", end: "Nov 2023" },
        location: "Remoto",
        description: [
            "Implementación de NestJS y MongoDB para desarrollo de APIs robustas y escalables.",
            "Aplicación de metodología Scrum para mejorar la colaboración y eficiencia del equipo.",
            "Uso de JIRA para la gestión y seguimiento de tareas y proyectos."
        ],
        technologies: ["NestJS", "MongoDB", "Scrum", "JIRA"],
        bgColor: "from-blue-500 to-cyan-600",
        iconColor: "text-blue-400",
    },
    {
        title: "Desarrollador de software",
        company: "GAD La Libertad",
        period: { start: "Nov 2022", end: "Ago 2023" },
        location: "La Libertad, Ecuador",
        description: [
            "Desarrollo un algoritmo de detección de spam para el servicio de correo electrónico Zimbra utilizando Python y Machine Learning.",
            "Desarrollo de una interfaz web con Angular/NgRx para visualizar datos y gestionar usuarios spammers.",
            "Desarrollo de backend con Python/Flask y MongoDB para gestionar peticiones de la interfaz web.",
            "Implementación de la metodología CSF de NIST para mejorar la seguridad informática.",
            "Mejora significativa en la detección de correos spam, optimizando el sistema de filtrado.",
        ],
        technologies: ["Python", "Angular", "NgRx", "Flask", "MongoDB", "ML", "NIST"],
        bgColor: "from-fuchsia-500 to-pink-600",
        iconColor: "text-fuchsia-400",
    },
    {
        title: "Pasante desarrollador web",
        company: "GAD La Libertad",
        period: { start: "Sep 2022", end: "Oct 2022" },
        location: "La Libertad, Ecuador",
        description: [
            "Actualización de la página de roles para que los usuarios puedan ver su remuneración, aplicando PHP, JavaScript y SQL.",
            "Creación de un formulario interactivo con PHP, JavaScript, Bootstrap y SQL para visualización de marcaciones de asistencia."
        ],
        technologies: ["PHP", "JavaScript", "SQL", "Bootstrap"],
        bgColor: "from-emerald-500 to-teal-600",
        iconColor: "text-emerald-400",
    },
]
