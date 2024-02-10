import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/**
 * Создаёт экземпляры плагинов webpack, необходимых для сборки проекта.
 * Плагины включают HtmlWebpackPlugin для генерации HTML-файла,
 * ProgressPlugin для отслеживания прогресса сборки и
 * MiniCssExtractPlugin для извлечения CSS в отдельные файлы.
 *
 * @param {{ paths: { html: string } }} params - Объект с путями к ресурсам.
 * @param {string} params.paths.html - Путь к основному HTML-шаблону.
 * @returns {webpack.WebpackPluginInstance[]} Массив экземпляров плагинов webpack.
 * - `HtmlWebpackPlugin`: Плагин для генерации HTML-файла с автоматическим внедрением скриптов и стилей.
 * - `ProgressPlugin`: Плагин для отображения прогресса сборки в командной строке.
 * - `MiniCssExtractPlugin`: Плагин для извлечения CSS в отдельные файлы вместо inline-стилей.
 */

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}
