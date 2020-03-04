import NavBar from './navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log("state in navbarc",state);
    return(
       null
    );
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);