import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";

const excludedFileName = 'icon-doc.svg';

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`,{})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    // Создавать страницу с перечнем иконок
                    example: true
                }
            }
        }))
        .pipe(cheerio({
            run: function ($) {
              $('svg[id]:not(#icon-chat)').each(function () {
                $(this).removeAttr('fill');
                $(this).find('[fill]').removeAttr('fill');
                $(this).find('[stroke]').removeAttr('stroke');
                $(this).find('[style]').removeAttr('style');
              });
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`))
}