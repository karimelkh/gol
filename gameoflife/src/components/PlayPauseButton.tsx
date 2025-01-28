import { pauseGame, playGame } from '../utils/GameLogic';
import StateType from '../types/StateType';
import IntervalRefAliase from '../aliases/IntervalRefAliase';

interface PlayPauseButtonProps {
  st: StateType;
  intervalRef: IntervalRefAliase;
}

function PlayPauseButton({ intervalRef, st }: PlayPauseButtonProps) {
  let text: string = 'Play';
  if (st.state.isRunning) text = 'Pause';
  else text = 'Play';
  return (
    <button
      className="btn"
      onClick={() =>
        st.state.isRunning
          ? pauseGame(st.setState, intervalRef)
          : playGame(st.setState, intervalRef)
      }
    >
      {text}
    </button>
  );
}

export default PlayPauseButton;
