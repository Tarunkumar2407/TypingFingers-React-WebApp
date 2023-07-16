
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Merriweather:ital@1&family=Montserrat&family=Poppins:wght@500&family=Roboto+Mono&family=Sacramento&display=swap');

* {
    padding : 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    background: ${({theme}) => theme.background} ;
    color : ${({theme}) => theme.textColor};
    transition: all 0.25 linear;
}

.canvas{
    display: grid ;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto; 
    gap: 0.5rem;
    padding: 2rem;
    width: 100vw;
    align-items: center;
    text-align: center;
}

.type-box {
    display: block;
    max-width: 1150px;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.words{
    font-size: 1.5rem;
    letter-spacing: 1px;
    word-spacing: 20px;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme}) => theme.typeBoxColor};
}

.word {
    margin: 5px;
    padding-right: 2px;
}

.hidden-input{
    opacity: 0;
}

.current{
    border-left: 2px solid white;
    animation: blinking 2s infinite ease;

    @keyframes blinking {
    0% {border-left-color: white}
    25% {border-left-color: black}
    50% {border-left-color: white} 
    75% {border-left-color: black}
    100% {border-left-color: white}
}
}

.current-right{
    border-right: 2px solid white;
    animation: blinkingRight 2s infinite ease;

    @keyframes blinkingRight {
    0% {border-right-color: white}
    25% {border-right-color: black}
    50% {border-right-color: white} 
    75% {border-right-color: black}
    100% {border-right-color: white}
}
}

.correct{
    color: ${({theme}) => theme.correctChar};
}

.incorrect{
    color: ${({theme}) => theme.incorrectChar};
}

.upper-menu{
    display: flex;
    ${'' /* border: 1px solid white; */}
    width: 1150px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    padding: 0.5rem;
    justify-content: space-between;
}

.modes{
    display: flex;
    gap: 0.5rem;
}

.time-mode:hover{
    color: green;
    cursor: pointer;
}

.footer{
    width: 1150px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}

.stats-box{
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    width: 70%;
}

.title{
    font-size: 20px;
    color: ${({theme}) => theme.typeBoxText} ;
}

.subtitle{
    font-size: 30px;
}

.header{
    width: 1150px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.logo, img{
    width: 350px;
}

.user-profile{
    width: 1000px;
    margin: auto;
    display: flex;
    height: 15rem;
    background: ${({theme})=> theme.typeBoxText};
    border-radius: 20px;
    padding: 1rem;
    justify-content: center;
    align-text: center;
}

.user{
    width: 50%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    padding: 1rem;
    
}

.info{
    width: 60%;
    padding: 1rem;
    margin-top: 1rem;
}

.picture{
    width: 30%;
}

.total-tests{
    width: 50%;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.table, .graph-user-page{
    margin: auto;
    width: 1000px;
}

.center-of-screen{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
}

.links{
    display: flex;
    width: 600px;
}

.linkedIn{
    display: flex;
    margin-right: 20px;
    align-items: center;
    font-size: 20px;
    text-decoration: none; 
}

.github{
    display: flex;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
}

.l-logo, .g-logo{
    width: 25px;
    margin-right: 5px;

}

`