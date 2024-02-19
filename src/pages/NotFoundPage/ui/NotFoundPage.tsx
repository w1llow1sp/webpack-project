import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

/**
 * Страница для обработки несуществующих маршрутов
 *
 *
 * @param {propsName} options -
 * @returns {type of any}
 *  - ``:
 */

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
