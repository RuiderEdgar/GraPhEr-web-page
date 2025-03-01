import { useState } from 'react';
import s from './Descargar.module.css';

export const Descargar = () => {
	return (
		<>
			<div className={s.parentContainer}>
				<div className={s.container}>
					<h1 className={s.name}>¡Obtén GraPhEr para tu sistema operativo!</h1>
					<div className={s.row1}>
						<div className={s.download1}>
							<div className={s.leftColumn}>
								<p className={s.title1}>Windows </p>
								<ul className={s.ul}>
									<li key="ejercicios" className={s.li1}>
										<a href="/ejercicios">
											Descargar
										</a>
									</li>
								</ul>
							</div>
							<div className={s.rightColumn}>
								<img class={s.logo1} src="../assets/logos/LogoGraPhEr_Sin.svg"/>
							</div>
						</div>
					</div>

					<div className={s.row2}>
						<div className={s.download2}>
							<div className={s.leftColumn}>
								<p className={s.title2}>Linux </p>
								<ul className={s.ul}>
									<li key="ejercicios" className={s.li2}>
										<a href="/ejercicios">
											Descargar
										</a>
									</li>
								</ul>
							</div>
							<div className={s.rightColumn}>
								<img class={s.logo2} src="../assets/logos/LogoGraPhEr_Gray.svg"/>
							</div>
						</div>
					</div>

					<div className={s.row3}>
						<div className={s.download3}>
							<div className={s.leftColumn}>
								<p className={s.title3}>Mac </p>
										
								<p className={s.textTemporal}> Estamos trabajando para crear el instalador en dispositivos con MacOs.
								<br></br>
								Si quieres apoyar en este proceso acude a la sección <a href="/ejercicios" className={s.learnLink}>Contribuir</a></p>
							</div>
							<div className={s.rightColumn}>
								<img class={s.logo3} src="../assets/logos/LogoGraPhEr_White-Purple.svg"/>
							</div>
						</div>
					</div>

					<div className={s.row4}>
						<div className={s.download4}>
							<div className={s.leftColumn}>
								<p className={s.title4}>Android </p>
										
								<p className={s.textTemporal}> Estamos trabajando para desarrollar la versión móvil en dispositivos Android.
								<br></br>
								Si quieres apoyar en este proceso acude a la sección <a href="/ejercicios" className={s.learnLink2}>Contribuir</a></p>
							</div>
							<div className={s.rightColumn}>
								<img class={s.logo4} src="../assets/logos/LogoGraPhEr_White-Green.svg"/>
							</div>
						</div>
					</div>
					<h1 className={s.name2}>¿No quieres usar el instalador? (O no existe)</h1>

					<p className={s.text}> Puedes descargar el código (en Python) de la aplicación (para ordenadores) desde nuestro repositorio en GitHub.</p>

					<a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.buttonText}> <button className={s.download}> <span>  Descargar GraPhEr desde GitHub</span> </button> </a>

					<p className={s.text}> Recuerda que el uso de este código está sujeto a la licencia <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="blank_" class={s.license}> GNU GENERAL PUBLIC LICENSE Versión 3.0</a>. </p>
				</div>
				
			</div>
			
		</>
	)
}