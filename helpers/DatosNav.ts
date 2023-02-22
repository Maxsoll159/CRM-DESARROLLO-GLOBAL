export const DatosNav = [
    {
        id: 1,
        nombre: "dashboard",
        href: "/dashboard",
        tipo: null,
        icon: 'fi fi-rr-dashboard fa-2x',
        subMenu: []
    },
    {
        id: 2,
        nombre: "prospectos",
        href: "/dashboard/prospectos",
        tipo: "prospectos",
        icon: 'fi fi-rr-users-alt fa-2x',
        subMenu: []
    },
    {
        id: 3,
        nombre: "certificados",
        href: "/dashboard/certificados/vercertificados",
        tipo: "certificados",
        icon: 'fi fi-rr-diploma fa-2x',
        subMenu: [{
            id: 1,
            nombre: "Ver Certificados",
            href: "dashboard/certificados/vercertificados",
            tipo: "vercertificados"
        },{
            id: 2,
            nombre: "Crear Certificado",
            href: "/dashboard/certificados/crearcertificado",
            tipo: "crearcertificado"
        },
        {
            id: 3,
            nombre: "Creacion Masiva",
            href: "/dashboard/certificados/crearcertificadomasivo",
            tipo: "crearcertificadomasivo"
        }]
    },
    {
        id: 4,
        nombre: "pagos",
        href: "/dashboard/pagos",
        tipo: "pagos",
        icon: 'fi fi-rr-usd-circle fa-2x',
        subMenu: []
    },
    {
        id: 5,
        nombre: "alumnos",
        href: "/dashboard/alumnos",
        tipo: "alumnos",
        icon: 'fi fi-rr-graduation-cap fa-2x',
        subMenu: []
    },
    {
        id: 5,
        nombre: "pendientes",
        href: "/pendientes",
        tipo: "pendientes",
        icon: 'fi fi-rs-truck-moving fa-2x',
        subMenu: []
    },
    {
        id: 5,
        nombre: "usuarios",
        href: "/usuarios",
        tipo: "usuarios",
        icon: 'fa-solid fa-money-bill',
        subMenu: []
    },

]