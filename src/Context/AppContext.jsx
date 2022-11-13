
import React from 'react' ;
import { createContext } from 'react';


// 1
export const AppContext = createContext()


const data = {

    SliderData : {
      men: [
          "https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-1660651512.jpg",
          "https://images.bewakoof.com/uploads/grid/app/dragon1x1-refresh--1--1661164540.gif",
          "https://images.bewakoof.com/uploads/grid/app/clearance-banner-men-1661275920.jpg",
          "https://images.bewakoof.com/uploads/grid/app/urban-collection-men--1660893379.jpg",
          "https://images.bewakoof.com/uploads/grid/app/just-arrived-polo-1661102739.jpg",
        ],
      women : [
        "https://images.bewakoof.com/uploads/grid/app/OVERSIZED-TEES-1X1-w-1667812348.jpg",
        "https://images.bewakoof.com/uploads/grid/app/streetwear-women-new-1668157458.jpg",
        "https://images.bewakoof.com/uploads/grid/app/official-merch-1x1-Static-banner-1667926321.png",
        "https://images.bewakoof.com/uploads/grid/app/Oversized-sweatshirt-and-hoodies-1x1-w-1668264742.jpg",
        "https://images.bewakoof.com/uploads/grid/app/WinterWear-Nov-StaticBanner-Women-Printed-1667897007.jpg",
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
        "https://images.bewakoof.com/uploads/grid/app/just-arrived-polo-1661102739.jpg",
        "https://images.bewakoof.com/uploads/grid/app/flatknits-1x1-revised-1661245626.gif",
        "https://images.bewakoof.com/uploads/grid/app/pyjamas-m--1--1660988001.jpg",
        "https://images.bewakoof.com/uploads/grid/app/anime-men-banner--1660918150.jpg",
      ],
      women2: [
        "https://images.bewakoof.com/uploads/grid/app/OVERSIZED-TEES-1X1-w-1667812348.jpg",
        "https://images.bewakoof.com/uploads/grid/app/streetwear-women-new-1668157458.jpg",
        "https://images.bewakoof.com/uploads/grid/app/official-merch-1x1-Static-banner-1667926321.png",
        "https://images.bewakoof.com/uploads/grid/app/Oversized-sweatshirt-and-hoodies-1x1-w-1668264742.jpg",
        "https://images.bewakoof.com/uploads/grid/app/WinterWear-Nov-StaticBanner-Women-Printed-1667897007.jpg",
      ]
        
    
  
    },
              
    
    longDiv : {
      men : "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg",
      women :  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
      acc :  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
      men2 : "https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png",
      men3 : "https://images.bewakoof.com/uploads/grid/app/VoteForDesign-ThinStrip-Desktop-Revised-1667372740.gif"
    },

    smallProduct: {
        men : "https://i.im.ge/2022/08/24/O0gisT.Screenshot-1846.png",
        women :  "https://i.im.ge/2022/08/24/O0gNTJ.Screenshot-1847.png",
        acc :  "https://i.im.ge/2022/08/24/O0gCs6.Screenshot-1848.png"
    },

    giftVoucher : {
        forAll : "https://images.bewakoof.com/uploads/grid/app/thin-strip-new-2022-freebie-desktop-129-1661241484.jpg"
    },

    PopularCat: {
        men : [          
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-sweatshirts-m-1660748009.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg",
            "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg"
        ],
        women : [          
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-BFtees-1661872777.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleeves-women-1665155573.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-oversizedtees-1661872781.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-9-1662981568.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-10-1662981568.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-printedtees-1661872782.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-jeans-1661872779.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-tops-1661872784.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-joggers-1661872780.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-pj-1661872781.jpg",
          "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-covers-1661872779.jpg",
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
        "https://images.bewakoof.com/uploads/grid/app/b1g1-mid-banner-1658840210.jpg",
        "https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner2-1660818217.jpg",
        "https://images.bewakoof.com/uploads/grid/app/sweatshirt-men-1660737200.jpg",
        "https://images.bewakoof.com/uploads/grid/app/play-men-banner-1660743046.jpg"
      ],
      women: [
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1666352224.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899-1667809501.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-plussize-women-1665037180.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-midsize-banner-AOP-pyjamas-w-1667827799.jpg",
      ],
      stoopid : [
        "https://images.bewakoof.com/uploads/grid/app/jackets--1659349867.jpg",
        "https://images.bewakoof.com/uploads/grid/app/play-men-banner-1660743046.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-m-1659160620.jpg",
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131.jpg"
      ],
      stoopidWomen : [
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-women-1658985548-1666890086.jpg",
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-combo-tees-w-1660582615.jpg",
        "https://images.bewakoof.com/uploads/grid/app/mid-banner-60-off-women-1658985549.jpg",
        "https://images.bewakoof.com/uploads/grid/app/play-mid-women-banner-1663846560.jpg"
      ],
      acc: [
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg",
        ""
      ]
    }

    
  }
  

const AppContextProvider = ({children}) => {


    
  return (

    <div>

  <AppContext.Provider value={{data}} >

      {children}

  </AppContext.Provider>

      
    </div>
  )
}

export default AppContextProvider
