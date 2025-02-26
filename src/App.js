import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cửa hàng mầm cây</h1>
        <p>Chào mừng bạn đến với thế giới cây xanh!</p>
      </header>
      <section>
        <h2>Sản phẩm nổi bật</h2>
        <div className="product">
          <h3>Mầm cây xương rồng</h3>
          <p>Giá: 50.000 VNĐ</p>
        </div>
        <div className="product">
          <h3>Mầm cây sen đá</h3>
          <p>Giá: 30.000 VNĐ</p>
        </div>
      </section>
    </div>
  );
}

export default App;
