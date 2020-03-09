import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.homepageBanner = this.homepageBanner.bind(this);
    }
// Need to do product index for the main page
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
                            <img src="/app/assets/images/female-entpnr-hpg-1.jpg" />
                        </div>
                    </div>
                    <div className="hmpg-banner-l2-second-box">
                        <div className="hmpg-banner-l2-second-box-info">
                            <img src="/app/assets/images/home-ideas-hpg-1.jpg" />
                            <span>
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
        return (
            <div>{this.homepageBanner()}</div>
        );
    }
};

export default HomePage;