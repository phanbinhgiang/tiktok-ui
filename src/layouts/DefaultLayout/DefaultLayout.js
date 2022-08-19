import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
