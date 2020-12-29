import { useParams } from 'react-router-dom';
import './category.scss';
import Itemlistcontainer from "../containers/itemlistcontainer/itemlistcontainer";

function Category() {
	const { categoryId } = useParams();
	return (
		<>
			<p>CategoryId: {categoryId}</p>
			<Itemlistcontainer />
		</>
	);
}

export default Category;