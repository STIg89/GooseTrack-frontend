import styled from "styled-components";

export const LangSwitchWrapper = styled.div`
  display: flex;
  height: 46px;
  width: 131px;
  border-radius: 16px;
  align-items: center;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  justify-content: space-around;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  user-select: none;
`

export const Btn = styled.div`

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  border-right: 1px solid white;
  color: ${props => props.checked ? "var(--accent-text-color)" : "var(--not-active-item-sidebar-text-color)"};
  background-color: ${props => props.checked ? "var(--active-item-sidebar-background)" : "var(--sidebar-background-color);"};

  &:last-child {
    border-right: none;
  } 
`

export const Input = styled.input`

display: none;

  &:active {
    background-color: var(--hover-btn-background-color);
    cursor: default;
  }

`

export const Label = styled.label`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
`