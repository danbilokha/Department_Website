import React from 'react'
import './index.css';
import Img from "../../components/Img/index"
import image1 from './images/image 2.1.png'
import image2 from './images/image 3.1.png'
import image3 from './images/image 8.1.png'
import image4 from './images/image 10.1.png'
import image5 from './images/image 11.1.png'
import image6 from './images/image 12.1.png'
import image7 from './images/image 13.2.png'
import image8 from './images/image 13.3.png'
import image9 from './images/image 14.png'
import image10 from './images/image 15.png'
import image11 from './images/image 16.png'
import image12 from './images/image 17.png'
import image13 from './images/image 18.png'
import image14 from './images/image 19.png'
import image15 from './images/image 20.png'
import image16 from './images/image 21.png'
import image17 from './images/image 22.png'
import image18 from './images/image 23.png'
import image19 from './images/image 24.png'
import image20 from './images/image 25.png'
import image21 from './images/image 26.png'
import image22 from './images/image 27.png'
import image23 from './images/image 28.png'


export default function Images(){
    return(
        <div className="container_photo_gallery">
            <a href ='https://www.alcatelmobile.com/'>
                <Img src ={image1} />
            </a>
            <a href ='https://www.ericsson.com/en'>
            <Img src ={image2}/>
            </a>
            <a href='https://www.microsoft.com/uk-ua/'>
            <Img src ={image3}/>
            </a>
            <a href='https://www.intel.com/content/www/us/en/homepage.html'>
            <Img src ={image4}/>
            </a>
            <a href='https://kyivstar.ua/uk/mm'>
            <Img src ={image5}/>
            </a>
            <a href='https://www.vodafone.ua/uk'>
            <Img src ={image6}/>
            </a>
            <a href='https://www.nokia.com/phones/uk_ua'>
            <Img src ={image7}/>
            </a>
            <a href='https://ukrtelecom.ua/'>
            <Img src ={image8}/>
            </a>
            <a href='https://tu-dresden.de/'>
            <Img src ={image9}/>
            </a>
            <a href='https://www.ukrkosmos.com/'>
            <Img src ={image10}/>
            </a>
            <a href ='https://volia.com/?partner=organic_search&utm_source=google&utm_medium=organic'>
            <Img src ={image13}/>
            </a>
            <a href='https://www.bkc.com.ua/'>
            <Img src ={image14}/>
            </a>
            <a href ='cdma.ua'>
            <Img src ={image15}/>
            </a>
            <a href='https://www8.hp.com/ua/ru/home.html'>
            <Img src ={image18}/>
            </a>
            <a href='http://enrantelecom.com/ru/'>
            <Img src ={image20}/>
            </a>
            <a href='https://www.kapsch.net/'>
            <Img src ={image21}/>
            </a>
            <a href='https://www.lifecell.ua/uk/'>
            <Img src ={image22}/>
            </a>
            <a href='https://consumer.huawei.com/ua/'>
            <Img src ={image23}/>
            </a>

        </div>
    )
}