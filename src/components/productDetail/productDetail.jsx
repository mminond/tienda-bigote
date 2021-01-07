import { useParams } from 'react-router-dom';
import './productDetail.scss';
import ItemDetailContainer from "../../containers/itemDetailContainer/itemDetailContainer";
import Item404 from './Item404/item404';
import AllItems from '../../assets/json/products.json';

function ProductDetail() {
	const { itemId } = useParams();
	var doesExist = false;
	AllItems.forEach(item => {
		if (item.productId.toString() === itemId) {
			doesExist = true;
		}
	});

	return (
		<>
			{
				doesExist ?
					<ItemDetailContainer id={itemId} /> :
					<Item404 />
			}

		</>
	);
}

export default ProductDetail;