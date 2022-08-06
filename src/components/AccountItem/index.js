import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/745b278ef44049d3491d8c1694c5915d~c5_100x100.jpeg?x-expires=1659862800&x-signature=gd076puD8B%2FkFq6A9kDQMvYMt4k%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <p className={cx('fullname')}>Nguyen Van A</p>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;