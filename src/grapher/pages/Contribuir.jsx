import { useState } from 'react';
import s from './Contribuir.module.css';

export const Contribuir = () => {
	return (
		<>
			<div className={s.parentContainer}>
				<div className={s.container}>
					<div className={s.row1}>
						<div className={s.leftColumn}>
							<p className={s.title}> ¿Quieres modificar el código? </p>
							<p className={s.text}> Abre un fork de nuestro repositorio en <a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.learnLink}>Github</a> y comparte tus sugerencias de mejoras en el código dando una explicación detallada. <br></br>
							Nuestro equipo se encargará de revisar tu modificación y te mandará una respuesta sobre su aceptación.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo1} src="../assets/icons/github-mark.svg"/>
						</div>
					</div>

					<div className={s.row2}>
						<div className={s.leftColumn2}>
							<p className={s.title2}> ¿Quieres trasladar el código a otros lenguajes? </p>
							<p className={s.text}>Descarga el código desde el repositorio en <a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.learnLink}>Github</a> y crea su análogo en el lenguaje de programación de tu interés.<br></br>
							Envía tu versión a nuestro equipo para comprobar que funciona correctamente. Si todo está en orden, publicaremos tu versión en la sección <a href="/descargar" className={s.learnLink}>Descargar</a> dándote todo el crédito, adicionalmente, crearemos un apartado en nuestro repositorio para que otros usuarios puedan modificar tu versión.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo2} src="../assets/images/Lenguajes.svg"/>
						</div>
					</div>

					<div className={s.row3}>
						<div className={s.leftColumn3}>
							<p className={s.title3}> ¿Quieres distribuir la aplicación a dispositivos móviles u otros sistemas operativos? </p>
							<p className={s.text}> Descarga el código en Python desde nuestro repositorio en <a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.learnLink}>Github</a> y comparte el proceso de creación del archivo instalador para el sistema operativo. Todo el proceso debe estar explicado a detalle, con esto nos aseguramos que el archivo es seguro para todos los usuarios. Una vez verificado, nuestro equipo seguirá las instrucciones y podrá crear el archivo instalador. <br></br>
							En el caso de dispositivos móviles, revisa el estado actual del proyecto en el repositorio de Github <br></br> <a href="https://github.com/LuisNavaFisBio/GraPhEr_mobileApp" target='_blank' className={s.learnLink} > GraPhEr para dispositivos móviles</a> y comparte tus aportaciones a través de un fork, el equipo se encargará de revisar tus sugerencias.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo3} src="../assets/images/Dispositivos.svg"/>
						</div>
					</div>
				</div>
				
			</div>
		
		</>
	)
}