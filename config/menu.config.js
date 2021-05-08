/*
 * @Author: your name
 * @Date: 2021-04-03 15:50:42
 * @LastEditTime: 2021-04-16 18:04:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \visulization\config\menu.config.js
 */
export default [{
        title: "首页",
        link: "/sys/githubpro",
        key: "gitDataV",
        icon: "github"
    },
    {
        title: "地域流向分析",
        link: "/sys/regionalAnalysis",
        key: "regionalAnalysis",
        icon: "idcard"
    },
    {
        title: '其他',
        key: '其他图形',
        icon: 'icon-visual',
        children: [{
                link: '/sys/echarts/bar',
                key: 'Bar',
                icon: 'bar-chart',
                title: '柱形图'
            },
            {
                link: '/sys/echarts/line',
                key: 'line',
                icon: 'line-chart',
                title: '折线图'
            },
            {
                link: '/sys/echarts/area',
                key: 'area',
                icon: 'area-chart',
                title: '区域图'
            },
            {
                link: '/sys/echarts/yBar',
                key: 'yBar',
                icon: 'icon-yBar',
                title: 'Y方向柱形图'
            },
            {
                link: '/sys/echarts/funnel',
                key: 'funnel',
                icon: 'icon-funnel',
                title: '漏斗图'
            },
            {
                link: '/sys/echarts/pie',
                icon: 'pie-chart',
                key: "pie",
                title: '饼状图'
            },
            {
                link: '/sys/echarts/pieDoughnut',
                key: 'pieDoughnut',
                icon: 'icon-pieDoughnut',
                title: '空心饼状图'
            },
            // {
            //     link: '/sys/echarts/sankey',
            //     key: 'sankey',
            //     icon: 'icon-sankey',
            //     title: 'Sankey'
            // },
        ]
    },
];