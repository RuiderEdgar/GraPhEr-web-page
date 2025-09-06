import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Navbar.module.css';
import logoPrincipal from "/assets/logos/LogoGraPhEr_Blue.svg";
import list_icon from '/assets/icons/list.svg';
import close_icon from '/assets/icons/close.svg';

export const Navbar = () => {

	const location = useLocation();
	//todo: usar el location para quitar la animacion del li
	const [menuState, setMenuState] = useState('false');

	const toggleMenu = () => {
		setMenuState(!menuState);
	}
	const resetMenu = () => {
		setMenuState(false);
		setMenuState(!menuState);
	}

	console.log(location)


	return (
		<>
			<div className={s.header_container}>
				<header className={s.header}>
					<div className={s.navbar_container}>
						<NavLink to="/homepage">
							<img
								className={s.logo_desktop}
								src={logoPrincipal}
								alt="logo principal"
							/>
						</NavLink>
						<div className={s.menu_container}>
							<ul className={`${s.menu_row} ${s.ul}`}>
								<li key="teoria" className={s.li}>
									<NavLink
										to="/teoria"
										onClick={resetMenu}
										className={({ isActive }) =>
											isActive ? s.navlink_active : null
										}
									>
										Teoría
									</NavLink>
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
									menuState
										? {list_icon}
										: {close_icon}
								}
								alt="menu navegacion"
								onClick={toggleMenu}
							/>
						</div>
					</div>
				</header>
				<ul
					className={
						menuState
							? `${s.menu} ${s.menu_column}`
							: `${s.menu} ${s.abierto} ${s.ul} ${s.menu_column}`
					}
				>
					<li key="teoria">
						<NavLink
							to="/teoria"
							onClick={resetMenu}
							className={({ isActive }) => (isActive ? s.navlink_active : null)}
						>
							Teoría
						</NavLink>
					</li>
					<li key="acerca">
						<NavLink
							to="/acercade"
							onClick={resetMenu}
							className={({ isActive }) => (isActive ? s.navlink_active : null)}
						>
							Acerca de
						</NavLink>
					</li>
					<li key="descargar">
						<NavLink
							to="/descargar"
							onClick={resetMenu}
							className={({ isActive }) => (isActive ? s.navlink_active : null)}
						>
							Descargar
						</NavLink>
					</li>
					<li key="documentacion">
						<NavLink
							to="/documentacion"
							onClick={resetMenu}
							className={({ isActive }) => (isActive ? s.navlink_active : null)}
						>
							Documentación
						</NavLink>
					</li>
					<li key="novedades">
						<NavLink
							to="/novedades"
							onClick={resetMenu}
							className={({ isActive }) => (isActive ? s.navlink_active : null)}
						>
							Novedades
						</NavLink>
					</li>
					<li key="contribuir">
						<NavLink
							to="/contribuir"
							onClick={resetMenu}
							className={({ isActive }) => (isActive ? s.navlink_active : null)}
						>
							Contribuir
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}
