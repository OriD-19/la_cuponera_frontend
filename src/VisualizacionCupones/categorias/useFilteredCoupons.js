import { useEffect, useState } from "react";
import { CategoriesList } from "./CategoriesList";

const API_URL = "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons"; // Reemplaza con la URL real

export function useFilteredCoupons() {
  const [categories] = useState(CategoriesList);
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCoupons(data);
          setFilteredCoupons(data);
        } else {
          console.error("Api no da un arreglo:", data);
        }
      })
      .catch((error) => console.error("Error al cargar cupones:", error));
  }, []);

  // Filtrar cupones por categoría
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredCoupons(coupons);
    } else {
      setFilteredCoupons(coupons.filter((c) => c.category === selectedCategory));
    }
  }, [selectedCategory, coupons]);

  return { filteredCoupons, categories, selectedCategory, setSelectedCategory };
}