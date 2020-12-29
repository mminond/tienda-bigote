import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/global/navbar/navbar';
import Categories from './components/global/categories/categories';
import Error404 from './Error404/error404';
import Home from './Home/home';
import Cart from './Cart/cart';
import Category from './Category/category'
import ProductDetail from './ProductDetail/productDetail'

function App() {
	return (
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
	);
}

export default App;
