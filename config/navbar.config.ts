const navbar = {
  title: '8:20 TIL',
  logo: {
    alt: 'HyunTaek Oh Logo',
    src: 'img/favicon.png',
  },

  items: [
    {
      to: 'https://hyuntaek5.github.io',
      label: 'About',
      position: 'left',
    },
    {
      to: 'https://eight20.tistory.com',
      label: 'Dev Log',
      position: 'left',
    },
    {
      href: 'https://github.com/HyunTaek5',
      position: 'right',
      label: 'GitHub',
      className: 'navbar-github-link',
      'aria-label': 'GitHub repository',
    },
    {
      href: 'https://linkedin.com/in/dylanoh',
      position: 'right',
      label: 'LinkedIn',
      className: 'navbar-linkedin-link',
      'aria-label': 'LinkedIn Account',
    },
    {
      type: 'localeDropdown',
      position: 'right',
    },
  ],
};

export default navbar;
