import React from "react";
import sprite from '../../../../images/sprite.svg';

import { CommentStyled, StarContainerStyled } from "./Comment.styled";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export function Comment(props){
    const scrollType = "visible";
    const content = props.children.length > 200 ? `${props.children.slice(0, 200)}...` : props.children;
    const truncatedContent = props.children.length > 200 ? `${content}...` : content;
    const LetterAvatar = props.name.indexOf(' ') !== -1 
        ?` ${props.name[0].toUpperCase()} ${props.name.split(' ').pop()[0].toUpperCase()} `
        : ` ${props.name[0].toUpperCase()} `;
    
    return (
        <CommentStyled>
            <div className="comment-container">
                <div className="comment-box">
                    {props.src ? (
                        <img src={props.src} alt={LetterAvatar}/>
                    ) : (
                        <Stack>
                            <Avatar sx={{ bgcolor:'#3e85f3'}}> {LetterAvatar} </Avatar>
                        </Stack>
                    )}
                </div>
                <div>
                    <h3>{props.name.trim()}</h3>
                    <StarContainerStyled value={props.star}>
                        <li>
                            <svg height="14" width="14">
                                <use href={sprite+'#starStartPage'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg height="14" width="14">
                                <use href={sprite+'#starStartPage'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg height="14" width="14">
                                <use href={sprite+'#starStartPage'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg height="14" width="14">
                                <use href={sprite+'#starStartPage'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg height="14" width="14">
                                <use href={sprite+'#starStartPage'}></use>
                            </svg>
                        </li>
                    </StarContainerStyled>
                </div>
            </div>
            <p className="comment-content" style={{ overflow: scrollType }}>{truncatedContent}</p>
        </CommentStyled>
    );
}