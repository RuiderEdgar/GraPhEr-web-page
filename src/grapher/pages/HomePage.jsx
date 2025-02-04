import './HomePage.css'

export const HomePage = () => {
	return (
		<body class="back">
			<div class="container">
				<div class="column">
					<h1 class="name">GraPhEr</h1>
					<p class="title">Graficadora para Ecuaciones <br></br> Diferencias Parciales </p>

					<p class="description">
					GraPhEr crea una gráfica interactiva de la solución de<br></br>
					una Ecuación Diferencial Parcial a partir de aproximar<br></br>
					numéricamente la solución analítica ingresada.<br></br>
					<br></br>
					Además, provee diversas herramientas para visualizar<br></br>
					y explorar esta gráfica, así como explorar la solución<br></br>
					numérica obtenida.	
					</p>

					<input type="button" value="Descargar GraPhEr" class="download"/>
				</div>
				<div class="column">
					<h2>Columna Derecha</h2>
					<p>Contenido de la segunda columna.</p>
				</div>

			</div>

		</body>
	)
}
