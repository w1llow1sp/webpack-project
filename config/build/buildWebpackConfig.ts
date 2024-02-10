import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

/**
 * Компилятор конфигурации webpack для сборки проекта.
 * Настраивает различные аспекты сборки, включая режим, точку входа, вывод, плагины, модули и разрешение.
 *
 * @param {BuildOptions} options - Объект с опциями сборки, содержащий пути, режим и флаг разработки.
 * @returns {webpack.Configuration} Объект конфигурации webpack, который включает в себя:
 * - `mode`: Режим сборки (development, production).
 * - `entry`: Точка входа в приложение.
 * - `output`: Настройки вывода скриптов.
 * - `plugins`: Массив плагинов, используемых в процессе сборки.
 * - `module`: Правила для обработки различных типов файлов.
 * - `resolve`: Настройки разрешения модулей.
 * - `devtool`: Настройки инструментов разработки.
 * - `devServer`: Настройки сервера разработки.
 */


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
