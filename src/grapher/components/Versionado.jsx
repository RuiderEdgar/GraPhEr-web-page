import s from './Versionado.module.css';

export const Versionado = () => {
	return (
		<header className={s.header}>
			<aside className={s.current_version} alt="version actual">
				<span className={s.texto}>Versión Actual:</span>
				<span className={s.numberVersion}>1.0</span>
			</aside>
			<aside className={s.versions_container} alt="versiones pasadas">
				<span className={s.texto}>Versiones Pasadas</span>
				<select className={s.select} name="versions" id="" size="1">
					<option className={s.options} value="1.0">1.0</option>
				</select>
			</aside>
		</header>
	);
}
