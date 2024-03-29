import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Image, ImageSourcePropType, Text } from 'react-native';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../Widget'

import { styles } from './styles';

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option key={key} title={value.title} image={value.image} onPress={() => onFeedbackTypeChanged(key as FeedbackType)} />
            ))
        }
      </View>
    </View>
  );
}