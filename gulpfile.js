var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'assets';

elixir(function(mix) {
    mix.sass('screen.scss', 'static/css');

    mix.browserSync({
        files: [
            'index.html',
            'static/**/*'
        ],
        server: {
            baseDir: './'
        },
        proxy: ''
    });
});

