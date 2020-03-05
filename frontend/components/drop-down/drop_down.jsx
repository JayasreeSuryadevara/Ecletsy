import React from 'react';

const DropDown = ({ currentUser, logout }) => {
    return (
        <div class="dropdown-trigger user-nav-dropdown dropdown nav-icon-link-container clickable">
            <button class="dropdown-icon clickable">
                <span class="fad fa-user-circle"></span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" onClick={logout }>Sign Out</a>
            </div>
        </div>
    );

    // return ( 
    //     <DropdownButton id="dropdown-user-button" title={currentUser.username}>
    //         <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
    //     </DropdownButton>
    // );
};

export default DropDown;