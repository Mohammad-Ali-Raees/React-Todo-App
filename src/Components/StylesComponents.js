import React from 'react'
import styled, { css } from 'styled-components'

const StylesComponents = () => {
    return (
        <Section >
            <Left>
                <Button secondary >CLick Me</Button>
            </Left>
        </Section>
    )
}

let Section = styled.section`
background-color: palegoldenrod;
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
`
let Left = styled.div`
    background-color: gold;
    width: 50%;
    height: auto;
`
let Button = styled.button`
background-color: blanchedalmond;
border: 1px solid white;
font-size: 20px;
font-weight: 400;
color: white;
/*-----------------------PROPS METHOD 1------------------------------------------ */
 background-color: ${({ primary }) => (primary ? "green" : "blue")};

 /*-----------------------PROPS METHOD 2------------------------------------------ */

 ${({ secondary }) => secondary && css`
 background:red;
 color: white;
 ` } 
`

export default StylesComponents