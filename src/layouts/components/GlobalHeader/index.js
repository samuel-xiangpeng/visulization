/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  layout header组件
 */
import User from '../GlobalUserCenter';
import styles from './index.less';


function Header(props) {
    const {
        userInfo = {},
        handleSetting = () => { }
    } = props;
    return (
        <div className={styles.rightCenter}>
            <User
                className={styles.action}
                userInfo={userInfo}
                onSetting={handleSetting}
            />
        </div>
    );
}
export default Header;