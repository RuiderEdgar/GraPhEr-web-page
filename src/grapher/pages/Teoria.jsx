import { Notas } from "./components";
import { TemarioTeoria } from "./components/TemarioTeoria";
import s from "./Teoria.module.css";
import { InlineMath } from 'react-katex'; 

export const Teoria = () => {
	return (
		<div className={s.parentContainer}>
			<main className={s.main_container}>
				{/* ----------menu seccion-------------- */}
				<aside className={s.temario} alt="temario">
					<TemarioTeoria />
				</aside>

				{/* ----------documentacion seccion---------- */}
				<article className={s.rightColumn}>
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
		</div>
	
	)
}
