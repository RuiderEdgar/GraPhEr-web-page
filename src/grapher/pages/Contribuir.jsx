import s from './Contribuir.module.css';
import github_image from '/assets/icons/github-mark.svg';
import lenguajes_image from '/assets/images/Lenguajes.svg';
import dispositivos_image from '/assets/images/Dispositivos.svg';
import errores_image from '/assets/images/Errores.svg';


export const Contribuir = () => {
	return (
		<>
			<div className={s.parentContainer}>
				<div className={s.container}>
					<div className={s.row}>
						<div className={s.leftColumn}>
							<p className={s.title}> ¿Quieres modificar el código? </p>
							<p className={s.text}> Abre un fork de nuestro repositorio en <a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.learnLink}>Github</a> y comparte tus sugerencias de mejoras en el código dando una explicación detallada. <br></br>
							Nuestro equipo se encargará de revisar tu modificación y te mandará una respuesta sobre su aceptación.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo1} src={github_image} />
						</div>
					</div>

					<div className={s.row}>
						<div className={s.leftColumn}>
							<p className={s.title2}> ¿Quieres trasladar el código a otros lenguajes? </p>
							<p className={s.text}>Descarga el código desde el repositorio en <a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.learnLink}>Github</a> y crea su análogo en el lenguaje de programación de tu interés.<br></br>
							Envía tu versión a nuestro equipo para comprobar que funciona correctamente. Si todo está en orden, publicaremos tu versión en la sección <a href="/descargar" className={s.learnLink}>Descargar</a> dándote todo el crédito, adicionalmente, crearemos un apartado en nuestro repositorio para que otros usuarios puedan modificar tu versión.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo2} src={lenguajes_image} />
						</div>
					</div>

					<div className={s.row}>
						<div className={s.leftColumn}>
							<p className={s.title3}> ¿Quieres distribuir la aplicación a dispositivos móviles u otros sistemas operativos? </p>
							<p className={s.text}> Descarga el código en Python desde nuestro repositorio en <a href="https://github.com/LuisNavaFisBio/GraPhEr" target='_blank' className={s.learnLink}>Github</a> y comparte el proceso de creación del archivo instalador para el sistema operativo. Todo el proceso debe estar explicado a detalle, con esto nos aseguramos que el archivo es seguro para todos los usuarios. Una vez verificado, nuestro equipo seguirá las instrucciones y podrá crear el archivo instalador. <br></br>
							En el caso de dispositivos móviles, revisa el estado actual del proyecto en el repositorio de Github <br></br> <a href="https://github.com/LuisNavaFisBio/GraPhEr_mobileApp" target='_blank' className={s.learnLink} > GraPhEr para dispositivos móviles</a> y comparte tus aportaciones a través de un fork, el equipo se encargará de revisar tus sugerencias.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo3} src={dispositivos_image} />
						</div>
					</div>

					<div className={s.row}>
						<div className={s.leftColumn}>
							<p className={s.title4}> ¿Encontraste algún error en la aplicación o en la página web? </p>
							<p className={s.text}> Si encuentras algún error en la aplicación o en la página web, por favor repórtalo en GitHub. Para errores en la aplicación, si consideras que puedes solucionarlo desde el código crea un fork en GitHub, lo revisaremos lo más pronto posible.</p>
						</div>
						<div className={s.rightColumn}>
							<img className={s.logo4} src={errores_image} />
						</div>
					</div>
				</div>

			</div>

		</>
	)
}
