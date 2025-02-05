import { useState } from 'react';
import s from './Homepage.module.css';

export const HomePage = () => {
	return (
		<>	
			<div className={s.container}>
				<div className={s.column}>
					<h1 className={s.name}>GraPhEr</h1>
					<p className={s.title}>Graficadora para Ecuaciones <br></br> 
					Diferencias Parciales </p>

					<p className={s.description}>
					GraPhEr crea una gráfica interactiva de la solución de una Ecuación Diferencial Parcial a partir de aproximar numéricamente la solución analítica ingresada.
					<br></br>
					<br></br>
					Además, provee diversas herramientas para visualizar y explorar esta gráfica, así como explorar la solución numérica obtenida.	
					</p>

					<input type="s.button" value="Descargar GraPhEr" className={s.download}/>
				</div>

				<div className={s.column}>
					<canvas className={s.video}> </canvas>
					<p className={s.learn}>
					Aprende más sobre los escenarios de uso visitando la sección de <a href="/ejercicios" className={s.learnLink}> Ejercicios</a>.
					</p>
				</div>

			</div>
		</>
	)
}
