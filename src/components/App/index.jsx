import ProductContainer from "../ProductContainer";
import s from './style.module.css';


function App() {
  return (
    <div>
      <p className={s.title}>Shopping bag</p>
        <ProductContainer />
    </div>
  );
}

export default App;
