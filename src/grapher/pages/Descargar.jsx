import s from './Descargar.module.css';
import logoGrapher_Sin from '/assets/logos/LogoGraPhEr_Sin.svg';
import logoGrapher_gray from '/assets/logos/LogoGraPhEr_Gray.svg';
import logoGrapher_white_purple from '/assets/logos/LogoGraPhEr_White-Purple.svg';
import logoGrapher_white_green from '/assets/logos/LogoGraPhEr_White-Green.svg';

export const Descargar = () => {
	return (
		<>
			<div className={s.parentContainer}>
				<div className={s.container}>
					<h1 className={s.name}>¡Obtén GraPhEr para tu sistema operativo!</h1>
					<div className={s.row1}>
						<div className={s.leftColumn}>
							<p className={s.title1}>Windows </p>
							<ul className={s.ul}>
								<li key="ejercicios" className={s.li1}>
									<a href="https://www.dropbox.com/scl/fi/wl0hix5btiweu6i4um70h/GraPhErEDPS_Windows.zip?rlkey=9ncp3cuqfbsc4ip9m74js993d&st=nx40qqzk&dl=0" target='_blank'>
										Descargar
									</a>
								</li>
							</ul>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo1} src={logoGrapher_Sin} />
						</div>
					</div>

					<div className={s.row2}>
						<div className={s.leftColumn}>
							<p className={s.title2}>Linux </p>
							<ul className={s.ul}>
								<li key="ejercicios" className={s.li2}>
									<a href="https://www.dropbox.com/scl/fi/g4jqqniyisyx0kow22z0c/GraPhErEDPS_Linux.zip?rlkey=lk8o1lz9fqgtn3dx30y5845by&st=7yx7w5g5&dl=0" target='_blank'>
										Descargar
									</a>
								</li>
							</ul>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo2} src={logoGrapher_gray} />
						</div>
					</div>

					<div className={s.row3}>
						<div className={s.leftColumn}>
							<p className={s.title3}>Mac </p>

							<p className={s.textTemporal}> Estamos trabajando para crear el instalador en dispositivos con MacOs.
							<br></br>
							Si quieres apoyar en este proceso acude a la sección <a href="/ejercicios" className={s.learnLink}>Contribuir</a></p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo3} src={logoGrapher_white_purple} />
						</div>
					</div>

					<div className={s.row4}>
						<div className={s.leftColumn}>
							<p className={s.title4}>Android </p>

							<p className={s.textTemporal}> Estamos trabajando para desarrollar la versión móvil en dispositivos Android.
							<br></br>
							Si quieres apoyar en este proceso acude a la sección <a href="/ejercicios" className={s.learnLink2}>Contribuir</a></p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo4} src={logoGrapher_white_green} />
						</div>
					</div>

					<div className={s.info}>
						<h1 className={s.name2}>¿No quieres usar el instalador? (O no existe)</h1>

						<p className={s.text}> Puedes descargar el código (en Python) de la aplicación (para ordenadores) desde nuestro repositorio en GitHub.</p>

						<a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.buttonText}> <button className={s.download}> <span>  Descargar GraPhEr desde GitHub</span> </button> </a>

						<p className={s.text}> Recuerda que el uso de este código está sujeto a la licencia <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="blank_" className={s.license}> GNU GENERAL PUBLIC LICENSE Versión 3.0</a>. </p>

					</div>

				</div>

			</div>

		</>
	)
}
