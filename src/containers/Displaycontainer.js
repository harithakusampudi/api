import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions'
import * as location from '../actions/location'
import * as restaurant from '../actions/restaurant'
import * as search from '../actions/searching'
import App from './App'
 

const mapStateToProps = state => ({
   todos:state.todos,
})
  
function mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(
          {
            ...ActionCreators,
            ...location,
            ...restaurant,
            ...search

          },
          dispatch
        )
      };
    }
    

export default connect(
  mapStateToProps,mapDispatchToProps
)(App)