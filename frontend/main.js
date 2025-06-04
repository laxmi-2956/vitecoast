
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-Category");



let mainSection = document.getElementById("data-list-wrapper");

let productData = [];

function  fetchData(){


    fetch("http://localhost:3000/pitches")
    .then((res)=>res.json())
    .then((data)=>{
        showData(data)
   
        
      
})
    }
    fetchData();

    function showData(thData)
{
    let show = thData.map((el)=>
        getDatat(el.image,el.Category,el.description,el.price),



        

    )
  mainSection.innerHTML=show.join(" ")


 

   
   

    

}

function getDatat(image,Category,description,price){
    let mainData=`       <div class="row" >
            <div class="grid" style="display: flex; width: 100%;  margin: auto;" >
                
                <div class="images">
                <a href="description.html?image=${encodeURIComponent(image)}&Category=${encodeURIComponent(Category)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}">

                       <img src=${image}  alt=""  height="500px" width="100%">
                       <a>
             
                     <div class="oo">
                        <title id="pitch-title">${Category}</title>
                    <h4 id="pitch-Category" style="font-size: 19px; font-family: sans-serif; font-weight: 600;  padding-top: 5px;">${description}</h4>
                    <button style="padding: 10px 30px; font-size: 17px; margin-top: 8px;  font-weight: bold; border: 1px solid #143a47;">Pre-order Four</button>
                     </div> 
                </div>
             
                
             
                    
                </div>
          
            </div>        `

          return mainData;



}

console.log(mainSection)



let slideIndex = 6;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.querySelectorAll('.shem');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}



function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}


setInterval(() => {
    nextSlide();
}, 2000); 
       



 var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
interval: Infinity,
wrap: false
})


var swiper = new swiper  (".mySwiper", {
slidesPerView: 2,
spaceBetween: 0,
centeredSlides: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});


