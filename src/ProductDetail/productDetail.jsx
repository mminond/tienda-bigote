import { useParams } from 'react-router-dom';
import './productDetail.scss';
import ItemDetailContainer from "../containers/itemDetailContainer/itemDetailContainer";

function ProductDetail() {
	const { itemId } = useParams();
	return (
		<>
			<p>itemId: {itemId}</p>
			<ItemDetailContainer />
		</>
	);
}

export default ProductDetail;