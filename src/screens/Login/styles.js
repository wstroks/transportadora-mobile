import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAvoidingView } from 'react-native';
 

export const ContainerKey = styled(KeyboardAvoidingView)`
    flex: 1;
`;
export const Container = styled.View`
    background: #000;
    flex: 1;
    
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;
export const ContainerButtons = styled.View`
    margin-top: 35px;
    align-items: center;
    flex: 1;
    
    
`;

export const InputButtons = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 15px;
   
   border-bottom-color: #f2f2f2;
  
   
      
`;

export const Icons = styled.View`
    margin-right: 10px;
    
`;

export const InputEamil = styled.TextInput`
  
    flex: 1;
    padding: 5px 10px;
    border-radius: 5px;
    border-color: #1E232A;
    border-width: 4px;
    padding-right: 10px;
    color: #fff;
`;

export const ButtonRandomOrder = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #1dd15d;
    padding: 10px 100px;
    border-radius: 30px;
   
`;

export const ButtonRondomOrderText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ButtonRegister = styled.TouchableOpacity`
    margin-top: 15px;
`;

export const TextRegister = styled.Text`
    color: #fff;
`;