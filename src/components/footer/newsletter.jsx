import React from 'react'

export default function Newsletter() {
    return (
        <section>
            <form>
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <p className="pt-2">
                            <strong>Inscrivez vous à la newsletter</strong>
                        </p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="form-outline form-white mb-4">
                            <input type="email" id="form5Example2" className="form-control" placeholder="Indiquez votre adresse mail"/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-warning mb-4">
                            souscrire
                                    </button>
                    </div>
                </div>
            </form>
        </section>

    )
}
