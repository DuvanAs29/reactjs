import'./Home.css'
export function Home(){

    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

        </header>
        <div className="banner text-white"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta assumenda veritatis blanditiis dolorem at accusamus quia, temporibus, mollitia provident, saepe distinctio eligendi eveniet. Totam neque itaque aliquid quia recusandae!</p>
        <button className='btn btn-outline-dark'>conocenos</button></div>
        <div className="container-fluid bg-black text-white">
          <div className="row p-5">
            <div className="col-12 text-center">
              <h5>LOS SARABAMBICHE</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quibusdam laborum magnam eius ex deserunt sint fuga dicta maiores? Totam accusamus reiciendis maiores cumque vel id sapiente officia aspernatur!</p>
              <img src="../../src/assets/img/fotologo.png" alt="logo" />
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="banner2"></div>

        <div className='container-fluid g-0'>
          <div className="row">
            <div className="col-12">
              <img src="../../src/assets/img/amparito.avif" alt="" className='img-fluid w-100' />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 my-5">
            <div className="col text-center">
              <div className="card h-100 p-3 shadow">
                <img src="../../src/assets/img/wallpaper2you_218330.jpg" alt="" className='img-fluid w-100' />
                <h3>SERVICIOS 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore placeat, minima illo, ullam quod, vitae accusamus numquam fugit suscipit amet voluptatibus facere in iusto aliquam dolores voluptatum! Expedita, tempora!</p>
                <hr />
                <h5 className='fw-bold text-success'>$855.000</h5>
                <button className='btn btn-primary'>
                  Ampliar
                  <i className="bi bi-cart"></i>
                  </button>
              </div>
            </div>
            <div className="col text-center">
            <div className="card h-100 p-3 shadow">
                <img src="../../src/assets/img/wallpapersden.com_halloween-hd-2021_500x500.jpg" alt="" className='img-fluid w-100' />
                <h3>SERVICIOS 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore placeat, minima illo, ullam quod, vitae accusamus numquam fugit suscipit amet voluptatibus facere in iusto aliquam dolores voluptatum! Expedita, tempora!</p>
                <hr />
                <h5 className='fw-bold text-success'>$855.000</h5>
                <button className='btn btn-primary'>
                  Ampliar
                  <i className="bi bi-cart"></i>
                  </button>
              </div>

            </div>
            <div className="col text-center">
            <div className="card h-100 p-3 shadow">
                <img src="../../src/assets/img/monja.webp" alt="" className='img-fluid w-100' />
                <h3>SERVICIOS 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore placeat, minima illo, ullam quod, vitae accusamus numquam fugit suscipit amet voluptatibus facere in iusto aliquam dolores voluptatum! Expedita, tempora!</p>
                <hr />
                <h5 className='fw-bold text-success'>$855.000</h5>
                <button className='btn btn-primary'>
                  Ampliar
                  <i className="bi bi-cart"></i>
                  </button>
              </div>

            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid bg-dark text-white">
            <div className="row p-5">
              <div className="col-6 text-end border-end">
                <h3>Polla cargada</h3>
                <h5>Medallo</h5>
                <h5>Derechos protegidos por la dian &copy;</h5>
              </div>

              <div className="col-6 align-self-center">
              <i class="bi bi-instagram p-2 fs-4"></i>
              <i class="bi bi-twitter-x p-2 fs-4"></i>
              <i class="bi bi-whatsapp p-2 fs-4"></i>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}