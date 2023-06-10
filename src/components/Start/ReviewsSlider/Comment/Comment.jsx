import React from "react";
import sprite from '../../../../images/sprite.svg';

import { CommentStyled,StarContainerStyled } from "./Comment.styled";

export function Comment(props){
    const scrollType = props.children.length>240 ? "auto" : "visible"
    return(
            <CommentStyled>
            <div className="comment-container">
            <div className="comment-box">
                <img src={props.src} alt='User avatar' />
            </div>
            <div>
                <h3>{props.name.trim()}</h3>
                  <StarContainerStyled value={props.star}>
                    <li><svg height="14" width="14">
                      <use href={sprite+'#starStartPage'}></use>
                    </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                  </StarContainerStyled>
              </div>
            </div>
            <p className="comment-content"  style={{  overflow:scrollType  } } > {props.children}</p>
        </CommentStyled >
    );
}