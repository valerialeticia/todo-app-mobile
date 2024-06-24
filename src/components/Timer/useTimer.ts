import { useEffect, useMemo, useState } from 'react';

const TIMER_SECONDS_DEFAULT = 5;

enum TimerStepsEnum {
  Stop = 'STOP',
  InProgress = 'IN_PROGRESS',
  Finished = 'FINISHED',
}

type Props = {
  handleStart?: () => void;
  handleCheck?: () => void;
  handleStop?: () => void;
};

/** Hook responsável pelo gerenciamento do componente Timer. */
export function useTimer({ handleStart, handleCheck, handleStop }: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(TIMER_SECONDS_DEFAULT);
  const [step, setStep] = useState(TimerStepsEnum.Stop);

  function onStart() {
    if (handleStart) handleStart();
    setIsRunning(true);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.InProgress);
  }

  function onResume() {
    setIsRunning(true);
    setStep(TimerStepsEnum.InProgress);
  }

  function onPause() {
    setIsRunning(false);
    setStep(TimerStepsEnum.InProgress);
  }

  function onStop() {
    if (handleStop) handleStop();
    setIsRunning(false);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.Stop);
  }

  function onRestart() {
    setIsRunning(true);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.InProgress);
  }

  function onFinished() {
    setIsRunning(false);
    setStep(TimerStepsEnum.Finished);
    //TODO: ON_FINISH
  }

  function onCheck() {
    if (handleCheck) handleCheck();
    setIsRunning(false);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
    setStep(TimerStepsEnum.Stop);
  }

  useEffect(() => {
    if (!isRunning) return; // só começar a decrescer quando clicar no botão de start.
    const timer = setTimeout(() => {
      const seconds = timerSeconds - 1; // o - 1 pois está decrescendo o tempo.
      setTimerSeconds(seconds);
      if (seconds === 0) {
        onFinished();
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, timerSeconds]);

  const aux = timerSeconds % 3600;
  const minutes = String(Math.floor(aux / 60)).padStart(2, '0');
  const seconds = String(Math.ceil(aux % 60)).padStart(2, '0');

  const timerStatusText = useMemo(() => {
    if (step === TimerStepsEnum.Stop) {
      return 'Ready';
    }
    if (step === TimerStepsEnum.InProgress) {
      return 'In Progress';
    }
    if (step === TimerStepsEnum.Finished) {
      return 'Finished';
    }
  }, [step]);

  return {
    minutes,
    seconds,
    onStart,
    onResume,
    onPause,
    onStop,
    onRestart,
    TimerStepsEnum,
    step,
    onCheck,
    timerStatusText,
  };
}
