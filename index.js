function calculation(){
    var n1=document.getElementById("f1").value
    var n2=document.getElementById("f2").value
    var ch=document.getElementById("f3").value
    var a=parseInt(n1)
    var b=parseInt(n2)
    var ans=document.getElementById('answer')
    // var allString=a+ch+b
    // ans.value=eval(allString.toString())
    if(ch=='+')
        {
         ans.value=a+b
        }else if(ch=='-')
            {
             ans.value=a-b
            }else if(ch=='*')
                {
                    ans.value=a*b
                }else if(ch=='/')
                    {
                        ans.value=a/b
                    }else{
                        ans.value="Please enter suitable operator"
                    }
}
function Reset()
{
    var ans=document.getElementById('answer')
    var n1=document.getElementById("f1")
    var n2=document.getElementById("f2")
    var ch=document.getElementById("f3")
    n1.value=""
    n2.value=""
    ch.value=""
    ans.value=""
}