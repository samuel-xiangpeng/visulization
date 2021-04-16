import { PureComponent } from "react"
import { Card, Row, Col, List, Avatar } from 'antd';
import { connect } from 'dva'
import moment from 'moment';
import { Bar ,Funnel} from '@components/Echarts';
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
        const { reposInfo } = this.props;
        const data = {
            columns: [
                {
                    "field": "name",
                    "name": "repos",
                    "type": "number"
                },
                {
                    "field": "stargazers_count",
                    "name": "stargazers_count",
                    "type": "number"
                },
                {
                    "field": "forks_count",
                    "name": "forks_count",
                    "type": "number"
                }
            ],
            rows: reposInfo.map(item => {
                const { name, stargazers_count, forks_count } = item;
                return {
                    name,
                    stargazers_count,
                    forks_count
                };
            })
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 10)
        };
        return data;
    }
    render() {
        const { loading, account, received_events } = this.props;
        const data = this.getChartData();
        return (
            <Row gutter={20}>
                <Col md={24} lg={24} xl={14} >
                    <Card
                        title='省份分析'
                        style={{ marginTop: 20, height: 510 }}
                    >
                        <Bar
                            data={data}
                            loading={loading}
                            grid={{ bottom: 80, left: 80, right: 20 }}
                            seriesLayoutBy={'column'}
                            height={400}
                            interval={0}
                            xAxisRotate={-30}
                        />
                    </Card>
                </Col>
                <Col md={24} lg={24} xl={10} >
                    <Card
                        title={formatMessage({ id: "gitDataV.news" })}
                        /* eslint-disable-next-line */
                        extra={<a href={`https://github.com/${account}`} target="_blank">{formatMessage({ id: "gitDataV.more" })}</a>}
                        style={{ marginTop: 20, height: 510, overflow: 'hidden' }}
                    >
                        <Funnel
                            data={data}
                            loading={loading}
                            grid={{ bottom: 80, left: 80, right: 20 }}
                            seriesLayoutBy={'column'}
                            height={400}
                            interval={0}
                            xAxisRotate={-30}
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default Content;