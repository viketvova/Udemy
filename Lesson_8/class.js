class Options {
    constructor(height, width, bg, fontSize, textAlign) {
                
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    divCreate(text) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.textContent = text;
        div.style.cssText = `height: ${this.height}px;
        background: ${this.bg};
        width: ${this.width}px;
        font-size: ${this.fontSize}%;
        text-align: ${this.textAlign}`;
    }
}
