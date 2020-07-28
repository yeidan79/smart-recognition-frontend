import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, age, gender, race }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {age > 0 &&
        <div className='bounding-box'
          style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
          <div className="bounding-box-concepts">
            <div className="bounding-box__concept">
              <span>{age}</span>
              <span className="concept__prediction-val">{gender}</span>
              <span className="concept__prediction-val">{race}</span>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default FaceRecognition;
