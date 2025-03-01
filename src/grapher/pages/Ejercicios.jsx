import { Notas } from "./components";
import { TemarioEjercicios } from "./components/TemarioEjercicios";
import s from "./Ejercicios.module.css";
import { InlineMath } from 'react-katex'; 

export const Ejercicios = () => {
	return (
	<main className={s.main_container}>
		{/* ----------menu seccion-------------- */}
		<aside className={s.temario} alt="temario">
			<TemarioEjercicios />
		</aside>

		{/* ----------documentacion seccion---------- */}
		<article className={s.contenido}>
			<Notas/>

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
	)
}
