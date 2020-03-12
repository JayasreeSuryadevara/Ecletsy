import { connect } from 'react-redux';
import ShoppingCartShow from './shopping_cart_show';

const mapStateToProps = state => {
    console.log("state in sc", this.state);
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, mapDispatchToProps)(ShoppingCartShow);