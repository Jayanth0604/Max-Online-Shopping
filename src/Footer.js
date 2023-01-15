import React from 'react'

function Footer() {
    return (
        <div className='Footer-part'>
            <hr></hr>
            <div className='footerparts'>
                <div className='footerpart1'>
                    <h2>Subscribe to our awesome emails</h2>
                    <p>Get our latest offers amd news straight in your inbox</p>
                    <input placeholder='please enter your email address' className='input-footer'></input><button className='buton-footer'>submit</button>
                </div>
                <div className='footerpart2'>
                    <h2>Download our apps</h2>
                    <p>shop our products and offers on the go</p>
                    <div className='app'>
                        <div className='app1'>
                  <img  className='app11'src='assets/images/play.png'></img>
                        </div>
                        <div className='app2'>
   <img src='assets/images/app.png' className='app11'></img>
                        </div>
                    </div>
                </div>
            </div>

<hr></hr>
            <div className='itemsections-footer'>
                <div className='women-footer'>
                    <h2>women</h2>
            <ul className='footer-ul'>
                <li className='footer-li'>tops</li>
                <li className='footer-li'>dresses</li>
               <li className='footer-li'>sportswear</li>
               <li className='footer-li'>bottoms</li>
                <li className='footer-li'>winterwear</li>
                <li className='footer-li'>sleepwear</li>
                <li className='footer-li'>shoes</li>
            </ul>
                </div>

                <div className='men-footer'>
                    <h2>men</h2>
                <ul className='footer-ul'>
                <li className='footer-li'>tops</li>
                <li className='footer-li'>bottom</li>
               <li className='footer-li'>sportswear</li>
               <li className='footer-li'>winterwear</li>
                <li className='footer-li'>shoes</li>
      
            </ul>
                </div>
                <div className='explore-footer'>
                    <h2>explore</h2>
                <ul className='footer-ul'>
                <li className='footer-li'>offers</li>
                <li className='footer-li'>magazines</li>
       
      
            </ul>
                </div>
                <div className='about-footer'>
                    <h2>about</h2>
                <ul className='footer-ul'>
                <li className='footer-li'>about</li>
                <li className='footer-li'>write to us</li>
               <li className='footer-li'>take a tour</li>
               <li className='footer-li'>carrers</li>
                <li className='footer-li'>blog</li>
                <li className='footer-li'>landmark carrers</li>
      
            </ul>
                </div>
                <div className='help-footer'>
                    <h2>help</h2>
                <ul className='footer-ul'>
                <li className='footer-li'>contact us</li>
                <li className='footer-li'>shipping</li>
               <li className='footer-li'>return process</li>
               <li className='footer-li'>help centre</li>
                <li className='footer-li'>policy</li>
      
            </ul>
                </div>
            </div>
<hr></hr>


<div className='footer-end'>
<div className='footerr'>
    
          <img className='logo_img1' src='assets/images/logo1.png'></img>
          <div className='foooter1'>
    <p>© 2022 Retail World Limited.
Terms & Conditions - Privacy Policy</p>
</div>
        </div>
      
</div>








        </div>

    )
}

export default Footer