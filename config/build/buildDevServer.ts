import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

/**
 * Конфигурирует сервер разработки для использования с webpack.
 * Настройки включают открытие браузера по умолчанию, а также fallback для истории API.
 *
 * @param {BuildOptions} options - Объект с опциями сборки, который может содержать порт и другие параметры.
 * @returns {DevServerConfiguration} Объект конфигурации для webpack-dev-server.
 *  - `port`: Порт, на котором будет запущен сервер разработки.
 *  - `open`: Если true, при старте сервера будет открываться браузер.
 *  - `historyApiFallback`: Если true, все неизвестные пути будут перенаправлены на index.html.
 */

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}
