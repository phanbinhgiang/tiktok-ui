import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({
    src,
    alt,
    fallBack: customFallBack = images.noImage,
    className, ...props },
    ref) => {
    const handleError = () => {
        setFallBack(customFallBack)

    }
    const [fallBack, setFallBack] = useState('')
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
})

export default Image;