import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?:string
}

/**
 * Это компонента для загрузки.
 *
 *
 * @param {propsName} options -
 * @returns {type of any}
 *  - ``:
 */

export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
