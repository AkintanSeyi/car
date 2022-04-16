import React, { useEffect , useRef, useState} from "react";
import {BsFillBagCheckFill , BsFillCreditCardFill} from "react-icons/bs"
import {AiOutlineArrowUp} from "react-icons/ai"
import people2 from "./data1";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {AiFillCar} from "react-icons/ai";
import {IoReceiptSharp} from "react-icons/io5"
import {BsNewspaper} from "react-icons/bs";
import {GiAutoRepair} from "react-icons/gi";
import {BsJournalBookmarkFill} from "react-icons/bs";
import {AiOutlineSafetyCertificate} from "react-icons/ai";
import {GiNotebook} from "react-icons/gi";
import { FaQuoteRight , FaInstagramSquare, FaTwitterSquare , FaSnapchatSquare , FaLinkedin , FaFacebookSquare } from 'react-icons/fa';
import data from './data';
import people3 from "./data2";






import Aos from "aos";
import "aos/dist/aos.css"

const Index3 = () => {

  
  const A = useRef(null)

  const [h, setH] = useState('three-line')
  const [t, setT] = useState( "side-bar-edit")
 
  const [r , setR] = useState('fourth-body__button')


 
    
      

  

  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);


  const Look = () => {
    setT("side-bar")
    setH('three-line-edit')
      }
    
      const Look1 = () => {
        setT("side-bar-edit")
    setH('three-line')
      } 

      
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  useEffect(() => {
 
    Aos.init({duration:2000});
  })

 



  return(
    <main className="main">
      <section className="section">

      <div  className=  {t}  >
        <div    ref={A} onClick= {Look1}     className= {h}></div>
      
          <section className="side-bar__holder">

               <ul className="side-bar__ul">
                 <li className="side-bar__li">home</li>
                 <li className="side-bar__li">cars</li>
                 <li className="side-bar__li"> prices</li>
                 <li className="side-bar__li">team</li>
                 <li className="side-bar__li">contact us</li>
               </ul>
              <div className="side-bar__icon-holder">
                <FaInstagramSquare   className="side-bar__icon" ></FaInstagramSquare>
                <FaTwitterSquare    className="side-bar__icon" ></FaTwitterSquare >
                <FaLinkedin   className="side-bar__icon" ></FaLinkedin>
              </div>
          </section>
        </div>
        
      <div className="first-section">

      <div className="first-section__video-holder">
 <video controls loop  muted  autoPlay  className="first-section__video">
      <source type="video/mp4" src={'./web-car/pexels-treedeo-footage-9129105.mp4'} />
  </video> 
 </div>
 <div ref={A}   onClick={Look}     className="three-line"></div> 

            <section className="first-section__holder">  
  
                 <h2 data-aos = "fade-down" className="first-section__h2">as-cars</h2>
                 <p data-aos = "fade-right" className="first-section__p">number one leading cars sales company</p>
                 <input data-aos = "fade-left"  placeholder="search for desired car" type="text" className="first-section__input" />
           <button data-aos = "fade-up" className="first-section__button">search</button>
            </section>
      </div>

      <div className="second-section">

        <section className="second-section__holder">

          <h2  data-aos = "fade-down" className="second-section__h2">
          All the services we offer
          </h2>
         
         <p data-aos = "fade-down"  className="second-section__p">

         We're your one-stop shop for buying and selling your car. Get matched to your perfect car, or sell one swiftly.

         </p>

         <section className="second-section__main">
                 
                <div data-aos = "fade-right" className="second-section__1">
                  <div className="second-section__1-icon-holder">
                        <AiFillCar className="second-section__1-icon">

                        </AiFillCar>
                  </div>
                  <div className="second-section__div">
                    <h2 className="second-section__1-div-h2">
                      shop
                    </h2>
                    <p className="second-section__1-div-p">
                    Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.
                    </p>
                    <a href="#" className="second-section__button">
                    Find cars for sale
                    </a>
                  
                  </div>
                </div>




                <div data-aos = "fade-left"  className="second-section__1">
                  <div className="second-section__1-icon-holder">
                        <BsJournalBookmarkFill className="second-section__1-icon">

                        </BsJournalBookmarkFill>
                  </div>
                  <div className="second-section__div">
                    <h2 className="second-section__1-div-h2">
                    Research
                    </h2>
                    <p className="second-section__1-div-p">
                    Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.
                  
                  
                    </p>
                    <a href="#" className="second-section__button">
                    Compare what's out there
                    </a>
                  </div>
                </div>


                <div data-aos = "fade-right" className="second-section__1">
                  <div className="second-section__1-icon-holder">
                        <IoReceiptSharp className="second-section__1-icon">

                        </IoReceiptSharp>
                  </div>
                  <div className="second-section__div">
                    <h2 className="second-section__1-div-h2">
                    News
                    </h2>
                    <p className="second-section__1-div-p">
                    Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.
                  
                 
                    </p>
                    <a href="#" className="second-section__button">
                    Learn from the best
                    </a>
                  </div>
                </div>


                <div data-aos = "fade-left"  className="second-section__1">
                  <div className="second-section__1-icon-holder">
                        <BsNewspaper className="second-section__1-icon">

                        </BsNewspaper>
                  </div>
                  <div className="second-section__div">
                    <h2 className="second-section__1-div-h2">
                    Sell
                    </h2>
                    <p className="second-section__1-div-p">
                    Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.
                  
                  
                    </p>
                    <a href="#" className="second-section__button">
                    Get expert selling advice
                    </a>
                  </div>
                </div>


                <div data-aos = "fade-right" className="second-section__1">
                  <div className="second-section__1-icon-holder">
                        <GiAutoRepair className="second-section__1-icon">

                        </GiAutoRepair>
                  </div>
                  <div className="second-section__div">
                    <h2 className="second-section__1-div-h2">
                    Service & Repair
                    </h2>
                    <p className="second-section__1-div-p">
                    Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.
                  
                  
                    </p>
                    <a href="#" className="second-section__button">
                    Learn to DIY
                    </a>
                  </div>
                </div>


                <div data-aos = "fade-left" className="second-section__1">
                  <div className="second-section__1-icon-holder">
                        <AiOutlineSafetyCertificate className="second-section__1-icon">

                        </AiOutlineSafetyCertificate>
                  </div>
                  <div className="second-section__div">
                    <h2 className="second-section__1-div-h2">
                    Certified Pre-Owned
                    </h2>
                    <p className="second-section__1-div-p">
                    Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.
                    </p>
                    <a href="#" className="second-section__button">
                    Explore CPO
                    </a>
                  </div>
                </div>

         </section>


        </section>





      </div>




      <div className="third-section">
        <h2 data-aos = "fade-down"  className="third-section__head">
          our latest product available
        </h2>
        <p data-aos = "fade-right" className="third-section__p">
          this are some of the latest cars in our store right now
        </p>
        <section className="third-section__holder">
         
       
    
      <div className="third-section__main">

        {people.map((person, personIndex) => {
          const { id,name, image, cost, func, comapny, aval } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
<section className="third-section__section">
<article className={position} >

  <div className="third-section__sect-1">
  <img src={image} alt={name} className="person-img" />
  </div>
  
             <div className="third-section__sect-2">
               <ul className="third-section__ul">
                 <li className="third-section__li"> name : {name}</li>
                 <li className="third-section__li"> company : {comapny}</li>
                 <li className="third-section__li2"> function :  {func} </li>
               </ul>
               <ul className="third-section__ul2">
                 <li className="third-section__li"> cost : {cost} </li>
                 <li className="third-section__li"> available : {aval}  </li>
               </ul>
             </div>
            
            </article>

</section>
           
          )
        })}
        
     </div>
  

        </section>
      </div>


      <div className="fourth-section">
                 <section className="fourth-section__holder">

                   <h2 className="fourth-section__h2">
                     products coming soon
                   </h2>

                   <div className="fourth-section__main">
                          
{
 people3.map((e) => {
  const {name, image, aval, cost, comapny, func} = e;


  return (
     
    <div className="fourth-section__box">
      <div className="fourth-section__box-1">
        <img src={image} alt="" className="fourth-section__img" />
      </div>
      <div className="fourth-section__box-2">
       <p className="fourth-section__p"> name: {name} </p>
       <p className="fourth-section__p"> cost :{cost}  </p>
       <p className="fourth-section__p"> company : {comapny}  </p>
       <p className="fourth-section__p">  available : {aval} </p>
      </div>





    </div>


  )

 })

  
}


                   </div>

                 </section>
      </div>





      <section>
          <div class="fifth">
              <div class="fifth-main">
                  <div class="form">
                      <form action="#" class="form-main">
                        <div class="u-center  u-margin-bottom-2">
                            <h3 class="heading-secondary">
                                register
                            </h3>
                        </div>
                         <div class="form-main1">
                             <input type="text" class="form-input1" placeholder="Full name" id="name" required/> 
                            
                             <label for="name" class="label1">Full name</label>
                         </div>
                         <div class="form-main1">
                            <input type="email" class="form-input1" placeholder="Email address" id="email" required/> 
                            <label for="email" class="label1">Email address </label>
                        </div>
                        <div class="form-radio">
                            <div class="form-radio1">
                                <input type="radio" class="form-radio-input1" id="radio1" name="size"/>
                                <label for="radio1" class="label2">
                                    <span class="form-radio-button">

                                    </span>
                                    
                                     cars avaluable now
                                </label>
                            </div>
                            <div class="form-radio1">
                                <input type="radio" class="form-radio-input1" id="radio2" name="size"/>
                                <label for="radio2" class="label2">
                                    <span class="form-radio-button">

                                    </span>
                                     cars on delivery 
                                </label>
                            </div>
                        </div>

                        <div>
                            <button class="fifth-footer"> Next Step  &rarr;</button>
                         </div>
                      </form>
                  </div>
              </div>

          </div>




      </section>



      
    


      <div className="footer">
    <section className="footer__holder">

      <div data-aos = "fade-right" className="footer__part1">

        <h2 className="footer__h2">
        Reach Us On The Following Places
        </h2>
       
        <div className="footer__num">
           <FaInstagramSquare className="footer__icon"></FaInstagramSquare>
           <FaFacebookSquare className="footer__icon"></FaFacebookSquare>
           <FaTwitterSquare className="footer__icon"></FaTwitterSquare>
        </div>


      </div>

      <ul data-aos = "fade-up" className="footer__ul">
      <li className="footer__li2">  AS cars  </li>
        <li className="footer__li1">new</li>
        <li className="footer__li1">  coming soon
</li>
        <li className="footer__li1">  on sells </li>
        

      </ul>
      
      <section data-aos = "fade-up" className="footer__ul1">
      <div className="footer__li2">  social handles </div>
   <section className="footer__li2-2">
   <div className="footer__li3"><FaTwitterSquare className="footer__icon"></FaTwitterSquare></div>
        <div className="footer__li3">  <FaInstagramSquare className="footer__icon"></FaInstagramSquare></div>
        <div className="footer__li3">  <FaFacebookSquare className="footer__icon"></FaFacebookSquare></div>
        <div className="footer__li3">  <FaLinkedin className="footer__icon"></FaLinkedin>   </div>
        <div className="footer__li3"> <FaSnapchatSquare className="footer__icon"></FaSnapchatSquare>   </div>

   </section>
     
      </section>
      
      <div data-aos = "slide-left" className="footer__ul3">
      <p className="footer__li2">register</p>
        <p className="footer__li4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam odit cum consectetur laudantium praesentium.</p>
     
     <div className="footer__input-holder">
     <input placeholder="subscribe" type="text" className="footer__input" />
<button className="footer__button">subscribe</button>
      </div>
     </div>
       




    </section>

    <div  className="footer__name"> made by <span className="footer__span"> Patricia-Son</span>   </div>



  </div>

















     
      </section>
    </main>
    
    )






}

export default  Index3;