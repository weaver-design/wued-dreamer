module.exports = {
  title: '👋 WUED Dreamer',
  description: '新一代智能建站服务平台 :-)',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件库', link: 'https://wued-dreamer-storybook.netlify.com/' },
      { text: 'Dreamer_v1', link: 'http://47.99.54.213/' },
      { text: 'Dreamer_admin', link: 'http://47.99.54.213:1337/admin' },
      { text: 'Github', link: 'https://github.com/weaver-design/wued-dreamer' },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/structure',
          '/guide/frontend',
          '/guide/backend',      
          '/guide/devops',
        ]
      }, {
        title: 'Structure',
        children: [
          '/structure/',
        ]
      }, {
        title: 'FrontEnd',
        children: [
          '/frontend/',
          '/frontend/atomsystem',
          '/frontend/storybook',
          '/frontend/framework',
        ]
      }, {
        title: 'BackEnd',
        children: [
          '/backend/',
        ]
      }, {
        title: 'DevOps',
        children: [
          '/devops/',
        ]
      }, {
        title: 'RoadMap',
        children: [
          '/roadmap/',
          '/roadmap/frontend',
          '/roadmap/backend',
          '/roadmap/devops',
        ]
      }
    ]
  },
}