import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10rem;
    background-color: black;

`;

const UserWrapper = styled.p`
    color: white;
    font-size:20px;
    font-weight:600;
    text-align: center;

`;

function Child({list,userInput}){
 return(
    <Wrapper>
        { list.map((data)=> {
                return (
                    <div id ={data.id}>
                    <img src ={`https://robohash.org/${data.id}?set=set2`} />
                    <UserWrapper>{data.name}</UserWrapper>
                    </div>
                )
            
            })
        }
   </Wrapper> 
 ) 
}

export default Child;