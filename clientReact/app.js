// const React = require('react');
// const ReactDOM = require('react-dom');
import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
 // The <BrowserRouter> should be used when you have a server to handle dynamic
 // requests, while the <HashRouter> should be used for static websites.
// var BrowserRouter = require('react-router-dom')
// import  BrowserRouter  from 'react-router-dom'


const App = () => (
      <div>
        <Header />
        <Main />
      </div>
)

class Header extends React.Component {

  render() {
    return (
      <div> Hi im the header </div>
      )
  }
}

class Main extends React.Component {
  render(){
    return (
      <div> Im the main component </div>
      )
  }
}


ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('container'))


// var Container = React.createClass({
//   getInitialState: function(){
//     return {
//       data: [], lastName: '', clicked: false
//     }
//   },
//   componentDidMount: function(){
//     var self = this
//     var state = this.state;

//     $.ajax({
//       url: '/jsonData',
//       method: 'get',
//       success: function(data){
//         console.log(data, ' this is the data')
//         state.data = data
//         self.setState(state)
//         console.log(state)
//       },
//       error: function(err){
//         console.log(err)
//       }
//     })
//   },
//   getBandLastName: function(lastName){
//     console.log(lastName, ' this is lastName in parent component Container')
//     var state = this.state;
//     state.lastName = lastName.lastName

//     this.setState(state)
//   },
//   render: function(){
//     return (
//       <div>
//         <ListBandComponent data={this.state.data} lastName={this.getBandLastName}/>
//         <InstrumentComponent lastName={this.state.lastName}/>
//       </div>
//       )
//   }
// })



// var ListBandComponent = React.createClass({
//   getLastName: function(band){
//     console.log(band, ' this is the band')
//     console.log(this.props)

//     this.props.lastName(band)
//   },
//   render: function(){
//     console.log(this.props, ' thius is this.props')
//       var self = this;

//       var bandData = this.props.data.map(function(bandObject, i){
//       return (
//           <li key={i} onClick={self.getLastName.bind(self, bandObject)}> {bandObject.name}</li>
//         )
//       }
//     )

//       return (
//         <ul>
//          {bandData}
//         </ul>
//         )

//   }
// })


// var InstrumentComponent = React.createClass({
//   render: function(){
//     return (
//       <p> {this.props.lastName}</p>
//       )
//   }
// })




// ReactDOM.render(<Container />, document.getElementById('container'))
