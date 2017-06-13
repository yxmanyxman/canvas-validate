/* 生成随机验证码 */
function rand(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}
/* 生成随机颜色 */
function randColor(min, max) {
    var r = rand(min, max);
    var g = rand(min, max);
    var b = rand(min, max);
    return "rgb("+r+","+g+","+b+")";
}
clickChange();
document.getElementById("changeImg").onclick = function (e) {
    e.preventDefault();
    clickChange();
};
/* 点击刷新 */
function clickChange() {
    var mycanvas = document.getElementById("mycanvas");
    var width = mycanvas.width;
    var height = mycanvas.height;
    var cxt = mycanvas.getContext('2d');
    cxt.textBaseline = "bottom";

    cxt.fillStyle = randColor(180, 240);
    cxt.fillRect(0,0,width,height);
    var str = "abcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i<4; i++){
        var txt = str[rand(0,str.length)];
        cxt.font = "25px Arial"; //随机生成字体样式
        cxt.fillStyle = "#000"; //随机生成字体颜色

        var x = 20*i+6;
        var y = rand(25, 45);
        var deg = rand(-45, 45);
        cxt.translate(x, y); //修改坐标原点、旋转角度
        cxt.rotate(deg*Math.PI/180);
        cxt.fillText(txt, 0, 0);
        console.log(txt);
        cxt.rotate(-deg*Math.PI/180); //恢复坐标原点、旋转角度
        cxt.translate(-x, -y);
    }
    /* 生成10调干扰线 */
    for(var j=0; j<10; j++){
        cxt.strokeStyle = randColor(40, 180);
        cxt.beginPath();
        cxt.moveTo(rand(0, width), rand(0, height));
        cxt.lineTo(rand(0,width), rand(0, height));
        cxt.lineWidth = 0.5;
        cxt.stroke();
    }
    for(var k=0; k<100; k++){
        cxt.fillStyle = randColor(0, 255);
        cxt.beginPath();
        cxt.arc(rand(0, width), rand(0, height), 1, 0, 2*Math.PI);
        cxt.fill();
    }
}

