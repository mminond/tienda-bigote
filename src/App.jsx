import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './store';
import Navbar from './components/global/navbar/navbar';
import Categories from './components/global/categories/categories';
import Error404 from './components/Error404/error404';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';
import Category from './components/Category/category'
import ProductDetail from './components/Detail/DetailProduct'

function App() {
	const valorIncial = {
		precioFinal: 0,
		cantidad: 0,
		items: [],
	};
	return (
		<CartProvider initialValue={valorIncial}>
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
		</CartProvider>
	);
}

export default App;
