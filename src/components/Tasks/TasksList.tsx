import { FlatList, StyleSheet } from 'react-native';
import { TaskItem, Props as TaskItemProps } from './TaskItem';

type Props = {
  data: Omit<TaskItemProps, 'onPress'>[];
  selectedIndex?: number;
  onPress: (index: number) => void;
};

export function TasksList({ data, selectedIndex, onPress }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <TaskItem {...item} isSelected={index === selectedIndex} onPress={() => onPress(index)} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
