

import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f8f9fa" }} className="pt-5 pb-4 border-top mt-5">
      <div className="container">
        <div className="row">
          {/* Logo and Company Info */}
          <div className="col-md-3 mb-4">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Logo"
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Referral programme</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Zerodha.tech</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press & media</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Z-Connect blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">List of charges</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Open an account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Fund transfer</a></li>
              <li><a href="#" className="text-muted text-decoration-none">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-5 text-muted small">
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
