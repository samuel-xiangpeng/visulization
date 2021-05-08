import { PureComponent, Fragment } from 'react';
import { Col, Row, Statistic, Card, Avatar, Divider } from 'antd';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';
import Account from './account';
import styles from '../index.less';

const { Meta } = Card;
class Index extends PureComponent {

    render() {
        console.log(this.props)
        const { accountInfo: { login, avatar_url, name, bio, public_repos, followers, following } } = this.props;
        const layout = {
            sm: 24,
            md: 12,
            lg: 12,
            xl: 5
        };
        return (
            <Card>
                <Row type={'flex'} justify={'space-between'} style={{ textAlign: 'center', padding: '10px 20px', }}>
                    <Col {...layout} xl={7}>
                        <Card style={{ textAlign: 'left', minHeight: 140 }}>
                            <Meta
                                avatar={<Avatar size={64} src={avatar_url} />}
                                title='概述'
                                description='高校毕业生就业数据可视化展示，重点在于高校本科生就业数据展示，数据来源于某高校的就业数据年度报告。'
                            />
                        </Card>
                    </Col>
                    <Col  {...layout} >
                        <Card style={{ minHeight: 140 }}>
                            <Statistic
                                title='本科毕业生总人数'
                                value="1148"
                                suffix={'人'}
                            />
                        </Card>
                    </Col>
                    <Col  {...layout} >
                        <Card style={{ minHeight: 140 }}>
                            <Statistic
                                title="男生"
                                value="285"
                                suffix="人"
                            />
                        </Card>
                    </Col>
                    <Col  {...layout} >
                        <Card style={{ minHeight: 140 }}>
                            <Statistic
                                title="女生"
                                value="1163"
                                suffix="人"
                            />
                        </Card>
                    </Col>
                </Row>
            </Card>
        );
    }
}
export default connect(({ githubPro }) => {
    const { account, accountInfo } = githubPro
    return {
        account,
        accountInfo,
    };
})(Index);