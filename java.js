/*const car1=document.querySelector('.buttons');
car1.addEventListener('click',function(e){
    e.preventDefault();
    const avg=e.target;
    console.log(avg);
    
})
*/
let string="";

const first=document.querySelectorAll('.first');
first.forEach(e=> {
    e.addEventListener('click',function(el){
        if(el.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(el.target.innerHTML=="C"){
         string="";
         document.querySelector('input').value=string;
        }
        else if(el.target.innerHTML=="x"){
            string=string+"*" ;
            document.querySelector('input').value=string;
        }
        else
        {console.log(el.target);
        string=string+el.target.innerHTML;
        document.querySelector('input').value=string;}
        
    });
})