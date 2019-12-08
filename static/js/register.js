
var input1=document.querySelector("input[type='text']");
var msg=document.getElementById("hint")
var inputs=document.querySelectorAll("input[type='password']");
var btn=document.getElementsByTagName("button")[0];
/******************输入验证************************ */
//1.邮箱或手机号
var hint1=""//提示文字
var hint2=""
input1.onblur=function(){
    hint1="";
    var str=input1.value;
    if(str==""){
        hint1="邮箱不能为空"
    }else if(str.search(/@/g)==-1){       
        //console.log("手机号验证")
        var reg=/^[0-9a-zA-Z-_]+@[0-9a-zA-Z-_]+(\.[0-9a-zA-Z-_]{2,3}){1,2}$/;
        if(!reg.test(str)){
            hint1="请填入正确的邮箱"
        }           
    }
    msg.innerHTML=hint1;
}
var pwd="";
var repwd="";
inputs[0].onblur=function(){
    hint2="";
    pwd=inputs[0].value;
    if(pwd==""){
         hint2="密码不能为空"
    }else{
        var reg=/^[0-9a-zA-Z_]{6,12}$/
        if(!reg.test(pwd)){
            hint2="6-12位密码：字母数字下划线"
        }
    }   
    msg.innerHTML=hint2;
}
var hint3="";
inputs[1].onblur=function(){
    hint3="";
    repwd=inputs[1].value;
    if(repwd!=pwd){
         hint3="两次密码不一致"
    }  
    msg.innerHTML=hint3;
}



/**********注册***********/
var hint3="";
btn.addEventListener("click",function(){
    if(msg.innerHTML==""){
        var uname=input1.value;
        var upwd=inputs[0].value;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
             if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                var res=JSON.parse(result)
                if(res.code==1){
                    alert("注册成功,即将跳转到登录页面")
                    location.href="login.html";
                }else if(res.code==-2){
                    alert("邮箱已注册")
                    history.go(0);
                }else{
                    alert("注册失败")
                    history.go(0);
                }
                
            }
         }
        

    }
})