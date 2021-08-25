import webpack from 'webpack';
// import nodeExternals from 'webpack-node-externals';
import path from 'path';

const config: webpack.Configuration = {
  entry: './public/index.ts',
  externalsPresets: { node: true },
  // externals: [nodeExternals()],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'danbala.js',
    path: path.resolve(__dirname, 'build/Release')
  }
};

export default config;
