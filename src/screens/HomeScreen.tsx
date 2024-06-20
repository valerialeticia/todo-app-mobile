import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Theme } from '../themes';
import { FabButton, NewTaskModal, NoTasksCards, TasksList, Timer } from '../components';
import { useReducer } from 'react';
import { HomeScreenActions, HomeScreenReducer, homeScreenInitialState } from '../reducers';

const logoImage = require('../../assets/logo.png');

export function HomeScreen() {
  const [{ isModalVisible, tasks, selectedTaskIndex }, dispatch] = useReducer(
    HomeScreenReducer,
    homeScreenInitialState,
  );
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
              selectedIndex={selectedTaskIndex}
              data={tasks}
              onPress={(selectedTaskIndex: number) =>
                dispatch(HomeScreenActions.selectTaskIndex({ selectedTaskIndex }))
              }
            />
          </>
        )}

        <FabButton
          onPress={() => dispatch(HomeScreenActions.toggleModal({ isModalVisible: true }))}
        />
        <NewTaskModal
          isVisible={isModalVisible}
          onClose={() => dispatch(HomeScreenActions.toggleModal({ isModalVisible: false }))}
          onSubmit={(label: string) =>
            dispatch(
              HomeScreenActions.createTask({ task: { label, isSelected: false, status: 'READY' } }),
            )
          }
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
