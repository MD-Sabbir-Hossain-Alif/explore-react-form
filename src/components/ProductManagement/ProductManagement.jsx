import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
        console.log(newProducts);
    };

    return (
        <>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <br />
            <ProductTable
                products={products}
                setProducts={setProducts}
            ></ProductTable>
        </>
    );
};

export default ProductManagement;
