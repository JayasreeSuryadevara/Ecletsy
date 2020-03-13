import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = { isLoaded: false }
        this.homepageBanner = this.homepageBanner.bind(this);
        this.footerBanner = this.footerBanner.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchVendors();
        this.props.fetchProducts().then(products => {
            this.setState({ isLoaded: true });
        });
    }

    homepageBanner(){
        const currentUser = this.props.currentUser;
        if (currentUser) return null;
        return (
            <div className="hmpg-banner-level-1">
                <div className="ecletsy-sale-heading">
                    <h1>If it’s handcrafted, vintage, custom, or unique, it’s on Ecletsy.</h1>
                </div>
                <div className="hmpg-banner-level-2">
                    <div className="hmpg-banner-l2-main-tab" onClick={this.handleShowcaseVendor}>
                        <div className="hmpg-banner-l2-main-box-info">
                            <span className="hp-bn-l2-1">
                                 We’re celebrating fierce female entrepreneurs all month long.
                            </span>
                            <span className="hp-bn-l2-2">
                                Celebrate Women's History
                            </span>
                            <span className="hp-bn-l2-3">
                                Month >
                            </span>
                        </div>
                        <div className="hmpg-banner-l2-main-tab-img">
                            <img src={window.banner1Url} />
                        </div>
                    </div>
                    <div className="hmpg-banner-l2-second-box">
                        {/* <div className="hmpg-banner-l2-second-box-img">
                            <img src={window.banner2Url} />
                            <span className="hmpg-banner-l2-second-box-info">
                                Ideas to make your home feel fresh.
                            </span>
                            <p> Get Inspired > </p>
                        </div>
                        <div className="hmpg-banner-l2-third-box-info">
                            <span>
                                Free shipping coming right up >
                            </span>
                        </div> */}
                    </div>
                </div>
                <div className="hmpg-banner-level-3">
                    <div className="hmpg-banner3-part-1">
                        <h3>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Unique everything
                        </h3>
                        <p>We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).</p>
                    </div>
                    <div className="hmpg-banner3-part-1">
                        <h3>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Independent sellers
                        </h3>
                        <p>Buy directly from someone who put their heart and soul into making something special.</p>
                    </div>
                    <div className="hmpg-banner3-part-1">
                        <h3>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Secure shopping
                        </h3>
                        <p>We use best-in-class technology to protect your transactions.</p>
                    </div>
                </div>
            </div>
        );
    }

    footerBanner(){
        return (
            <div className="about-ecletsy-footer">
                <div className="about-box">
                    <div className="what-is-ecletsy">
                        What is Ecletsy?
                    </div>
                    <div className="about-parts">
                        <div className="about-div-1">
                            <h3>A one-of-a-kind community</h3>
                            <p>Ecletsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</p>
                        </div>
                        <div className="about-div-2">
                            <h3>Support independent creators</h3>
                            <p>There’s no Ecletsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                        </div>
                        <div className="about-div-3">
                            <h3>Peace of mind</h3>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>
                    </div>
                </div>
                <div className="wave-box">
                    <p> Created by Jayasree Suryadevara </p>
                    <div>
                        <Link to="https://github.com/JayasreeSuryadevara/Ecletsy"><i class="fab fa-github fa-3x"></i></Link>
                        <Link to="https://www.linkedin.com/in/jayasree-suryadevara-98066415/"><i class="fab fa-linkedin fa-3x"></i></Link>
                    </div>
                </div>
            </div>
        );
    }

    render(){

        return (
            <div className="hmpg">
                <div>{this.homepageBanner()}</div>
                <br />
                <div className="product-index">
                    {this.state.isLoaded ? 
                        <ProductIndexContainer products={this.props.products} /> : null
                    }
                </div>
                <br />
                <div>{this.footerBanner()}</div>
            </div>
        );
    }
};

export default HomePage;