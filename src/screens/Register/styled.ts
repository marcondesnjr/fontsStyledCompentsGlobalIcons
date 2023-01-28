import styled from "styled-components/native";
import { TextInput } from "react-native";
import IconTextTouchable from "../../components/IconTextTouchable";

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 25px;
    background-color: ${({theme})=>theme.colors.background};
`;

export const RegisterInput = styled.TextInput`
    width: 100%;
    height: 56px;
    background-color: ${({theme})=> theme.colors.shape};
    border-radius: 5px;
    padding-left: 16px;
    margin-bottom: 8px;
`

export const TypeContainer = styled.View`
   display: flex;
   height: 56px;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: space-between;
   margin-top: 16px;
`

export const ButtonView = styled.View`
   flex:1;
   max-width: 49%;
   border: 1.5px solid rgba(150, 156, 179,0.2);
   border-radius: 5px;
`

export const CategoryView = styled.View`
   height: 56;
   background-color: ${({theme})=> theme.colors.shape};
   border-radius: 5px;
   margin-top: 16px;
`

export const BottomView = styled.View`
   flex: 1;
   flex-direction: column;
   justify-content: space-between;
`
export const BottomButtonView = styled.View`
   height: 56px;
   border-radius: 5px;
   overflow: hidden;
`