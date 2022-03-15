import { } from 'react-native';
import React from 'react';
import { Container, Loading} from './styles';

const FooterList = ({loadingFooter}) => {
    if (loadingFooter) {
        return null;
    }

    return (
        <Container>
            <Loading />
        </Container>
    );
}

export default FooterList