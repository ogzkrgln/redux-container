import React, { Component } from 'react';
import {connect} from 'react-redux';
import {yaziRengiDegister,arkaPlanDegistir} from './action/index';


class Container extends Component {
  render() {
    return (
        <div style={{background:this.props.arkaPlan}} className="wrapper">
        <div className="colon">
            <h1 style={{color:this.props.yaziRengi}}>Hello World!</h1>
        </div>
        <div className="container-color-options">
            <ul>
                <li><button onClick={() => this.props.arkaPlanDegistir('white')} style={{ background: "white"}}></button></li>
                <li><button onClick={() => this.props.arkaPlanDegistir('black')} style={{ background: "black"}}></button></li>
            </ul>
        </div>
        <div className="text-color-options">
            <ul>
                <li><button  onClick={() => this.props.yaziRengiDegister('aqua')}  style={{ background: "aqua"}}></button></li>
                <li><button  onClick={() => this.props.yaziRengiDegister('yellow')} style={{ background: "yellow"}}></button></li>
                <li><button  onClick={() => this.props.yaziRengiDegister('pink')} style={{ background: "pink"}}></button></li>
                <li><button  onClick={() => this.props.yaziRengiDegister('blue')} style={{ background: "blue"}}></button></li>
                <li><button  onClick={() => this.props.yaziRengiDegister('orange')} style={{ background: "orange"}}></button></li>
            </ul>
        </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        yaziRengi:state.yaziRengi,
        arkaPlan:state.arkaPlan
    }
}

function mapDispatchToProps(dispatch) {
    return {
       yaziRengiDegister: (renk) => dispatch(yaziRengiDegister(renk)),
       arkaPlanDegistir: (renk) => dispatch(arkaPlanDegistir(renk))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Container);