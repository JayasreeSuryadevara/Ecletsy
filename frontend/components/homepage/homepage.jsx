import React from 'react';
import ProductIndexContainer from '../products/product_index_container';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.homepageBanner = this.homepageBanner.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
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
                            <span className="hp-bn-l1-1">
                                 We’re celebrating fierce female entrepreneurs all month long.
                            </span>
                            <span className="hp-bn-l1-2">
                                Celebrate Women's History
                            </span>
                            <span className="hp-bn-l1-3">
                                Month >
                            </span>
                        </div>
                        <div className="hmpg-banner-l2-main-tab-img">
                            <img src={window.banner1Url} />
                        </div>
                    </div>
                    <div className="hmpg-banner-l2-second-box">
                        <div className="hmpg-banner-l2-second-box-img">
                            {/* <img src={window.banner2Url} /> */}
                            <span className="hmpg-banner-l2-second-box-info">
                                Ideas to make your home feel fresh.
                            </span>
                            <p> Get Inspired > </p>
                        </div>
                        <div className="hmpg-banner-l2-third-box-info">
                            <span>
                                Free shipping coming right up >
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hmpg-banner-level-3">
                </div>
            </div>
        );
    }

    render(){
        // debugger;
        return (
            <div>
                <div>{this.homepageBanner()}</div>
                <div> <ProductIndexContainer products={this.props.products} /></div>
            </div>
        );
    }
};

export default HomePage;