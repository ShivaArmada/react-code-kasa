import '../styles/Bar.scss';

function Bar({ isAbout }) {
    return (
      <div className={`bar ${isAbout ? 'bar--about' : ''}`}>
        {!isAbout && <p className='bar--text'>Chez vous, partout et ailleurs</p>}
      </div>
    );
  }
  
  export default Bar;