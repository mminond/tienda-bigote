import './categories.scss';
import Categorie from './categorie';

function Categories() {
	return (
		<nav className="navCategories">
			<Categorie title="Bazar" icon="iconBazar"/>
			<Categorie title="Electro" icon="iconElectro"/>
			<Categorie title="Ferretería" icon="iconFerreteria"/>
			<Categorie title="Jueguetería" icon="iconJugueteria"/>
			<Categorie title="Librería" icon="iconLibreria"/>
			<Categorie title="Limpieza" icon="iconLimpieza"/>
		</nav>
	);
}

export default Categories;