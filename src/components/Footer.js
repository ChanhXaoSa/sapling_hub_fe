// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-bold mb-4">SaplingHub</h5>
          <p>Cửa hàng mầm cây số 1 Việt Nam.</p>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-4">Liên kết nhanh</h5>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-700 hover:text-sapling-green">Trang chủ</a></li>
            <li><a href="#shop" className="text-gray-700 hover:text-sapling-green">Cửa hàng</a></li>
            <li><a href="#blog" className="text-gray-700 hover:text-sapling-green">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-4">Liên hệ</h5>
          <p>Email: info@saplinghub.com</p>
          <p>Phone: 0901234567</p>
          <div className="mt-2">Theo dõi chúng tôi: <a href="#facebook" className="text-sapling-green">FB</a> | <a href="#twitter" className="text-sapling-green">TW</a> | <a href="#insta" className="text-sapling-green">IG</a></div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} SaplingHub. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
};

export default Footer;