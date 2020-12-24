import Navbar from './components/global/navbar/navbar';
import Categories from './components/global/categories/categories';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer';

function App() {
	return (
		<>
			<Navbar />
			<Categories />
			<ItemDetailContainer />
		</>
	);
}

export default App;
