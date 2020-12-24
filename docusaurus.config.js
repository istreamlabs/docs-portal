module.exports = {
  title: 'iStreamPlanet Developer Portal',
  tagline: 'Revolutionizing TV Technology',
  url: 'https://istreamlabs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'istreamlabs', // Usually your GitHub org/user name.
  projectName: 'istreamlabs.github.io', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'iStreamPlanet Developer Portal',
      style: 'dark',
      logo: {
        alt: 'iStreamPlanet',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1dJREFUeNrs3O9xmzAcxnGcCZwJSl/0vTtB6AZkgtIN0gmcTEA7Ac0EdiaATlDyui+gE9ANqNQkvcZnGyEJkOD7ueNyqSPh8vgn/gkHAQAAAAAAAAAAAAAAAAAAAAAAAAD0t1rKf7SJ323Ej/V//1Re7n/+JmD/g03Ej61YwiMvF2K5E0EXBOxfsLJaM7HECn/+SYT8bY7b4WLGxasa7t+/fa50KtijYTnTaPpWVHJNBbtvO3I7Ah75aDnUbB4RsPvCidoS8Eg2AWYdcEGs8w7Y5Ci4JGDHPZ/m6FbxAwH74U6jjbwu/YWA/ajiQiOs6znefJjtpUoR1mfFSpahfpjrDYcl3E2S57byCpW8Lr0+OBi7l5W+hNuGiyDvMIklYksArmrbNhJLJpZGLEmPdrJNJZZULCFb0s1g8/a1XY/2zUFb2ReXPR0INjwS7D+KfWza02RFr9nS04QbH6m8Q5FCPzcdfVRU8/jh3rZqbhX62in2lbDlxwk3a9XlCv1VPfoj5IHDTdt+qo7+1m1/hDxQuIlGGK3C0XdfjS/75AuPwpXnpqnuKdSZl3XOeeVR9c6Ho2ufbjZkwetrybaEBu1uCNjS6VBgNuNxqOF06/pVL18qODVsf67yr0xDJmCz6o0Ct6ezJi5XsQ8V/NGD9xgTsEGF8CGcacAq15EdsXH1lMn1CvYlYGffq+sBX3kU8IaA3WRrwt0bAp5u2KvPvPZoaR0hAU+nXurwtJSAzw3DJQF7brValSPsgwlYQ2Ghj7Ij/MLSe60JeBqlpb/p8ouA+/tuoY/HkQIuCXiajVaM9EEqXNyAzj9dqDp5/dQBlNjHXiqsQ57DViYfRLGe91Swnv3QbUU4teFocc9RtL6vBm0fRgppH8BomK50prb2XEfY6slIyDzgWGPDpxrryTXWE5KQnZDzoTe8xgcpJRl7AYcKTxIaD5s9dgcVj5XaDzkZethUfJSl4XHS4UJOTR8XtbA7SEhi2JBPPT76w8aw2bE7IFxHKnkIhDvBPrkZIVi+wmHio+t8wHD5EhZHgo4sB517NPF+cUFnmkP37L4IbTX3sIOnqbdyzvJLaPJ3OQ/r5e5RHTxNCig65m4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAU/sjwADAuE8BDRj3xQAAAABJRU5ErkJggg==',
      },
      items: [
        {
          to: 'docs/guide/',
          activeBasePath: 'docs/guide',
          label: 'Guide',
          position: 'left',
        },
        {to: '/docs/reference/streaming', label: 'API Docs'},
        {to: '/docs/cli', label: 'Download CLI'},
        {to: '/docs/sdks/javascript', label: 'Download SDKs', activeBasePath: 'docs/sdks'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/guide/',
            },
            {
              label: 'Creating a Channel',
              to: 'docs/guide/create-channel',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/istreamplanet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/istream_planet',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'iStreamPlanet.com',
              href: 'https://istreamplanet.com/',
            },
            {
              label: 'iStreamLabs GitHub',
              href: 'https://github.com/istreamlabs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} iStreamPlanet - Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/istreamlabs/docs-portal/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
