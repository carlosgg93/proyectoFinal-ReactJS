import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-inner">
                    <img src='../assets/images/logo-promax.svg' className="logofooter"/>
                      <div className="web">
                          <a href="mailto:promax@promax.es">promax@promax.es</a>
                          <a href="http://www.promax.es/" target="_blank">promax.es</a>
                      </div>
                    <div className="data">
                        <span>Tel: (+34) 931 847 700</span>
                        <span>UK: (+44) 01727 832266</span>
                        <span>FR: (+33) 06 62 81 20 00</span>
                        <span>DE: (+49) 0 62 55 - 20 42</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;