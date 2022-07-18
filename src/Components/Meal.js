import React, { useState } from 'react';
import Mealitem from './Mealitem';

const Meal = () =>{
    const[search, setSearch] = useState();
    const[Mymeal, setMeal]= useState();
    const searchMeal=(evt)=> {
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                setMeal(data.meals)
            })
        }
    }
    return (
        <div className='main'>
            <div className='heading'>
                <h1>Search Your Food Recipe</h1>
                <h4>Find the recipe of the food that you love! </h4>
            </div>
            <div className='searchbox'>
                <input type='search' className='search-bar' placeholder='Enter Food Name' onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal}>
                </input>
            </div>
            <div className='container'>
            {
                (Mymeal==null)? <p className='notfound'>Welcome to Recipe Finder! Search here for some delicious meals <img src='https://images.squarespace-cdn.com/content/v1/58a212402994caae1775ad9c/1566241388722-FCLW6BFF0EA8KT91FXQG/Welcome.png'></img></p> : Mymeal.map((res)=>{
                    return(
                        <Mealitem data={res}/>
                    )
                })
            }
               
            </div>
          
        </div>

    )
}

export default Meal;