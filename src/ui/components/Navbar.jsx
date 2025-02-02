import './Navbar.css'

export const Navbar = () => {
  return (
		<header>
			<div className='navbar-container'>
				<a href="/homepage">
					<img src="../../../assets/logos/LogoGraPhEr_Blue.svg" alt="logo principal" />
				</a>
				<ul>
					<a href="/ejercicios">
						<li>Ejercicios</li>
					</a>
					<a href="/acercade">
						<li>Acerca de</li>
					</a>
					<a href="/descargar">
						<li>Descargar</li>
					</a>
					<a href="/documentacion">
						<li>Documentación</li>
					</a>
					<a href="/novedades">
						<li>Novedades</li>
					</a>
					<a href="/contribuir">
						<li>Contribuir</li>
					</a>
				</ul>
			</div>
		</header>
  )
}
