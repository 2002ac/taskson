let titleInput = document.querySelector(".title");
let aboutInput = document.querySelector(".about");
let priceInput = document.querySelector(".price");
let photoInput = document.querySelector(".photo");
let roundedImage = document.querySelector(".rounded-image");
let addBtn = document.querySelector(".addbtn");
let table = document.querySelector(".table");

const deleteEl = (e)=> {
    axios.delete(['http://localhost:3000/ayxan'+id])
    window.location.reload()
}

photoInput.addEventListener('input' , (e)=> {
    let file = e.target.value.file [0]
    if(file) {
        let reader = new FileReader 
        reader.readAsDataURL(file)
        reader.onload = function() {
            roundedImage.src = reader.result()
        }
    }
})

getAllData();


fetch('http://localhost:3000/ayxan')
.then(res=> res.json())
.then(data=> {

   data.forEach(element=> {
    table.innerHTML += `
    <tr>
          <th>${element.id}</th>
          <th>${element.name}</th>
          <th>${element.description}</th>
          <th>
          <button onclick="deleteEl(${element.id})">Delelte</button>
          </th>
    </tr>
    `
   }) 

   addBtn.addEventListener("chenck" , (e)=> {
    if(titleInput.value !=="" && aboutInput.value !=="" && priceInput.value !=="" && photoInput.value !=="" ) {
        
    }  
   })
    




})