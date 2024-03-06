import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Navbar.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";
import React, {useCallback, useState} from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}>
                {t('Auth')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aut corporis
                    dignissimos eos error est facilis illum incidunt ipsam ipsum laudantium nihil, non omnis
                    repellendus totam unde? Natus, pariatur?
                </div>
            </Modal>
        </div>
    );
};
