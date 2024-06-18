import { StyleSheet, Text, View } from 'react-native';
import { Buttons } from '../Buttons';

const playImage = require('../../../assets/play.png');
const pauseImage = require('../../../assets/pause.png');
const stopImage = require('../../../assets/stop.png');
const restartImage = require('../../../assets/restart.png');
const strongCheckImage = require('../../../assets/strong-check.png');

type Props = {
  step?: 'START' | 'IN_PROGRESS' | 'FINISHED';
};

export function Timer({ step = 'FINISHED' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Ready</Text>
      <Text style={styles.timerText}>24:59</Text>
      <View style={styles.controls}>
        {step === 'START' && (
          <View style={{ width: '80%' }}>
            <Buttons label='start' variant='light' />
          </View>
        )}
        {step === 'IN_PROGRESS' && (
          <>
            <Buttons variant='light' icon={playImage} />
            <View style={{ paddingHorizontal: 10 }}>
              <Buttons variant='light' icon={pauseImage} />
            </View>
            <Buttons variant='light' icon={stopImage} />
          </>
        )}
        {step === 'FINISHED' && (
          <>
            <Buttons variant='light' icon={restartImage} />
            <View style={{ paddingLeft: 5 }}>
              <Buttons variant='light' icon={strongCheckImage} />
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
