import catSvg from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat({ isPlaying, speed }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  }

  return (
    <div className="dancing-cat-container">
      <div className="stage">
        <div className="spotlight" />
        <div className="cat-wrapper" style={animationStyle}>
          <img
            src={catSvg}
            alt="Dancing cat"
            className="cat-image"
            style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
          />
        </div>
        <div className="shadow" style={animationStyle} />
      </div>
      <div className="music-notes" aria-hidden="true">
        {['♪', '♫', '♩', '♬', '♪'].map((note, i) => (
          <span
            key={i}
            className="note"
            style={{
              animationDelay: `${i * 0.4}s`,
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}

export default DancingCat
