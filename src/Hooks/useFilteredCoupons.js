import { useEffect, useState } from "react";

const API_URL = "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons"; // Reemplaza con la URL real

export function useFilteredCoupons() {
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.coupons)) {
          setCoupons(data.coupons);
          setFilteredCoupons(data.coupons);
          const uniqueCategories = [...new Set(data.coupons.map((c) => c.category))];
          const formattedCategories = uniqueCategories.map((cat) => ({
            name: cat.charAt(0).toUpperCase() + cat.slice(1), //solo para poner bonita, que la primera letra sea mayuscula
            slug: cat.toLowerCase(),
          }));
          setCategories([{ name: "Todos", slug: "all" }, ...formattedCategories]);
        } else {
          console.error("API no devuelve un arreglo:", data);
        }
      })
      .catch((error) => console.error("Error al cargar cupones:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredCoupons(coupons);
    } else {
      setFilteredCoupons(coupons.filter((c) => c.category === selectedCategory));
    }
  }, [selectedCategory, coupons]);

  return { filteredCoupons, categories, selectedCategory, setSelectedCategory };
}
