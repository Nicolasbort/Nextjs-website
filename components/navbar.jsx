import Link from 'next/link'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-green">
            <div class="container-fluid">
                <Link href="/">
                    <a class="navbar-brand fw-bold text-decoration-none">Inicio</a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link href="/sobre">
                                <a class="nav-link fw-bold text-decoration-none">Sobre</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/cadastrar">
                                <a class="nav-link fw-bold text-decoration-none">Cadastrar-se</a>
                            </Link>
                        </li>
                    </ul>
                    <form>
                        <input class="form-control" type="text" placeholder="Pesquisar postagem..."/>
                    </form>
                </div>
            </div>
        </nav>
    )
}