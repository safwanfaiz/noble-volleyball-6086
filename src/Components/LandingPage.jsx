
import React from 'react'
import DiscountProduct from './smallComp.jsx/DiscountProduct'
import PopularCat from './smallComp.jsx/PopularCat'
import SliderImages from './smallComp.jsx/SliderImages'
import StoopidCollection4D from './smallComp.jsx/StoopidCollection4D'
import TwoImage from './smallComp.jsx/TwoImages'



const data = {

  SliderData : {
    men: [
        "https://images.bewakoof.com/uploads/grid/app/bestsellers-1666693631.gif",
        "https://images.bewakoof.com/uploads/grid/app/streetwear-common-new-1668157457.jpg",
        "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Caps-1667389450.gif",
        "https://images.bewakoof.com/uploads/grid/app/1x1-mobile-cover-designer-phone-cover-1667987793.gif",
        "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Caps-1667389450.gif",
        
        
      ],
    women : [
      "https://images.bewakoof.com/uploads/grid/app/buy-2-get-1-women-1660891856.jpg",
      "https://images.bewakoof.com/uploads/grid/app/urban-collection-women-1660893379.jpg",
      "https://images.bewakoof.com/uploads/grid/app/clearance-banner-women-1661275921.jpg",
      "https://images.bewakoof.com/uploads/grid/app/1x1-oversized-women-1660651512.jpg"
    ] ,
    acc:[
      "https://images.bewakoof.com/uploads/grid/app/best-seller-1x1--1658468285.gif",
      "https://images.bewakoof.com/uploads/grid/app/bags-banner-1658468284.jpg",
      "https://images.bewakoof.com/uploads/grid/app/1x1-mobile-cover-superhero--1--1659537519.gif",
      "https://images.bewakoof.com/uploads/grid/app/clearance-zone-70-1661275921.jpg"

    ] ,
    acc2:[
      "https://images.bewakoof.com/uploads/grid/app/arena-banner-gif-1652286939.gif",
      "https://images.bewakoof.com/uploads/grid/app/accessories-banner-1658468282.gif",
      "https://images.bewakoof.com/uploads/grid/app/slider-new-1658468288.jpg",
   
    ],
    men2: [
      "https://images.bewakoof.com/uploads/grid/app/hot-new-arrivals-refreshed-1666693631.gif",
      "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Sliders-1666265382.gif",
      "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Accessories-Bags--1--1666866325.gif",
      "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Caps-1667389450.gif",
     
    ],
    
    women2: [
      "https://images.bewakoof.com/uploads/grid/app/printed-tops-1x1-1661320785.gif",
      "https://images.bewakoof.com/uploads/grid/app/k-pop-collection-1x1--1--1661335372.gif",
      "https://images.bewakoof.com/uploads/grid/app/sweatshirts-hoodies-1x1-w-1660893504.jpg",
      "https://images.bewakoof.com/uploads/grid/app/pyjamas-w--1--1660988002.jpg",
    ]
      
  

  },
  
           
  longDiv : {
    men :"",
    women :  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
    acc :  "",
    men2 : "",
    men3 : ""
  },

  smallProduct: {
      men : "https://i.im.ge/2022/08/24/O0gisT.Screenshot-1846.png",
      women :  "https://i.im.ge/2022/08/24/O0gNTJ.Screenshot-1847.png",
      acc :  "https://i.im.ge/2022/08/24/O0gCs6.Screenshot-1848.png"
  },

  giftVoucher : {
      forAll : ""
  },
  
  PopularCat: {
      men : [          
          "https://images.bewakoof.com/t320/sliding-bat-lightweight-adjustable-strap-men-slider-367177-1655748682-1.jpg",
          "https://images.bewakoof.com/t320/brooklyn-nyc-lines-lightweight-adjustable-strap-men-slider-333620-1655747846-1.jpg",
          "https://images.bewakoof.com/t320/last-benchers-printed-small-backpack-black-237470-1655746818-3.jpg",
          "https://images.bewakoof.com/t320/zipped-it-printed-small-backpack-229513-1655746835-5.jpg",
          "https://images.bewakoof.com/t320/army-camouflage-lightweight-adjustable-strap-men-slider-333613-1655747768-5.jpg",
          
      ],
      women : [          
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-BoyfriendTees-1657527656.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-FashionTops-1657527658.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-OversizedTees-1657527660.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Covers-1657527657.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Bagss-1657534528.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg"
      ],

     
      acc : [
        "https://images.bewakoof.com/uploads/grid/app/category-box-mobile-covers-1657542496.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-1657542498.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1657542495.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-flip-flops-1657542496.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-notebook-1657542498.jpg",
        "https://images.bewakoof.com/uploads/grid/app/category-box-casual-shoes-1657542495.jpg",
       
      ]
  },
  
  DiscountProduct: {
    men:[
      "https://images.bewakoof.com/uploads/grid/app/midsize-banner-HotDeals-Accessory-01-1666339222.jpg",
      "https://images.bewakoof.com/uploads/grid/app/1-1666264464.jpg",
      "https://images.bewakoof.com/uploads/grid/app/midsize-banner-HotDeals-Accessory-01-1666339222.jpg",
      "https://images.bewakoof.com/uploads/grid/app/midsize-banner-MeSHIRT-Accessory-01-1666339222.jpg"
    ],
    women: [
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-w-1660204325.jpg",
      "https://images.bewakoof.com/uploads/grid/app/me-shirt-women-1658985548.jpg",
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-joggers-women1-1660716100.jpg",
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-lastsizesleft-women-1658984794.jpg",
    ],
    stoopid : [
      "https://images.bewakoof.com/uploads/grid/app/midsize-banner-HotDeals-Accessory-01-1666339222.jpg",
      "https://images.bewakoof.com/uploads/grid/app/midsize-banner-MeSHIRT-Accessory-01-1666339222.jpg",
      "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Accessories-1666862308.gif",
      "https://images.bewakoof.com/uploads/grid/app/1-1666264464.jpg"
    ],
    stoopidWomen : [
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-joggers-women1-1660716100.jpg",
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-combo-tees-w-1660582615.jpg",
      "https://images.bewakoof.com/uploads/grid/app/AOp-Boxers-mid-banner-Women-1658560814.jpg",
      "https://images.bewakoof.com/uploads/grid/app/jacket-women-mid-banner-1659350736.jpg"
    ],
    acc: [
      "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg",
      "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sliders-1656667081.jpg"
    ]
  }

  
}



function LandingPage (){


 const path = "/products/men-printed-shirts"

 console.log(data)
  return (

    <div style={{marginTop: "150px"}} >
   
   <SliderImages data={data.SliderData.men} path={path}  />
   <TwoImage img1={data.longDiv.men} 
   img2={data.smallProduct.men} 
   img3={data.giftVoucher.forAll} path={path} 
   />
   <PopularCat data={data.PopularCat.men} path={path}  />

        {/* SLIDER PENDING */}

      


   <DiscountProduct data={data.DiscountProduct.men} path={path} />
 
   

   <SliderImages data={data.SliderData.men2} path={path}  />

   {/* SLIDER PENDING */}



   <StoopidCollection4D data={data.DiscountProduct.stoopid} path={path}  />
   <TwoImage img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>
  



  )
}

export default LandingPage
