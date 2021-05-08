/*
 * @Author: your name
 * @Date: 2021-04-03 15:50:42
 * @LastEditTime: 2021-04-16 16:02:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \visulization\mock\menu.js
 */
const Mock = require('mockjs');
const menuData = [{
        title: "gitDataV",
        key: "gitDataV",
    },
    {
        title: "地域分析",
        key: "regionalAnalysis",
    },
    {
        title: "404",
        key: "404",
    },
    {
        title: "其他",
        key: "echarts",
        children: [{
                key: 'Bar',
                title: 'Bar'
            },
            {
                key: 'line',
                title: 'Line'
            },
            {
                key: 'area',
                title: 'Area'
            },
            {
                key: 'yBar',
                title: 'YBar'
            },
            {
                key: 'funnel',
                title: 'Funnel'
            },
            {
                key: 'pie',
                title: 'Pie'
            },
            {
                key: 'pieDoughnut',
                title: 'PieDoughnut'
            },
            {
                key: 'sankey',
                title: 'Sankey'
            },
        ]
    },
];
const data = Mock.mock({
    data: menuData,
    status: 0
});
module.exports = {
    [`POST /getMenuData`](req, res) {
        res.status(200).json(data);
    },
};