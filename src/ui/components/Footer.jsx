import s from './Footer.module.css';

export const Footer = () => {

    return (
        <>
            <footer className={s.footer}>
                <div className={s.footer_container}>
                    <div className={s.footerColumnLeft}>
                        <p>GraPhEr es un software de uso abierto bajo la licencia <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="blank_" className={s.license}> GNU GENERAL PUBLIC LICENSE Versión 3.0 </a></p>
                    </div>

                    <div className={s.footerColumnRight}>
                        <p> © Luis Enrique Nava Garcia - 2025 </p>
                    </div>

                    <div className={s.footerContainerImage}>
                        <a href="https://github.com/LuisNavaFisBio/GraPhEr" target="blank_" className={s.footerImageLink}> <img src="../../../assets/icons/github-mark.svg" className={s.footerImage} /> </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
