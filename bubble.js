//泡泡类
//位置，颜色，半径，边的宽度，是否相连
function Bubble() {
    this.position = {x:0,y:0};//位置 泡泡圆心
    this.r = 20;//半径
    this.color="#ffffff";//泡泡颜色
    this.width = 5;//宽度 泡泡边的笔的宽度
    this.angle = 180;//角度 应该不需要吧
    this.live = 0;//是否活着。。。
    this.positionTag={i:0,j:0};//position数组的对应下标 第i行第j列
    this.visit=0;
    this.linkToTheTop=false;
    this.gotTheBiggest=false;//是否膨胀到最大了  在泡泡消除的时候，先膨胀到最大，再缩小

    this.LinkToTheTop=false;//是否与最上面的泡泡直接或间接相连，若不相连则需要掉落

}

Bubble.prototype.setPosition = function(x,y) {
    this.position.x=x;
    this.position.y=y;
}

Bubble.prototype.setSize = function(s) {
    this.size=s;
}

Bubble.prototype.setColor = function(c) {
    this.color=c;
}

Bubble.prototype.setWidth = function(w) {
    this.width=w;
}

Bubble.prototype.setAngle = function(a) {
    this.angle=a;
}
