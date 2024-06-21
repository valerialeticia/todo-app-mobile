import { StyleSheet, Text, View } from 'react-native';
import { Buttons } from '../Buttons';
import { useTimer } from './useTimer';

const playImage = require('../../../assets/play.png');
const pauseImage = require('../../../assets/pause.png');
const stopImage = require('../../../assets/stop.png');
const restartImage = require('../../../assets/restart.png');
const strongCheckImage = require('../../../assets/strong-check.png');

export function Timer() {
  const {
    minutes,
    seconds,
    onStart,
    onResume,
    onPause,
    onStop,
    onRestart,
    onFinished,
    TimerStepsEnum,
    step,
    onCheck,
    timerStatusText,
  } = useTimer();
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{timerStatusText}</Text>
      <Text style={styles.timerText}>
        {minutes}:{seconds}
      </Text>
      <View style={styles.controls}>
        {step === TimerStepsEnum.Stop && (
          <View style={{ width: '80%' }}>
            <Buttons label='start' variant='light' onPress={onStart} />
          </View>
        )}
        {step === TimerStepsEnum.InProgress && (
          <>
            <Buttons variant='light' icon={playImage} onPress={onResume} />
            <View style={{ paddingHorizontal: 10 }}>
              <Buttons variant='light' icon={pauseImage} onPress={onPause} />
            </View>
            <Buttons variant='light' icon={stopImage} onPress={onStop} />
          </>
        )}
        {step === TimerStepsEnum.Finished && (
          <>
            <Buttons variant='light' icon={restartImage} onPress={onRestart} />
            <View style={{ paddingLeft: 5 }}>
              <Buttons variant='light' icon={strongCheckImage} onPress={onCheck} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  timerText: {
    fontSize: 75,
    fontWeight: 'bold',
    color: '#fff',
  },
  controls: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
