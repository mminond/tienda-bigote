import './category.scss';

const Category = ({title, id, image})  => (
	<button id={id} className="btnCategory">
		<img className="imgCategory" src={image} alt={"Icono " + title}/>
		<h5 className="titleCategory">{title}</h5>
	</button>
)

export default Category;
