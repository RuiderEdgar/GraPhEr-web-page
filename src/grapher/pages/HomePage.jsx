import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";
import principal_gif from "/assets/gif/Principal.gif";

export const HomePage = () => {
	return (
		<>
			<div className={s.parentContainer}>
				<div className={s.container}>
					<div className={s.column}>
						<h1 className={s.name}>GraPhEr</h1>
						<p className={s.title}>
							Graficadora para Ecuaciones <br></br>
							Diferencias Parciales{" "}
						</p>

						<p className={s.description}>
							GraPhEr crea una gráfica interactiva de la solución de una
							Ecuación Diferencial Parcial a partir de aproximar numéricamente
							la solución analítica ingresada.
							<br></br>
							<br></br>
							Además, provee diversas herramientas para visualizar y explorar
							esta gráfica, así como explorar la solución numérica obtenida.
						</p>
						<NavLink to="/descargar" className={s.buttonText}>
							<button className={s.download}>
								<span>Descargar GraPhEr</span>
							</button>
						</NavLink>
					</div>

					<div className={s.column}>
						<img className={s.video1} src={principal_gif} alt="Video muestra" />
						{/* <video className={s.video1} src="../assets/videos/Principal.mp4" alt="Video muestra" controls  muted poster="../assets/images/thumbnailPrincipal.png"></video> */}
						<p className={s.learn}>
							Aprende más sobre los escenarios de uso visitando la sección de{" "}
							<NavLink to="/teoria" className={s.learnLink}>
								Teoría
							</NavLink>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
