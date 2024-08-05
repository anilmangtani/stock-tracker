import React from "react";
import "../pages/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerSection">
                    <h3>About Us</h3>
                    <p>We are a company dedicated to making better investment decisions with alternative data.</p>
                </div>
                <div className="footerSection">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h3>Contact Us</h3>
                    <p>Email: info@company.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>
            </div>
            <div className="footerBottom">
                <p>Created by Anil Mangtani</p>
            </div>
        </footer>
    );
};

export default Footer;
