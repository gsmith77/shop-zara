import React from 'react'
import {connect} from 'react-redux'
import {fetchJeans} from '../actions/jeanActions'

class Jeans extends React.Component{
    
    componentDidMount(){
        this.props.fetchJeans()
    }
    render(){
        return (
            this.props.jeans ? (
            <div>
                <ol>
                    {this.props.jeans.map(jean => {
                        return <li>{jean.title}</li>
                    })}
                </ol>
            </div>) 
            : null
        )
    }
}

const mapStateToProps = state => {return {jeans: state.jeans.jeans}}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchJeans: () => {
//             dispatch(fetchJeans())
//         }
//     }
// }

export default connect(mapStateToProps, {fetchJeans})(Jeans)