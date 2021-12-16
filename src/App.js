import React,{useState} from 'react'
import Categories from './component/Categories'
import Menu from './component/Menu';
import data from './config/data'

const allCategories = ['All', ...new Set(data.map(item => item.category))] 

export default function App() {
    const [menu, setMenu] = useState(data);
    const [categories, setCategoties] = useState(allCategories);
    
    const filterCategories = (category) =>{
        if(category === 'All'){
            setMenu(data);
            return
        }
       const newItem = data.filter(item =>item.category === category);
       setMenu(newItem)
    }


    return ( 
       <main>
           <section>
               <div className="title">
                 <h2>Our Menu</h2>
                 <div className="underline"></div>
               </div>
           </section>
           <Categories categories={categories} filterCategories={filterCategories}/>
           <Menu menu={menu}/>
       </main>
    )
}
