import React from 'react'
import styled from 'styled-components'


const NavBarContainer = styled.nav`
    height: 60px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
`;

const Logo = styled.div``;

const Text = styled.h2`
    letter-spacing: 1px;
    cursor: pointer;
`;

const SlideLink = styled.div``;

const Span = styled.span`
    font-size: 10px;
    color: grey;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
`;



const Navbar = () => {
    return (
        <NavBarContainer>
            <Wrapper>
                <Logo>
                    <Text>Galleria.</Text>
                </Logo>

                <SlideLink>
                    <Span>START SLIDESHOW</Span>
                </SlideLink>
            </Wrapper>
        </NavBarContainer>
    )
}

export default Navbar
