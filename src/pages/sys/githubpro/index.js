import { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { Page } from '@components';
import Header from './components/header';
import Content from './components/content';

class Index extends PureComponent {

    render() {
        return (
            <Page
                pathtitles={[{
                    title: '高校毕业生就业数据分析',
                    icon: 'github'
                }]}
                style={{ backgroundColor: 'transparent' }}
                title={'高校毕业生就业数据分析'}
                description={formatMessage({ id: 'gitDataV.desc' })}
            >
                <Header />
                <Content />
            </Page>
        );
    }
}

export default connect(({ loading }) => {
    return {
        loading: loading.models.github
    };
})(Index);