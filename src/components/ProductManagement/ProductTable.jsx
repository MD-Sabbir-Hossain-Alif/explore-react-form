import React from "react";

const ProductTable = ({ products, setProducts }) => {
    const total = products.reduce(
        (sum, p) => sum + Number(p.price) * Number(p.quantity),
        0,
    );

    return (
        <div>
            <table className="border text-center">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="border p-2">{product.name}</td>
                            <td className="border p-2">{product.price}</td>
                            <td className="border p-2">{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="2" className="text-left p-2">
                            Total: {total}
                        </th>
                        <td className="text-right p-2">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setProducts([])}
                            >
                                Clear
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ProductTable;
