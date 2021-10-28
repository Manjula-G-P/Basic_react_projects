import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <footer>
                <div className="first_footer">
                    <div>
                        <p className="footer_heading">AMAZON</p>
                        <ul>
                            <li><a href="https://www.whatsapp.com/featuresFeatures">Features</a></li>
                            <li><a href="https://www.whatsapp.com/security">Security</a></li>
                            <li><a href="https://www.whatsapp.com/download">Download</a></li>
                            <li><a href="https://web.whatsapp.com/">WhatsApp Web</a></li>
                            <li><a href="https://www.whatsapp.com/business">Business</a></li>
                            <li><a href="https://www.whatsapp.com/privacy">Privacy</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer_heading">COMPANY</p>
                        <ul>
                            <li><a href="https://www.whatsapp.com/about">About</a></li>
                            <li><a href="https://www.whatsapp.com/join">Careers</a></li>
                            <li><a href="https://whatsappbrand.com/">Brand Center</a></li>
                            <li><a href="https://www.whatsapp.com/contact">Get in touch</a></li>
                            <li><a href="https://blog.whatsapp.com/">Blog</a></li>
                            <li><a href="https://www.whatsapp.com/stories">WhatsApp Stories</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer_heading">DOWNLOAD</p>
                        <ul>
                            <li><a href="https://www.whatsapp.com/download">Mac/Pc</a></li>
                            <li><a href="https://www.whatsapp.com/android">Android</a></li>
                            <li><a href="https://apps.apple.com/us/app/whatsapp-messenger/id310633997">iPhone</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer_heading">HELP</p>
                        <ul>
                            <li><a href="https://faq.whatsapp.com/">Help Center</a></li>
                            <li><a href="https://twitter.com/whatsapp">Twitter</a></li>
                            <li><a href="https://www.facebook.com/WhatsApp">Facebook</a></li>
                            <li><a href="https://www.whatsapp.com/coronavirus">Coronavirus</a></li>

                        </ul>
                    </div>
                </div>
                <div className="second_footer">
                    <p>
                        <a href="#">2021 &copy;Amazon LLC</a>
                        <span><a href="https://www.whatsapp.com/legal/">Privacy & Terms </a></span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
