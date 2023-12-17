import React, { useState, useEffect } from 'react';
import './Introduce.css';
import IntImage from '../images/AAC.jpg';

function Introduce() {
  const [text, setText] = useState('');
  const introText = '여기기는, 도전의 공간입니다.';


  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + introText.charAt(index));
      index++;

      if (index === introText.length) {
        clearInterval(intervalId);
      }
    }, 100); // 100ms 간격으로 한 글자씩 추가

    return () => {
      clearInterval(intervalId);
    };
  }, []); // 빈 배열을 dependency로 전달하여 한 번만 실행

  return (
    <section className="Introduce w1400 MarginTop ">
      <article className="Itr_Box">
        <div className="Itr_Image">
          <img src={IntImage} alt="IntTable" />
        </div>
        <div className="Itr_Text">
          <div>
            <h1 className="Itr_MainText">
              {text}
              <span className="Itr_Cursor">|</span>
            </h1>
            <p>
              지금 이 순간,
              새로운 도전을 실행중인 김정은입니다.
            </p>
            <p>
              느낌표 보다는 물음표를 더 좋아하는<br />
              그래서 항상 배움을 실천하는
              프론트엔드 개발자가 되고싶습니다.
            </p>
            <p>배우고, 익히고, 실천하고 그래서 발전 할 수 있는<br />
            개발자를 목표로 하루하루 노력하겠습니다.</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Introduce;