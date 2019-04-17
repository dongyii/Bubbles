//一个发射器由一个圆 一个三角形 一条虚线组成
//圆 圆心，颜色，宽度，角度
function BubbleCaster() {
    this.position = {x:0,y:0};//位置 圆心
    this.size = 30;//发射器圆的大小，由半径决定，也即半径
    this.color="#bf600b";//颜色
    this.width = 5;//宽度 画圆的笔的宽度
    this.angle = 180;//角度 发射器的角度

    this.trianglePosition1X=0;
    this.trianglePosition1Y=0;

    this.trianglePosition2X=0;
    this.trianglePosition2Y=0;

    this.trianglePosition3X=0;
    this.trianglePosition3Y=0;


    this.lineLength=3;//虚线每一小段的长度
    this.lineInterval=1;//虚线每一小段之间的间隔
}

BubbleCaster.prototype.setPosition = function(x,y) {
    this.position.x=x;
    this.position.y=y;
}

BubbleCaster.prototype.setSize = function(s) {
    this.size=s;
}

BubbleCaster.prototype.setColor = function(c) {
    this.color=c;
}

BubbleCaster.prototype.setWidth = function(w) {
    this.width=w;
}

BubbleCaster.prototype.setAngle = function(a) {
    this.angle=a;
}

BubbleCaster.prototype.updateTrianglePosition = function(a) {
    // var r=this.size-this.width/2;
    // var R=this.size+this.width/2;
    var r=this.size;
    var R=this.size-this.width;
    var a=this.angle* 0.017453293;

    this.trianglePosition1X=r*Math.cos(a)-Math.sqrt(r*r+R*R)*Math.sin(a)+this.position.x;//
    this.trianglePosition1Y=Math.sqrt(r*r+R*R)*Math.cos(a)+r*Math.sin(a)+this.position.y;
    this.trianglePosition2X=Math.cos(a)*r+Math.sin(a)*Math.sqrt(r*r+R*R)+this.position.x;
    this.trianglePosition2Y=Math.sin(a)*r-Math.cos(a)*Math.sqrt(r*r+R*R)+this.position.y;
    this.trianglePosition3X=2*r*Math.cos(a)+this.position.x;
    this.trianglePosition3Y=2*r*Math.sin(a)+this.position.y;
}