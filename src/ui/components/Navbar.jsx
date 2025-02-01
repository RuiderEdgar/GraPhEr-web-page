import './Navbar.css'

export const Navbar = () => {
  return (
		<header>
			<div className='navbar-container'>
				<img src="../../../assets/logos/LogoGraPhEr_Blue.svg" alt="logo principal" />
				<ul>
					<li>Ejercicios</li>
					<li>Acerca de</li>
					<li>Descargar</li>
					<li>Documentación</li>
					<li>Novedades</li>
					<li>Contribuir</li>
				</ul>
			</div>
		</header>
  )
}
