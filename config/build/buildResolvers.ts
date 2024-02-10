import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

/**
 * Конфигурирует опции разрешения модулей для webpack.
 * Определяет расширения файлов, которые будут разрешены без указания их расширений,
 * предпочтение относительных путей, каталоги для поиска модулей и главные файлы для разрешения.
 *
 * @param {BuildOptions} options - Объект с опциями сборки, содержащий пути к исходным файлам.
 * @param {string} options.paths.src - Путь к каталогу с исходными файлами.
 * @returns {ResolveOptions} Объект с опциями разрешения модулей для webpack.
 *  - `extensions`: Массив расширений файлов, которые будут автоматически добавлены при импорте модулей.
 *  - `preferAbsolute`: Если true, webpack будет предпочитать абсолютные пути при разрешении модулей.
 *  - `modules`: Массив каталогов, в которых webpack будет искать модули.
 *  - `mainFiles`: Массив имен файлов, которые webpack будет пытаться найти в качестве входных точек модулей.
 *  - `alias`: Объект для определения псевдонимов путей к модулям, что позволяет упростить импорты.
 */


export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
