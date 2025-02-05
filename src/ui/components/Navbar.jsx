import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {

	const location = useLocation();
	//todo: usar el location para quitar la animacion del li
	const [menuState, setMenuState] = useState('false');

	const toggleMenu = () => {
		setMenuState(!menuState);
	}
	const resetMenu = () => {
		setMenuState(false);
	}

	console.log(location)


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
								<NavLink
									to="/acercade"
									onClick={resetMenu}
									className={({ isActive }) =>
										isActive ? s.navlink_active : null
									}
								>
									Acerca de
								</NavLink>
							</li>
							<li key="descargar" className={s.li}>
								<NavLink
									to="/descargar"
									onClick={resetMenu}
									className={({ isActive }) =>
										isActive ? s.navlink_active : null
									}
								>
									Descargar
								</NavLink>
							</li>
							<li key="documentacion" className={s.li}>
								<NavLink
									to="/documentacion"
									onClick={resetMenu}
									className={({ isActive }) =>
										isActive ? s.navlink_active : null
									}
								>
									Documentación
								</NavLink>
							</li>
							<li key="novedades" className={s.li}>
								<NavLink
									to="/novedades"
									onClick={resetMenu}
									className={({ isActive }) =>
										isActive ? s.navlink_active : null
									}
								>
									Novedades
								</NavLink>
							</li>
							<li key="contribuir" className={s.li}>
								<NavLink
									to="/contribuir"
									onClick={resetMenu}
									className={({ isActive }) =>
										isActive ? s.navlink_active : null
									}
								>
									Contribuir
								</NavLink>
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
