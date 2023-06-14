import {
  SwaggerButtonContainer,
  SwaggerButtonStyle,
  SwaggerText,
} from './SwaggerButton.styled';
import Icons from 'images/sprite.svg';

const SwaggerButton = () => {
  const handleMouseEnter = event => {
    const button = event.currentTarget;
    button.style.width = '100px';
    button.style.borderRadius = '50px';
    button.querySelector('.swagger-text').style.opacity = '1';
  };
  const handleMouseLeave = event => {
    const button = event.currentTarget;
    button.style.width = '40px';
    button.style.borderRadius = '50%';
    button.querySelector('.swagger-text').style.opacity = '0';
  };
  return (
    <SwaggerButtonContainer>
      <div style={{ textAlign: 'center' }}>
        <SwaggerButtonStyle
          href="https://goosetrack-backend.onrender.com/api-docs/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg>
            <use href={`${Icons}#swagger-icon`}></use>
          </svg>
          <SwaggerText className="swagger-text">Swagger</SwaggerText>
        </SwaggerButtonStyle>
      </div>
    </SwaggerButtonContainer>
  );
};
export default SwaggerButton;
