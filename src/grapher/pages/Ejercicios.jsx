import s from "./Ejercicios.module.css";

export const Ejercicios = () => {
	return (
		<>	
			<div className={s.parentContainer}>
				<div className={s.container}>
					<div className={s.leftColumn}>
						<div className={s.container1}>
							<h1 className={s.name} id="tag0">GraPhEr</h1>
						</div>
						<div className={s.container2}>
							<a href="#tag1" className={s.theme1}> Ecuaciones Diferenciales Parciales </a>
							<a href="#tag2" className={s.theme2}> Método de separación de variables </a>
							<a href="#tag3" className={s.theme2}> Método de expansión en funciones propias </a>
							<a href="#tag4" className={s.theme2}> Transformadas </a>
							<a href="#tag5" className={s.theme2}> Otros métodos de solución </a>	
						</div>
						<div className={s.container3}>
							<a href="#tag6" className={s.theme1}> Representación de Funciones </a>
							<a href="#tag7"className={s.theme2}> Base Fourier </a>
							<a href="#tag8" className={s.theme2}> Base Bessel de orden n </a>
							<a href="#tag9" className={s.theme2}> Base Legendre </a>
						</div>		
					</div>

					<div className={s.rightColumn}>
						<h1 className={s.title} id="tag1"> <a href="#tag0" className={s.back}>Ecuaciones Diferenciales Parciales </a> </h1>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
						<p className={s.subsubtitle}> Ejemplos </p>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
						<p className={s.subsubtitle}> Métodos de Solución </p>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
						<h2 className={s.subtitle} id="tag2"> <a href="#tag0" className={s.back}> Método de Separación de Variables</a> </h2>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
						<h2 className={s.subtitle} id="tag3"> <a href="#tag0" className={s.back}> Método de Expansión en Funciones Propias</a> </h2>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
						<h2 className={s.subtitle} id="tag4"> <a href="#tag0" className={s.back}> Transformadas </a> </h2>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
						<h2 className={s.subtitle} id="tag5"> <a href="#tag0" className={s.back}> Otros Métodos de Solución</a> </h2>
						<p className={s.text}> Tennis is a popular sport enjoyed by millions of people around the world, but it's not without its downsides. One of the biggest cons of playing tennis is the risk of injury. Tennis players are susceptible to a variety of injuries, from strains and sprains to more serious conditions like tennis elbow and rotator cuff tears. </p>
					</div>
				</div>
			</div>
		</>
	)
}
