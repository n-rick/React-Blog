import React from 'react'
import Newsletter from './newsletter'
import Social from './social'

export default function Footer() {
    return (
        <div className="d-flex align-items-end">
            <footer className="bg-dark text-center text-white w-100" id="footer">
                <div className="container p-4">
                    <Social/>
                    <Newsletter/>
                    <section className="mb-2 text-secondary">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam.
                        </p>
                    </section>
                </div>
                <div className="text-center p-3"> © 2021 Copyright:
          <a className="text-white" href="mailto:e.ficadiere@gmail.com"><span className="text-success"> RicoDesign</span></a>
                </div>
            </footer>
        </div>

    )
}
