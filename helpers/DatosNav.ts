export const DatosNav = [
    {
        id: 1,
        nombre: "dashboard",
        href: "/dashboard",
        tipo: null,
        icon: 'fa-solid fa-house',
        subMenu: []
    },
    {
        id: 2,
        nombre: "prospectos",
        href: "/dashboard/prospectos",
        tipo: "prospectos",
        icon: 'fa-regular fa-folder',
        subMenu: []
    },
    {
        id: 3,
        nombre: "certificados",
        href: "/dashboard/certificados/vercertificados",
        tipo: "certificados",
        icon: 'fa-light fa-chart-pie-simple',
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
        href: "/pagos",
        tipo: "pagos",
        icon: 'fa-solid fa-money-bill',
        subMenu: []
    },
    {
        id: 5,
        nombre: "alumnos",
        href: "/dashboard/alumnos",
        tipo: "alumnos",
        icon: 'fa-regular fa-user',
        subMenu: []
    },
    {
        id: 5,
        nombre: "pendientes",
        href: "/pendientes",
        tipo: "pendientes",
        icon: 'fa-solid fa-money-bill',
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