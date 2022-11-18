import React, { useEffect, useState } from "react";
import "../../../styles/ProductSideBar.css";
import FilterProduct from "../FilterProduct/FilterProduct";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductSideBar = ({ isSideBar, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const { getProducts } = useProducts();

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  return isSideBar ? (
    <div className="aside">
      <FilterProduct />
    </div>
  ) : null;
};

export default ProductSideBar;
