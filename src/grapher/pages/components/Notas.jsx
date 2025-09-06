import { InlineMath, BlockMath } from "react-katex";
import s from "../Teoria.module.css";
import grafica_image from "/assets/images/Grafica.svg";

export const Notas = () => {
  return (
    <>
        <h1 className={s.title} id="tag1"> Ecuaciones Diferenciales Parciales </h1>

        <p className={s.text}> Varios fenómenos de la naturaleza han sido modelados a través de Ecuaciones Diferenciales Parciales (EDP), es decir, ecuaciones donde aparecen derivadas de una función con respecto de sus variables; por ejemplo, la ecuación de onda se ha utilizado para modelar fenómenos como la vibración de cuerdas o la propagación de ondas en distintos medios.
        </p>
        <p className={s.text}> Estas ecuaciones determinan el comportamiento general del fenómeno, sin embargo, en muchas ocasiones estamos interesados en estudiar el comportamiento de un problema específico. Por lo anterior, además de la EDP es necesario agregar al modelo matemático las denominadas condiciones iniciales y/o condiciones de frontera; las <strong>condiciones iniciales</strong> determinan el estado del sistema en un instante dado, mientras que las <strong>condiciones de frontera</strong> indican el comportamiento del fenómeno en los extremos del dominio. En particular, las condiciones iniciales generalmente se reducen a dos tipos:
        </p>
        <div className={s.math}>
            <InlineMath math="u(\mathbf{x},t=0) = f(\mathbf{x})" />
            <br></br>
            <InlineMath math="u_t(\mathbf{x},t=0) = g(\mathbf{x})" />
        </div>
        <p className={s.text}> la primera especifica la distribución inicial de una propiedad del sistema y la otra la distribución inicial de la derivada temporal de dicha propiedad; cuando el problema especifica ambas condiciones se conoce como un <strong>problema de Cauchy</strong>.
        </p>
        <p className={s.text}> Por otro lado, las condiciones de frontera pueden dividirse, para EDP de segundo orden, en los siguientes tres tipos:
        </p>
        <div className={s.math}>
            <InlineMath math="u(\mathbf{x},t)\big|_{\partial D} = f(\mathbf{x}\in \partial D,t) \quad \text{Tipo Dirichlet}" />
            <br></br>
            <InlineMath math="D_{\vec{n}}\ u(\mathbf{x},t)\big|_{\partial D} = g(\mathbf{x}\in \partial D,t) \quad \text{Tipo Neumann}" />
            <br></br>
            <InlineMath math="\alpha\ u(\mathbf{x},t)\big|_{\partial D} + \beta\ D_{\vec{n}}\ u(\mathbf{x},t)\big|_{\partial D} = h(\mathbf{x}\in \partial D,t) \quad \text{Tipo Robin}" />
        </div>
        <p className={s.text}> cuando las funciones <InlineMath math="f" />, <InlineMath math="g" /> o <InlineMath math="h" /> son idénticamente cero se dice que las condiciones de frontera son <strong>homogéneas</strong>, en caso contrario se dice que son <strong>no homogéneas</strong>.
        </p>
        <p className={s.subtitle}>Ejemplos:</p>
        <p className={s.text}> A continuación se presentan distintas EDP de segundo orden que son relevantes en el estudio de la Física a nivel licenciatura:
        </p>
        <ul>
            <li className={s.lists}> <InlineMath math="\text{Ecuación de Laplace: }\displaystyle\nabla^2 u(\mathbf{x}) = 0" /></li>
            <li className={s.lists}> <InlineMath math="\text{Ecuación de difusión: }\displaystyle\nabla^2 u(\mathbf{x}, t) = \eta^2 \frac{\partial u(\mathbf{x}, t)}{\partial t}" /></li>
            <li className={s.lists}> <InlineMath math="\text{Ecuación de onda: }\displaystyle\nabla^2 u(\mathbf{x}, t) = \frac{1}{c^2} \frac{\partial^2 u(\mathbf{x}, t)}{\partial t^2}" /></li>
            <li className={s.lists}><InlineMath math="\text{Ecuación de Helmholtz: }\displaystyle\nabla^2 u(\mathbf{x}) = -k^2 u(\mathbf{x})" /></li>
            <li className={s.lists}> <InlineMath math="\text{Ecuación de Schrödinger (independiente del tiempo): }\displaystyle -\frac{\hbar^2}{2m}\nabla^2  u(\mathbf{x}) + V(x)u(\mathbf{x})  =E\ u(\mathbf{x})" /></li>
            <li className={s.lists}><InlineMath math="\text{Ecuación de Schrödinger (dependiente del tiempo):  }\displaystyle-\frac{\hbar^2}{2m}\nabla^2  u(\mathbf{x},t) + V(x)u(\mathbf{x},t)  = i\hbar \frac{\partial u(\mathbf{x},t)}{\partial t}" /></li>
        </ul>
        <p className={s.text}> Algunas otras ecuaciones relacionadas con fenómenos específicos son:
        </p>
        <ul>
          <li className={s.lists}> <InlineMath math="\text{ Ecuación de la cadena colgante: }\displaystyle\frac{\partial^2 u(\mathbf{x}, t)}{\partial t^2} = g \left(x \frac{\partial^2 u(\mathbf{x}, t)}{\partial x^2}+\frac{\partial u(\mathbf{x}, t)}{\partial x}\right)" /></li>
          <li className={s.lists}> <InlineMath math="\text{Ecuación del telegrafista:  }\displaystyle\frac{\partial^2  u(\mathbf{x}, t)}{\partial t^2} + 2 \frac{\partial  u(\mathbf{x}, t)}{\partial t}= c^2\frac{\partial^2 u(\mathbf{x}, t)}{\partial x^2}" /></li>
        </ul>
        <p className={s.subtitle}>Métodos de Solución</p>
        <p className={s.text}> Existen diversos métodos de solución para EDP. En particular, nos centraremos en los métodos denominados como: de separación de variables, de expansión en funciones propias y de transformadas integrales.
        </p>
        <h2 className={s.titletheme} id="tag1.1">Método de separación de variables</h2>
        <p className={s.text}> Consiste en suponer que la solución de una EDP lineal y homogénea, en el sentido que se da en Ecuaciones Diferenciales Ordinarias (EDO), puede escribirse como un producto de funciones con variables separadas, es decir, donde para cada variable se tiene una función que depende exclusivamente de dicha variable. Este tipo de separación se muestra en la siguiente línea
        </p>
        <div className={s.math}>
            <InlineMath math="u(x_1, x_2, x_3, \ldots , x_{n-1}, t) = f_1(x_1)f_2(x_2)f_3(x_3) \cdots f_{n-1}(x_{n-1}) f_n(t)" />
        </div>
        <p className={s.text}> Al sustituir esta solución en la EDP cambiamos el problema de resolver la EDP a resolver un sistema de <InlineMath math="n" /> EDO acopladas por <InlineMath math="n-1" /> constantes de separación.
        </p>
        <p className={s.text}> Bajo este método y con las coordenadas apropiadas algunas de las EDO (junto con las condiciones de frontera respectivas cuando es el caso) dan lugar a los denominados <strong>problemas de Sturm-Liouville</strong>. La importancia de estos problemas radica en que sus soluciones forman una base del espacio vectorial de funciones continuas a trozos en el intervalo de definición de la EDO, por ende, cualquier condición de frontera o inicial puede ser representada en términos de esta base.
        </p>
        <p className={s.text}> A continuación resolveremos un problema típico utilizando este método de solución:
        </p>
        <p className={s.text}> El problema unidimensional de calor con extremos fijos a una determinada temperatura, es decir, el problema de determinar la distribución de temperatura de una barra de longitud <InlineMath math="L" />, difusividad térmica <InlineMath math="\eta^2" /> y cuyos extremos se encuentran siempre a una determinada temperatura se modela a través de la ecuación
        </p>
        <div className={s.math}>
            <BlockMath math="\frac{\partial s(x,t)}{\partial t}=\eta^2\ \frac{\partial^2 s(x,t)}{\partial x^2}" />
        </div>
        <p className={s.text}>
            junto con la condición inicial <InlineMath math="s(x,0) = 100" /> y condiciones de frontera siguientes para <InlineMath math="t>0" />:
        </p>
        <div className={s.math}>
            <InlineMath math="s(0,t) = 20, \quad s(L,t) = -10." />
        </div>
        <p className={s.text}> En particular, como las condiciones de frontera son no homogéneas es útil separar el problema en dos subproblemas independientes para poder ocupar el método de separación de variables: uno independiente del tiempo con las condiciones de frontera no homogéneas
        </p>
        <div className={s.math}>
            <InlineMath math="(1.1)\ \left\{\displaystyle \frac{d^2 u(x)}{d x^2}=0, \quad u(0,t) = 20, \quad   u(L,t) = -10 \right\}" />
        </div>
        <p className={s.text}> y otro dependiente del tiempo con condiciones de frontera homogéneas
        </p>
        <div className={s.math}>
            <InlineMath math="(1.2)\ \left\{ \displaystyle\frac{\partial v(x,t)}{\partial t}=\eta^2\ \frac{\partial^2 v(x,t)}{\partial x^2}, \quad v(x,0) = 100-u(x), \quad v(0,t) = 0, \quad v(L,t) = 0\right\}" />
        </div>
        <p className={s.text}> de tal manera que
        </p>
        <div className={s.math}>
            <InlineMath math="s(x,t)=u(x)+v(x,t)" />
        </div>
        <p className={s.text}> La solución de la ecuación diferencial del subproblema (1.1) es
        </p>
        <div className={s.math}>
            <InlineMath math="u(x)=Ax+B," />
        </div>
        <p className={s.text}>
            función que satisface las condiciones de frontera si y solo si
        </p>
        <div className={s.math}>
            <BlockMath math="A=-\frac{30}{L}, \quad B = 20," />
        </div>
        <p className={s.text}>
            esto implica que la solución del primer problema es
        </p>
        <div className={s.math}>
            <BlockMath math="u(x)=-\frac{30}{L} x + 20." />
        </div>
        <p className={s.text}> Por otro lado, la solución del subproblema (1.2) podemos encontrarla si suponemos que se puede escribir como
        </p>
        <div className={s.math}>
            <InlineMath math="v(x,t)=f_1(x)f_2(t)," />
        </div>
        <p className={s.text}> y con la suposición adicional de que dicha solución no es siempre cero; de esta manera se tiene que satisfacer la ecuación
        </p>
        <div className={s.math}>
            <BlockMath math="f_1(x)\frac{d f_2(t)}{d t}=c^2 f_2(t)\ \frac{d^2 f_1(x)}{d x^2}" />
            <br></br>
            <BlockMath math="\implies \frac{1}{c f_2(t)}\frac{d f_2(t)}{d t}=\frac{1}{f_1(x)}\ \frac{d^2 f_1(x)}{d x^2};" />
        </div>
        <p className={s.text}> lo anterior implica que ambos lados deben ser iguales a una constante <InlineMath math="-k^2\in\mathbb{R}" /> (elegida para obtener una solución no trivial y que decaiga con el tiempo), lo que genera el sistema de EDOs
        </p>
        <div className={s.math}>
            <BlockMath math="\frac{d^2 f_1(x)}{d x^2} = -k^2\ f_1(x), \quad \frac{d f_2(t)}{d t}=-\eta^2 k^2\ f_2(t)," />
        </div>
        <p className={s.text}> cuya solución es
        </p>
        <div className={s.math}>
            <BlockMath math="f_1(t)= C\cos(\beta x)+D\sin(\beta x), \quad f_2(t)=e^{-c^2\beta^2 t}." />
        </div>
        <p className={s.text}>
            Ahora bien, las condiciones de frontera requieren que sin importar el tiempo la temperatura sea cero en los extremos, esto es, <InlineMath math="f_1(x)=f_1(L)=0" />; por ende tenemos un problema S-L para la función <InlineMath math="f_1(x)" />. Utilizando la Tabla 1.3 podemos concluir que la solución es
        </p>
        <div className={s.math}>
            <BlockMath math="f_{1n}(x)=D_n \sin\left(\frac{n\pi}{L}x\right)," />
        </div>
        <p className={s.text}>
            así, ocupando el principio de superposición tenemos que
        </p>
        <div className={s.math}>
            <BlockMath math="v(x,t)=\sum_{n=1}^\infty D_n \sin\left(\frac{n\pi}{L}x\right) \exp\left\{-c^2 \frac{n^2 \pi^2}{L^2}t\right\}," />
        </div>
        <p className={s.text}>
            la cual satisface la condición inicial si
        </p>
        <div className={s.math}>
            <BlockMath math="100-u(x)=\sum_{n=1}^\infty D_n \sin\left(\frac{n\pi}{L}x\right)." />
        </div>
        <p className={s.text}>
            Como las funciones <InlineMath math="f_{1n}(x)" /> forman una base del espacio de funciones continuas a trozos en el intervalo <InlineMath math="[0,L]" />, la igualdad anterior implica que
        </p>
        <div className={s.math}>
            <BlockMath math="D_{n} =\frac{\displaystyle \int_0^L \left[100-u(x)\right] \sin\left(\frac{n\pi}{L}x\right)\ dx}{\displaystyle \int_0^L \sin^2\left(\frac{n\pi}{L}x\right)\ dx} = \frac{2}{L}\int_0^L \left[100-u(x)\right] \sin\left(\frac{n\pi}{L}x\right)\ dx" />
            <br></br>
            <BlockMath math="= \frac{2}{L}\int_0^L \left[80+\frac{30}{L}x\right] \sin\left(\frac{n\pi}{L}x\right)\ dx = -\frac{160}{L}\frac{L}{n\pi}\cos\left(\frac{n\pi}{L}x\right)\big|_0^L-\frac{60}{n\pi}\cos\left(n\pi\right)" />
            <br></br>
            <BlockMath math="= \frac{160}{n\pi}\left[1-(-1)^n\right]-\frac{60}{n\pi}(-1)^n = \frac{160}{n\pi}-\frac{220}{n\pi}(-1)^n," />
        </div>
        <p className={s.text}>
            de esta manera
        </p>
        <div className={s.math}>
            <BlockMath math="v(x,t)=\sum_{n=1}^\infty \left[\left(\frac{160}{n\pi}-\frac{220}{n\pi}(-1)^n\right)\sin\left(\frac{n\pi}{L}x\right)\exp\left(-\frac{c^2 n^2\pi^2}{L^2}t\right)\right]," />
        </div>
        <p className={s.text}>
            y por lo tanto
        </p>
        <div className={s.math}>
            <BlockMath math="s(x)=-\frac{30}{L} x + 20+\sum_{n=1}^\infty \left[\left(\frac{160}{n\pi}-\frac{220}{n\pi}(-1)^n\right)\sin\left(\frac{n\pi}{L}x\right)\exp\left(-\frac{c^2 n^2\pi^2}{L^2}t\right)\right]." />
        </div>
        <h2 className={s.titletheme} id="tag1.2">Método de expansión en funciones propias</h2>
        <p className={s.text}>
            Este método consiste en suponer que la solución de la EDP se puede escribir como una combinación lineal de las funciones propias de un operador diferencial hermítico. Difiere del método anterior, en que aquí no se obtiene esta base a partir de una EDO de manera direct, si no que se aprovecha la base de una EDP conveniente (por ejemplo, la ecuación de Helmholtz).
        </p>
        <p className={s.text}>
            A continuación se muestra un ejemplo resuelto con este método. Consideremos el problema que considera la existencia de una fuente de calor <InlineMath math="q(x,t)=(x-\pi)^2 e^{-t}" /> en una barrra, este se modela con la ecuación
        </p>
        <div className={s.math}>
            <BlockMath math="\frac{\partial u(x, t)}{\partial t}=\frac{1}{\pi} \frac{\partial^2 u(x, t)}{\partial x^2}+q(x,t)" />
        </div>
        <p className={s.text}>
            junto con las condiciones de frontera <InlineMath math="u(0, t) = 0" /> y <InlineMath math="u(\pi, t) = 0" />, así como con la condición inicial <InlineMath math="u(x, 0) = 3" />.
        </p>

        <p className={s.text}>
            En este caso en particular, si se expresan <InlineMath math="u(x,t)" />, <InlineMath math="u(x,0)" /> y <InlineMath math="q(x,t)" /> expandidas en términos de la base de funciones seno (solución de la ecuación de Helmholtz unidimensional) de la siguiente manera:
        </p>
        <div className={s.math}>
          <BlockMath math="
              u(x,t) = \sum_{n=1}^\infty B_n(t) \sin(\lambda_n x),
          "/>
          <br></br>
          <BlockMath math="
              u(x,0) = \sum_{n=1}^\infty b_n \sin(\lambda_n x),
          "/>
          <br></br>
          <BlockMath math="
                  q(x,t) = \sum_{n=1}^\infty q_n(t) \sin(\lambda_n x),
          "/>
        </div>

        <p className={s.text}>
            donde <InlineMath math="b_n" /> y <InlineMath math="q_n(t)" /> se obtienen al aplicar las propiedades de ortogonalidad de la base; cuando estas expresiones se sustituyen en el problema se encuentra la siguiente EDO para los coeficientes <InlineMath math="B_n(t)" />:
        </p>
        <div className={s.math}> <BlockMath math="
            \frac{d B_n(t)}{dt}+\frac{n^2}{\pi}B_n = q_n(t)
        " /></div>

        <p className={s.text}>
            con la condición inicial <InlineMath math="B_n(0)=b_n" />.
        </p>
        <p className={s.text}>
            La solución en este caso está dada por:
        </p>
        <div className={s.math}> <BlockMath math="
            u(x,t)=\sum_{n=1}^\infty \sin(nx)\exp\left(-\frac{n^2 t}{\pi}\right) \left[A_n+\int_0^t B_n(s) \exp\left(\frac{n^2 s}{\pi}\right)\ ds \right]
        " /></div>

        <p className={s.text}>
            donde:
        </p>
        <div className={s.math}>
          <BlockMath math="A_n = \frac{2}{\pi}\int_0^\pi \sin(nx)\ dx" />
          <br></br>
          <BlockMath math="B_n(s) = \frac{2}{\pi}\int_0^\pi q(x,s) \sin(nx)\ dx." />
        </div>

        <h2 className={s.titletheme} id="tag1.3">Método de transformadas</h2>
        <p className={s.text}>
            Este método consiste en transformar la EDP en una EDO en una de las variables de problema a través del uso de una transformada integral, resolver dicha EDO y posteriormente ocupar la transformada inversa para obtener la solución en el dominio original.
        </p>

        <h3 className={s.subtitletheme}>Transformada de Fourier</h3>
        <p className={s.text}>
            La transformada de Fourier, <InlineMath math="\mathcal{F}\{f\}(w)=\hat{f}(w)" />, de una función <InlineMath math="f(x)" /> se define como:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \hat{f}(w)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-iwx}\ dx,
        " />
        </div>
        <p className={s.text}>
            donde el factor que aparece antes de la integral es necesario para que la transformada inversa devuelva la función original (es decir, para que ambas funciones sean inversas una de la otra); la transformada inversa se define como:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f(x)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty e^{iwx} \hat{f}(w)\ dw.
        " />
        </div>
        <p className={s.text}>
            Ahora podemos resolver el problema de onda para una cuerda infinita:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}, \ (-\infty < x < \infty,\ t>0)
        " />
        </div>
        <p className={s.text}>
            bajo las condiciones iniciales <InlineMath math="u(x,0)=f(x)" /> y <InlineMath math="u_t(x,0)=g(x)" />. Si fijamos <InlineMath math="t" /> y aplicamos la transformada de Fourier a la ecuación diferencial junto con sus condiciones iniciales obtenemos una EDO en esta variable fijada, es decir, obtenemos la ecuación:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \frac{d^2 \hat{u}(w, t)}{d t^2} +c^2 w^2 \hat{u}(w,t) = 0
        " />
        </div>
        <p className={s.text}>
            sujeta a las condiciones iniciales <InlineMath math="\hat{u}(w,0)=\hat{f}(w)" /> y <InlineMath math="\hat{u}_t(w,0)=\hat{g}(w)" />. La solución de dicha ecuación es:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \hat{u}(w, t) =\hat{f}(w)\cos(cwt)+\frac{1}{cw}\hat{g}(w) \sin(cwt),
        " />
        </div>
        <p className={s.text}>
            por lo que la solución de la EDP está dada simplemente por la transformada inversa de <InlineMath math="\hat{u}(w, t)" />, esto es:
        </p>
        <div className={s.math}>
        <BlockMath math="
            u(x,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty} ^\infty e^{iwx} \left[\hat{f}(w)\cos(cwt)+\frac{1}{cw}\hat{g}(w) \sin(cwt)\right] dx
        " />
        </div>

        <p className={s.text}>
            Cuando el problema involucra solo la mitad de la recta real se utilizan las transformadas seno y coseno dependiendo de la naturaleza de las condiciones, ya que es necesario contar con toda la información necesaria que requiera una determinada transformada de acuerdo a las fórmulas correspondientes. A continuación se muestran las definiciones de estas transformadas y sus inversas:
        </p>
        <div className={s.math}>
          <BlockMath math="  \hat{f}_s(w)= \sqrt{\frac{2}{\pi}}\int_{0}^\infty f(x)\sin(wx)\ dx,  " />
          <br></br>
          <BlockMath math=" f(x)= \sqrt{\frac{2}{\pi}}\int_{0}^\infty \hat{f}_s(w)\sin(wx)\ dx, " />
          <br></br>
          <BlockMath math=" \hat{f}_c(w)= \sqrt{\frac{2}{\pi}}\int_{0}^\infty f(x)\cos(wx)\ dx, " />
          <br></br>
          <BlockMath math=" f(x)= \sqrt{\frac{2}{\pi}}\int_{0}^\infty \hat{f}_c(w)\cos(wx)\ dx." />
        </div>

        <h3 className={s.subtitletheme}>Transformada de Laplace</h3>
        <p className={s.text}>
            La transformada de Laplace, <InlineMath math="\mathcal{L}\{f\}(s)" />, de una función <InlineMath math="f(x)" /> se define como:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \mathcal{L}\{f\}(s)=\int_{0}^\infty f(s)e^{-st}\ dt;
        " />
        </div>
        <p className={s.text}>
            a diferencia de la transformada de Fourier, en este caso se suele hacer (incluso) un mayor uso de tablas que contienen la transformada de Laplace de diversas funciones.
        </p>
        <p className={s.text}>
            Ahora podemos resolver el problema de onda para una cuerda infinita:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \frac{\partial u}{\partial t} = c^2 \frac{\partial^2 u}{\partial x^2}, \ (0 < x < \infty,\ t>0)
        " />
        </div>
        <p className={s.text}>
            bajo las condiciones <InlineMath math="u(0,t)=f(t)" /> y <InlineMath math="u(x,0)=0" />. Si fijamos <InlineMath math="x" /> y aplicamos la transformada de Laplace en la variable <InlineMath math="t" /> a la ecuación diferencial, obtenemos una EDO en la variable fijada, es decir, obtenemos la ecuación:
        </p>
        <div className={s.math}>
        <BlockMath math="
            c^2\frac{d^2 U(x, s)}{d x^2}- s U(x,s) = 0
        " />
        </div>
        <p className={s.text}>
            sujeta a la condición <InlineMath math="U(0,s)=F(s)" />; es importante notar que la segunda condición necesaria para resolver esta EDO de segundo orden es una condición impuesta para que la solución tenga sentido físico, es decir, requerimos que la solución esté acotada en todo el dominio de la variable <InlineMath math="x" />. La solución general de la EDO es:
        </p>
        <div className={s.math}>
        <BlockMath math="
            U(x,s) =A(s) e^{\displaystyle\sqrt{s}x/c}+B(s)e^{ \displaystyle -\sqrt{s}x/c},
        " />
        </div>
        <p className={s.text}>
            como la solución debe ser acotada entonces <InlineMath math="A(s)=0" /> y al aplicar la segunda condición obtenemos que <InlineMath math="B(s)=F(s)" />, por lo que la solución es:
        </p>
        <div className={s.math}>
        <BlockMath math="
            U(x,s)= F(s)e^{\displaystyle -\sqrt{s}x/c}.
        " />
        </div>
        <p className={s.text}>
            Por lo tanto, <InlineMath math="u(x,t)" /> debe ser una convolución (mejor dicho, podemos buscar la solución en forma de una convolución para simplificar el proceso de hallar la transformada inversa). Al buscar en tablas encontramos que:
        </p>
        <div className={s.math}>
        <BlockMath math="
            u(x,t) = f(t) * \frac{xe^{-x^2/4c^2 t}}{2c\sqrt{\pi}t^{3/2}}
        " />
        </div>
        <p className={s.text}>
            o de manera explícita:
        </p>
        <div className={s.math}>
        <BlockMath math="
            u(x,t) = \frac{x}{2c\sqrt{\pi}} \int_0^t \frac{1}{(t-\tau)^{3/2}} \exp\left(-\frac{x^2}{4c^2(t-\tau)}\right) d\tau
        " />
        </div>
        <p className={s.text}>
            <strong>Nota:</strong> la transformada de Laplace se utiliza cuando se tiene un dominio que es la mitad de la recta real y dependiendo de las condiciones (ya que también se podría hacer uso de las transformadas seno o coseno), en caso contrario se utiliza la transformada de Fourier.
        </p>

        <h2 className={s.title} id="tag2">Representación de funciones</h2>
        <p className={s.text}>
            El éxito de los métodos de separación de variables y expansión en funciones propias radica en la capacidad de las funciones propias para reconstruir cualquier función continua a trozos en un determinado intervalo. Por ello, en esta sección se presenta la función sierra en su expansión en las bases de Fourier, de Bessel de orden <InlineMath math="n" /> y de Legendre. La función sierra está definida como:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f(x)=\begin{cases} 1-2x & \text{ si } 0<x\leq 1, \\ f(x+1) & \text{ en otro caso.} \end{cases}
        " />
        </div>
        <p className={s.text}>
            y su gráfica se muestra a continuación:
        </p>
        <img src={grafica_image} width="400"></img>

        <h2 className={s.titletheme} id="tag2.1">Base de Fourier</h2>
        <p className={s.text}>
            Dado que la función sierra es una función con periodo <InlineMath math="2" /> (en realidad es periodo unitario, pero si una función es periódica con periodo <InlineMath math="a" /> entonces también es periódica con periodo <InlineMath math="2a" />), podemos expandirla en términos de la base Fourier como:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f(x)= a_0 +\sum_{n=0}^\infty \left[a_n\cos(n\pi x)+b_n\sin(n\pi x)\right]
        " />
        </div>
        <p className={s.text}>
            donde:
        </p>
        <div className={s.math}>
        <BlockMath math="
            \begin{align*}
                a_0 & = \frac{1}{2}\int_{-1}^1 f(x)\ dx \\
                a_n & = \int_{-1}^1 f(x)\cos(n\pi x)\ dx\\
                b_n & = \int_{-1}^1 f(x)\sin(n\pi x)\ dx
            \end{align*}
        " />
        </div>
        <p className={s.text}>
            es sencillo concluir que <InlineMath math="a_0=a_n=0" />, por otro lado:
        </p>
        <div className={s.math}>
        <BlockMath math=" b_n = -\int_{-1}^0 (1+2x)\sin(n\pi x)\ dx +\int_{0}^1 (1-2x)\sin(n\pi x)\ dx  " />
        <br></br>
        <BlockMath math=" = 2\int_{0}^1\sin(n\pi x)\ dx -2\int_{-1}^1 x\sin(n\pi x)\ dx
        " />
        <br></br>
        <BlockMath math="  =-\frac{2}{n\pi} \cos(n\pi x) \big|_{0}^1 - 2 \left[-\frac{1}{n\pi} x\cos(n\pi x) \big|_{-1}^1+\frac{1}{n\pi}\int_{-1}^1 \cos(n\pi x)dx\right] " />
        <br></br>
        <BlockMath math=" =-\frac{2}{n\pi} \cos(n\pi x) \big|_{0}^1 - 2 \left[-\frac{1}{n\pi} x\cos(n\pi x) \big|_{-1}^1+\frac{1}{(n\pi)^2}\sin(n\pi x)\big|_{-1}^1\right]  " />
        <br></br>
        <BlockMath math=" =\frac{2}{n\pi}\left[1-(-1)^n\right] + \frac{4}{n\pi}(-1)^n = \frac{2}{n\pi}\left[1+(-1)^n\right].  " />

        </div>
        <p className={s.text}>
            Por lo tanto:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f(x) = \sum_{n=1}^\infty \frac{2}{n\pi}\left[1+(-1)^n\right] \sin(n\pi x).
        " />
        </div>

        <h2 className={s.titletheme} id="tag2.2">Base de Bessel de orden <InlineMath math="n" /></h2>
        <p className={s.text}>
            En este caso podemos construir una representación de la función solo para <InlineMath math="x\geq 0" /> debido a que las funciones de la base Bessel pueden construir funciones en intervalos de la forma <InlineMath math="[0,a]" />. En este caso la representación depende del orden <InlineMath math="n" />, así que de manera general se tiene:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f_n(x) = \sum_{j=1}^\infty b_j J_{n}\left(\frac{\alpha_{nj}}{a} x\right)
        " />
        </div>
        <p className={s.text}>
            con:
        </p>
        <div className={s.math}>
        <BlockMath math="
            b_j= \frac{2}{a^2 J_{n+1}^2(\alpha_{nj})}\int_0^a f(x) J_{n}\left(\frac{\alpha_{nj}}{a} x\right) x\ dx.
        " />
        </div>
        <p className={s.text}>
            En particular si escogemos el intervalo como <InlineMath math="[0,2]" /> y el orden como <InlineMath math="n=0" />, obtenemos:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f_0(x) = \sum_{j=1}^\infty b_j J_{0}\left(\frac{\alpha_{j}}{a} x\right)
        " />
        </div>
        <p className={s.text}>
            donde <InlineMath math="\alpha_{j}" /> es el <InlineMath math="j" />-ésimo cero de la función de Bessel de orden cero y:
        </p>
        <div className={s.math}>
        <BlockMath math="
            b_j=\frac{1}{2 J_{1}^2(\alpha_{j})}\int_0^2 f(x) J_{0}\left(\frac{\alpha_{j}}{2} x\right) x\ dx.
        " />
        </div>

        <h2 className={s.titletheme} id="tag2.3">Base de Legendre</h2>
        <p className={s.text}>
            Finalmente, podemos expresar la función sierra en el intervalo <InlineMath math="[-1,1]" /> en términos de la base de los polinomios de Legendre. La expansión en este caso se ve como:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f(x) = \sum_{n=0}^\infty c_n P_n(x)
        " />
        </div>
        <p className={s.text}>
            donde:
        </p>
        <div className={s.math}>
        <BlockMath math="
            c_n = \frac{2n+1}{2}\int_{-1}^1 f(x)P_n(x)dx.
        " />
        </div>
        <p className={s.text}>
            Por otro lado, la expansión en términos de los polinomios asociados de Legendre de orden <InlineMath math="m" /> está dada por:
        </p>
        <div className={s.math}>
        <BlockMath math="
            f_m(x) = \sum_{n=m}^\infty c_n P^m_n(x)
        " />
        </div>
        <p className={s.text}>
            donde:
        </p>
        <div className={s.math}>
        <BlockMath math="
            c_n = \frac{2n+1}{2}\frac{(n-m)!}{(n+m)!}\int_{-1}^1 f(x)P_n^m(x)dx.
        " />
        </div>
        <br></br>
    </>
  )
}
