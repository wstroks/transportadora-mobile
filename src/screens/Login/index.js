import React from 'react';
import { KeyboardAvoidingView, Platform} from 'react-native';
import {
    ContainerKey,
    Container,
    Header,
    HeaderContainer,
    Title,
    ContainerButtons,
    Icons,
    InputEamil,
    InputButtons,
    ButtonRandomOrder,
    ButtonRondomOrderText,
    ButtonRegister,
    TextRegister
} from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navagation = useNavigation();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}  enabled>
            <Container>
                <Header colors={['#52E78C', '#1AB563']}>
                    <HeaderContainer>
                        <Title>Faturamento de Cargas</Title>

                    </HeaderContainer>


                </Header>
                <ContainerButtons>
                    <InputButtons>
                        <Icons>
                            <MaterialCommunityIcons name="email-outline" color="#52E78C" size={25} />
                        </Icons>
                        <InputEamil placeholder="Email" ></InputEamil>
                    </InputButtons>

                    <InputButtons>
                        <Icons>
                            <Feather name="lock" color="#52E78C" size={25} />
                        </Icons>
                        <InputEamil placeholder="Senha"></InputEamil>
                    </InputButtons>

                    <ButtonRandomOrder>
                        <ButtonRondomOrderText>Entrar</ButtonRondomOrderText>
                    </ButtonRandomOrder>

                    <ButtonRegister onPress={() => {
                        navagation.navigate('register')
                    }}>
                        <TextRegister>Cadastre-se</TextRegister>
                    </ButtonRegister>

                </ContainerButtons>

            </Container>
        </KeyboardAvoidingView>
    );
}