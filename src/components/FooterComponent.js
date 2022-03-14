import React from 'react';
import { Row, Col } from 'reactstrap';

function Footer() {
    
    return (
        <>
            <div className="site-footer">
                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/ronald-scheibel-21003822a/"><i className="fa fa-linkedin" /></a>{' '}
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/ronscheibel_"><i className="fa fa-twitter" /></a>{' '}
                <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCDpvI_BpoMILcRxXUXlbwvg"><i className="fa fa-youtube" /></a>
            </div>
        </>
    );
}

export default Footer;