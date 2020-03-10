import React from 'react';
import ProductIndexContainer from '../products/product_index_container';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = { isLoaded: false }
        this.homepageBanner = this.homepageBanner.bind(this);
    }

    componentDidMount() {
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
                        <h3>Unique everything</h3>
                        <p>We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).</p>
                    </div>
                    <div className="hmpg-banner3-part-1">
                        <h3>Independent sellers</h3>
                        <p>Buy directly from someone who put their heart and soul into making something special.</p>
                    </div>
                    <div className="hmpg-banner3-part-1">
                        <h3>Secure shopping</h3>
                        <p>We use best-in-class technology to protect your transactions.</p>
                    </div>
                </div>
            </div>
        );
    }

    render(){

        return (
            <div>
                <div>{this.homepageBanner()}</div>
                <div>
                    {this.state.isLoaded ? 
                        <ProductIndexContainer products={this.props.products} /> : null
                    }
                </div>
            </div>
        );
    }
};

export default HomePage;