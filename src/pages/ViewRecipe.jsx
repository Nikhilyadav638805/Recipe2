import React from 'react'
import { useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom'
const ViewRecipe = () => {
  let location = useLocation();

  console.log(location) 

  let data = location.state.recipe
 
  // console.log(nutrientsArr)
  return (
    <div className=' h-[105vh] flex flex-col justify-evenly bg-white sm:h-[120vh] '>
      <div className='flex justify-center gap-10 flex-wrap '>
        <div className='p-8 bg-gray-200 rounded-tl-[100px] rounded-br-[100px] mt-16'>
          <img src={data.image}  className='rounded-tl-[100px] rounded-br-[100px] h-96 w-[300px]' alt="" />
          </div>
        <div className='flex flex-wrap font-semibold text-xl gap-1 rounded-2xl items-start mt-5  flex-col justify-evenly '> 
          <h1>Lable : {data.label}</h1>
          <h1>Calories : {data.calories}</h1>
          <h1>TotalWeight : {data.totalWeight}</h1>
          <h1>CuisineType : {data.cuisineType}</h1>
          <h1>MealType : {data.mealType}</h1>
          <h1 className='flex flex-wrap'>
          <h1>Source : {data.source}</h1>
DietLables: {data.dietLabels
}</h1>
        </div>
      </div>
{/* <Link className=' flex text-center justify-center ' to='/viewmore' state={data} ><button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-24 mt-4 py-2.5 text-center me-2 mb-2 rounded-br-[180px] rounded-tl-[180px]">View more</button>

</Link> */}
    </div>
  )
}

export default ViewRecipe
