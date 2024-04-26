/* script to display and hide the navgation links on small devices*/
function toggle_nav(){
    let nav = document.getElementById('nav');
    if (nav.style.display === 'flex'){
        nav.style.display ='none';  /*on invoking this fucntion hides the nav links*/
    }
    else{
        nav.style.display = 'flex';  /*on invoking this fucntion  clicking btn changes visibility to visble*/
        nav.style.visibility= 'visible'
        
    }
    }

   
    

    