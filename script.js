window.onload = function () {
    const renderer = new SpriteRenderer({
        spriteSheetUrl: 'spritesheet.png',
        spriteSize: {width: '120px', height: '120px'},
        spritePositions: ['0px 00px', '-120px 00px', '-240px 00px'],
        fps: 3
    });
    renderer.render('#doggo');
};

function onFeed() {
    Array.from(document.getElementsByClassName("heart")).forEach(heart => heart.classList = "heart")
}