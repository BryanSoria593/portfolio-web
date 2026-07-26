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
            "Liderazgo en el desarrollo de una aplicación móvil empresarial con 19 módulos funcionales para operaciones agroindustriales.",
            "Diseño e implementación de arquitectura offline-first, garantizando operación continua en entornos con conectividad limitada.",
            "Desarrollo de plugins nativos para Android en Kotlin y Java, integrando funcionalidades avanzadas del sistema y servicios en la nube.",
            "Migración de generación de reportes empresariales de NPOI a MiniExcel, reduciendo costos de infraestructura en la nube.",
            "Desarrollo de módulos web con Blazor WebAssembly y Blazor Server, incluyendo aplicaciones con Angular 17+ y React Native para plataformas móviles.",
            "Implementación de automatización de CI/CD con GitHub Actions y optimización de flujos de desarrollo con Claude Code, prompts avanzados y tooling de IA.",
        ],
        technologies: ["Ionic", "C#", ".NET 8+", "Blazor", "Angular 17+", "React Native", "Kotlin", "Java", "Python", "OCI", "GitHub Actions", "Claude Code"],
        bgColor: "from-indigo-500 to-purple-600",
        iconColor: "text-indigo-400",
    },
    {
        title: "Desarrollador de Software",
        company: "Tinkin Tech Partner",
        period: { start: "Oct 2023", end: "Nov 2023" },
        location: "Remoto",
        description: [
            "Desarrollo de microservicios con NestJS y MongoDB, implementando APIs REST con buenas prácticas de arquitectura.",
            "Participación en equipos ágiles con metodología Scrum, gestionando proyectos con Jira.",
        ],
        technologies: ["NestJS", "MongoDB", "TypeScript", "Scrum", "Jira"],
        bgColor: "from-blue-500 to-cyan-600",
        iconColor: "text-blue-400",
    },
    {
        title: "Desarrollador de Software",
        company: "GAD La Libertad",
        period: { start: "Nov 2022", end: "Ago 2023" },
        location: "La Libertad, Ecuador",
        description: [
            "Desarrollo de un sistema de detección de spam basado en Machine Learning (Random Forest) para el servicio de correo Zimbra.",
            "Implementación de backend con Flask y MongoDB, y frontend con Angular/NgRx para visualización estadística y gestión de usuarios.",
            "Aplicación de controles de seguridad basados en el framework NIST Cybersecurity, mejorando significativamente la detección de spam.",
        ],
        technologies: ["Python", "Flask", "Angular", "NgRx", "MongoDB", "Scikit-Learn", "NIST"],
        bgColor: "from-fuchsia-500 to-pink-600",
        iconColor: "text-fuchsia-400",
    },
    {
        title: "Pasante de Desarrollo Web",
        company: "GAD La Libertad",
        period: { start: "Sep 2022", end: "Oct 2022" },
        location: "La Libertad, Ecuador",
        description: [
            "Desarrollo de módulos internos para Recursos Humanos y control de asistencia.",
            "Implementación de funcionalidades web con PHP, JavaScript y MySQL.",
        ],
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        bgColor: "from-emerald-500 to-teal-600",
        iconColor: "text-emerald-400",
    },
]
