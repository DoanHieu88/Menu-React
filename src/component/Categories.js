import React from 'react'

export default function Categories({categories,filterCategories}) {
    // console.log(categories);
    return (
        <div className='btn-container'>
            {categories.map((category,index)=>{
                return (
                    <button 
                        key={index}
                        onClick={()=>filterCategories(category)}
                        className="filter-btn"
                        >{category}
                    </button>
                )
            })}
        </div>
    )
}
