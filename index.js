var n;
function calculate()
{
    let y;
    let a=document.getElementById("temp-1").value;
    let x=document.getElementById("temp-2").value;
    let b=document.getElementById("input-1").selectedIndex;
    let c=document.getElementById("input-2").selectedIndex;
    
    if(n==1)
       {
         document.getElementById("temp-2").disabled=false;
         if(b==0)
         {
           y=(a-32)*(5/9);
           if(c==1)
           {
               document.getElementById("temp-2").value=y;
           }
           else if(c==2)
           {
               document.getElementById("temp-2").value=y+273.15;
           }
         }
         else if(b==1)
         {
           if(c==0)
           {
               y=a*(9/5)+32;
               document.getElementById("temp-2").value=y;
           }
           else if(c==2)
           {
               document.getElementById("temp-2").value=a+273.15;
           }
         }
         else if(b==2)
         {
           if(c==0)
           {
               y=(a-273.15)*(9/5)+32;
               document.getElementById("temp-2").value=y;
           }
           else if(c==1)
           {
               y=(a-273.15);
               document.getElementById("temp-2").value=y;
           }
         }
       }
       if(n==2)
       {
         document.getElementById("temp-1").disabled=false;
         if(c==0)
         {
           y=(a-32)*(5/9);
           if(b==1)
           {
               document.getElementById("temp-1").value=y;
           }
           else if(b==2)
           {
               document.getElementById("temp-1").value=y+273.15;
           }
         }
         else if(c==1)
         {
           if(b==0)
           {
               y=a*(9/5)+32;

               document.getElementById("temp-1").value=y;
           }
           else if(b==2)
           {
               document.getElementById("temp-1").value=a+273.15;
           }
         }
         else if(c==2)
         {
           if(b==0)
           {
               y=(a-273.15)*(9/5)+32;
               document.getElementById("temp-1").value=y;
           }
           else if(b==1)
           {
               y=(a-273.15);
               document.getElementById("temp-1").value=y;
           }
         }
       }
}
function inputsvalue(k)
{
    if(k==1)
    {
        document.getElementById("temp-2").disabled=true;
    }
    else if(k=2)
    {
        document.getElementById("temp-1").disabled=true;
    }
    n=k;
}
