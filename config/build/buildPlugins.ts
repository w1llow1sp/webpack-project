import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

/**
 * Создаёт экземпляры плагинов webpack, необходимых для сборки проекта.
 * Плагины включают HtmlWebpackPlugin для генерации HTML-файла,
 * ProgressPlugin для отслеживания прогресса сборки и
 * MiniCssExtractPlugin для извлечения CSS в отдельные файлы.
 *
 * @param {{ paths: { html: string } }} params - Объект с путями к ресурсам.
 * @param {{ isDev: { html: boolean } }} params - параметр, отвечающий за тип сборки проекта
 * @param {string} params.paths.html - Путь к основному HTML-шаблону.
 * @returns {webpack.WebpackPluginInstance[]} Массив экземпляров плагинов webpack.
 * - `HtmlWebpackPlugin`: Плагин для генерации HTML-файла с автоматическим внедрением скриптов и стилей.
 * - `ProgressPlugin`: Плагин для отображения прогресса сборки в командной строке.
 * - `MiniCssExtractPlugin`: Плагин для извлечения CSS в отдельные файлы вместо inline-стилей.
 * - `DefinePlugin` : позволяет настраивать поведение переменных во время компиляции. Для разного поведения между сборкой production и dev (в данном случае мы используем его для i18n)
 * - `HotModuleReplacementPlugin` : плагин, отвечающий за HMR (то есть моментальное отображение изменений в коде без перезагрузки)
 * - `HotModuleReplacementPlugin` : плагин, отвечающий за быстрое обновление реакт-компонентов (https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin)
 */

export function buildPlugins({paths,isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshPlugin()
    ]
}
