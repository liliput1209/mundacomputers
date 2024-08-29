// courses

// filter array

let filterarray=[];

let galleryarray = [
   {
    id:1,
    name: "Computer Science Class XII",
    src: "/assets/img/courses/1.png",
    hrs: "100h",
    mentor:"By Kulveer Singh in Python",
    orgPrice:"Rs 4500.00",
    price: "Rs 99.00"
   },
   {
    id:2,
    name: "Full Stack Android App Development ",
    src: "/assets/img/courses/2.png",
    hrs: "60h",
    mentor:"By Kulveer Singh in Android App Development",
    orgPrice:"Rs 20,000.00",
    price: "Rs 15,000.00"
   },
   {
    id:3,
    name: "Class XI Computer Science",
    src: "/assets/img/courses/3.png",
    hrs: "60h",
    mentor:"By Kulveer Singh",
    orgPrice:"Rs 1,500.00",
    price: "Rs 99.00"
   },
   {
    id:4,
    name: "Full Stack Web Development",
    src: "/assets/img/courses/4.png",
    hrs: "60h",
    mentor:"By Kulveer Singh in Web Designing",
    orgPrice:"Rs 12,499.00",
    price: "Rs 5999.00"
   },
   {
    id:5,
    name: "MS-Word",
    src: "/assets/img/courses/5.png",
    hrs: "10h",
    mentor:"By Kulveer Singh by Computer Basic,MS-Word Hindi",
    orgPrice:"Rs 499.00",
    price: "Rs 49.00"
   },
   {
    id:6,
    name: "MS-Excel",
    src: "/assets/img/courses/6.png",
    hrs: "10h",
    mentor:"By Kulveer Singh by Computer Basic,MS-Excel Hindi",
    orgPrice:"Rs 499.00",
    price: "Rs 49.00"
   },
   {
    id:7,
    name: "MS-PowerPoint",
    src: "/assets/img/courses/7.jpg",
    hrs: "10h",
    mentor:">By Kulveer Singh by Computer Basic,MS-Power Point Hindi",
    orgPrice:"Rs 499.00",
    price: "Rs 49.00"
   },
   {
    id:8,
    name: "C",
    src: "/assets/img/courses/8.png",
    hrs: "30h",
    mentor:"By Kulveer Singh in C",
    orgPrice:"Rs 1,500.00",
    price: "Rs 49.00"
   },
   {
    id:9,
    name: "C++",
    src: "/assets/img/courses/9.png",
    hrs: "30h",
    mentor:"By Kulveer Singh in C++",
    orgPrice:"Rs 1,500.00",
    price: "Rs 49.00"
   },
   {
    id:10,
    name: "PhotoShop CS-3",
    src: "/assets/img/courses/10.png",
    hrs: "60h",
    mentor:"By Kulveer Singh in Photo Shop CS-3",
    orgPrice:"Rs 3000.00",
    price: "Rs 199.00"
   }
]

showgallery(galleryarray);

function showgallery(currarray){

    document.getElementById("card").innerText="";

    for(var i=0;i<currarray.length;i++){
    document.getElementById("card").innerHTML+=`
     <div class="col-md-4 mt-3">
     <div class="card p-4 m-2 cursor-pointer">
        <h4 class="text-capitalize text-center text-black">${currarray[i].name}</h4>
        <a href="/courses/Computer-Science-Class-XII.html"><img src="${currarray[i].src}" width="70%" height="250px" class="mx-auto d-flex justify-content-center" /></a>
        <div>
         <i class="fa-regular fa-clock text-info"></i>
          <p class="text-black d-inline">${currarray[i].hrs}</p>
        </div>
      
        <p class="mt-2 text-black">${currarray[i].mentor}</p>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
         <div>
          <p class="text-decoration-line-through  opacity-75 d-inline text-black">${currarray[i].orgPrice}</p>
          <p class="text-success fw-bold d-inline h5">${currarray[i].price}</p>
        </div>
        
        <button class="btn btn-outline-primary"><i class="fal fa-shopping-cart cart p-2"></i>Add to Cart</button>
        

        </div>
     </div>
     </div> `
}
}



//Searching using keyup input

document.getElementById("myinput").addEventListener("keyup",function(){
    let text=document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a){
         if(a.name.includes(text) || a.name.toLowerCase().includes(text.toLowerCase())){
            return a.name;
         }
    });
    if(this.value==""){
        showgallery(galleryarray);
    }
    else{
        if(filterarray==""){
            document.getElementById("para").style.display='block';
            document.getElementById("card").innerHTML="";
        }
        else{
            showgallery(filterarray);
            document.getElementById("para").style.display='none';
        }
    }
})

/*course page*/

/*let loadMore=document.getElementById("load-more");
let loadLess=document.getElementById("load-less");

function click(){
    document.getElementById("parent").style.display='block';
    loadMore.style.display='none';
    loadLess.style.display='block';
};*/


