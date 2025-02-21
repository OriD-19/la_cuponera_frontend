import React, { createContext } from 'react'
import { useFilteredCoupons } from '../hooks/useFilteredCoupons';


export const SelectedCategoryContext = createContext();
export const SetSelectedCategoryContext = createContext();

const CategoryContext = ({ children }) => {

    const { categories, filteredCoupons, selectedCategory, setSelectedCategory } = useFilteredCoupons();


  return (
    <SelectedCategoryContext.Provider value={{filteredCoupons, selectedCategory, categories}}>
        <SetSelectedCategoryContext.Provider value={setSelectedCategory}>
            {children}
        </SetSelectedCategoryContext.Provider>
    </SelectedCategoryContext.Provider>
  )
}

export default CategoryContext