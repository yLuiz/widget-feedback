import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Image, ImageSourcePropType, Text } from 'react-native';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
}

export function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >

      <Image
        source={image}
        style={styles.image} 
      />

      <Text style={styles.title}>
        Title
      </Text>

      <Copyright></Copyright>
    </TouchableOpacity>
  );
}