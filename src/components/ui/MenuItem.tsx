import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../config/theme/theme';
import {useNavigation} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/ionicons';

interface Props {
  name: string;
  icon: string;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: Props) => {
  const navigator = useNavigation<any>();

  return (
    <Pressable onPress={() => navigator.navigate(component)}>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.cardBackground,
          ...(isFirst && {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 10,
          }),
          ...(isLast && {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingBottom: 10,
          }),
        }}>
        <Icon
          name={icon}
          size={25}
          style={{marginRight: 10}}
          color={colors.primary}
        />
        <Text style={{color: colors.text}}>{name}</Text>
        <Icon
          name="chevron-forward-outline"
          size={25}
          style={{marginLeft: 'auto', color: colors.primary}}
        />
      </View>
    </Pressable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
