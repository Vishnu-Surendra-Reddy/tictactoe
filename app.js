var cur="X";
var arr=[1,2,3,4,5,6,7,8,9];
var pr=[];
var i=0;
var flag=true;
function setValue(result,f1){
    var val=document.getElementById(result);
       if(val.innerHTML.trim() === ""){
             if(cur=="X"){
                 val.innerHTML="X";
                 val.style.color="yellow";
                 arr[f1]="X";
                 pr[i++]="X";
                 cur="O";
                }
              else if(cur=="O"){
                  val.innerHTML="O";
                  val.style.color="blue";
                  arr[f1]="O";
                  pr[i++]="O";
                  cur="X";
              }
              val.style.fontSize="30px";
              if(flag && pr.length>=5){
                check(arr[f1]);
              }
        }
    }
    function check(ch){
        if(((arr[0]==arr[1])&&(arr[1]==arr[2]))||((arr[3]==arr[4])&&(arr[4]==arr[5])) || ((arr[6]==arr[7])&&(arr[7]==arr[8])) || ((arr[0]==arr[3])&&(arr[3]==arr[6])) || ((arr[1]==arr[4])&&(arr[4]==arr[7])) || ((arr[2]==arr[5])&&(arr[5]==arr[8])) || ((arr[0]==arr[4])&&(arr[4]==arr[8])) || ((arr[2]==arr[4])&&(arr[4]==arr[6]))){
            var s=document.getElementById("res");
            s.innerText=ch+" Wins ";
            cur=null;
            flag=false;
        }
        else{
            if(pr.length==9)
                {
                var s=document.getElementById("res");
                s.innerText="It's draw";
                cur=null;
                flag=false;
               }
        }
    }
    function fun1()
    {
        var k=confirm("Are You Sure! Do You Want To Reset The Game?");
        if(k){
            window.location="index.html";
        }
    }