import React from 'react';
import { connect } from 'react-redux';
import { CATEGORIES } from '../../util/category_util';
import { Link } from 'react-router-dom';

const BottomNavBar = ({ currentUser }) => {

    const categoryList = () => {
        let categories = CATEGORIES;
        return (
            <>
                {categories.map(category => {
                    return (
                        <div className="navbar-category" key={`category-${category.id}`}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </div>
                    )
                })}
            </>
        );
    }
    return (
        <div className="nav-bar-menu-list">
            {categoryList()}
        </div>
    );
};
const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});
const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavBar);