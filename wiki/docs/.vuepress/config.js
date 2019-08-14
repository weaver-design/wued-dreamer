module.exports = {
  title: '👋 WUED Dreamer',
  description: '新一代智能建站服务平台 :-)',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guild/' },
      { text: '组件库', link: '/components/' },
      { text: 'Dreamer_v1', link: 'http://47.99.54.213/' },
      { text: 'Dreamer_admin', link: 'http://47.99.54.213:1337/admin' },
      { text: 'Github', link: 'https://github.com/weaver-design/wued-dreamer' },
    ],
    sidebar: {
      '/guild/': [
        '',
        'structure',
        'frontend',
        'backend',      
        'devops',
      ],

      '/components/': [
        '',
      ],
    }
  },
}