const findFood = () =>{
    let findBtn = document.getElementById('food')
    let findInputResult = findBtn.value
    if (findInputResult == ""){
        return alert('Enter A Food Name !!')
    }
    else if (isNaN(findInputResult) != true){
        findBtn.value = '';
        return alert('You Can not Type Any Number Here !')
        
    }
    findBtn.value = '';
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${findInputResult}`
    fetch(url)
    .then(res => res.json())
    .then(data => showFood(data.meals))
}

let showFood = meals =>{
    let searchFood = document.getElementById('search-result')
    searchFood.innerHTML = '';
    if(meals.length == 0){
        return alert('dsds')
    }
    meals.forEach(meal => {
        let a = document.createElement('div')
        a.classList.add('col')
        a.innerHTML = 
        `<div class="col-lg-12 col-md-6 img-fluid" style="border-radius:12px;">
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt = "..." >
                <div class="">
                  <h5 style="padding-left:20px; margin-bottom:10px;"  class=" text-center card-text">Search ID: ${meal.idMeal}</h5>
                <h5 style="padding-left:20px; margin-bottom:10px;"  class="card-text"> Item Name : ${meal.strMeal}</h5>
                <h5 style="padding-left:20px; text-center" class="card-text">Category : ${meal.strCategory}</h5>
                 <h5 style="padding-left:20px; margin-bottom:10px;"  class=" text-centercard-text">Finding Area : ${meal.strArea}</h5>
               
                </div>
            </div>
        </div> ` 
      searchFood.appendChild(a)                  
    });
    
}