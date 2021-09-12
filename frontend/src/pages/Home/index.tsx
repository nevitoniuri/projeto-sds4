import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

import imgJava from 'assets/img/java-original.svg';
import imgSpring from 'assets/img/spring-original.svg'
import imgPostgreSQL from 'assets/img/postgresql-original.svg'
import imgTypescript from 'assets/img/typescript-original.svg'
import imgBootstrap from 'assets/img/bootstrap-original.svg'
import imgReact from 'assets/img/react-original.svg'

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar Dashboard
                    </Link>
                    <hr />
                </div>

                <h5 className="text-center">Tecnologias Utilizadas:</h5>

                <div className="card-group py-3 text-center">
                    <div className="card col-sm-2 m-1">
                        <img className="card-img-top py-2" src={imgJava} alt="DevSuperior" />
                        <div className="card-body">
                            <h5 className="card-title">Java</h5>
                        </div>
                    </div>
                    <div className="card col-sm-2 m-1">
                        <img className="card-img-top py-2" src={imgSpring} alt="DevSuperior"  />
                        <div className="card-body">
                            <h5 className="card-title">Spring Boot</h5>
                        </div>
                    </div>
                    <div className="card col-sm-2 m-1">
                        <img className="card-img-top py-2" src={imgPostgreSQL} alt="DevSuperior"  />
                        <div className="card-body">
                            <h5 className="card-title">PostgreSQL</h5>
                        </div>
                    </div>
                    <div className="card col-sm-2 m-1">
                        <img className="card-img-top py-2" src={imgReact} alt="DevSuperior"  />
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                        </div>
                    </div>
                    <div className="card col-sm-2 m-1">
                        <img className="card-img-top py-2" src={imgTypescript} alt="DevSuperior" />
                        <div className="card-body">
                            <h5 className="card-title">TypeScript</h5>
                        </div>
                    </div>
                    <div className="card col-sm-2 m-1">
                        <img className="card-img-top py-2" src={imgBootstrap} alt="DevSuperior" />
                        <div className="card-body">
                            <h5 className="card-title">Bootstrap</h5>
                        </div>
                    </div>
                </div>
                <p className="lead text-center" >Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um backend construído com Spring Boot.</p>

            </div>
            <Footer />
        </>
    );
}

export default Home;