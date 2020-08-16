import React, { useContext } from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useAuth } from '../../contexts/auth';

import { Wrapper, Header, BalanceContainer, ButttonLogout, BalanceTitle, Balance, Container } from './styles';

import Suggestions from '../../components/Suggestions/index';
import Activities from '../../components/Activities/index';
import Tips from '../../components/Tips/index';
import Banner from '../../components/Banner/index';

export default function Home() {

    const { signOut } = useAuth();

    function handleSignOut(){
        signOut();
    }
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <ButttonLogout onPress={handleSignOut}>
                        <MaterialCommunityIcons name="logout" size={30} color="#10c86e" />
                    </ButttonLogout>
                </Header>

                <Suggestions />
                <Activities />
                <Tips />
                <Banner />
            </Container>
        </Wrapper>

    );
}