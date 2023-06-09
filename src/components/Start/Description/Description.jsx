import React, { useEffect, useRef, useMemo} from 'react';

import { Container, List, ItemWrapper, TextWrapper, TextNumber, TextButton, Title, Paragraph, Image} from "./Description.styled";

import img01x1 from "images/start-page-desc-1-1x.png"; 
import img02x1 from "images/start-page-desc-2-1x.png"; 
import img03x1 from "images/start-page-desc-3-1x.png"

import img01x2 from "images/start-page-desc-1-2x.png"; 
import img02x2 from "images/start-page-desc-2-2x.png"; 
import img03x2 from "images/start-page-desc-3-2x.png"

import img01x3 from "images/start-page-desc-1-3x.png"; 
import img02x3 from "images/start-page-desc-2-3x.png"; 
import img03x3 from "images/start-page-desc-3-3x.png"

const Description = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
  
    const blocks = useMemo(() => [
      {
        ref: ref1,
        number: '1.',
        title: 'CALENDAR',
        name: 'VIEW',
        description: "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
        imgSrcSet: `${img01x1} 1x, ${img01x2} 2x, ${img01x3} 3x`,
      },
      {
        ref: ref2,
        number: '2.',
        title: 'SIDEBAR',
        description: "GooseTrack offers easy access to your account settings, calendar, and filters. The 'My Account' section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.",
        imgSrcSet: `${img02x1} 1x, ${img02x2} 2x, ${img02x3} 3x`,
      },
      {
        ref: ref3,
        number: '3.',
        title: 'ALL IN',
        name: 'ONE',
        description: "GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.",
        imgSrcSet: `${img03x1} 1x, ${img03x2} 2x, ${img03x3} 3x`,
      },
    ], []);
  
    useEffect(() => {
      const handleScroll = () => {
        blocks.forEach((block) => {
          const itemPosition = block.ref.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          if (itemPosition < windowHeight) {
            block.ref.current.classList.add('animated');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [blocks]);
  
    return (
      <Container>
        <List>
          {blocks.map((block, index) => (
            <ItemWrapper ref={block.ref} key={block.number} className= {index === 1 ? 'reverse' : ''}>
              <TextWrapper className= {index === 1 ? 'text-reverse' : ''}>
                <TextNumber>{block.number}</TextNumber>
                <TextButton type="button">
                  {block.title}
                </TextButton>
                <Title>{block.name}</Title>
                <Paragraph>{block.description}</Paragraph>
              </TextWrapper>
              <Image srcSet={block.imgSrcSet} alt={block.title} />
            </ItemWrapper>
          ))}
        </List>
      </Container>
    );
  };
  
  export default Description;