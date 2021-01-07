import { useParams } from 'react-router-dom';
import './category.scss';
import Itemlistcontainer from "../../containers/itemlistcontainer/itemlistcontainer";

function Category() {
	const { categoryId } = useParams();
	var itemListId;
	var itemListTitle;
	switch (categoryId) {
		case "bazar":
			itemListId = 0;
			itemListTitle = "Bazar";
			break;
		case "electro":
			itemListId = 1;
			itemListTitle = "Electro";
			break;
		case "ferreteria":
			itemListId = 2;
			itemListTitle = "Ferretería";
			break;
		case "jugueteria":
			itemListId = 3;
			itemListTitle = "Juguetería";
			break;
		case "libreria":
			itemListId = 4;
			itemListTitle = "Librería";
			break;
		case "limpieza":
			itemListId = 5;
			itemListTitle = "Limpieza";
			break;
		default:
			break;
	}
	return (
		<>
			<Itemlistcontainer
				categoryId={itemListId}
				categoryTitle={itemListTitle}
			/>
		</>
	);
}

export default Category;