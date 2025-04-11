// src/components/ProductList.js
import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: "Mầm cây Xương Rồng", price: "50.000 VNĐ", image: "/sapling1.jpg" },
    { id: 2, name: "Mầm cây Sen Đá", price: "30.000 VNĐ", image: "/sapling2.jpg" },
    { id: 3, name: "Mầm cây Hồng Môn", price: "70.000 VNĐ", image: "/sapling3.jpg" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center text-sapling-green mb-6">Sản Phẩm Nổi Bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-2 bg-sapling-green text-white px-4 py-2 rounded hover:bg-green-600 w-full">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;