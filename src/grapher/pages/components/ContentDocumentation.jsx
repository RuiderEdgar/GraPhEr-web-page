import { InlineMath, BlockMath } from "react-katex";
import figura1 from "../../../../assets/images/figura1.png";
import figura2 from "../../../../assets/images/figura2.png";
import figura3 from "../../../../assets/images/figura3.png";
import figura4 from "../../../../assets/images/figura4.png";
import figura5 from "../../../../assets/images/figura5.png";
import figura6 from "../../../../assets/images/figura6.png";
import figura7 from "../../../../assets/images/figura7.png";
import figura8 from "../../../../assets/images/figura8.png";
import s from "../Documentacion.module.css";

export const ContentDocumentation = () => {
	return (
		<>
			<h2 className={s.header_title}>Documentación de GraPher 1.0</h2>
			{/* --------------tema */}
			<h3 id="1" className={s.topic}>
				1. Sintaxis de entrada
			</h3>
			<p className={s.texto}>
				La sintaxis de entrada está basada en la sintaxis de la librería de{" "}
				<a href="https://www.sympy.org/en/index.html">SymPy</a>; sin embargo,
				para facilitar el ingreso de la entrada se realizaron algunas
				modificaciones, por ello esta sección está destinada a indicar la
				sintaxis de entrada de la interfaz para un correcto uso. Para otras
				funciones es necesario dirigirse a la página de <i>SymPy.</i>
			</p>
			<p className={s.texto}>
				Cada función de interés se muestra como un par{" "}
				<strong>función:símbolo</strong>, y en su caso, algún ejemplo de su
				aplicación.
			</p>

			{/* --------------tema */}
			<h3 id="1.1" className={s.topic}>
				1.1. Símbolos especiales
			</h3>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Variable x :</strong> x
				</li>
				<li className={s.texto}>
					<strong>Variable y :</strong> y
				</li>
				<li className={s.texto}>
					<strong>Variable z :</strong> z
				</li>
				<li className={s.texto}>
					<strong>Variable r :</strong> r
				</li>
				<li className={s.texto}>
					<strong>Variable ϕ (ángulo acimutal) :</strong> phi
				</li>
				<li className={s.texto}>
					<strong>Variable θ (ángulo polar) :</strong> theta
					<br />
					Ejemplo: {""}
					<InlineMath math={"\\int \\cos(\\theta) \\ d\\theta"} /> se escribe
					como Int[s,ct] . Lo anterior implica que s = cos(θ) y d ct = d s,
					debido al cambio de variable.
				</li>
				<li className={s.texto}>
					<strong>
						Valor propio <InlineMath math={"\\lambda_n"} /> :
					</strong>{" "}
					lamda_n
				</li>
				<li className={s.texto}>
					<strong>
						Valor propio <InlineMath math={"\\lambda_m"} /> :
					</strong>{" "}
					lamda_m
				</li>
				<li className={s.texto}>
					<strong>
						Valor propio <InlineMath math={"\\lambda_l"} /> :
					</strong>{" "}
					lamda_l
				</li>
				<li className={s.texto}>
					<strong>
						Valor propio <i>i</i> :
					</strong>{" "}
					I
				</li>
			</ul>
			{/* --------------tema--- */}
			<h3 id="1.2" className={s.topic}>
				1.2. Operaciones básicas y signos de agrupación
			</h3>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Suma :</strong> +
				</li>
				<li className={s.texto}>
					<strong>Resta :</strong> -
				</li>
				<li className={s.texto}>
					<strong>Multiplicación :</strong> *
					<br />
					Ejemplo: xy se escribe como <code>x∗y</code>
				</li>
				<li className={s.texto}>
					<strong>División :</strong> /
					<br />
					Ejemplo: <InlineMath math={"\\frac{x}{1+x}"} /> se escribe como{" "}
					<code>x/(1+x)</code>
				</li>
				<li className={s.texto}>
					<strong>Potenciación :</strong> **
					<br />
					Ejemplo: <InlineMath math={"x^2"} /> se escribe como <code>x∗∗2</code>
				</li>
				<li className={s.texto}>
					<strong>Agrupación :</strong> ()
					<br />
					Ejemplo: <InlineMath math={"[x + (1 + y)]^2"} /> se escribe como
					<code>(x+(1+y))∗∗2</code>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="1.3" className={s.topic}>
				1.3. Funciones elementales
			</h3>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Exponencial : </strong> exp( )
					<br />
					Ejemplo: <InlineMath math={"e^{x - y}"} /> se escribe como{" "}
					<code>exp(x-y)</code>
				</li>
				<li className={s.texto}>
					<strong>Logaritmo natural :</strong> ln( )
					<br />
					Ejemplo: <InlineMath math={"\\ln\\left(\\frac{x}{y}\\right)"} /> se
					escribe como <code>ln(x/y)</code>
				</li>
				<li className={s.texto}>
					<strong>Logaritmo en base a :</strong> log( , a )
					<br />
					Ejemplo: <InlineMath math={"\\log_a\\left(\\frac{x}{y}\\right)"} /> se
					escribe como <code>log(x/y, a)</code>
				</li>
				<li className={s.texto}>
					<strong>Raíz cuadrada :</strong> sqrt( )
					<br />
					Ejemplo: <InlineMath math={"\\sqrt{x^2 + y^2}"} /> se escribe como{" "}
					<code>sqrt(x**2+y**2)</code>
				</li>
				<li className={s.texto}>
					<strong>Raíz n-ésima :</strong> **(1/n)
					<br />
					Ejemplo: <InlineMath math={"\\sqrt[3]{x + y}"} /> se escribe como{" "}
					<code>(x+y)**(1/3)</code>
				</li>
				<li className={s.texto}>
					<strong>Coseno :</strong> cos( )
					<br />
					Ejemplo: <InlineMath math={"\\cos(x - y)"} /> se escribe como{" "}
					<code>cos(x-y)</code>
				</li>
				<li className={s.texto}>
					<strong>Seno :</strong> sin( )
					<br />
					Ejemplo: <InlineMath math={"\\sin(x - y)"} /> se escribe como{" "}
					<code>sin(x-y)</code>
				</li>
				<li className={s.texto}>
					<strong>Tangente :</strong> tan( )
					<br />
					Ejemplo: <InlineMath math={"\\tan(x - y)"} /> se escribe como{" "}
					<code>tan(x-y)</code>
				</li>
				<li className={s.texto}>
					<strong>Argumento :</strong> atan2( , )
					<br />
					Ejemplo: <InlineMath
						math={"\\arctan\\left(\\frac{y}{x}\\right)"}
					/>{" "}
					se escribe como <code>atan2(y,x)</code>
				</li>
				<li className={s.texto}>
					<strong>Arcotangente :</strong> atan( )
					<br />
					Ejemplo: <InlineMath math={"\\arctan(2)"} /> se escribe como{" "}
					<code>atan(2)</code>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="1.4" className={s.topic}>
				1.4. Operadores integrales y diferenciales
			</h3>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Integral simple sobre una coordenada espacial :</strong> Int[
					, ]
					<br />
					Ejemplo: <InlineMath math={"\\int x^2 dx"} /> se escribe como{" "}
					<code>Int[x**2,x]</code>
					<br />
					<em>Nota:</em> No es necesario especificar los límites de integración,
					ya que estos se infieren del dominio que se ingrese.
				</li>
				<li className={s.texto}>
					<strong>Integral doble sobre dos coordenadas espaciales :</strong>{" "}
					Int[ , ]
					<br />
					Ejemplo: <InlineMath math={"\\int \\int x^2 \\ y \\ dx \\ dy"} /> se
					escribe como <code>Int[x**2*y,x,y]</code> o{" "}
					<code>Int[x**2*y,y,x]</code>
				</li>
				<li className={s.texto}>
					<strong>Integral múltiple sobre n coordenadas espaciales :</strong>{" "}
					Int[, x_1, x_2, ..., x_n ]
					<br />
					Ejemplo:{" "}
					<InlineMath
						math={
							"\\int \\int \\int x_1^2 x_2^3 x_3 x_4^2 \\ dx_1 \\ dx_2 \\ dx_3 \\ dx_4"
						}
					/>{" "}
					se escribe como{" "}
					<code>Int[x_1**2*x_2**3*x_3*x_4**2,x_1,x_2,x_3,x_4]</code>
				</li>
				<li className={s.texto}>
					<strong>
						Integral desde <InlineMath math={"t_0 = 0"} /> a t :
					</strong>{" "}
					Int| |
					<br />
					Ejemplo: <InlineMath math={"\\int_0^t s^2 ds"} /> se escribe como
					<code>Int|s**2|</code>
				</li>
				<li className={s.texto}>
					<strong>Derivación o derivación parcial :</strong> diff( )
					<br />
					Ejemplo: <InlineMath
						math={"\\frac{\\partial}{\\partial x} [xy]"}
					/>{" "}
					se escribe como <code>diff(x*y,x)</code>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="1.5" className={s.topic}>
				1.5. Funciones especiales
			</h3>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>
						Función de Bessel de primer tipo{" "}
						<InlineMath math={"J_\\alpha(z)"} /> :
					</strong>{" "}
					besselj(α, )
					<br />
					Ejemplo: <InlineMath math={"J_0(r)"} /> se escribe como{" "}
					<code>besselj(0, r)</code>
				</li>
				<li className={s.texto}>
					<strong>
						Función de Bessel modificada de primer tipo{" "}
						<InlineMath math={"I_\\alpha(z)"} /> :
					</strong>{" "}
					besseli(α, )
					<br />
					Ejemplo: <InlineMath math={"I_0(r)"} /> se escribe como{" "}
					<code>besseli(0, r)</code>
				</li>
				<li className={s.texto}>
					<strong>
						Función esférica de Bessel <InlineMath math={"j_\\alpha(z)"} /> :
					</strong>{" "}
					jn(α, )
					<br />
					Ejemplo: <InlineMath math={"j_0(r)"} /> se escribe como{" "}
					<code>jn(0, r)</code>
				</li>
				<li className={s.texto}>
					<strong>
						Polinomios de Legendre <InlineMath math={"P_n(z)"} /> :
					</strong>{" "}
					legendre(n, )
					<br />
					Ejemplo: <InlineMath math={"P_1(\\cos(\\theta))"} /> se escribe como
					<code>legendre(1, cos(theta))</code>
				</li>
				<li className={s.texto}>
					<strong>
						Polinomios asociados de Legendre <InlineMath math={"P_n^m(z)"} /> :
					</strong>{" "}
					assoc_legendre(n, m, )
					<br />
					Ejemplo: <InlineMath math={"P_1^2(\\cos(\\theta))"} /> se escribe como{" "}
					<code>legendre(1, 2, cos(theta))</code>
				</li>
				<li className={s.texto}>
					<strong>
						Armónicos Esféricos <InlineMath math={"Y_k^l(\\theta, \\phi)"} /> :
					</strong>{" "}
					Ynm(k, l)
					<br />
					Ejemplo: <InlineMath math={"Y_1^2(\\theta, \\phi)"} /> se escribe como{" "}
					<code>Ynm(1,2)</code>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="1.6" className={s.topic}>
				1.6. Otros
			</h3>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Funciones definidas a trozos :</strong> Piecewise((val_1,
					con_1), ..., (val_n, con_n))
					<br />
					Ejemplo:
					<br />
					<BlockMath
						math={
							"f(x) = \\begin{cases} 1 & \\text{si } x < 0 \\\\ 0 & \\text{si } x > 0 \\end{cases}"
						}
					/>
					<br />
					se escribe como{" "}
					<InlineMath math={"Piecewise((1, x < 0), (0, x > 0))"} />.
				</li>
				<li className={s.texto}>
					<strong>Conjugación compleja :</strong> conjugate( )
					<br />
					Ejemplo: <InlineMath math={"\\overline{e^{i\\phi}}"} /> se escribe
					como <code>conjugate(exp(I*phi))</code>
				</li>
				<li className={s.texto}>
					<strong>Subíndices :</strong> _
					<br />
					Ejemplo: <InlineMath math={"\\lambda_n"} /> se escribe como{" "}
					<code>lamda_n</code>
				</li>
				<li className={s.texto}>
					<strong>Igual que :</strong> =
					<br />
					Ejemplo: <InlineMath math={"x^2 + 1 = 0"} /> se escribe como{" "}
					<code>x**2 + 1 = 0</code>
				</li>
				<li className={s.texto}>
					<strong>Mayor que :</strong> {">"}
					<br />
					Ejemplo: <InlineMath math={"\\lambda_n > 0"} /> se escribe como{" "}
					<code>lamda_n {">"} 0</code>
				</li>
				<li className={s.texto}>
					<strong>Mayor o igual que :</strong> {">="}
					<br />
					Ejemplo: <InlineMath math={"\\lambda_n \\geq 0"} /> se escribe como{" "}
					<code>lamda_n {">="} 0</code>
				</li>
				<li className={s.texto}>
					<strong>Menor que :</strong> {"<"}
					<br />
					Ejemplo: <InlineMath math={"\\lambda_n < 0"} /> se escribe como{" "}
					<code>lamda_n {"<"} 0</code>
				</li>
				<li className={s.texto}>
					<strong>Menor o igual que :</strong> {"<="}
					<br />
					Ejemplo: <InlineMath math={"\\lambda_n \\leq 0"} /> se escribe como{" "}
					<code>lamda_n {"<="} 0</code>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="2" className={s.topic}>
				2. Interacción con la solución
			</h3>

			<p className={s.texto}>
				Una vez obtenida la gráfica de la solución, hay varias maneras de
				interactuar con la gráfica y con la aproximación numérica calculada. A
				continuación se describen estas interacciones.
			</p>

			{/* --------------tema--- */}
			<h4 id="2.1" className={s.topic}>
				2.1. Interacción con la gráfica
			</h4>
			<p className={s.texto}>
				En la vista tridimensional, además de permitir la inspección de la
				solución haciendo zoom o modificando la posición desde la que se
				visualiza la gráfica con ayuda del mouse, la aplicación permite
				interactuar con la gráfica a través de las siguientes acciones:
			</p>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Inspección en el tiempo o inspección por cortes</strong> (solo
					en problemas temporales o problemas de tres dimensiones espaciales,
					respectivamente). En este caso aparecen botones de reproducción como
					en la siguiente figura:
					<br />
					<figure className={s.figuraContainer}>
						<img
							className={s.figura1}
							src={figura1}
							alt="vista botones reproducción"
						/>
						<figcaption>
							Figura 1: Vista de los botones de reproducción.
						</figcaption>
					</figure>
					<br />
					Estos permiten visualizar la gráfica para instantes determinados en el
					tiempo o en los cortes determinados de una coordenada específica. De
					izquierda a derecha, los botones tienen las siguientes funciones:
					cuadro anterior, reproducción hacia atrás, pausa, reproducción y
					cuadro posterior. La barra deslizadora se puede utilizar para elegir
					el corte específico entre los calculados.
					<br />
					Si se desea visualizar un tiempo o corte en particular que no se
					encuentra a través de estos botones, es posible utilizar el campo de
					entrada <i>Valor de la Coordenada Fija</i> (no disponible en mapas de
					calor por obvias razones) para indicar a la aplicación que se requiere
					hacer cálculos para este valor particular. Una vez ingresado un valor
					en el campo, se debe presionar el botón <i>Ir</i> a su derecha.
					<br />
					<figure className={s.figuraContainer}>
						<img
							className={s.figura2}
							src={figura2}
							alt="Vista de los elementos para cambiar el valor de la coordenada fija."
						/>
						<figcaption>
							Figura 2: Vista de los elementos para cambiar el valor de la
							coordenada fija.
						</figcaption>
					</figure>
					<br />
					Para intercambiar entre coordenadas fijas se debe hacer uso de las
					casillas seleccionables a la izquierda del texto{" "}
					<i>Coordenada Fija.</i>
					<figure className={s.figuraContainer}>
						<img
							className={s.figura3}
							src={figura3}
							alt="Vista de los elementos para cambiar la coordenada fija"
						/>
						<figcaption>
							Figura 3: Vista de los elementos para cambiar la coordenada fija.
						</figcaption>
					</figure>
				</li>
				<li className={s.texto}>
					<strong>Intercambio entre modo de visualización.</strong> A través de
					la casilla <i>Proyección/Mapa de calor</i>, se puede elegir entre una
					vista como lo explicado para el campo de entrada{" "}
					<strong>Proyección</strong> (ver Otras Características en el punto
					4.1). Mientras que con las casillas <i>Modo por modo</i> y{" "}
					<i>Solución parcial</i>, se puede entrar o salir de los modos
					especiales de visualización (ver punto 6.3).
					<br />
					<figure className={s.figuraContainer}>
						<img
							className={s.figura4}
							src={figura4}
							alt="Vista de los elementos para cambiar de modo"
						/>
						<figcaption>
							Figura 4: Vista de los elementos para cambiar de modo.
						</figcaption>
					</figure>
					<br />
				</li>
				<li className={s.texto}>
					<strong>Visualización de curvas de nivel</strong> (solo en problemas
					con más de una dimensión espacial). Hay dos formas de elegir los
					valores de las curvas de nivel que se quieren mostrar: de manera
					automática seleccionando la casilla <i>Curvas de nivel automáticas</i>{" "}
					(el proceso se inicia automáticamente) o de manera manual
					seleccionando inicialmente la casilla{" "}
					<i>Curvas de nivel específicas</i>, especificando posteriormente los
					valores, separados por “;”, en el campo de escritura{" "}
					<i>Valores de las curvas</i> y presionando el botón <i>Ir</i> a la
					derecha del campo anterior.
					<br />
					En ambos casos, se abre una ventana de etiquetas donde se muestra la
					leyenda de las curvas de nivel, indicando el color de la curva y el
					valor.
					<br />
					<figure className={s.figuraContainer}>
						<img
							className={s.figura5}
							src={figura5}
							alt="Vista de los elementos para graficar curvas de nivel"
						/>
						<figcaption>
							Figura 5: Vista de los elementos para graficar curvas de nivel.
						</figcaption>
					</figure>
					<br />
				</li>
			</ul>

			<p className={s.texto}>
				A diferencia de la vista tridimensional, cuando se tiene una vista
				bidimensional, el zoom se realiza exclusivamente con el botón con ícono
				de lupa encontrado en la parte superior de la gráfica, mientras que en
				este caso se permite un desplazamiento sobre el plano con el botón con
				ícono de una cruz con flechas. Salvo estas dos excepciones, en esta
				vista también se permite la visualización de curvas de nivel y la
				visualización de cortes específicos en el espacio o en el tiempo (cuando
				estas se encuentran disponibles de acuerdo a las variables del
				problema).
			</p>

			{/* --------------tema--- */}
			<h3 id="2.2" className={s.topic}>
				2.2. Interacción con la aproximación calculada
			</h3>

			<p className={s.texto}>
				La aplicación permite la inspección de la aproximación obtenida para
				poder observar el coeficiente obtenido de cada uno de los términos, así
				como para evaluar esta aproximación en cada uno de los puntos del
				dominio ingresado por el usuario (en el caso de problemas dependientes
				del tiempo, se puede evaluar en tiempos fuera del dominio especificado
				por el usuario). A continuación se detalla la interacción en cada caso:
			</p>

			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Obtención de los coeficientes de cada término.</strong> En el
					campo <i>Coeficientes</i> en la ventana de graficación, se encontrará
					un cuadro de número para determinar el subproblema en donde se
					encuentra el término de interés y, dependiendo de la cantidad de
					conjuntos de valores propios presentes en el subproblema (la cantidad
					de índices en la suma iterada), se encontrarán cuadros de números para
					determinar el valor de cada índice (estos cuadros de números tendrán
					el mismo rango que lo especificado en el campo{" "}
					<strong>Número de términos</strong>). Al terminar de editar un valor,
					el contenido se actualizará (se termina la edición cuando el usuario
					presiona la tecla Enter o selecciona otro cuadro de número). En el
					cuadro inferior a estos elementos, se mostrarán los valores propios
					correspondientes a los índices elegidos, separados entre ellos por “:”
					y separados del valor del coeficiente correspondiente por “;”.
					<figure className={s.figuraContainer}>
						<img
							className={s.figura6}
							src={figura6}
							alt="Vista de los elementos del campo Coeficientes"
						/>
						<figcaption>
							Figura 6: Vista de los elementos del campo Coeficientes.
						</figcaption>
					</figure>
					Cuando el término se compone de una suma, se mostrarán los
					coeficientes ordenados y separados por “;” de acuerdo al orden en el
					que se introdujeron en el campo <i>Coeficientes.</i>
				</li>
				<li className={s.texto}>
					<strong>Evaluación de la solución.</strong> En el campo{" "}
					<i>Solución</i> en la ventana de graficación, se encuentran
					los correspondientes campos de escritura para especificar el valor de
					cada una de las variables (esto determinará el punto en el dominio en
					donde se quiere evaluar la solución). El resultado se muestra en el
					cuadro inferior a estos campos.
					<figure className={s.figuraContainer}>
						<img
							className={s.figura7}
							src={figura7}
							alt="Vista de los elementos del campo Solución."
						/>
						<figcaption>
							Figura 7: Vista de los elementos del campo Solución.
						</figcaption>
					</figure>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="2.3" className={s.topic}>
				2.3. Modos especiales de visualización
			</h3>
			<p className={s.texto}>
				La aplicación permite elegir entre dos modos especiales de
				visualización: el modo denominado “solución parcial” y
				el modo denominado “por modo”. Se puede ingresar a
				estos modos seleccionando la casilla correspondiente en la ventana de
				graficación, con esto se habilitan los cuadros de números que se
				encuentran por debajo de estas casillas. A continuación se describe cada
				modo:
			</p>
			<ul className={s.viñetas}>
				<li className={s.texto}>
					<strong>Solución parcial.</strong> En este modo, se muestra la gráfica
					pero solo considerando la solución hasta el término indicado por los
					cuadros de números (el funcionamiento es análogo al usado para acceder
					a los coeficientes). Dicho en otras palabras, este modo considera que
					la aproximación calculada es la solución total del problema y se
					consideran soluciones parciales de dicha solución.
				</li>
				<li className={s.texto}>
					<strong>Modo por modo.</strong> En este modo, se muestra la gráfica
					correspondiente al término indicado por los cuadros de números (el
					funcionamiento es análogo al usado para acceder a los coeficientes).
					Es decir, en este modo es posible observar el comportamiento de cada
					término por separado.
					<figure className={s.figuraContainer}>
						<img
							className={s.figura8}
							src={figura8}
							alt="Vista de los elementos para los modos especiales de
						visualización"
						/>
						<figcaption>
							Figura 8: Vista de los elementos para los modos especiales de
							visualización.
						</figcaption>
					</figure>
				</li>
			</ul>

			{/* --------------tema--- */}
			<h3 id="3" className={s.topic}>
				3. Exportación de animaciones
			</h3>
			<p className={s.texto}>
				En la ventana de graficación, se puede guardar una animación de la
				gráfica en su estado actual (cuando el problema no depende del tiempo y
				tiene solo dos variables) o una animación dependiente del tiempo o de
				una coordenada fija (esto último cuando se tienen tres variables
				espaciales).
			</p>

			<p className={s.texto}>
				El proceso de guardado se empieza cuando se presiona el botón{" "}
				<strong>Guardar Animación</strong> de la ventana de graficación, con
				esto se abre el explorador de archivos del sistema para decidir el
				nombre y la ubicación deseada para el archivo. De manera predeterminada,
				el nombre asignado es <i>NombrePredefinido.mov</i>, el cual es solo un
				nombre clave, ya que bajo esta configuración la aplicación creará un
				nombre que detalle la cantidad de coordenadas espaciales, la dependencia
				temporal, el modo de visualización, entre otras cosas.
			</p>
		</>
	);
};
