import React, { Component } from 'react'
import Child from './child';
import Input from './Input'

import styled from 'styled-components';


const Header = styled.div`
  width: 100vh;
  padding-top: 50px;
  height: 50px;
  margin: auto;
 input {
  width : 35vw;
  font-size:25px;
 }
`;

class Coding extends Component {
    constructor(){
      super();
       this.state = {list : [], userInput : ''};
    }

  


   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(result =>result.json()).then(data=>{
      this.setState({list : data})
    })
   }


  onChangeHandler =(e) =>{
    console.log(e)
    this.setState({userInput : e.target.value})
  }



    render() {
         
      const filterData = this.state.list.filter(data=>{
        console.log('data',data.name);
        if(data.name.includes(this.state.userInput)){
          return data;
        }
    
       })
    
       console.log("filter",filterData);
      return (
        <div >
      <Header>
      <Input nameChangeHandler = {(e) =>this.onChangeHandler(e)}/>
      </Header>
        <Child userInput =  {this.state.userInput} list = {filterData} />
              </div>
      )
    }
  }
export default Coding ;

