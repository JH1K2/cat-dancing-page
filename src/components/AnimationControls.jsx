import './AnimationControls.css'

function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-control">
        <label htmlFor="speed-slider">속도</label>
        <input
          id="speed-slider"
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          aria-label="애니메이션 속도 조절"
        />
        <span className="speed-value">{speed}x</span>
      </div>
    </div>
  )
}

export default AnimationControls
