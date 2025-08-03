import { Temario, ContentDocumentation } from './components';
import { FixKatex } from '../helpers';
import s from './Documentacion.module.css';
import { useState } from 'react';
//  ToDo: arreglar el sticky del contentdocumentacion, posible idea, meter el contentDocumentation en un contenedor
export const Documentacion = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	return (
		<main className={s.main_container}>
			{/* Botón para abrir/cerrar menú */}
			<button
				className={`${s.menu_button} ${menuVisible ? s.show_button : ""}`}
				onClick={() => setMenuVisible(!menuVisible)}
			>
				{menuVisible ? "Cerrar" : "Menú"}
			</button>

			{/* ----------menu seccion-------------- */}
			<aside
				className={`${s.temario} ${menuVisible ? s.show : ""}`}
				alt="temario"
			>
				<div className={s.title_container}>
					<h1 className={s.title}>GraPhEr 1.0</h1>
				</div>
				<Temario />
			</aside>

			{/* ----------documentacion seccion---------- */}
			<article className={s.contenido}>
				<ContentDocumentation />
				<FixKatex />
			</article>
		</main>
	);
}
