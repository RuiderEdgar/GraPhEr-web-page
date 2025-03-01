import { Temario, ContentDocumentation } from './components';
import s from './Documentacion.module.css';

export const Documentacion = () => {
	return (
		<main className={s.main_container}>
			{/* ----------menu seccion-------------- */}
			<aside className={s.temario} alt="temario">
				<div className={s.title_container}>
					<h1 className={s.title}>GraPhEr 1.0</h1>
				</div>
				<Temario />
			</aside>

			{/* ----------documentacion seccion---------- */}
			<article className={s.contenido}>
				<ContentDocumentation/>

					{/* ToDo: meter el style en un archivo, helper */}
					<style>
						{`
							.katex-html {
								display: none;
							}
        		`}
					</style>

			</article>
		</main>
	);
}
