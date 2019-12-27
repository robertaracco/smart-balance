import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FAFAFA;
`;

export const Text = styled.Text`
  font-size: 32;
  font-weight: 600;
  text-align: center;
`;
