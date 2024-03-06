import cls from './Portal.module.scss'
import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement
}

/**
 * Конфигурирует сервер разработки для использования с webpack.
 *
 *
 * @param {propsName} options -
 * @returns {type of any}
 *  - ``:
 */

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body
    } = props
    return createPortal(children, element)
};
