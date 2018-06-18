class SpriteRenderer {
    set fps(fps) {
        this.delayBetweenFrames = fps && 1000 / fps;
    };

    constructor(parameters) {
        let {spriteSheetUrl, spriteSize, spritePositions, fps} = parameters;
        this.fps = fps || 10;
        this.spriteSheetUrl = spriteSheetUrl;
        this.spritePositions = spritePositions;
        this.spriteSize = spriteSize;
    }

    render(targetSelector, start = true, spritePositionIterator) {
        if (!spritePositionIterator) {
            spritePositionIterator = this.spritePositionsGenerator();
        }

        if (start) {
            this.playing = true;
        }

        const target = document.querySelector(targetSelector);
        const nextPosition = spritePositionIterator.next();
        if (target && this.playing && !nextPosition.done) {
            this.renderTo(target, nextPosition.value);
        }

        setTimeout(() => this.render(targetSelector, false, spritePositionIterator), this.delayBetweenFrames)
    }

    renderTo(target, position) {
        target.setAttribute('style', `
            background-image: url("${this.spriteSheetUrl}");
            background-position: ${position};
            width: ${this.spriteSize.width};
            height: ${this.spriteSize.height};`)
    }

    * spritePositionsGenerator() {
        for (let i = 0; i < Number.MAX_SAFE_INTEGER ; i++) {
            yield this.spritePositions[i % this.spritePositions.length];
        }
    }

}