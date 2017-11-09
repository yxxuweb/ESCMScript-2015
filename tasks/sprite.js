import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith';
import args from './util/args'


gulp.task('sprite', function () {
    gulp.src('app/**/*.png')
        .pipe(spritesmith({
            imgName: 'images/sprite.png',
            cssName: 'css/sprite.css',
            padding: 5,
            algorithm: 'binary-tree',
            cssTemplate: function (data) {
                var arr=[];
                data.sprites.forEach(function (sprite){
                    arr.push(".icon-"+sprite.name+
                        "{"+
                            "background-image: url('"+sprite.escaped_image+"');"+
                            "background-repeat: no-repeat;"+
                            "background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
                            "width: "+sprite.px.width+";"+                        
                            "height: "+sprite.px.height+";"+
                        "}\n");
                });
                return arr.join("");
            }
        }))
        .pipe(gulp.dest('server/public'))
})