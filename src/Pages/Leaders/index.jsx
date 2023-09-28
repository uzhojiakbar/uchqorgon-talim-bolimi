import React, { useState } from 'react'
import { Container, LeaderInfo, Pic } from './style'
import PagesTitle from '../../Components/PagesTitle'
import Photo from '../../Assets/imgs/Leaders/1.jpg'

const Leaders = () => {
  const [bio, setBio] = useState(false)
  return (
    <Container>
      <PagesTitle title={'Rahbariyat'} />
      <div className='main asosiy'>
        <div className="left">
          <Pic src={Photo} />
        </div>
        <LeaderInfo bio={bio} className="right">
          <div className="leader-name">
            <span>Yuldashov</span> Nodirjon Normatjonovich
          </div>
          <div className='leader-job' >
            Uchqo'rg'on  tuman maktabgacha va maktab ta'limi bo'limi boshlig'i
          </div>
          <div className="leader-connection">
            <div className="connection">
              <div className="logo">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="info">
                Dushanba-Juma
              </div>
            </div>
            <div className="connection">
              <div className="logo">
                <i className="fa-solid fa-phone"></i>
              </div>
              <a href='tel:+998941525555' className="info">
                998 94 152 55 55
              </a>
            </div>
            <div className="connection">
              <div className="logo">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <a href='mailto:uchqorgonmmtb@gmail.com' className="info">
                uchqorgonmmtb@gmail.com
              </a>
            </div>
          </div>
          <div className="leader-social-media">
            <a href='#1' className="media">
              <i class="fa-solid fa-globe"></i>
            </a>
            <a href='#2' className="media">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href='#3' className="media">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href='#4' className="media">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href='#5' className="media">
              <i class="fa-brands fa-telegram"></i>

            </a>
          </div>
          <div className='leader-bio'>
            <div className="bio-top">
              <div className="bio-title">
                Biografiya
              </div>
              <div onClick={() => setBio(!bio)} className="btn">
                <i class="fa-solid fa-arrow-down"></i>
              </div>
            </div>
            {
              bio ? <div className="bio">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui libero nesciunt, laboriosam eaque saepe quasi aspernatur aut repudiandae accusamus possimus explicabo sunt cumque laborum nihil vero exercitationem, at officiis. Minima, fuga cum vero earum quod quibusdam sit voluptas! Quibusdam labore tenetur iusto, fugit aliquam laborum.
              </div> : ''
            }
          </div>
        </LeaderInfo>
      </div>
    </Container >
  )
}

export default Leaders