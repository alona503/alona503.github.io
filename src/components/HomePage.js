import React from 'react'
import Menu from './Menu'
import Offers from './Offers'
import trainerPhoto from '../images/trainer6.jpg'
import balancePhoto from '../images/trainer5.jpg'
import agePhoto from '../images/trainer7.jpg'
import happyPhoto from '../images/trainer8.jpg'
import CarouselPhoto from './CarouselPhoto'
import Contact from './Contact'
import trainerPhoto1 from '../images/slide1.jpg'
import trainerPhoto2 from '../images/slide2.jpg'
import trainerPhoto3 from '../images/slide3.jpg'

export default function HomePage() {
  const images = [
    { src: trainerPhoto1 },
    { src: trainerPhoto2 },
    { src: trainerPhoto3 },
  ]
  return (
    <div>
      <CarouselPhoto images={images} />
      <div className="container">
        <div className="row">
          <img
            style={{ padding: '0' }}
            className="col-6 tipsImage"
            src={trainerPhoto}
            alt="trainer"
          />
          <div
            className="col-6 tips"
            style={{
              borderRight: '1px solid white',
              borderTop: '1px solid white',
            }}
          >
            חשוב לדעת שהגוף שלנו זקוק לתחזוקה שוטפת ועקביות במספר גורמים שחלקם
            תלויים בנו ושתפיסה נכונה גורמת לעשייה והרגשה טובה
          </div>
        </div>
        <div className="row">
          <div className="col-6 tips ">
            תזכורת ככל שנתגבר עם הגיל אם לא נעבוד על גמישות נאבד את הטווח לבצע
            פעולות בסיסיות!!!
          </div>
          <img
            style={{ padding: '0' }}
            className="col-6 tipsImage"
            src={balancePhoto}
            alt="trainer"
          />
        </div>
        <div className="row">
          <img
            style={{ padding: '0' }}
            className="col-6 tipsImage"
            src={happyPhoto}
            alt="trainer"
          />
          <div
            className="col-6 tips"
            style={{
              borderRight: '1px solid white',
              borderTop: '1px solid white',
            }}
          >
            השפעות פעילות גופנית על המוח-שיפור בתפקוד קוגניטיבי הפחתת הסיכון
            לדיכאון שיפור איכות השינה ושחרור הורמונים חשובים לגוף
          </div>
        </div>
        <div className="row">
          <div className="col-6 tips">*שיווי משקל אפשר לשפר בכל גיל:)</div>
          <img
            style={{ padding: '0' }}
            className="col-6 tipsImage"
            src={agePhoto}
            alt="trainer"
          />
        </div>
      </div>
    </div>
  )
}
