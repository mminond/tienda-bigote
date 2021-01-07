import './error404.scss';

function Error404() {
	return (
		<section className="container-error404">
			<div className="error404">
				<h2>Ups... &#128532;</h2>
				<h5>Parece que no encontramos nada aquí.</h5>
				<p>(Error 404)</p>
			</div>
		</section>
	);
}

export default Error404;