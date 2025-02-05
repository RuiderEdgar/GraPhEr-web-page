import s from "./Acerca.module.css";

export const AcercaDe = () => {
	return (
		<main className={s.main_grid}>
			<section className={s.section_left}>
				<header className={s.header}>
					<h1 className={s.title}>GraPhEr</h1>
					<h2 className={s.subtitle}>
						Graficadora para Ecuaciones Diferenciales Parciales
					</h2>
				</header>
				<aside>
					<img className={s.img_grafica2d} src="/assets/images/grafica2d.png" alt="imagen grafica" />
					<div alt="image"></div>
					<div alt="texto"></div>
					<div alt="image"></div>
				</aside>
			</section>

			<section>
				<header>
					<div alt="texto"></div>
					<div alt="image"></div>
					<div alt="texto"></div>
				</header>
			</section>
		</main>
	);
};
