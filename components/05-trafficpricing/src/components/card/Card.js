import './Card.css';
import img1 from '../../images/icon-check.svg';
import {useState, useEffect} from 'react';



const Card = () => {
    const [price, setPrice] = useState(8);
    const [toogle, setToogle] = useState(false);
    const [slider, setSlider] = useState(0);
    const [pageviews, setPageviews] = useState('10K');





    useEffect(() => {
        const monthlyPrices = [8, 12, 16, 24, 36];
        const pageviewsArray = ['10K', '50K', '100K', '500K', '1M'];
        const yearlyPrices = [];
        monthlyPrices.forEach(price => yearlyPrices.push((price * 12 * 0.75)));
        function setPricing() {
            const index = slider / 5;
            if (toogle) {
                setPrice(yearlyPrices[index]);
            } else {
                setPrice(monthlyPrices[index]);
            }
        }

        setPricing();
        setPageviews(pageviewsArray[slider / 5]);
    }, [slider, toogle]);


    return (
        <main>
            <div className="pricing-wrapper">
                <div className="pricing-details">
                    <div className="pricing">
                        <p className="pageviews"><span id="pageviews">{pageviews}</span> PAGE VIEWS</p>
                        <p className="price-total"><span id="price">${price}.00</span> / &nbsp;<span id="billing-period">{`${toogle?'year':'month'}` }</span></p>
                    </div>
                    <div className="slider-container">
                        <input style={{background:`linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider*100)/20}%, hsl(224, 65%, 95%) ${(slider*100)/20}%, hsl(224, 65%, 95%) 100%)`}} type="range" name="pricing-slider" id="pricing-slider" className="slider" min="0" max="20" value={slider} step="5" onChange={(e)=>setSlider(e.target.value)} />
                    </div>
                    <div className="billing-info">
                        <div className="monthly-billing">Monthly Billing</div>
                        <div className="toggle-container">
                            <label className="switch">
                                <input type="checkbox" value={toogle} id="billing-toggle" onChange={() => setToogle(!toogle)} />
                                <span className="toggle"></span>
                            </label>
                        </div>
                        <div className="yearly-billing">
                            <p>Yearly Billing</p>
                            <div className="discount"><span className="mobile-discount">-</span>25% <span className="desktop-discount">discount</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="pricing-wrapper">
                <div className="bottom-section">
                    <div className="features">
                        <div className="feature">
                            <img src={img1} alt="Check" />
                            <p>Unlimited websites</p>
                        </div>
                        <div className="feature">
                            <img src={img1} alt="Check" />
                            <p>100% data ownership</p>
                        </div>
                        <div className="feature">
                            <img src={img1} alt="Check" />
                            <p>Email reports</p>
                        </div>
                    </div>
                    <button className="trial-button">Start my trial</button>
                </div>
            </div>
        </main>
    );
}

export default Card;