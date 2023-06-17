
const HomeSlider =()=>{
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
                <h1>Cont Slider</h1>
            </div>
        </div>
    );
};


export default HomeSlider;