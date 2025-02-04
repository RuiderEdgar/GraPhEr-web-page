import { useState } from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {

	const [menuState, setMenuState] = useState('false');

	const toggleMenu = () => {
		setMenuState(!menuState);
	}
	const resetMenu = () => {
		setMenuState(false);
	}


	return (
		<>
			<header className={s.header}>
				<div className={s.navbar_container}>
					<a href="/homepage">
						<img
							className={s.logo_desktop}
							src="../../../assets/logos/LogoGraPhEr_Blue.svg"
							alt="logo principal"
						/>
					</a>
					<div className={s.menu_container}>
						<ul className={`${s.menu_row} ${s.ul}`}>
							<li key="ejercicios" className={s.li}>
								<a href="/ejercicios" onClick={resetMenu}>
									Ejercicios
								</a>
							</li>
							<li key="acerca" className={s.li}>
								<a href="/acercade" onClick={resetMenu}>
									Acerca de
								</a>
							</li>
							<li key="descargar" className={s.li}>
								<a href="/descargar" onClick={resetMenu}>
									Descargar
								</a>
							</li>
							<li key="documentacion" className={s.li}>
								<a href="/documentacion" onClick={resetMenu}>
									Documentación
								</a>
							</li>
							<li key="novedades" className={s.li}>
								<a href="/novedades" onClick={resetMenu}>
									Novedades
								</a>
							</li>
							<li key="contribuir" className={s.li}>
								<a href="/contribuir" onClick={resetMenu}>
									Contribuir
								</a>
							</li>
						</ul>
						<img
							className={s.icon_menu}
							src={
								menuState ? "/assets/icons/list.svg" : "/assets/icons/close.svg"
							}
							alt="menu navegacion"
							onClick={toggleMenu}
						/>
					</div>
				</div>
			</header>
			<ul className={menuState ? s.menu : `${s.menu} ${s.abierto} ${s.ul}`}>
				<li key="ejercicios">
					<a href="/ejercicios" onClick={resetMenu}>
						Ejercicios
					</a>
				</li>
				<li key="acerca">
					<a href="/acercade" onClick={resetMenu}>
						Acerca de
					</a>
				</li>
				<li key="descargar">
					<a href="/descargar" onClick={resetMenu}>
						Descargar
					</a>
				</li>
				<li key="documentacion">
					<a href="/documentacion" onClick={resetMenu}>
						Documentación
					</a>
				</li>
				<li key="novedades">
					<a href="/novedades" onClick={resetMenu}>
						Novedades
					</a>
				</li>
				<li key="contribuir">
					<a href="/contribuir" onClick={resetMenu}>
						Contribuir
					</a>
				</li>
			</ul>
		</>
	);
}
