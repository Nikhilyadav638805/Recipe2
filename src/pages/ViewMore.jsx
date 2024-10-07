import React from 'react'
import { useLocation } from 'react-router-dom'
// import { Link, useLocation } from 'react-router-dom'
  

const ViewMore = () => {
  let location =  useLocation()
  console.log(location)
  // let nutrientsArr  = Object.entries(location.state.ingredientLines
  // )
  
    // console.log(nutrientsArr)
  return (
    <div >


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-20">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Color
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>

      </tr>
    </thead>
    <tbody>
    { }

    </tbody>
  </table>
</div>

      
    </div>
  )
}

export default ViewMore
