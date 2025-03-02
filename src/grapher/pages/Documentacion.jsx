import { Temario, ContentDocumentation } from './components';
import { FixKatex } from '../helpers';
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
				<ContentDocumentation />
				<FixKatex/>
				{/* ToDo: arreglar el sticky del contentdocumentacion, posible idea, meter el contentDocumentation en un contenedor */}
			</article>
		</main>
	);
}
