X_class='x';
O_class='o';
var count=true;// used to alter turns in 2players

var Box=document.getElementsByClassName('box');

var win_cond=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]]; 
win_draw_box=document.getElementById('rb');
win_draw_text=document.getElementById('r-txt');



Starter=document.getElementById('starter');
player_code=document.getElementById('player');
ai_code=document.getElementById('ai');



ai_code.addEventListener('click',runAI);
player_code.addEventListener('click',playAlong);


var myarray=[0,1,2,3,4,5,6,7,8]; ///used for shuffling array and generating random position
var temp_arr;



//======function for shuffling array(used to generate random places ,in  play with AI mode)
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


//===============Function to check win/Draw condition======================================
function check_to_cont(){

 /*Winning cond check-------------*/

for(i=0;i<win_cond.length;i++)
             {   
                let pin=win_cond[i];
                let j=pin[0];
                let k=pin[1];
                let l=pin[2];
                if(Box[j].classList.contains('x')&&Box[k].classList.contains('x')&&Box[l].classList.contains('x')){
                    win_draw_box.classList.add('showit');
                   win_draw_text.innerHTML="Cake Wins";
                   return ;
                }
                else if (Box[j].classList.contains('o')&&Box[k].classList.contains('o')&&Box[l].classList.contains('o'))
               {win_draw_box.classList.add('showit');
                win_draw_text.innerHTML="Pizza Wins";
                return ;
               }
                
             }
              

              /*Draw cond check-------------*/
   var flag=0;
 for(i=0;i<9;i++)
 {
     if(Box[i].classList.contains('x')||Box[i].classList.contains('o'))
     {  
         flag=flag+1;
     }
       
 }
 console.log(flag);
 if(flag==9){
     win_draw_box.classList.add('showit');
     win_draw_text.innerHTML="Draw!!!";
     return ;
 }
         
      }

/*---------------------@Play With AI--------------------------------------*/
function runAI(){
Starter.style.visibility="hidden";


for(i=0;i<Box.length;i++)
{
    Box[i].addEventListener('click',playAI);  
}


function playAI(event){
    if(event.target.classList.contains('x' || 'o')){
        return;
    }
    event.target.classList.add('x');
    check_to_cont();
    setTimeout(AIturn, 190 );
    setTimeout(check_to_cont,190);
}


function AIturn(){
    temp_arr=shuffle(myarray); //got the shuffled array
    let find_place=true;
     let m=0;
    while(find_place ){
        temp_index=temp_arr[m];
        if(!Box[temp_index].classList.contains('o')&&!Box[temp_index].classList.contains('x')){
            Box[temp_index].classList.add('o');
            find_place=false;
            break; //to discontinue loop as we have got the place 
        }
       m++;
    }
}

}



/*------------------@ 2Players code-------------------------------------*/

function playAlong(){
    Starter.style.visibility="hidden";

    
 for(i=0;i<Box.length;i++)
{
 Box[i].addEventListener('click',playit);
}

    function playit(event){
        if(event.target.classList.contains('x' || 'o')){
            return;
        }
        if(count==false)
         {
            event.target.classList.add('x');   
             check_to_cont();
             count=true;
            
         }
         else{
          
            event.target.classList.add('o');
            check_to_cont();
            count=false;
            
         }
    
    }

}







