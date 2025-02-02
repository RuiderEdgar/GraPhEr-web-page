import { useState } from 'react';
import './Navbar.css'

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
			<header>
				<div className="navbar-container">
					<a href="/homepage">
						<img
							className="logo-desktop"
							src="../../../assets/logos/LogoGraPhEr_Blue.svg"
							alt="logo principal"
						/>
					</a>
					<div className="menu-container">
						<ul className="menu-row">
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
						<img
							className="icon-menu"
							src={menuState ? '/assets/icons/list.svg' : '/assets/icons/close.svg'}
							alt="menu navegacion"
							onClick={toggleMenu}
						/>
					</div>
				</div>
			</header>
			<ul className={menuState ? "menu" : "menu abierto"}>
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
