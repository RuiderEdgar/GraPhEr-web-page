import s from "./Acerca.module.css";

export const AcercaDe = () => {
	return (
		<div className={s.container}>
			<main className={s.main_grid}>
				<header className={s.header}>
					<h1 className={s.title}>GraPhEr</h1>
					<h2 className={s.subtitle}>
						Graficadora para Ecuaciones <br /> Diferenciales Parciales
					</h2>
				</header>
				<img
					className={s.img_app}
					src="/assets/images/Imagen1AcercaDe.svg"
					alt="imagen app"
				/>
				<article className={s.first_article}>
					<h2>¿Qué es?</h2>
					<p>
						Es una interfaz gráfica de usuario, programada en Python, que genera
						una gráfica interactiva de la solución de una Ecuación Diferencial
						Parcial a partir de aproximar numéricamente la solución analítica
						ingresada.
					</p>
					<p>
						La interfaz provee diversas herramientas para la exploración de las
						gráficas, así como la exploración de la solución numérica.
					</p>
					<p>
						Surgió como un proyecto de titulación y, actualmente, se encuentra
						en proceso continuo de mejora.
					</p>
				</article>
				<article className={s.second_article}>
					<h2>Usos y herramientas</h2>
					<p>
						Con GraPhEr puedes obtener una gráfica interactiva de la solución
						numérica, además de contar con herramientas para explorar esta
						solución. También puedes visualizar representaciones de funciones en
						distintas bases ortogonales.
					</p>
					<p>
						Puedes visualizar curvas de nivel (cuando sea pertinente), navegar
						en objetos tridimensionales utilizando distintos cortes del mismo,
						obtener la gráfica para valores específicos de una de las variables
						y más.
					</p>
				</article>
				<img
					className={s.img_grafica3d}
					src="/assets/images/grafica3d.png"
					alt="imagen graficas 3d"
				/>
				<img
					className={s.img_grafica2d}
					src="/assets/images/grafica2d.png"
					alt="imagen graficas 2d"
				/>

			</main>
		</div>
	);
};
