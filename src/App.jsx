import {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/global/navbar/navbar';
import Categories from './components/global/categories/categories';
import Error404 from './components/Error404/error404';
import Home from './components/Home/home';
import Cart from './Cart/cart';
import Category from './Category/category'
import ProductDetail from './ProductDetail/productDetail'
import { Store } from './store';

function App() {
	const [data, setData] = useState({
		items: [],
		cantidad: 0,
	});

	return (
		<Store.Provider value={[data, setData]}>
			<BrowserRouter>
				<Navbar />
				<Categories />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/detail/:itemId">
						<ProductDetail />
					</Route>
					<Route path="/category/:categoryId">
						<Category />
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>
			</BrowserRouter>
		</Store.Provider>
	);
}

export default App;
