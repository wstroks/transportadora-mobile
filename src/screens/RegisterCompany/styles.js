import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
    background: #000;
    flex: 1;
    
`;


export const Header = styled(LinearGradient)`
    height: 150px;
   
`;

export const HeaderNavBar = styled.View`

    margin-top: 10px;
    padding-left: 15px;
`;

export const ButtonBackNavBar = styled.TouchableOpacity`
    
`;


export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const TitleDescription = styled.Text`
    padding: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    
`;

export const FormUser = styled.View`
    margin-top: 10px;
    align-items: center;
    flex: 1;

`;



export const FormInput = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 8px 10px;
   
   border-bottom-color: #f2f2f2;
  
   
      
`;

export const Icons = styled.View`
    margin-right: 10px;
    
`;

export const InputRegister = styled.TextInput`
  
    flex: 1;
    padding: 5px 10px;
    border-radius: 5px;
    border-color: #1E232A;
    border-width: 4px;
    padding-right: 10px;
    color: #fff;
`;

export const ButtonRegister = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #1dd15d;
    padding: 10px 100px;
    border-radius: 30px;
   
`;

export const ButtonRegisterText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`;