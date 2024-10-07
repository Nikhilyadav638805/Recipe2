import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  let [products, setproducts] = useState([])

  let searchRef = useRef()

  const [iteam, setiteam] = useState();

  const handleClick = (e) => {
    e.preventDefault()
    let value = searchRef.current.value
    console.log(value)
    setiteam(value)
  }

  async function getData() {
    try {
      let res = await fetch(`https://api.edamam.com/search?q=${iteam}&app_id=21b11edb&app_key=
      8c23ea95baa55a4219b49b0c5ace888a	`)
      let data = await res.json()
      // console.log(data.hits)
      setproducts(data.hits)
    } catch (error) {
      <h1>server not responding
      </h1>
    }
  }
  useEffect(() => {
    getData()
  }, [iteam])
  return (
  <div className='py-20 bg-pink-200'>
    <form className=' flex justify-center sm:flex-row gap-3 mb-3'>
  <input type="text" placeholder='search recipe'  className='rounded-2xl  h-8 w-[200px] text-center ' ref={searchRef} />
  <button type="button" class="text-green-700 rounded-br-[50px] rounded-tl-[50px] hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" onClick={handleClick}>Search</button>

</form>

<div className='flex justify-evenly flex-wrap gap-4  items-center'>
  {products.map((iteam)=>{
return <div className='h-[450px]  w-[300px] border-2 p-6  sd:w-[350px] flex flex-col justify-evenly rounded-br-[50px] rounded-tl-[50px] bg-white '>
<img className='rounded-br-[50px] rounded-tl-[50px]' src={iteam.recipe.image} alt="" />
<h1 className='font-bold'>Label:- {iteam.recipe.label}</h1>
<h1 className='font-medium'>MealType:-{iteam.recipe.mealType}</h1>
<Link to="/view" className='text-yellow-200 rounded-2xl p-2 font-medium  ' state={iteam} ><button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-br-[180px] rounded-tl-[180px]">View more</button>

      </Link>
</div>
  })

  }
</div>
  </div>
  )
}

export default Home
