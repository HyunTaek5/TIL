import navbar from './config/navbar.config';

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
    title: 'HyunTaek Oh',
    tagline: '',
    titleDelimiter: '@',
    url: 'https://HyunTaek5.github.io',
    baseUrl: '/TIL',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'HyunTaek5',
    projectName: 'TIL',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ko'],
    },
    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve('swc-loader'),
            options: {
                jsc: {
                    parser: {
                        sync: true,
                        syntax: 'typescript',
                        tsx: true,
                    },
                    target: 'es2017',
                },
                module: {
                    type: isServer ? 'commonjs' : 'es6',
                },
            },
        }),
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./config/sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
        },
        prism: {
            theme: darkCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['java'],
        },
        navbar: navbar,
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: false,
            },
        },
        plugins: [
            async function tailwindPlugin() {
                return {
                    name: 'docusaurus-tailwindcss',
                    configurePostCss(postcssOptions) {
                        postcssOptions.plugins.push(require('tailwindcss'));
                        postcssOptions.plugins.push(require('autoprefixer'));

                        return postcssOptions;
                    },
                };
            },
        ],
    },
    // ({
    //   navbar: {
    //     title: 'My Site',
    //     logo: {
    //       alt: 'My Site Logo',
    //       src: 'img/logo.svg',
    //     },
    //     items: [
    //       {
    //         type: 'doc',
    //         docId: 'intro',
    //         position: 'left',
    //         label: 'Tutorial',
    //       },
    //       {to: '/blog', label: 'Blog', position: 'left'},
    //       {
    //         href: 'https://github.com/HyunTaek5',
    //         label: 'GitHub',
    //         position: 'right',
    //       },
    //     ],
    //   },
    //   footer: {
    //     style: 'dark',
    //     links: [
    //       {
    //         title: 'Docs',
    //         items: [
    //           {
    //             label: 'Tutorial',
    //             to: '/docs/intro',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'Community',
    //         items: [
    //           {
    //             label: 'Stack Overflow',
    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //           },
    //           {
    //             label: 'Discord',
    //             href: 'https://discordapp.com/invite/docusaurus',
    //           },
    //           {
    //             label: 'Twitter',
    //             href: 'https://twitter.com/docusaurus',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'More',
    //         items: [
    //           {
    //             label: 'Blog',
    //             to: '/blog',
    //           },
    //           {
    //             label: 'GitHub',
    //             href: 'https://github.com/facebook/docusaurus',
    //           },
    //         ],
    //       },
    //     ],
    //     copyright: `Copyright © ${new Date().getFullYear()} HyunTaek Oh`,
    //   },
    // }),
};

module.exports = config;
