import styled from 'styled-components';
import FlexBetween from 'styles/FlexBetween.styled';

const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${props => props.theme.zIndexes.header};

    width: 100%;
`;

const Container = styled(FlexBetween)`
    gap: 4rem;

    max-width: ${props => props.theme.sizes.container.width};
    margin: 0 auto;
`;

const Content = styled(FlexBetween)`
    width: 100%;
    height: ${props => props.theme.sizes.header.height};
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
    letter-spacing: -3.5px;
`;

const Navigation = styled.nav`
    display: flex;
    gap: 2rem;
`;

export {
    Header,
    Container,
    Content,
    Title,
    Navigation,
};