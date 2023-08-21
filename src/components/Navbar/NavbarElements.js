import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #424453;
display: flex;
justify-content: end;
// padding-top: 2rem;
// padding-bottom: 2rem;
background:transparent;
// padding-left: 0.2rem calc((100vw - 1000px) / 2);
padding-right: 15%;
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #E9EDDE;
display: flex;
justify-content: center;
text-decoration: none;
padding-top: 3rem;
// margin: 20px;
min-width: 5rem;
cursor: pointer;

// font-family: Cousine;
font-style: normal;
font-weight: 400;
font-size: 1rem;
// line-height: 64px;

// &.active {
// 	// text-decoration: underline;
// 	border-bottom: 1px solid #E8F0FF;
// 	padding-bottom: 1px;
// }
// &:hover {
// 	border-bottom: 1px solid #E8F0FF;
// 	padding-bottom: 1px;
// 	// text-decoration: underline;
// 	// transition: transform 0.25s ease-out;
// }
`;

export const Bars = styled(FaBars)`
display: none;
color: #E8F0FF;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: right;
padding: 0px;
gap: 15px;

// position: absolute;
// width: 486px;
// height: 64px;
// left: 834px;
// top: 54px;

// display: flex;
// align-items: center;
// margin-right: -24px;
// /* Second Nav */
// /* margin-right: 24px; */
// /* Third Nav */
// /* width: 100vw;
// white-space: nowrap; */
// @media screen and (max-width: 768px) {
// 	display: none;
// }
`;

export const NavBtn = styled.nav`
vertical-align: middle;
// display: flex;
align-items: left;
justify-content: center;
padding-left: 5.5rem;
// margin-right: 24px;
/* Third Nav */
// /* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
display: flex;
border-radius: 4px;
// background: #E8F0FF;
padding: 2rem 1.375rem;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

text-decoration: none;
/* Second Nav */
margin-left: 24px;
// &:hover {
// 	transition: all 0.2s ease-in-out;
// 	background: #fff;
// 	color: #392759;
// }
`;
