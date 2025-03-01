import { InlineMath, BlockMath } from "react-katex";
import s from "../Ejercicios.module.css";

export const Notas = () => {
  return (
    <>
        <h1 className={s.title} id="tag1"> <a href="#tag0" className={s.back}>Ecuaciones Diferenciales Parciales </a> </h1>
        <p className={s.text}> Varios fenómenos de la naturaleza han sido modelados a través de Ecuaciones Diferenciales Parciales (EDP), es decir, ecuaciones donde aparecen derivadas de una función con respecto de sus variables; por ejemplo, la ecuación de onda se ha utilizado para modelar fenómenos como la vibración de cuerdas o la propagación de ondas en distintos medios. 
        <br></br>

        Estas ecuaciones determinan el comportamiento general del fenómeno, sin embargo, en muchas ocasiones estamos interesados en estudiar el comportamiento de un problema específico. Por lo anterior, además de la EDP es necesario agregar al modelo matemático las denominadas condiciones iniciales y/o condiciones de frontera; las <b>condiciones iniciales</b> determinan el estado del sistema en un instante dado, mientras que las <b>condiciones de frontera</b> indican el comportamiento del fenómeno en los extremos del dominio. En particular, las condiciones iniciales generalmente se reducen a dos tipos:  </p>
        <br></br>
        
        <p className={s.text}> <BlockMath math={String.raw` \begin{align}
                                                              & u(\mathbf{x},t=0) = f(\mathbf{x}) \\
                                                              & \\
                                                              & u_t(\mathbf{x},t=0) = g(\mathbf{x})
                                                          \end{align}
                                                        `} /> </p>
        <br></br>

        <p className={s.text}> la primera especifica la distribución inicial de una propiedad del sistema y la otra la distribución inicial de la derivada temporal de dicha propiedad; cuando el problema especifica ambas condiciones se conoce como un <b>problema de Cauchy</b>.</p> 
        
        <p className={s.text}>Por otro lado, las condiciones de frontera pueden dividirse, para EDP de segundo orden, en los siguientes tres tipos:</p>


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
        </>
  )
}
