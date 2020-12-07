import './categorie.scss';
import iconBazar from '../../../assets/categories/icon-bazar.png';
import iconElectro from '../../../assets/categories/icon-electro.png';
import iconFerreteria from '../../../assets/categories/icon-ferreteria.png';
import iconJugueteria from '../../../assets/categories/icon-jugueteria.png';
import iconLibreria from '../../../assets/categories/icon-libreria.png';
import iconLimpieza from '../../../assets/categories/icon-limpieza.png';

const Categorie = ({title})  => (
	<a href="#" className="btnCategorie">
		<img className="imgCategorie" src={iconBazar} alt="Icono Bazar"/>
		<h5 className="titleCategorie">{title}</h5>
	</a>
)

export default Categorie;
