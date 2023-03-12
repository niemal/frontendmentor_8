import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    align-items: baseline;
    width: 100%;
    padding: 18px;
    padding-top: 32px;
    position: relative;
    z-index: 5;
  }
`;

const ImageContainer = styled.div`
  width: 35px;
  padding: 8px;
  height: 25px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 60px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

const mobileOpen = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const openInjection = css`
  animation: 0.3s ${mobileOpen} ease-in-out forwards;
`;

const mobileClose = keyframes`
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    visibility: hidden;
  }
`;

const closeInjection = css`
  animation: 0.3s ${mobileClose} ease-in-out forwards;
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  min-height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: var(--color-black-fade);
  z-index: 99;

  ${(p) => (p.open ? openInjection : closeInjection)}
`;

const menuOpen = keyframes`
  0% {
    transform: translateY(-100%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`;

const menuOpenInjection = css`
  animation: 0.45s ${menuOpen} ease-in-out forwards;
`;

const menuClose = keyframes`
  0% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%) scale(0);
    opacity: 0;
  }
`;

const menuCloseInjection = css`
  animation: 0.45s ${menuClose} ease-in-out forwards;
`;

const MenuWrapper = styled.div`
  min-height: 122px;
  width: 100%;
  background-color: var(--color-white);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => (p.open ? menuOpenInjection : menuCloseInjection)}
`;

const CrossContainer = styled.div`
  margin-right: 24px;
  width: 25px;
  height: 25px;
`;

const CrossImage = styled.img`
  padding: 4px;
  object-fit: cover;
  width: 100%;
`;

const MyEntry = styled.a`
  text-decoration: none;
  background-color: transparent;
  padding: 10px;

  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  font-size: ${18 / 16}rem;
`;

function MobileNavigation({ mainRef }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      mainRef.current.style.overflow = "hidden";
    } else {
      mainRef.current.style.overflow = "auto";
    }
  }, [open, mainRef]);

  return (
    <>
      {open ? (
        <MobileMenuWrapper open={open}>
          <MenuWrapper open={open}>
            <CrossContainer
              onClick={() => {
                setOpen(false);
              }}
            >
              <CrossImage
                src={"/frontendmentor_8/icon-close.svg"}
                alt={"close menu image"}
              />
            </CrossContainer>
            <MyEntry href={"/"}>home</MyEntry>
            <MyEntry href={"/"}>shop</MyEntry>
            <MyEntry href={"/"}>about</MyEntry>
            <MyEntry href={"/"}>contact</MyEntry>
          </MenuWrapper>
        </MobileMenuWrapper>
      ) : (
        ""
      )}
      {!open ? (
        <MobileMenuWrapper open={open}>
          <MenuWrapper open={open}>
            <CrossContainer
              onClick={() => {
                setOpen(false);
              }}
            >
              <CrossImage
                src={"/frontendmentor_8/icon-close.svg"}
                alt={"close menu image"}
              />
            </CrossContainer>
            <MyEntry href={"/"}>home</MyEntry>
            <MyEntry href={"/"}>shop</MyEntry>
            <MyEntry href={"/"}>about</MyEntry>
            <MyEntry href={"/"}>contact</MyEntry>
          </MenuWrapper>
        </MobileMenuWrapper>
      ) : (
        ""
      )}
      <Wrapper>
        <ImageContainer
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image
            src={"/frontendmentor_8/icon-hamburger.svg"}
            alt={"menu hamburger image"}
          />
        </ImageContainer>
        <LogoContainer>
          <Logo src={"/frontendmentor_8/logo.svg"} alt={"logo image"} />
        </LogoContainer>
      </Wrapper>
    </>
  );
}

export default MobileNavigation;
