import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, hideOnClick = false, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Reset to First Page
    const handleReset = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            offset={[12, 10]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHidden={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
