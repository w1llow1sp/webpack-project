import HtmlWebpackPlugins from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function  buildPlugins ({paths}: BuildOptions) : webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugins({
            template:paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        })
    ]
}