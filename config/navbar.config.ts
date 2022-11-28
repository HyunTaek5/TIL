const navbar = {
    title: 'HyunTaek5',
    logo: {
        alt: 'HyunTaek Oh Logo',
        src: 'img/favicon.svg'
    },
    items: [
        // {
        //     type: 'doc',
        //     docId: 'Hey',
        //     position: 'left',
        //     label: 'Daily Log'
        // },
        {
            to: "/w/dev-log",
            label: "Dev Logs",
            position: "left",
        },
        {
            href: 'https://github.com/HyunTaek5',
            position: 'right',
            className: 'navbar-github-link',
            'aria-label': 'GitHub repository',
        },
        {
            href: 'https://linkedin.com/in/dylanoh',
            position: 'right',
            className: 'navbar-linkedin-link',
            'aria-label': 'LinkedIn Account',
        },
        {
            type: 'localeDropdown',
            position: 'right',
        },
    ]
}

export default navbar