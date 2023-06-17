import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlider =()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(
        <div className="Home-Slider">
            <div className="bookRoom">
                <h3>Book Unique Homes & Experiences</h3>
                <div className="elements">
                    <div className="RoomBox">
                        <h3>WHERE</h3>
                        <input placeholder="Anywhere"/>
                    </div>
                    <div className="RoomBox">
                        <h3>CHECK-IN - CHECKOUT</h3>
                        <input className="dateinput" type="date" placeholder=""/>
                        <input className="dateinput" type="date" placeholder=""/>
                    </div>
                    <div className="RoomBox">
                        <h3>GUEST</h3>
                        <select id='number-dd' name='number'>
                            <option value=''></option>
                            <option value='one'>1</option>
                            <option value='two'>2</option>
                            <option value='three'>3</option>
                            <option value='one'>4</option>
                            <option value='two'>5</option>
                            <option value='three'>6</option>
                            <option value='one'>7</option>
                            <option value='two'>8</option>
                            <option value='three'>9</option>
                            <option value='three'>10</option>
                            <option value='one'>11</option>
                            <option value='two'>12</option>
                            <option value='three'>13</option>
                            <option value='one'>14</option>
                            <option value='two'>15</option>
                            <option value='three'>16</option>
                        </select>
                        <select id='number-dd' name='number'>
                            <option value=''></option>
                            <option value='one'>1</option>
                            <option value='two'>2</option>
                            <option value='three'>3</option>
                            <option value='one'>4</option>
                            <option value='two'>5</option>
                            <option value='three'>6</option>
                            <option value='one'>7</option>
                            <option value='two'>8</option>
                            <option value='three'>9</option>
                            <option value='three'>10</option>
                            <option value='one'>11</option>
                            <option value='two'>12</option>
                            <option value='three'>13</option>
                            <option value='one'>14</option>
                            <option value='two'>15</option>
                            <option value='three'>16</option>
                        </select>
                    </div>
                    <div className="RoomBox">
                        <input type="Submit"/>
                    </div>
                </div>
            </div>

            <div className="contSlider">
            <Slider {...settings}>
                    <div className="contBox">
                        <div className="imageBox">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTODNnlAAwUuWYLCYoFbbaE6rdvxjJ12XAJYQZwaZDAHfE79O6g95Tc4e4-gkyEwwE_0&usqp=CAU"/>
                        </div>
                        <div className="imageBox">
                            <h3>Loft in Cape Town</h3>
                            <label>Price: R1500.00/Day</label>
                            <p>
                            We are proud to present the Geodome experience, nestled up against the Witzenburg mountain range about 10km 
                            from the historic town of Tulbagh. Keeping up with the increasing demand for experiential stays in stead of 
                            the traditional B&B, we have created this unique rental situated in our favourite part of a 270 hectare farm.
                            </p>
                            <input type="submit" value="book now"/>
                        </div>
                    </div>
                    <div className="contBox">
                    <div className="imageBox">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTODNnlAAwUuWYLCYoFbbaE6rdvxjJ12XAJYQZwaZDAHfE79O6g95Tc4e4-gkyEwwE_0&usqp=CAU"/>
                        </div>
                        <div className="imageBox">
                            <h3>Loft in Cape Town</h3>
                            <label>Price: R1500.00/Day</label>
                            <p>
                            We are proud to present the Geodome experience, nestled up against the Witzenburg mountain range about 10km 
                            from the historic town of Tulbagh. Keeping up with the increasing demand for experiential stays in stead of 
                            the traditional B&B, we have created this unique rental situated in our favourite part of a 270 hectare farm.
                            </p>
                            <input type="submit" value="book now"/>
                        </div>
                    </div>
                    <div className="contBox">
                        <div className="imageBox">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/433892814.jpg?k=f63166079a0331ff35bc82f753a5c0a57dad10a07948b3947c408cf2c214e674&o=&hp=1"/>
                        </div>
                        <div className="imageBox">
                            <h3>Loft in Cape Town</h3>
                            <label>Price: R1500.00/Day</label>
                            <p>
                            We are proud to present the Geodome experience, nestled up against the Witzenburg mountain range about 10km 
                            from the historic town of Tulbagh. Keeping up with the increasing demand for experiential stays in stead of 
                            the traditional B&B, we have created this unique rental situated in our favourite part of a 270 hectare farm.
                            </p>
                            <input type="submit" value="book now"/>
                        </div>
                    </div>
                    <div className="contBox">
                    <div className="imageBox">
                            <img src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M"/>
                        </div>
                        <div className="imageBox">
                            <h3>Loft in Cape Town</h3>
                            <label>Price: R1500.00/Day</label>
                            <p>
                            We are proud to present the Geodome experience, nestled up against the Witzenburg mountain range about 10km 
                            from the historic town of Tulbagh. Keeping up with the increasing demand for experiential stays in stead of 
                            the traditional B&B, we have created this unique rental situated in our favourite part of a 270 hectare farm.
                            </p>
                            <input type="submit" value="book now"/>
                        </div>
                    </div>
            </Slider>
            </div>
        </div>
    );
};


export default HomeSlider;