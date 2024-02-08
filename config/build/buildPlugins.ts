import HtmlWebpackPlugins from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function  buildPlugins ({paths}: BuildOptions) : webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugins({
            template:paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}