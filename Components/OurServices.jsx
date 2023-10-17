import Link from "next/link";
import Image from "next/image";
import styles from "../public/style/OurServiceStyle.css"
import greenHere from "../public/materials/greenHere.svg";
import aquaHere from "../public/materials/aquaHere.svg";
import orangeHere from "../public/materials/orangeHere.svg";
import turkuazHere from "../public/materials/turkuazHere.svg";

const OurServices = () => {
    return (
        <div className="mainServiceContainer">
            <div className="blueServiceContainer">
                <div className="blueContentContainer">
                    <div className="headServiceText">
                        <h1>Our Services</h1>
                        <h6>Mood Global Services offers a range of services to help your business thrive in the digital age.
                            From <br />comprehensive consulting to smart contract creation, mobile app development, and software development for <br />
                            Web 2.0 and 3.0, we're your partners in the digital transformation
                            journey.</h6>
                    </div>
                    <div className="serviceBoxContainer">
                        <div className="serviceTContainer">
                            <div className="tLeftService">
                                <h3>Consulting</h3>
                                <button>.</button>
                                <div className="textImageCont">
                                    <Image src={greenHere}></Image>
                                    <h4>MicaR Compliance 🇪🇺</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={greenHere}></Image>
                                    <h4>Blockchain advisory</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={greenHere}></Image>
                                    <h4>Tokenomics Advisory</h4>
                                </div>
                            </div>
                            <div className="bLeftService">
                                <h3>Audit Smart Contracts</h3>
                                <button>.</button>
                                <div className="textImageCont">
                                    <Image src={aquaHere}></Image>
                                    <h4>Security Audit</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={aquaHere}></Image>
                                    <h4>Logic Audit</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={aquaHere}></Image>
                                    <h4>Analytics & Performance Tools</h4>
                                </div>
                            </div>
                        </div>
                        <div className="serviceBContainer">
                            <div className="tRightService">
                                <h3>Smart Contracts Solution</h3>
                                <button>.</button>
                                <div className="textImageCont">
                                    <Image src={orangeHere}></Image>
                                    <h4>ERC-Model Components</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={orangeHere}></Image>
                                    <h4>Dapps Architecture</h4>
                                </div>
                            </div>
                            <div className="bRightService">
                                <h3>Development</h3>
                                <button>.</button><div className="textImageCont">
                                    <Image src={turkuazHere}></Image>
                                    <h4>Cloud & Database Management</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={turkuazHere}></Image>
                                    <h4>Web & Apps Development</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={turkuazHere}></Image>
                                    <h4>AI Implementations</h4>
                                </div>
                                <div className="textImageCont">
                                    <Image src={turkuazHere}></Image>
                                    <h4>API Connections</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;