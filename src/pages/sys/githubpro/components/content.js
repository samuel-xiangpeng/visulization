import { PureComponent } from "react"
import { Card, Row, Col, List, Avatar } from 'antd';
import { connect } from 'dva'
import moment from 'moment';
import { Bar, Funnel } from '@components/Echarts';
import { formatMessage } from 'umi/locale';
@connect(({ githubPro, loading }) => {
    const { account, reposInfo, received_events } = githubPro;
    return {
        account,
        reposInfo,
        received_events,
        loading: loading.models.githubPro
    }
})
class Content extends PureComponent {
    //获取柱状图数据
    getChartData = () => {

        const Bardata = {
            "columns": [
                {
                    "field": "sex",
                    "name": "分类",
                    "type": "string"
                },
                {
                    "field": "man",
                    "name": "男生",
                    "type": "number"
                },
                {
                    "field": "woman",
                    "name": "女生",
                    "type": "number"
                },
            ],
            "rows": [
                {
                    "woman": 20.2,
                    "man": 11.88,
                    "sex": "继续读研"
                },
                {
                    "man": 29.83,
                    "woman": 12.2,
                    "sex": "出国"
                },
                {
                    "man": 31.63,
                    "woman": 40.2,
                    "sex": "签约"
                },
                {
                    "man": 6.98,
                    "woman": 10.2,
                    "sex": "合同就业"
                },
                {
                    "man": 7.73,
                    "woman": 6.2,
                    "sex": "定向分配"
                }
            ]
        };
        const Funneldata = {
            "columns": [
                {
                    "field": "product",
                    "name": "分类",
                    "type": "string"
                },
                {
                    "field": "undergraduate",
                    "name": "本科生",
                    "type": "number"
                },
            ],
            "rows": [
                {
                    "undergraduate": 27.72,
                    "product": "租赁和商务服务业"
                },
                {
                    "undergraduate": 18.43,
                    "product": "信息传输，软件和信息技术服务业"
                },
                {
                    "undergraduate": 14.67,
                    "product": "制造业"
                },
                {
                    "undergraduate": 13.95,
                    "product": "教育"
                },
                {
                    "undergraduate": 8.23,
                    "product": "金融"
                },
                {
                    "undergraduate": 6.26,
                    "product": "批发和零售业"
                },
                {
                    "undergraduate": 4.47,
                    "product": "文化，体育和娱乐业"
                },
                {
                    "undergraduate": 2.86,
                    "product": "公共管理"
                },
                {
                    "undergraduate": 2.86,
                    "product": "科学研究和技术服务业"
                },
                {
                    "undergraduate": 1.25,
                    "product": "住宿和餐饮业"
                }
            ]
        }
        return { Bardata, Funneldata };
    }
    render() {
        const { loading, account } = this.props;
        const { Bardata, Funneldata } = this.getChartData();
        return (
            <Row gutter={20}>
                <Col md={24} lg={24} xl={14} >
                    <Card
                        title='本科生就业去向分析'
                        style={{ marginTop: 20, height: 510 }}
                    >
                        <Bar
                            data={Bardata}
                            loading={loading}
                            grid={{ bottom: 80, left: 80, right: 20 }}
                            seriesLayoutBy={'column'}
                            height={400}
                            interval={0}
                            xAxisRotate={-30}
                            tooltip={{
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                },
                            }}
                            yAxis={
                                {
                                    type: 'value',
                                    axisLabel: {
                                        show: true,
                                        interval: 'auto',
                                        formatter: '{value} %'
                                    },
                                    show: true
                                }}
                        />
                    </Card>
                </Col>
                <Col md={24} lg={24} xl={10} >
                    <Card
                        title='十大热门就业单位'
                        style={{ marginTop: 20, height: 510, overflow: 'hidden' }}
                    >
                        <Funnel
                            data={Funneldata}
                            loading={loading}
                            grid={{ bottom: 80, left: 80, right: 20 }}
                            seriesLayoutBy={'column'}
                            height={400}
                            interval={0}
                            xAxisRotate={-30}
                            tooltip={{ trigger: 'item', formatter: '{c}%' }}
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default Content;