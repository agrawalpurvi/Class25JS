class Circle{
    constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color;
    }

    display(){
        fill(this.color);
        circle(this.x,this.y,this.size);

    }
}