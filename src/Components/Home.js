import React from 'react'
import Img1 from '../Images/restro1.jpg'
import Img2 from '../Images/restro2.jpg'
import Img3 from '../Images/restro3.jpg'
import Img4 from '../Images/restro4.jpg'
import Img5 from '../Images/restro5.jpg'
import Img6 from '../Images/home.jpg'
import Img7 from '../Images/home2.jpg'
import Img8 from '../Images/retro6.jpg'
import Img9 from '../Images/restro7.jpg'
import Img0 from '../Images/restro8.jpg'
import Img10 from '../Images/main3.jpg'
import Img11 from '../Images/main4.jpg'
import Img12 from '../Images/main5.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='slider'>
                <div className='slide'>
                    <img src={Img4} alt='' className='image1' />
                    <img src={Img1} alt='' className='image' />
                    <img src={Img2} alt='' className='image1' />
                    <img src={Img3} alt='' className='image' />
                    <img src={Img5} alt='' className='image1' />
                    <img src={Img8} alt='' className='image' />
                    <img src={Img9} alt='' className='image1' />
                    <img src={Img0} alt='' className='image' />
                </div>


            </div>
            <div className='body'>
                <h2 data-text="" className='heading'>Jamshedpur Top 4 Restaurants:--</h2>

                <h3>1.SKY 180</h3>
                <hr />
                <p className='para'>Enter the world of bounty banqueting with Sky180°, Jamshedpur. Being strategically located near the hub center of the city, this venue becomes easily accessible via all modes of public and private transportation. It boasts of a capacious alfresco terrace arena, hence meeting all your requirements for outdoor functions. Draped in subtle colors and contemporary furnishing, their rooftop comes alive when illuminated with their vibrant lighting fixtures. Sky 180, Pm Mall, Jamshedpur, can easily accommodate a medium-sized gathering for your soirees.
                    Sky180°, Bistupur, Jamshedpur, is perfect for hosting your birthdays, private parties, bridal showers, bachelor/bachelorette party, pre-wedding ceremonies, cultural and community events.</p>
                <div className='zoom-wrapper'>
                    <img src={Img6} alt="" className='img' />
                </div>
                <h3>2.Golden Iris</h3>
                <hr />
                <p className='para1'>Your indoor gathering now has a perfect address in The Golden Iris, Jamshedpur. Located on Main Road and close to the Kerala Samajam Model School, this venue houses a beautiful banquet hall. Best suited for social gatherings as well as weddings and receptions, this venue is a haven to celebrate your special days in style. The Golden Iris, Golmuri, Jamshedpur, is thus your one-stop spot for all.</p>
                <div className='zoom-wrapper'>
                    <img src={Img7} alt="" className='img1' />
                </div>
                <h3>3.The Sonnet</h3>
                <hr />
                <p className='para'>The Sonnet Hotel, Jamshedpur is located in the heart of the Industrial center in an extremely characteristic, quiet and lively area within short walk to all sites and is surrounded by extraordinarily beautiful boulevards lined with arcade shops and beautiful buildings.</p>
                <div className='zoom-wrapper'>
                    <img src={Img10} alt="" className='img' />
                </div>
                <h3>4.The Dougout</h3>
                <hr />
                <p className='para1'>The Dugout is pretty near Russi Modi Centre of Excellence. Chinese and Italian cuisines under the direction of the talented chef are gorgeous at this place. The cooks here prepare tasty pizza, chicken and paneer.
                    This bar is well known for its great service and friendly staff, that is always ready to help you. Prices at The Dugout claim to be fair. The ambiance of this place is spectacular</p>
                <div className='zoom-wrapper'>
                    <img src={Img11} alt="" className='img1' />
                </div>
                <h3>5. Social 75</h3>
                <hr />
                <p className='para'>Social 75 is located at 2nd floor of Aditya Tower, Bistupur Main Road, opposite to Brubeck. The restaurant has a nice and cool set-up.It has 2 separate sections as family restaurant and Hooka Bar and couple of small enclosures for café & private dining. The ordering & serving took normal time considering the restaurant crowd, staff were courteous and responsive. We ordered garlic nan, veg fried rice, chicken do-piaza & chicken lababdar. Price-wise, this is one of the costliest restaurant in the Town. </p>
                <div className='zoom-wrapper'>
                    <img src={Img12} alt="" className='img' />
                </div>
            </div> 
        </>
    )
}

export default Home
