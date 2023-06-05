// import Vector from "../test_image/Vector.svg"
import { BiMoon } from 'react-icons/bi';
import { Toggler } from './ThemeToggler.styled';

const ThemeToggler = () => {
  return (
    <>
      <Toggler>
        <BiMoon />
      </Toggler>
      {/* 
            <Toggler>
                <MdOutlineWbSunny />
            </Toggler> */}
    </>
  );
};

export default ThemeToggler;
