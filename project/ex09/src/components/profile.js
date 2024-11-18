import React, { useEffect, useState } from 'react';
import { FaBars, FaStickyNote, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
// 스타일시트
import '../styles/profile.css';

// profiles 객체에 각 member에 대한 스타일 속성을 정의합니다.
const profiles = {
  member1: { 
    backgroundColor: '#ebfaff',
    imgShadow: '5px 15px 30px rgba(173, 216, 230, 0.8)',
    btnBg: 'linear-gradient(45deg, #4affff, #35e0f7)',
    btnShadow: '5px 10px 20px rgba(0, 255, 255, 0.4)',
    iconColor: '#35e0f7',
    title: 'DECODLABB1',
  },
  member2: { 
    backgroundColor: '#edffeb',
    imgShadow: '5px 15px 30px #bdccb780',
    btnBg: 'linear-gradient(45deg, #a0ff9d, #55f5b2)',
    btnShadow: '5px 10px 20px rgba(33, 250, 105, 0.3)',
    iconColor: '#55f5b2',
    title: 'DECODLABB2',
  },
  member3: { 
    backgroundColor: '#fff3fd',
    imgShadow: '5px 15px 30px rgba(252, 99, 214, 0.2)',
    btnBg: 'linear-gradient(45deg, #ef74ff, #ff11c4)',
    btnShadow: '5px 10px 20px rgba(255, 17, 196, 0.4)',
    iconColor: '#ff11c4',
    title: 'DECODLABB3',
  },
  member4: { 
    backgroundColor: '#f5f0ff',
    imgShadow: '5px 15px 20px rgba(183, 82, 250, 0.2)',
    btnBg: 'linear-gradient(45deg, #8e74ff, #a011ff)',
    btnShadow: '5px 10px 20px rgba(160, 17, 255, 0.4)',
    iconColor: '#a011ff',
    title: 'DECODLABB4',
  }
};

const Profile = ({ member }) => {
  // useState로 Profile 상태 정의, 초기값으로 profiles.member1을 설정
  const [profile, setProfile] = useState(profiles[member] || profiles.member1)
  useEffect(()=>{
    setProfile(profiles[member] || profiles.member1)
  },[member])

  return (
    // container는 profile 객체의 스타일에 따라 배경색을 적용합니다.
    <div className='profile-container' style={{ backgroundColor: profile.backgroundColor }}>
      <section>
        {/* 내비게이션 메뉴는 Link 컴포넌트로 감싸주고 아이콘은 profile 객체의 스타일에 따라 색상을 적용합니다. */}
        <nav className='menu'>
          <Link to='#'>
            <FaBars style={{ color: profile.iconColor }} />
          </Link>
          <Link to='#'>
            <FaStickyNote style={{ color: profile.iconColor }} />
          </Link>
        </nav>
        {/* 프로필 이미지와 텍스트 표시 */}
        <article className='profile'>
          {/* 이미지 경로는 member prop에 따라 변환되고, profile 객체의 스타일에 따라 그림자를 적용합니다. */}
          <img 
            src={`img/${member || 'default'}.jpg`} 
            alt={`${member || 'default'} profile`}
            style={{ boxShadow: profile.imgShadow }}
          />
          <h1>{profile.title}</h1>
          <h2>UI/UX INTERACTIVE DEVELOPER</h2>
          {/* Link 컴포넌트를 버튼으로 스타일링하고, profile 객체의 스타일에 따라 배경과 그림자를 적용합니다. */}
          <Link
            to="#"
            className="btnView"
            style={{
              background: profile.btnBg,
              boxShadow: profile.btnShadow,
            }}
          >
            View Profile
          </Link>
        </article>
        <ul className='contact'>
          <li>
            <FaFacebookF style={{ color: profile.iconColor }} />
            <span>Visit My Facebook Page</span>
          </li>
          <li>
            <FaEnvelope style={{ color: profile.iconColor }} />
            <span>example@naver.com</span>
          </li>
        </ul>
        {/* 모든 프로필에 대한 내비게이션 링크를 동적으로 생성 */}
        <nav>
          {/* profiles 객체의 key를 map으로 순회합니다. */}
          {Object.keys(profiles).map((m) => (
            <Link
              key={m}
              to={`/1/${m}`}
              className={member === m ? "on" : ""}
              style={{
                backgroundColor: profiles[m].iconColor,
                boxShadow: profiles[m].imgShadow
              }}
            >
              {m}
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
};

export default Profile;
