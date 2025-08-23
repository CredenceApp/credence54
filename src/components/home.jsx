import { faHandPointer} from "@fortawesome/free-regular-svg-icons";
import { faLock,faShieldAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const heroImg = require('../assets/Hero Image.png');
const testimonial1 = require('../assets/testimonial1.png');
const partner1 = require('../assets/image 1.png');
const partner2 = require('../assets/image 3.png');
const feature1 = require('../assets/Rectangle 43.png');
const feature2 = require('../assets/Rectangle 44.png');
const chaosimg = require('../assets/chaosimg.png');
const featurebg1 = require('../assets/Polygon 2 (1).png');
const featurebg2 = require('../assets/Polygon 2.png');
const circles = require('../assets/Group 36.png');
function Home() {


    const responseOutput = (response) => {
      // console.log(response);
    };
    const errorOutput = (error) => {
      // console.log(error);
    };
  
    return (
      <div>
          <section className="herosect landcontainer">
              <div className=" hero_content landcontainer">
                <div className="landcontent ">
                  <h1>Trade Commodities With Confidence</h1>
                  <p>Credence serves as a trustworthy third party platform, protecting the integrity of your transactions when dealing with commodity traders.</p> 

                  <button><Link to="reg/signup">Create Account</Link></button>
                  <GoogleLogin className='googlesignin' onSuccess={responseOutput} onError={errorOutput} />
                </div>
                {/* <div className="landpartners">
                  <p>Industry Validation & Media Mention</p>
                  <div className="partnerImg">
                    <img src={partner2} alt="" />
                    <img src={partner1} alt="" />
                  </div>
                </div> */}
              </div>
              <div className='heroImage'>
                  <img src={heroImg} alt="" />
                </div>
          </section>

          {/* <section className = "whatsect">
             <div className="landcontainer whatContainer">
                  <div className="whatHead">
                     <h3 className="headings">What is <b>Credence</b></h3>
                  </div>

                  <div className="whys">
                    <div className="topwhycard">
                      <div className="whyCard">
                        <span className="whyCardBefore"></span>                        
                        <h3>Smart Escrow</h3>
                        <p>Commodity buyers and sellers are concerned about being taken advantage of in transactions. Credence protects your transaction by ensuring a risk free transaction between buyers and sellers </p>
                      </div>
                      <div className=" whyCard2">
                          <h3>Buyer Protection</h3>
                          <p>Credence provides you with the confidence you need to make any commodity purchase. making sure your money is 100% safe while your order is being delivered to you.</p>
                          <span className="whyCardBefore2"></span>                        
                      </div>
                    </div>
                      <div className="  whyCard2 whycard3">
                      <span className="whyCardBefore3"></span>                        
                          <h3>Seller Protection</h3>
                          <p>Credence provides you the security against fraudulent transactions, ensuring your goods are securely delivered and your payment is received by you.</p>
                      </div>
                  </div>
                  
             </div>
          </section> */}
          {/* trust */}
          {/* <section className='trustsect'>
              <div className="trusthead">
                <h3 className="headings">Why trust <b>CREDENCE</b>?</h3>
              </div>
              <div className="trustContent">
                <div className="trustcard">
                  <span className="iconbg"> <FontAwesomeIcon icon={faShieldAlt} size= '4x' color="white"/> </span>
                  <h3 className="headings">Reliability</h3>
                  <span className="shortline"> <hr/> </span>
                  <p className="paragraphText">As a buyer or seller, you no longer need to rely on someone you don't know before proceeding with a transaction.</p>
                </div>
                <div className="trustcard">
                  <span className="iconbg"> <FontAwesomeIcon icon={faUserShield} size= '4x' color="white"/> </span>
                  <h3 className="headings">Secure Payments</h3>
                  <span className="shortline"> <hr/> </span>
                  <p className="paragraphText">As a buyer or seller, you no longer need to rely on someone you don't know before proceeding with a transaction.</p>
                </div>
                <div className="trustcard">
                  <span className="iconbg"> <FontAwesomeIcon icon={faShieldAlt} size= '4x' color="white"/> </span>
                  <h3 className="headings">Transparency</h3>
                  <span className="shortline"> <hr/> </span>
                  <p className="paragraphText">As a buyer or seller, you no longer need to rely on someone you don't know before proceeding with a transaction.</p>
                </div>
                <div className="trustcard">
                  <span className="iconbg"> <FontAwesomeIcon icon={faHandPointer} size= '4x' color="white"/> </span>
                  <h3 className="headings">Ease of Use</h3>
                  <span className="shortline"> <hr/> </span>
                  <p className="paragraphText">As a buyer or seller, you no longer need to rely on someone you don't know before proceeding with a transaction.</p>
                </div>
                <div className="trustcard">
                  <span className="iconbg"> <FontAwesomeIcon icon={faShieldAlt} size= '4x' color="white"/> </span>
                  <h3 className="headings">Truck Brokerage</h3>
                  <span className="shortline"> <hr/> </span>
                  <p className="paragraphText">As a buyer or seller, you no longer need to rely on someone you don't know before proceeding with a transaction.</p>
                </div>
                <div className="trustcard">
                  <span className="iconbg"> <FontAwesomeIcon icon={faShieldAlt} size= '4x' color="white"/> </span>
                  <h3 className="headings">Responsive Support</h3>
                  <span className="shortline"> <hr/> </span>
                  <p className="paragraphText">As a buyer or seller, you no longer need to rely on someone you don't know before proceeding with a transaction.</p>
                </div>
              </div>
          </section> */}

          {/* <section className="featuresSect">
            <img src={featurebg2} className="featurebg2" alt="" />
            <img src={featurebg1} className="featurebg1" alt="" />
            <img src={circles} className="featurebg2" alt="" />
            <div className="trusthead feathead">
              <h3  className="headings">Features</h3>
            </div>
            <div className="landcontainer feature_container">
              <div className="feat-detail">
                  <div className="feat_detail_cont">
                      <h3 className="headings">Escrow as a Service</h3>
                      <p className="paragraphText">Credence smart escrow provides you, the buyer, with the confidence you need to make any purchase. We also protect the seller by verifying the buyer's identity and funding prior to delivery.</p>
                  </div>
                  <img src={feature1} alt="" />
              </div>
              <div className="feat-detail feat-detail2">
              <img src={feature2} alt="" />
                  <div className="feat_detail_cont">
                      <h3 className="headings">Market Place</h3>
                      <p className="paragraphText">Not only can you secure your transactions with Credence, but as traders, you can now showcase your commodities on the platform as well. Credence provides you with a storefront to showcase all of your products and connect with buyers faster.</p>
                  </div>
              </div>
            </div>
          </section> */}


          {/* <section className="landcontainer worksect">
            <div className="howitworks">
              <div className="trusthead">
                <h5 className="headings">How it works</h5>
              </div>
              <h3 className="Iheading">
              Protect your transactions by using Credence
              </h3>
              <p className="paragraphText">Whether you are a buyer or seller, Credence's smart escrow system procedures verify every step of every transaction, providing you with the security you require in four simple steps</p>
              <button><NavLink to="/signup">Get started</NavLink></button>
            </div>
            <div className="works">
              <div className="work">
                <FontAwesomeIcon color="#007538" icon={faLock}/>
                <p>Buyer insure funds with Credence</p>
              </div>
              <div className="work">
                <p>Seller is notified and commodities are delivered</p>
                <FontAwesomeIcon color="#007538" icon={faLock}/>
              </div>
              <div className="work">
                <FontAwesomeIcon color="#007538" icon={faLock}/>
                <p>Buyer receives and verifies commodities</p>
              </div>
              <div className="work">
                <p>On verification, Credence releases funds to the seller</p>
                <FontAwesomeIcon color="#007538" icon={faLock}/>
              </div>
            </div>
          </section> */}
          {/* <section className="testimonialsect">
            <div className="headdd">
              <div className="trusthead"><h4>Testimonial</h4></div>
              <h1>What <br />Our <br />CLients <br />Say</h1>
            </div>
            <div className="testbody">
              <div className="whyCard slick-slide">
                <div className="topppp">
                  <img src={testimonial1} alt="" />
                  <h5>Olatunde</h5>
                </div>
                <div className="topbody">
                  <p>I believe this is a game changer for me as a commodity trader. A couple of funds have been held by sellers, and sometimes I get sub-standard products. This platform gave me an opportunity to have a transparent transaction and manage my dealings</p>
                </div>
              </div>
              <div className="whyCard slick-slide">
                <div className="topppp">
                  <img src={testimonial1} alt="" />
                  <h5>Olatunde</h5>
                </div>
                <div className="topbody">
                  <p>I believe this is a game changer for me as a commodity trader. A couple of funds have been held by sellers, and sometimes I get sub-standard products. This platform gave me an opportunity to have a transparent transaction and manage my dealings</p>
                </div>
              </div>
              <div className="whyCard slick-slide">
                <div className="topppp">
                  <img src={testimonial1} alt="" />
                  <h5>Olatunde</h5>
                </div>
                <div className="topbody">
                  <p>I believe this is a game changer for me as a commodity trader. A couple of funds have been held by sellers, and sometimes I get sub-standard products. This platform gave me an opportunity to have a transparent transaction and manage my dealings</p>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className=" landcontainer chaos">
            <div className="chaoscontent">
              <h4>We are bringing order to the chaos of commodity trading by providing a more transparent, dependable, and secure platform for the agricultural commodities market. </h4>
              <h4>CREATE AN ACCOUNT FOR FREE!</h4>
              <button><NavLink to="/signup">Create account</NavLink></button>
            </div>
            <div className="chaosimgcontainer">
              <img src={chaosimg} alt="" />
            </div>
          </section> */}
        </div> 
     );
}

export default Home