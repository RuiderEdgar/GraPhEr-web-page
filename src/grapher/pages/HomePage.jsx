import { useState } from 'react';
import s from './Homepage.module.css';

export const HomePage = () => {
	return (
		<body className={s.back}>
			<div className={s.container}>
				<div className={s.column}>
					<h1 className={s.name}>GraPhEr</h1>
					<p className={s.title}>Graficadora para Ecuaciones <br></br> Diferencias Parciales </p>

					<p className={s.description}>
					GraPhEr crea una gráfica interactiva de la solución de<br></br>
					una Ecuación Diferencial Parcial a partir de aproximar<br></br>
					numéricamente la solución analítica ingresada.<br></br>
					<br></br>
					Además, provee diversas herramientas para visualizar<br></br>
					y explorar esta gráfica, así como explorar la solución<br></br>
					numérica obtenida.	
					</p>

					<input type="s.button" value="Descargar GraPhEr" className={s.download}/>
				</div>
				<div className={s.column}>
					<h2>Columna Derecha</h2>
					<p>Contenido de la segunda columna.</p>
				</div>

			</div>

		</body>
	)
}
