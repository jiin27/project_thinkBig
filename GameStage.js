class GameStage{
    constructor(container, src){
        this.container=container;
        this.img;
        this.src=src;

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=900+"px";
        this.img.style.height=900+"px";

        this.container.appendChild(this.img);
    }

}