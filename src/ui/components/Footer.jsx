import s from './Footer.module.css';
import github_icon from "/assets/icons/github-mark.svg";

export const Footer = () => {

    return (
        <>
            <footer className={s.footer}>
                <div className={s.footer_container}>
                    <div className={s.footerColumnLeft}>
                        <div className={s.license_container}>
                            <div><p>GraPhEr es un software de uso abierto bajo la licencia&nbsp;</p> </div>
                            <div><a href="https://www.gnu.org/licenses/gpl-3.0.html" target="blank_" className={s.license}> GNU GENERAL PUBLIC LICENSE Versión 3.0 </a></div>
                        </div>
                    </div>

                    <div className={s.footerColumnCenter}>
                        <p> </p>
                    </div>

                    <div className={s.footerColumnRight}>
                        <div className={s.author_container}>
                            <div><p>© Luis Enrique Nava Garcia&nbsp;</p> </div>
                            <div><p>2025</p></div>
                        </div>
                    </div>

                    <div className={s.footerContainerImage}>
                        <a href="https://github.com/LuisNavaFisBio/GraPhEr" target="blank_" className={s.footerImageLink}> <img src={github_icon} className={s.footerImage} /> </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
