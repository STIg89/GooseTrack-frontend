import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper, GoHome, Title, Text, Image } from './Page404.styled';

import img404x1 from 'images/404-1x.png';
import img404x2 from 'images/404-2x.png';
import img404x3 from 'images/404-3x.png';

const Page404 = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    
    useEffect(() => {
        const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
        navigate('/');
    }
    }, [countdown, navigate]);

    return (
    <Wrapper>
        <Title>ОООPS!Page Not Found</Title>
        <Text>
            Sorry, we can't find this page! But don't worry, it's still great!
        </Text>
        <GoHome> You will be relocated to Home Page in {countdown} seconds</GoHome>
        <Image srcSet={`${img404x1} 1x, ${img404x2} 2x, ${img404x3} 3x`} />
    </Wrapper>
    );
    };

export default Page404; 