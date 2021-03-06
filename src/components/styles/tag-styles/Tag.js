import styled from 'styled-components'
import theme from '../../../styles/theme'

const Tag = styled.span`
    float: left;
    font-family: ${theme.fonts.Muli};
    font-size: 13px;
    color: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    letter-spacing: 1px;
    cursor: pointer;
    background: #111;
    border: none;
    margin-right: 0.5rem;
`;

export default Tag;