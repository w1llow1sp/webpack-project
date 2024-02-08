/**
 * @mode: либо 'development'(для разработки),либо 'production'(для публикации)
 * @entry: это стартовая точка нашего проекта
 * @output:это настройка того, куда мы будем собирать наш проект
 * * @filename: имя файла сборки. Если  [name].js -- то он дает имя сборке по дефолту из @entry (main.js)
 * * @path: путь, куда сборка должна происходить
 * * @clean: при новой сборке все старые сборки удаляются.
 * @plugins:массив, представлющий собой указаные и установленные нами плагины для webpack
 * * @webpack.ProgressPlugin(): идет по дефолту, отображает прогресс по сборке
 * @resolve:
 * * @extensions: указываем расширения тех файлов, для которых при импорте мы не будем указывать расширение
 * @module:
 * * @rules: Здесь мы конфигурируем лоудеры. Они предназначены для обработки файлов, которые выходят за JS (png,jpeg SVG,SCC,SCCS,TS).
 * * * @test: указываем регулярное выражение по которому мы будем находить файлы, которые надо прогнать через лоудеры (ts и tsx)
 * * * @use: лоудер, который для этих файлов необходимо использовать
 * * * @exclude: что исключаем
 */

import webpack from 'webpack'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";
import path from "path";


const paths: BuildPaths = {
    entry:path.resolve(__dirname,'src','index.ts'),
    build:path.resolve(__dirname,'build'),
    html:path.resolve(__dirname,'public','index.html')

}

const mode = 'development'
const isDev = mode === 'development'


const config: webpack.Configuration = buildWebpackConfig({
    mode:'development',
    paths,
    isDev
})

export default config

