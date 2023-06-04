import { useState } from "react"
import { LuCalendarCheck2 } from "react-icons/lu"
import { NavLink } from "react-router-dom"
import LogOutBtn from "../SideBar/LogoutBtn/LogoutBtn"
import { CgClose } from "react-icons/cg"
import LogoImg from "../Header/test_image/GOOSE_LOGO.svg"
import Logo_text from "../Header/test_image/GooseTrack.svg"
import UserCheckIcon from "../Header/test_image/user-check-01.svg"
import { CloseBtn, SideBarDiv, SideBarContainer, LogoDiv, SideBarNav, SideBarLinks, SideBarLi, Logo, GooseLogo, UserIcon, StyledNavLink, StyledCalendarIcon, TitleSideBar, GooseLogoText } from "./SideBar.styled"

const Sidebar = () => {

    return (
        <SideBarContainer>
            <SideBarDiv>
                <LogoDiv>
                    <Logo>
                        <GooseLogo src={LogoImg} alt="" />
                        {/* <GooseLogoText src={Logo_text} alt="" /> */}
                    </Logo>

                    <CloseBtn>
                        <CgClose />
                    </CloseBtn>

                </LogoDiv>
                <SideBarNav>
                    <TitleSideBar>User Panel</TitleSideBar>
                    <SideBarLinks>
                        <SideBarLi>
                            <StyledNavLink>
                                <UserIcon src={UserCheckIcon} alt="icon" />
                                My account
                            </StyledNavLink>
                        </SideBarLi>

                        <SideBarLi>
                            <StyledNavLink>
                                <StyledCalendarIcon />
                                Calendar
                            </StyledNavLink>
                        </SideBarLi>
                    </SideBarLinks>

                </SideBarNav>
            </SideBarDiv>
            <LogOutBtn />
        </SideBarContainer >
    )
}

export default Sidebar