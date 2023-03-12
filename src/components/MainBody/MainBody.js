import styled, { keyframes, css } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import MobileNavigation from "../MobileNavigation";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--font-primary);
  overflow: hidden;
`;

const TopRow = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const NavContainer = styled.div`
  position: relative;
  width: 840px;
  --my-height: 540px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    min-height: 360px;
    --my-height: 360px;
  }
`;

const appearIn = keyframes`
  0% {
    opacity: 0;
    width: 0px;
    height: 0px;
    border-radius: 5000px;
  }
  99% {
    height: var(--my-height);
  }
  100% {
    opacity: 1;
    width: var(--my-width);
    height: 100%;
    border-radius: 0px;
  }
`;

const inInjection = css`
  animation: 0.3s ${appearIn} ease-in-out forwards;
`;

const disappearOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
    width: 0px;
    height: 0px;
  }
`;

const outInjection = css`
  animation: 0.3s ${disappearOut} ease-in-out forwards;
`;

const NavBackground = styled.img`
  object-fit: cover;
  height: 100%;
  --my-width: 840px;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;

  @media ${QUERIES.exclusiveWidth1} {
    --my-width: 640px;
  }

  @media ${QUERIES.exclusiveWidth2} {
    --my-width: 500px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    --my-width: 100%;
  }

  width: var(--my-width);

  ${(p) => (p.in ? inInjection : outInjection)}
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  z-index: 5;
  position: relative;
  padding: 40px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 40px;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

const ActualNav = styled.div`
  margin-top: -16px;
  display: flex;
  gap: 12px;
`;

const NavEntry = styled.a`
  text-decoration: none;
  font-size: ${16 / 16}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-white);
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  border-radius: 8px;

  ${hoverSupported(css`
    &:hover {
      background-color: var(--color-dark-gray);
    }
  `)}
`;

const TopSideContainer = styled.div`
  min-height: 100%;
  padding: 120px;
  position: relative;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 30px;
    padding-top: 68px;
  }
`;

const TopSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 370px;
  position: relative;
`;

const headerIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const headerInInjection = css`
  animation: 0.3s ${headerIn} ease-in-out forwards;
`;

const headerOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const headerOutInjection = css`
  animation: 0.3s ${headerOut} ease-in-out forwards;
`;

const TopSideHeader = styled.h1`
  color: var(--color-black);
  font-size: ${40 / 16}rem;
  line-height: ${36 / 16}rem;
  font-weight: var(--font-weight-semibold);

  ${(p) => (p.in ? headerInInjection : headerOutInjection)}

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${36 / 16}rem;
  }
`;

const descIn = keyframes`
  0% {
    height: 0px;
    opacity: 0;
    transform: scale(0);
  }
  99% {
    height: 200px;
    opacity: 1;
    transform: scale(1);
  }
  100% {
    width: 100%;
    height: auto;
  }
`;

const descInInjection = css`
  animation: 0.3s ${descIn} ease-in-out forwards;
`;

const descOut = keyframes`
  0% {
    height: 200px;
    opacity: 1;
  }
  100% {
    height: 0px;
    transform: scale(0);
    opacity: 0;
  }
`;

const descOutInjection = css`
  animation: 0.3s ${descOut} ease-in-out forwards;
`;

const TopSideDescContainer = styled.div`
  min-height: 200px;
`;

const TopSideDescription = styled.div`
  color: var(--color-dark-gray);
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-medium);

  ${(p) => (p.in ? descInInjection : descOutInjection)}

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const ShopNowWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: -68px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -36px;
  }
`;

const ShopNowText = styled.div`
  letter-spacing: 10px;
  text-transform: uppercase;
  font-size: ${16 / 16}rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    ${ShopNowWrapper}:hover & {
      transform: scale(1.1);
      box-shadow: inset 0 -1px 0 0 var(--color-very-dark-gray),
        inset 0 -5px 0 0 var(--color-dark-gray);
    }
  `)}
`;

const ShowNowImageContainer = styled.div`
  width: 40px;
  height: 20px;
  margin-top: 4px;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    ${ShopNowWrapper}:hover & {
      transform: scale(1.1) translateX(16px);
    }
  `)}
`;

const ShowNowImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const SlideWrapper = styled.div`
  background-color: var(--color-black);
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;

  @media ${QUERIES.tabletAndSmaller} {
    bottom: auto;
    top: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    left: auto;
    right: 0;
    transform: translateY(-100%);
    z-index: 6;
  }
`;

const SlideEntry = styled.span`
  padding: 36px;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      background-color: var(--color-dark-gray);
    }
  `)}

  @media ${QUERIES.tabletAndSmaller} {
    padding: 18px;
  }
`;

const ArrowImageLeft = styled.img`
  object-fit: cover;
  width: 25px;
  height: 25px;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    ${SlideEntry}:hover & {
      transform: translateX(-6px);
      filter: invert(66%) sepia(3%) saturate(27%) hue-rotate(325deg)
        brightness(96%) contrast(94%);
    }
  `)}
`;

const ArrowImageRight = styled(ArrowImageLeft)`
  ${hoverSupported(css`
    ${SlideEntry}:hover & {
      transform: translateX(6px);
    }
  `)}
`;

const BottomRow = styled.div`
  display: flex;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const BottomImage = styled.img`
  object-fit: cover;
  width: 420px;
  height: 266px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const TabletImageContainer = styled.div`
  width: 50%;
  height: 266px;
`;

const BottomTabletImage = styled(BottomImage)`
  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const BottomTabletRow = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MainBottom = styled.div`
  background-color: var(--color-white);
  min-height: 100%;
  padding: 58px;
  width: 100%;
  display: flex;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 58px 24px;
  }
`;

const MainBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto 0;
`;

const MainBottomHeader = styled.h1`
  color: var(--color-black);
  font-size: ${18 / 16}rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 7px;

  @media ${QUERIES.phoneAndSmaller} {
    letter-spacing: 5px;
  }
`;

const MainBottomDesc = styled.div`
  color: var(--color-dark-gray);
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${17 / 16}rem;
    line-height: ${22 / 16}rem;
  }
`;

const tabDescs = [
  {
    title: "We are available all across the globe",
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in the most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Discover innovative ways to decorate",
    content:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "Manufactured with the best materials",
    content:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function MainBody() {
  const [prevTab, setPrevTab] = useState(1);
  const [tab, setTab] = useState(1);
  const [trigger, setTrigger] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    setTrigger(false);
    const timer = setTimeout(() => {
      setTrigger(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [tab]);

  return (
    <Wrapper role={"main"} ref={mainRef}>
      <TopRow>
        <NavContainer>
          {trigger ? (
            <NavBackground
              in={true}
              src={
                isMobile
                  ? `/frontendmentor_8/mobile-image-hero-${tab}.jpg`
                  : `/frontendmentor_8/desktop-image-hero-${tab}.jpg`
              }
              alt={`hero image tab ${tab}`}
            />
          ) : (
            ""
          )}
          {!trigger ? (
            <NavBackground
              src={
                isMobile
                  ? `/frontendmentor_8/mobile-image-hero-${prevTab}.jpg`
                  : `/frontendmentor_8/desktop-image-hero-${prevTab}.jpg`
              }
              alt={`hero image tab ${prevTab}`}
            />
          ) : (
            ""
          )}

          <MobileNavigation mainRef={mainRef} />

          <NavWrapper>
            <LogoContainer>
              <Logo src={"/frontendmentor_8/logo.svg"} alt={"logo image"} />
            </LogoContainer>
            <ActualNav>
              <NavEntry href={"/"}>home</NavEntry>
              <NavEntry href={"/"}>shop</NavEntry>
              <NavEntry href={"/"}>about</NavEntry>
              <NavEntry href={"/"}>contact</NavEntry>
            </ActualNav>
          </NavWrapper>
        </NavContainer>

        <TopSideContainer>
          <TopSideWrapper>
            {trigger ? (
              <TopSideHeader in={true}>{tabDescs[tab - 1].title}</TopSideHeader>
            ) : (
              ""
            )}
            {!trigger ? (
              <TopSideHeader>{tabDescs[prevTab - 1].title}</TopSideHeader>
            ) : (
              ""
            )}
            <TopSideDescContainer>
              {trigger ? (
                <TopSideDescription in={true}>
                  {tabDescs[tab - 1].content}
                </TopSideDescription>
              ) : (
                ""
              )}
              {!trigger ? (
                <TopSideDescription>
                  {tabDescs[prevTab - 1].content}
                </TopSideDescription>
              ) : (
                ""
              )}
            </TopSideDescContainer>
            <ShopNowWrapper href={"/"}>
              <ShopNowText>SHOP NOW</ShopNowText>
              <ShowNowImageContainer>
                <ShowNowImage
                  src={"/frontendmentor_8/icon-arrow.svg"}
                  alt={"decoration shopw now image"}
                />
              </ShowNowImageContainer>
            </ShopNowWrapper>
          </TopSideWrapper>
          <SlideWrapper>
            <SlideEntry
              onClick={() => {
                setTrigger(false);
                setPrevTab(tab);
                if (tab - 1 < 1) {
                  setTab(3);
                } else {
                  setTab(tab - 1);
                }
              }}
            >
              <ArrowImageLeft
                src={"/frontendmentor_8/icon-angle-left.svg"}
                alt={"slide arrow left"}
              />
            </SlideEntry>
            <SlideEntry
              onClick={() => {
                setTrigger(false);
                setPrevTab(tab);
                if (tab + 1 > 3) {
                  setTab(1);
                } else {
                  setTab(tab + 1);
                }
              }}
            >
              <ArrowImageRight
                src={"/frontendmentor_8/icon-angle-right.svg"}
                alt={"slide arrow right"}
              />
            </SlideEntry>
          </SlideWrapper>
        </TopSideContainer>
      </TopRow>

      <BottomRow>
        <BottomImage
          src={"/frontendmentor_8/image-about-dark.jpg"}
          alt={"bottom row left image decoration"}
        />
        <BottomTabletRow>
          <TabletImageContainer>
            <BottomTabletImage
              src={"/frontendmentor_8/image-about-dark.jpg"}
              alt={"bottom row left image decoration"}
            />
          </TabletImageContainer>
          <TabletImageContainer>
            <BottomImage
              src={"/frontendmentor_8/image-about-light.jpg"}
              alt={"bottom row left image decoration"}
            />
          </TabletImageContainer>
        </BottomTabletRow>
        <MainBottom>
          <MainBottomContainer>
            <MainBottomHeader>ABOUT OUR FURNITURE</MainBottomHeader>
            <MainBottomDesc>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniute pieces you need, from traditional to contemporary
              styles or anything inbetween. Product specialists are available to
              help you create your dream space.
            </MainBottomDesc>
          </MainBottomContainer>
        </MainBottom>
        <BottomImage
          src={"/frontendmentor_8/image-about-light.jpg"}
          alt={"bottom row left image decoration"}
        />
      </BottomRow>
    </Wrapper>
  );
}

export default MainBody;
