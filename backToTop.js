window.onload = function(){
  let aside = document.getElementsByClassName("aside")[0];
  let text = document.getElementsByClassName("text")[0];
  let timer = null;
  let arrowUp = document.getElementsByClassName("iconfont")[0]
  let dmd = document.documentElement;
  let flag = true;
  //点击回到顶部时，文档在一定时间内回到顶部
  aside.onclick = function(){
    timer = setInterval(() => {
      dmd.scrollTop = dmd.scrollTop - Math.floor(dmd.scrollTop/10);
      if(dmd.scrollTop == 0){
        clearInterval(timer);
      }
      flag = true; 
    }, 30);
       
  }
  //scrollTop比可视区域高度更大时，显示回到顶部这一区域
  window.onscroll = function(){
    if(dmd.scrollTop>dmd.clientHeight){
      aside.style.display = "inline-block";
    }else{
      aside.style.display = "none";
    }
    if(!flag){
      clearInterval(timer);
    }
    flag = false;
  }
  //鼠标悬浮显示“回到顶部”的文字，鼠标离开，显示“向上的箭头”
  aside.onmouseover = function(){
    arrowUp.style.display = "none"
    text.style.display = "inline-block";
  }
  aside.onmouseleave = function(){
    text.style.display = "none";
    arrowUp.style.display = "inline-block";
  }
}