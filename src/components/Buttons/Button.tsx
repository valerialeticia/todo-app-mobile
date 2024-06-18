import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Theme } from '../../themes';

type Props = {
  label?: string;
  variant?: 'primary' | 'light';
  icon?: any;
};

export function Buttons({ label, variant = 'primary', icon }: Props) {
  const buttonStyle = { backgroundColor: variant === 'light' ? '#fff' : Theme.colors.primary };
  const textStyle = { color: variant === 'light' ? Theme.colors.primary : '#fff' };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      {!!label && <Text style={[styles.text, textStyle]}>{label}</Text>}
      {!!icon && <Image source={icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
