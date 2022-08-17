import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, fallBack: customFallBack = images.noImage, className, ...props }, ref) => {
    const handleError = () => {
        setFallBack(customFallBack);
    };
    const [fallBack, setFallBack] = useState('');
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src ? fallBack || src : fallBack}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
