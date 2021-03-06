let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public/assets')
    .setResourceRoot('../')
    .react('resources/assets/js/app.js', 'public/assets/js')
    .extract([
        'axios',
        'jquery',
        'react',
        'react-dom',
    ])
    .sass('resources/assets/sass/app.scss', 'public/assets/css');
