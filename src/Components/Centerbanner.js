import React from 'react'
import '../CSS/Centerbanner.css'
import './Topcenter'
import Topcenter from './Topcenter'


import Card from 'react-bootstrap/Card';
const Centerbanner = () => {
  return (
 <section>

<div className='container categories'>
<div className='row'>
<div class="category-title">
                   Thoughtfully Curated Gifts
                    <a href="/" class="view-all">View All</a>
                </div>
                {/* <div className="main-container">
      <div className="row  categories1">
        <div className="col-lg-6">
          <div className="image-container">
            <img src="https://images.squarespace-cdn.com/content/v1/5f7b9b1a8be07a70f92c0f4e/1607396084693-84EE64J4DVHIYT1IXQ1J/bigstock--165416159+%284%29.jpg" alt="Image 1" />
            <div className="image-content">
              <p>Your text paragraph 1</p>
              <button className="btn btn-primary">Button 1</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image-container">
            <img src="https://w0.peakpx.com/wallpaper/629/854/HD-wallpaper-sweet-donuts-marshmallows-sweets-chocolate-baked-goods.jpg" alt="Image 2" />
            <div className="image-content">
              <p>Your text paragraph 2</p>
              <button className="btn btn-primary">Button 2</button>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    

<div class="container">
    <div class="row twoimg">
      {/* <div class="col-lg-6 textimg categories1">
        <div class="image-container" style={{backgroundImage:'url("https://vhr-public-oregon.s3.us-west-2.amazonaws.com/poi_image/thumbnail/RPYB8TiwEh7BBWU08j5oig3aDSRvxb3Z")'}}>
          <div class="image-content">
            <h2>Text Overlay 1</h2>
            <p>Your text here.</p>
            <button class="btn btn-primary">Button 1</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 textimg categories1">
        <div class="image-container" style={{backgroundImage:'url("https://vhr-public-oregon.s3.us-west-2.amazonaws.com/poi_image/thumbnail/RPYB8TiwEh7BBWU08j5oig3aDSRvxb3Z")'}}>
          <div class="image-content">
            <h2>Text Overlay 2</h2>
            <p>Your text here.</p>
            <button class="btn btn-primary">Button 2</button>
          </div>
        </div>
      </div> */}


<Topcenter
  backgroundImage='https://vhr-public-oregon.s3.us-west-2.amazonaws.com/poi_image/thumbnail/RPYB8TiwEh7BBWU08j5oig3aDSRvxb3Z'
  clicktext='Gift Now'
  para=' Donut underestimate the power of a good pastry'
  data='Bakery Gifts'
/>

<Topcenter
  backgroundImage='https://www.browneyedbaker.com/wp-content/uploads/2021/05/chocolate-cake-15-square.jpg'
  clicktext='Gift Now'
  para='Life is too short to say no to cake.'
  data='Bakery Gifts'
/>




 


    </div>
  </div>



</div>
<div className='row'>
{/* <div class="card">
    <div class="aspectRation col">
        <img loading="lazy" src="https://rukminim2.flixcart.com/image/850/1000/l186t8w0/festive-gift-box/d/m/a/13-birthday-gifts-for-girls-lovers-chocolate-flower-bouquet-original-imagctzuzphmrsyc.jpeg?q=20" alt="Gift Hampers"/>
    </div>
    <div class="card-content">
        <span class="p-line">Spoil them to the core with love-filled Gift Hampers</span>
    </div>
</div> */}



<div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div>



</div>




 </section>
  )
}

export default Centerbanner