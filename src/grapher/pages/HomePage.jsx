import { useState } from 'react';
import s from './Homepage.module.css';

export const HomePage = () => {
	return (
		<>	
		 	<div className={s.parentContainer}>
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

						<a href="/descargar" className={s.buttonText}> <button className={s.download}> <span>  Descargar GraPhEr</span> </button> </a>
					</div>

					<div className={s.column}>
						<video className={s.video1} src="../assets/videos/Principal.mp4" alt="Video muestra" controls  muted></video>
						<p className={s.learn}>
						Aprende más sobre los escenarios de uso visitando la sección de <a href="/teoria" className={s.learnLink}> Teoría</a>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
