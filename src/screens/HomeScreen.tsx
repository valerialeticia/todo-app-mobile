import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Theme } from '../themes';
import { FabButton, NewTaskModal, NoTasksCards, TasksList, Timer } from '../components';
import { useState } from 'react';

const logoImage = require('../../assets/logo.png');

export function HomeScreen() {
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} resizeMode='contain' />
        {false ? (
          <NoTasksCards />
        ) : (
          <>
            <View style={styles.timerContainer}>
              <Timer />
            </View>

            <TasksList
              data={[
                { isSelected: true, label: 'Create a frontend project', status: 'IN_PROGRESS' },
                { isSelected: false, label: 'Create a frontend project', status: 'READY' },
                { isSelected: false, label: 'Create a frontend project', status: 'READY' },
              ]}
            />
          </>
        )}

        <FabButton onPress={() => setIsNewTaskModalVisible(true)} />
        <NewTaskModal
          isVisible={isNewTaskModalVisible}
          onClose={() => setIsNewTaskModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    flex: 1,
  },
  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 30,
  },
  timerContainer: {
    paddingHorizontal: 20,
  },
});
