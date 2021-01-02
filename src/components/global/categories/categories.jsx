import './categories.scss';
import Category from './category';
import iconBazar from '../../../assets/categories/icon-bazar.png';
import iconElectro from '../../../assets/categories/icon-electro.png';
import iconFerreteria from '../../../assets/categories/icon-ferreteria.png';
import iconJugueteria from '../../../assets/categories/icon-jugueteria.png';
import iconLibreria from '../../../assets/categories/icon-libreria.png';
import iconLimpieza from '../../../assets/categories/icon-limpieza.png';


function Categories() {
	const categories = [ 
		{categoryId: 0, title: "Bazar", imageCategory: iconBazar, route:'/category/bazar'},
		{categoryId: 1, title: "Electro", imageCategory: iconElectro, route:'/category/electro'},
		{categoryId: 2, title: "Ferretería", imageCategory: iconFerreteria, route:'/category/ferreteria'},
		{categoryId: 3, title: "Juguetería", imageCategory: iconJugueteria, route:'/category/jugueteria'},
		{categoryId: 4, title: "Librería", imageCategory: iconLibreria, route:'/category/libreria'},
		{categoryId: 5, title: "Limpieza", imageCategory: iconLimpieza, route:'/category/limpieza'}
	]
	return (
		<nav className="navCategories">
			{categories.map(category => 
				<Category key={category.categoryId}
					id={category.categoryId}
					title={category.title}
					image={category.imageCategory}
					route={category.route}
				/>
			)}
		</nav>
	);
}

export default Categories;