export interface Article {
    title: string
    description: string
    icon: string
    href: string
}

export const articles: Article[] = [
    {
        title: "Aprende cómo proteger una instancia de EC2 y asegurar tu infraestructura en la nube",
        description:
            "Durante mis primeros pasos en el aprendizaje de AWS con EC2, cometí un error al no comprender completamente las opciones disponibles de las instancias. Inadvertidamente, seleccioné Terminar instancia sin comprender las consecuencias, lo que resultó en la eliminación completa de la máquina y todos sus recursos asociados. Este incidente provocó una preocupación adicional, ya que estaba utilizando la capa gratuita y temí que esta se hubiera agotado.",
        icon: "AwsIcon",
        href: "https://medium.com/@zansoriam/aprende-c%C3%B3mo-proteger-una-instancia-de-ec2-y-asegurar-tu-infraestructura-en-la-nube-6d09b99d1dab",
    },
    {
        title: "NgRx en Angular: Aprende con un ejemplo Práctico",
        description:
            "Aprenderás a integrar NgRx en tu aplicación Angular, a través de una aplicación completa de tareas que contiene tanto Frontend y Backend. Exploraremos los fundamentos de NgRx para gestionar el estado de la aplicación de manera eficiente, brindándote una comprensión sólida de cómo implementar esta potente herramienta en tus propios proyectos.",
        icon: "AngularIcon",
        href: "https://medium.com/@zansoriam/ngrx-en-angular-aprende-con-un-ejemplo-pr%C3%A1ctico-5c8da520a7e2",
    },
]
