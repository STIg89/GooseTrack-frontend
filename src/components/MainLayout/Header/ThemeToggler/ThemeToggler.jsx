import { BiMoon } from 'react-icons/bi';
// import { MdOutlineWbSunny } from 'react-icons/md';
import { Toggler } from './ThemeToggler.styled';

const ThemeToggler = () => {
    return (
        <>
            {
                <Toggler>
                    <BiMoon />
                </Toggler>
            }

            {/* <Toggler>
                <MdOutlineWbSunny />
            </Toggler> */}
        </>
    );
};

export default ThemeToggler;
