import FeedbackBtn from "../Header/AddFeedbackBtn/AddFeedbackBtn"
// import CalendarPage from "pages/Calendar/CalendarPage"
import ThemeToggler from "./ThemeToggler/ThemeToggler"
import { Title, Container, Box, BrgMenu, BrgBtn, UserAvatar, UserName} from "./Header.styled"
import Icons from "../../../images/sprite.svg"

const Header = () => {

    return (
        <Container>
            <BrgBtn>
                <BrgMenu>
                    <use href={`${Icons}#profile-mobile-menu`}></use>
                </BrgMenu>
            </BrgBtn>
            <Box>
                <Title>Calendar</Title>
                <FeedbackBtn />
                <ThemeToggler />
                <UserName>*User name*</UserName>
                <UserAvatar src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg" alt="user avatar" />
            </Box>

        </Container>
    )
}

export default Header