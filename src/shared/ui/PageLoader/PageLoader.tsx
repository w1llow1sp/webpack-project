import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?:string
}

/**
 * Компонент, который представляет из себя экран загрузки
 *
 *
 * @param {propsName} options -
 * @returns {type of any}
 *  - ``:
 */

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
