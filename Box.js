//이미지 덮을 박스
class Box{
    constructor(container, width, height, x, y){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background="whitesmoke";
        this.div.style.overflow="hidden";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.container.appendChild(this.div);
    }
}