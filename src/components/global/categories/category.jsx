import { Link } from 'react-router-dom';
import './category.scss';

const Category = ({title, id, image})  => (
	<Link to="/category" id={id} className="btnCategory">
		<img className="imgCategory" src={image} alt={"Icono " + title}/>
		<h5 className="titleCategory">{title}</h5>
	</Link>
)

export default Category;
