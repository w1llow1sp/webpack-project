import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

/**
 * Создаёт набор правил для загрузчиков в конфигурации webpack.
 * Используется для обработки SVG, CSS и TypeScript файлов.
 *
 * @param {Object} options - Объект с опциями сборки.
 * @param {boolean} options.isDev - Флаг, указывающий на режим разработки.
 * @returns {Array<webpack.RuleSetRule>} Массив правил для webpack.
 *
 * - `svgLoader` - Определение правила для обработки SVG файлов с использованием @svgr/webpack
 *      - * @type {webpack.RuleSetRule}
 *      - * @property {RegExp} test - Регулярное выражение для определения SVG файлов.
 *      - * @property {string[]} use - Массив загрузчиков, которые будут использованы для обработки SVG файлов.
 *
 *  - `cssLoader` - Определение правила для обработки SCSS и CSS файлов
 *      - * @type {webpack.RuleSetRule}
 *      - * @property {RegExp} test - Регулярное выражение для определения SCSS и CSS файлов.
 *      - * @property {webpack.UseItem[]} use - Массив загрузчиков и опций, которые будут использованы для обработки SCSS и CSS файлов.
 *
 *  - `typescriptLoader` - Определение правила для обработки TypeScript файлов
 *      - * @type {webpack.RuleSetRule}
 *      - * @property {RegExp} test - Регулярное выражение для определения TypeScript файлов.
 *      - * @property {string} use - Загрузчик, который будет использован для обработки TypeScript файлов.
 *      - * @property {RegExp} exclude - Регулярное выражение, исключающее node_modules из обработки.
 *
 *   - `fileLoader` - Используется для обработки изображений PNG, JPEG и GIF (МОЖНО ДОБАВИТЬ И КАСТОМНЫЕ ШРИФТЫ)
 *      - * @type {webpack.RuleSetRule}
 *      - * @property {RegExp} test - Регулярное выражение для определения TypeScript файлов.
 *      - * @property {webpack.UseItem[]} use - Массив загрузчиков и опций, которые будут использованы для обработки PNG,JPEG,GIF файлов
 */

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    }
    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}
