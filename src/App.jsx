import Navbar from './components/global/navbar/navbar';
import Categories from './components/global/categories/categories';
import ItemListContainer from './containers/itemlistcontainer/itemlistcontainer';

function App() {
	return (
		<>
			<Navbar />
			<Categories />
			<ItemListContainer />
		</>
	);
}

export default App;
