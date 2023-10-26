export function Formulario() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i className="bi bi-person-square"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellidos"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i className="bi bi-person-square"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombres"
                            />
                        </div>
                    </div>
                </div>

                

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i class="bi bi-backpack4"></i>
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="edad"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i class="bi bi-backpack4"></i>
                            </span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="nacimiento"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i class="bi bi-file-earmark-richtext"></i>
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="documento"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i class="bi bi-envelope"></i>
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="correo"
                            />
                        </div>
                    </div>
                    
                    
                </div>


                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <select className="form-select" >
  <option selected>Selecciona una opcion</option>
  <option value="1">1/2 pollo+papas y gaseosa</option>
  <option value="2">Alitas bq</option>
  <option value="3">Nugeets</option>
</select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <select className="form-select" >
  <option selected>Selecciona una opcion</option>
  <option value="1">Clase de tango</option>
  <option value="2">Clase de champeta</option>
  <option value="3">clase de satanismo</option>
</select>
                            
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-success my-3 mx-auto d-block"  type="submit">Enviar</button>
               

            </form>
        </>
    )
}