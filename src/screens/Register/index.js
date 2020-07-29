import React from 'react';

import {
    Container,
    Header,
    HeaderNavBar,
    ButtonBackNavBar,
    HeaderContainer,
    Title,
    TitleDescription,
    FormUser,
    FormInput,
    Icons,
    InputRegister,
    ButtonRegister,
    ButtonRegisterText
} from './styles';

import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation();

    return (
        <Container>

            <Header colors={['#52E78C', '#1AB563']}>
                <HeaderNavBar>
                    <ButtonBackNavBar onPress={()=>{navigation.goBack()}}>
                        <Feather name="arrow-left" size={20} color="#fff" />
                    </ButtonBackNavBar>

                </HeaderNavBar>

                <HeaderContainer>
                    <Title>Crie uma conta</Title>
                    <TitleDescription>Precisamos de algumas informações para liberar seu acesso à nossa aplicação.</TitleDescription>

                </HeaderContainer>


            </Header>

            <FormUser>

                <FormInput>
                    <Icons>
                        <MaterialIcons name="person" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Name" ></InputRegister>
                </FormInput>

                <FormInput>
                    <Icons>
                        <MaterialCommunityIcons name="email-outline" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Email" ></InputRegister>
                </FormInput>

                <FormInput>
                    <Icons>
                        <Feather name="lock" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Senha"></InputRegister>
                </FormInput>

                <FormInput>
                    <Icons>
                        <Feather name="lock" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Confirmar Senha"></InputRegister>
                </FormInput>

                <ButtonRegister onPress={()=>{navigation.navigate('register-company')}}>
                    <ButtonRegisterText>Continuar</ButtonRegisterText>
                </ButtonRegister>

            </FormUser>


        </Container>
    );
}