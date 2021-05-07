import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaSkype,
    FaTwitter
} from 'react-icons/fa'
function Footer() {
    return (
        <>
            <footer className="footer-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">
                            <h1 className="logo me-auto"><a href="/index.html"><span>Emi</span>Stream</a></h1>
                            <address>
                                N° 13, Avenue SELO <br />
                            Quartier 1, N'djili<br />
                            Kinshasa - RDCongo
                            <hr className="my-2 bg-white w-50" />
                            Contact : +243823512934 <br />
                            E-mail : mulemanowa@gmail.com
                        </address>

                            <div className="reseauSocial" >
                                <ul>
                                    <li><a href="/"><FaTwitter /></a></li>
                                    <li><a href="/"><FaFacebookF /></a></li>
                                    <li><a href="/"><FaInstagram /></a></li>
                                    <li><a href="/"><FaLinkedinIn /></a></li>
                                    <li><a href="/"><FaSkype /></a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2">
                            <h1 className="affichage me-auto">Type film</h1>
                            <ul>
                                <li><a href="/">Action</a></li>
                                <li><a href="/">Comédie</a></li>
                                <li><a href="/">Drame</a></li>
                                <li><a href="/">Horreur</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2">
                            <h1 className="affichage me-auto">Production</h1>
                            <ul>
                                <li><a href="/">Année 2018</a></li>
                                <li><a href="/">Année 2019</a></li>
                                <li><a href="/">Année 2020</a></li>
                                <li><a href="/">Année 2021</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">

                            <h1 className="affichage me-auto">Qualité du visuel</h1>
                            <ul>
                                <li><a href="/">720p HDTV</a></li>
                                <li><a href="/">1080p BluRay</a></li>
                                <li><a href="/">720p BluRay</a></li>
                                <li><a href="/">1080p WEB-DL</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </footer>
            <div className="container-fluid footer-bottom clearfix">
                <div className="copyright">
                    © <strong><span>2021</span></strong>. Tous droits réservés</div>
                <div className="concepteur">
                    Conçu par <a href="/index.html">Eminence Mulema</a>
                </div>
            </div>
     </>
    )
}

export default Footer
