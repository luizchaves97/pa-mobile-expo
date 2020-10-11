import React from 'react';
import { StyleProp, Text, TextInputProps, ViewStyle } from 'react-native';
import { TextInputContainer } from './style';

type UselessTextInputProps = TextInputProps & {
  value: string | number;
  onChangeText: (text: UselessTextInputProps['value']) => void;
  label?: string;
  style?: StyleProp<ViewStyle>;
};

const UselessTextInput = ({
  value,
  onChangeText,
  label,
  style,
  ...rest
}: UselessTextInputProps) => {
  return (
    <>
      <Text>{label}</Text>
      <TextInputContainer
        onChangeText={onChangeText}
        value={value}
        style={style}
        {...rest}
      />
    </>
  );
};

export default UselessTextInput;
