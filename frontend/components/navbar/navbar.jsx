import React from 'react';
import { CATEGORIES } from '../../util/category_util';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser }) => {

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
            {categoriyList()}
        </div>
    );
};

export default NavBar;