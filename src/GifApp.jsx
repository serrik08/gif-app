import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

   const [categories, setCategories] = useState([ 'One Punch','Dragon Ball' ]);

   const onAddCategory = ( newCategory ) => {
      // const newCategory = event.target.value;
      if( categories.includes(newCategory) ) return;
      setCategories([ newCategory, ...categories ]);
   };

   return (
      <>
         <h1>GifApp</h1>

         <AddCategory 
            onNewCategory={ (event) => onAddCategory(event) }
         />

         
         { 
            categories.map( ( category ) => (
               <GifGrid 
                  key={ category } 
                  category={ category }/>
            ))
         }
         
      </>
)};