import styled from "styled-components";

export const CommentStyled = styled.div`
font-family: "Inter";
box-sizing: border-box;
height: 194px;
width: 335px;
padding: 24px;
margin-left: auto;
margin-right: auto;
border: 1px solid rgba(17, 17, 17, 0.1);
border-radius: 8px;
@media screen and (max-width: 374px) {
    width: 99%;
    height: auto;
    padding-bottom: 0;
        }
        @media screen and (min-width: 768px) {
        height: 187px;
        width: 580px;   
        padding: 33px;    
        display: flex;
        flex-direction: column;
        
}
@media screen and (min-width: 1440px) {
        
}
& h3{    
margin: 0;
color: #343434;
font-size: 18px;
line-height: 1;
margin-bottom: 13px;
}
& .comment-content{
    margin: 0;
    font-weight: 500;
    color: rgba(17, 17, 17, 0.7);
    font-size: 14px;
    line-height: 1.29;
    @media screen and (min-width: 768px) {
        align-self:flex-end;
        width: 447px;
        flex-grow: 1;
}
    
}
& .comment-box{
    width: 50px;
    height: 50px;
   
}
& img{
    width:100%;
    border-radius: 50%;
    display: block;
    height: auto;
}
& .comment-container{
    display: flex;
    column-gap: 18px;

}
`
export const StarContainerStyled = styled.ul`
display: flex;
flex-direction: row-reverse;
justify-content: start;
height: 14px;
column-gap: 10px;
padding: 0;
margin: 0;
margin-bottom:29px;
align-self: flex-end;
list-style: none;
@media screen and (min-width: 768px) {
    margin-bottom:24px;
}
& li:nth-child(-n+${props=>props.value}){
   & svg{
    fill:#FFAC33;
   }
}
svg{
    fill:#CEC9C1;
}

`