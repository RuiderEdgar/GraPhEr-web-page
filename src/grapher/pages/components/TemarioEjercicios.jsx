import s from "../Ejercicios.module.css";
import { indiceEjercicios } from "../../data/indiceEjercicios";

export const TemarioEjercicios = () => {
    const dividedSeccion = (tema) => {
        if (tema.id % 2 == 0) {
            return (`${s.light_blue}`)
        } else {
            return (`${s.blue}`)
        }
    }

    const isLastOne = (tema) => {
        if (indiceEjercicios.length == tema.id) {
            return(`${s.seccion_last}`)
        }
    }

    return (
        <>
            {/* ---aside--- */}
            {indiceEjercicios.map((tema) => {
                return (
                    // -----------contenedor
                    <div
                        key={tema.id}
                        className={`${s.seccion_container} ${dividedSeccion(tema)} ${isLastOne(tema)}`}
                    >
                        <div className={s.tema_container}>
                            <a href={"#tag"+tema.id}>
                                {/* -----------tema */}
                                <span className={s.tema}>{ tema.title }</span>
                            </a>
                        </div>
                        <ul className={s.seccion_subtemas_container}>
                            {/* -------subtemas */}
                            {
                                tema.subseccions.map((subseccion) => {
                                    return (
                                        <li key={subseccion.id}>
                                            <a href={"#tag"+subseccion.id}>
                                                <span>{ subseccion.title }</span>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                );
            })}
        </>
    );
};
