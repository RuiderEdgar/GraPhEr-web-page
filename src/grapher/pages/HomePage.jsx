import { useState } from 'react';
import s from './Homepage.module.css';

export const HomePage = () => {
	return (
		<>	
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
					<canvas className={s.video}> </canvas>
					<p className={s.learn}>
					Aprende más sobre los escenarios de uso visitando la sección de <a href="/ejercicios" className={s.learnLink}> Ejercicios</a>.
					</p>
				</div>

			</div>

			<div className={s.footer}>
			<div className={s.footerColumnLeft}> 
			<p>GraPhEr es un software de uso abierto bajo la licencia <a href="https://www.gnu.org/licenses/gpl-3.0.html"> GNU GENERAL PUBLIC LICENSE Versión 3.0 </a></p>
			</div>
			
			<div className={s.footerColumnRight}>
			<p> © Luis Enrique Nava Garcia - 2025 <a href="https://github.com/LuisNavaFisBio/GraPhEr"> <img src="../../../assets/icons/github-mark.svg" className={s.footerImage} /></a> </p> 
			</div>
			</div>

		</>
	)
}
