
var input1=document.querySelector("input[type='text']");
var msg=document.getElementById("hint")
var input2=document.querySelector("input[type='password']");
var btn=document.getElementsByTagName("button")[0];
/******************输入验证************************ */
//1.邮箱或手机号
var hint1=""//提示文字
var hint2=""
input1.onblur=function(){
    hint1="";
    var str=input1.value;
    if(str==""){
        hint1="邮箱/手机号不能为空"
    }else if(str.search(/@/g)==-1){       
        //console.log("手机号验证")
        var reg=/^1[3-8]\d{9}$/
        if(!reg.test(str)){
            hint1="请填入正确手机号"
        }           
    }else{
       // console.log("邮箱验证")
        var reg=/^[0-9a-zA-Z-_]+@[0-9a-zA-Z-_]+(\.[0-9a-zA-Z-_]{2,3}){1,2}$/;
        if(!reg.test(str)){
            hint1="请填入正确邮箱"
        }    
    }
    msg.innerHTML=hint1;
}
input2.onblur=function(){
    hint2="";
    var str=input2.value; 
    if(str==""){
         hint2="密码不能为空"
    }else{
        var reg=/^[0-9a-zA-Z_]{6,12}$/
        if(!reg.test(str)){
            hint2="6-12位密码：字母数字下划线"
        }
    }   
    msg.innerHTML=hint2;
}
/**********登录验证***********/
btn.addEventListener("click",function(){
    if(hint1==""&&hint2==""){
        var uname=input1.value;
        var upwd=input2.value;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
             if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                var res=JSON.parse(result)
                if(res.code==1){
                    alert("登录成功,三秒后自动跳转到主页面");
                    setInterval(() => {
                       location.href="index.html"
                    }, 3000);
                }else{
                    alert("用户名或密码错误")
                    history.go(0);
                }
            }
         }
        var url=`http://127.0.0.1:3000/login?uname=${uname}&upwd=${upwd}`;
        xhr.open("get",url,true);
        xhr.send(null);
        console.log(11111111)
    }
})
//跳转到注册页面
var register=document.getElementById("register");
register.addEventListener("click",function(){
   open("../register.html");
})