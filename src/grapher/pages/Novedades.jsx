import { Versionado } from "../components"
import s from "./Novedades.module.css"

export const Novedades = () => {
	return (
		<>
			<Versionado />
			<main className={s.main}>
				<h1 className={s.title}>Última Actualización</h1>
				<section className={s.grid_container}>
					<article className={s.article1}>
						
					</article>
					<article className={s.article1}>
						<p>
							Hemos añadido los botones Importar y Exportar en la ventana
							principal de la aplicación.
						</p>
						<p>
							Con esto botones será más fácil ingresar y compartir entradas
							contenidas en un archivo de texto.
						</p>
					</article>
					<article className={s.article1}>
						
					</article>
					<aside className={s.img_container}>
						<img className={s.image1} src="../assets/images/Novedades1_V1_0.png" alt="imagen de app" />
					</aside>
					<article className={s.article1}>
						
					</article>
					<aside className={s.video_container}>
						<video className={s.video1} src="../assets/videos/Novedades.mp4" alt="video de la actualización" controls  muted></video>
					</aside>
					<article className={s.article2}>
						<p>
							Hemos añadido los modos especiales de visualización: Solución
							parcial y Modo por modo.
						</p>
						<p>
							Con el primero puedes visualizar la gráfica de una suma parcial de
							la solución aproximada y con el segundo puedes visualizar la
							gráfica de cada término.
						</p>
					</article>
				</section>
				<h1 className={s.second_title}>Descripción Completa</h1>
				<section className={s.description}>
					<p>
						A continuación puedes encontrar todos los detalles de la última
						actualización:
					</p>
					<ul className={s.ul}>
						<li>Adición de los botones de Importación y Exportación</li>
						<li>Adición de los modos especiales de visualización.</li>
					</ul>
				</section>
			</main>
		</>
	);
}