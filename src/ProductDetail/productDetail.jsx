import { useParams } from 'react-router-dom';
import './productDetail.scss';
import ItemDetailContainer from "../containers/itemDetailContainer/itemDetailContainer";

function ProductDetail() {
	const { itemId } = useParams();
	return (
		<>
			<ItemDetailContainer id={itemId} />
		</>
	);
}

export default ProductDetail;