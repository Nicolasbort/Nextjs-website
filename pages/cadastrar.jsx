import Layout from "../components/layout";

export default function Cadastrar() {
    return (
        <Layout>
            <form className="row my-5 mx-auto p-3 shadow-lg rounded w-50 bg-light" method="POST" action="#">
                <h1 className="h3 mb-3 fw-normal text-center">Cadastro</h1>

                <div className="col-md-6 col-sm-12 mb-2">
                    <input type="text" className="form-control" id="name" placeholder="Nome" required/>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                    <input type="email" className="form-control" id="email" placeholder="E-mail" required/>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                    <input type="password" className="form-control" id="password" placeholder="Senha" required/>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                    <input type="password" className="form-control" id="repeat-password" placeholder="Repita a senha" required/>
                </div>
                
                <button className="w-100 btn btn-green" type="submit">Cadastrar</button>
            </form>
        </Layout>
    )
}