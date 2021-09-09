import imgLinkedin from 'assets/img/linkedin-original.svg';
import imgGithub from 'assets/img/github-original.svg'

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">

            <div className="container">
                <p className="text-light">
                    <div className="my-2 my-md-0">
                        App desenvolvido por <strong> Iuri Néviton </strong>
                    </div>
                    <div >
                        <a href="https://www.linkedin.com/in/nevitoniuri/" target="_blank" rel="noreferrer" id="nomeRodape">
                            <img src={imgLinkedin} alt="DevSuperior" width="30" />
                        </a>

                        <a href="https://github.com/nevitoniuri/projeto-sds4" target="_blank" rel="noreferrer" id="nomeRodape">
                            <img src={imgGithub} alt="DevSuperior" width="35" />
                        </a>
                    </div>
                </p>
                <div className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior:
                    <a href="https://instagram.com/devsuperior.ig" target="_blank"
                        rel="noreferrer">@devsuperior.ig</a></small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;