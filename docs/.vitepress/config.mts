import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: '/webdoc/',
  title: "Fuelup.cc",
  description: "Fuel China Community",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: 'https://fuellabs.notion.site/Awesome-Fuel-7b4ca6b262d3414a9968f275cba43fc9' },
      {
        text: "版本",
        items: [
         { text: "v0.0.1", link: "" },
         { text: "v0.0.2", link: "" },
         { text: "v0.0.3", link: "" },
        ],
      },
    ],

    sidebar: [
      {
        text: '1. 简介',
        collapsed: false,
        items: [
          { text: '1.0 简介', link: '/introduction/index' },
          { text: '1.1 入门指南', link: '/introduction/getting_started' },
          { text: '1.2 Fuel 工具链', link: '/introduction/fuel_toolchain' },
          { text: '1.3 Forc 项目', link: '/introduction/forc_project' },
          { text: '1.4 标准库', link: '/introduction/standard_library' }
        ]
      }
      ,

      {
        text: '2. 示例',
        collapsed: false,
        items: [
          { text: '2.0 示例', link: '/examples/index' },
          { text: '2.1 计数器', link: '/examples/counter' },
          { text: '2.2 菲兹巴兹', link: '/examples/fizzbuzz' },
          { text: '2.3 钱包智能合约', link: '/examples/wallet_smart_contract' },
          { text: '2.4 流动性池示例', link: '/examples/liquidity_pool' }
        ]
      },
      {
        text: '3. Sway程序类型',
        collapsed: false,
        items: [
          { text: '3.0 Sway程序类型', link: '/sway-program-types/index' },
          { text: '3.1 合约', link: '/sway-program-types/smart_contracts' },
          { text: '3.2 库', link: '/sway-program-types/libraries' },
          { text: '3.3 脚本', link: '/sway-program-types/scripts' },
          { text: '3.4 谓词', link: '/sway-program-types/predicates' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '' },
      { icon: 'discord', link: '' }
    ]
  }
})

