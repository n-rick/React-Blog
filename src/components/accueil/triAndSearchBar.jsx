import React from 'react'

export default function triAndSearchBar() {
    return (
        <div>
            <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group m-2 p-3">
                    <button type="button" className="btn btn-outline-info">Tri</button>
                </div>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Votre recherche" />
                    </div>
                    <button type="submit" className="btn btn-outline-warning m-2">Recherche</button>
                </form>
            </div>
        </div>
    )
}
