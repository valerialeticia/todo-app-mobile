import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TaskStepsEnum } from '../../reducers';

export type Props = {
  isSelected?: boolean;
  label: string;
  status?: TaskStepsEnum;
  onPress: () => void;
};

const tinyCheckImage = require('../../../assets/tiny-check.png');

export function TaskItem({
  label,
  status = TaskStepsEnum.Ready,
  isSelected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
      {status === TaskStepsEnum.InProgress && <Text style={styles.statusText}>In progress</Text>}
      {status === TaskStepsEnum.Finished && <Image source={tinyCheckImage} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerSelected: {
    borderLeftColor: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 14,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
