const searchFoods = () => {
    const chickenItem = document.getElementById('search-field').value;
    // console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${chickenItem}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(meals => displayFoods(meals.meals))
}

const displayFoods = foods => {
    // console.log(foods);
    const foodsDiv = document.getElementById('food-container');
    foodsDiv.innerHTML = '';
    foods.forEach(food => {
        // console.log(food.strMeal);
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        // const foodName = document.createElement('h3');
        // foodName.innerText = food.strMeal;
        // foodDiv.appendChild(foodName);
        // const foodCategory = document.createElement('p');
        // foodCategory.innerText = food.strCategory;
        // foodDiv.appendChild(foodCategory);
        const foodInfo = `
            <img src = "${food.strMealThumb}">
            <h3>${food.strMeal}</h3>
            <p>${food.strCategory}</p>
            <button class="bg-primary" onclick="displayFoodDetail('${food.strMeal}')">Details</button>    
            
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
};

const displayFoodDetail = food => {
    // console.log(food)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(meals => renderFoodInfo(meals.meals[0]))         
}

const renderFoodInfo = food =>{
    const foodDiv = document.getElementById('food-detail');
    foodDiv.innerHTML = `
        <img src ="${food.strMealThumb}">
        <h3>${food.strMeal}</h3>
        <p>${food.strArea}</p>

    
    `

}