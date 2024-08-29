document.getElementById("load-more").addEventListener("click",function (){
    const content=document.querySelector("#parent");
    const heading=document.querySelector(".chapter-name")
    const button=this;
 
    if(content.style.display==="none"){
       content.style.display="block";
      heading.style.display="none";
       button.textContent="Show less";
       console.log("clicked for More");
    }else{
     content.style.display="none";
     heading.style.display="block";
     button.textContent="Show more";
     console.log("Clicked for Less");
    }
 });