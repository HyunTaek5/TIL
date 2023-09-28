import * as fs from "fs";
import * as path from "path";

const getRecentTilLink = () => {
  const today = new Date()
  today.setDate(today.getDate() + 2)

  const todayYear = today.getFullYear();

  let file = ''

  while ((file = today.toISOString().split('T')[0])) {
    const filePath = path.join(__dirname, '..', 'docs',
        todayYear.toString(),`${todayYear}-${today.getMonth() < 9 ? '0': ''}${today.getMonth() + 1}`, file + '.md')

    if (fs.existsSync(filePath)) {
      return `docs/${todayYear.toString()}/${todayYear}-${today.getMonth() < 9 ? '0' : ''}${today.getMonth() + 1}/${file}`
    }

    today.setDate(today.getDate() - 1)
  }
}

const navbar = {
  title: '8:20 TIL',
  logo: {
    alt: 'HyunTaek Oh Logo',
    src: 'img/favicon.png',
  },

  items: [
    {
      type: 'dropdown',
      label: 'TIL',
      position: 'left',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Hi 👋🏻',
        },
        {
          to: getRecentTilLink(),
          label: 'Today 🌤',
        },
      ],
    },
    {
      to: 'https://hyuntaek5.github.io',
      label: 'About',
      position: 'left',
    },
    {
      to: 'https://eight20.tistory.com',
      label: 'Dev Logs',
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
  ],
};

export default navbar;
