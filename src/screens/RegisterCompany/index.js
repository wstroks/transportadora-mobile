import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

import { MaterialCommunityIcons, Feather, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';



export default function Register() {
    const navagation = useNavigation();
    const [ufs, setUfs] = useState([]);


    async function getUFs() {
        try {
            const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");

            const initials = response.data.map(uf => uf.sigla);

            setUfs(initials);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUFs();
    }, []);

    const [selectedUF, setSelectedUF] = useState('0');

     

    return (
        <Container>

            <Header colors={['#52E78C', '#1AB563']}>
                <HeaderNavBar>
                    <ButtonBackNavBar onPress={() => { navagation.goBack() }}>
                        <Feather name="arrow-left" size={20} color="#fff" />
                    </ButtonBackNavBar>

                </HeaderNavBar>

                <HeaderContainer>
                    <Title>Informações do estabelecimento</Title>
                    <TitleDescription>Preencha as informações sobre sua empresa para finalizamos o cadastro.</TitleDescription>

                </HeaderContainer>


            </Header>

            <FormUser>

                <FormInput>
                    <Icons>
                        <MaterialCommunityIcons name="warehouse" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Nome Comercial" ></InputRegister>
                </FormInput>

                <FormInput>
                    <Icons>
                        <MaterialCommunityIcons name="format-float-none" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="CPNJ" ></InputRegister>
                </FormInput>

                <FormInput>
                    <Icons>
                        <Entypo name="address" color="#52E78C" size={25} />
                    </Icons>
                   
                    <InputRegister placeholder="Estado"></InputRegister>

                </FormInput>

                <FormInput>
                    <Icons>
                        <Entypo name="address" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Cidade"></InputRegister>

                </FormInput>

                <FormInput>
                    <Icons>
                        <Feather name="lock" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Cep"></InputRegister>
                </FormInput>

                <FormInput>
                    <Icons>
                        <Feather name="lock" color="#52E78C" size={25} />
                    </Icons>
                    <InputRegister placeholder="Endereço"></InputRegister>
                </FormInput>

                <ButtonRegister onPress={() => { navagation.navigate('login') }}>
                    <ButtonRegisterText>Cadastrar</ButtonRegisterText>
                </ButtonRegister>

            </FormUser>


        </Container>

    )
}
