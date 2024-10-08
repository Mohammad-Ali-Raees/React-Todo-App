import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Ali from './Components/Ali';
import Counter from './Components/Counter';
import Counter1 from './Components/Counter1';
import StylesComponents from './Components/StylesComponents';
import User from './Components/User';
import Counter3 from './Components/Counter3';
import Different from './Components/Different';
import NewCounter from './Components/NewCounter';
import NewUpdatedCounter from './Components/NewUpdatedCounter';
import Areacode from './Components/Areacode';
import ProductsFilters from './Components/ProductsFilters';
import Todo from './Todo App/Todo';
import AllProducts from './Products/AllProducts';
import ADD_Remove from './AddRemove/ADD_Remove';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/addremove' element={<ADD_Remove/>}/>


        <Route path="/ali/:name" element={<Ali/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/counter1" element={<Counter1/>} />
        <Route path="/styles" element={<StylesComponents/>} />
        <Route path="/counter3" element={<Counter3/>} />
        <Route path="/users" element={<User/>} />
        <Route path="/different" element={<Different/>} />
        <Route path="/areacode" element={<Areacode/>} />
        <Route path="/counterNew" element={<NewCounter/>} />
        <Route path="/newcounter" element={<NewUpdatedCounter/>} />
        <Route path="/productsfilters" element={<ProductsFilters/>} />
      </Routes>
    </Router>


  );
}

export default App;
