import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Компонент для тестирования ошибок (ErrorBoundary)
 *
 *
 * @param {propsName} options -
 * @returns {type of any}
 *  - ``:
 */

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Выбросить ошибку')}
        </Button>
    );
};
