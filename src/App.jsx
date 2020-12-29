import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/global/navbar/navbar';
import Categories from './components/global/categories/categories';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer';
import Error404 from './Error404/error404';

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
				<Route>
					<ItemDetailContainer />
				</Route>
				<Route path="*">
					<Error404 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
