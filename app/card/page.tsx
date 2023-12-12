import React from 'react'

const Page = () => {
  return (
    <section>
      <div className="container">
        <div className="card front-face">
          <header>
            <span className="logo">
              <img src="/images/logo.png" alt="" />
              <h5>MasterCard</h5>
            </span>
            <img  src="/images/chip.png" alt="" className="chip rounded-[8px]" />
          </header>

          <div className="card-details">
            <div className="name-number">
              <h6>Card Number</h6>
              <h5 className="number">2058 2021 4000 9000</h5>
              <h5 className="name uppercase">Nabin Katwal</h5>
            </div>

            <div className="valid-date">
              <h6>Valid Thru</h6>
              <h5>06/28</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
          <h6>
            For customer service call +955 5252 8563 or email at
            wemastercard@gmail.com
          </h6>
          <span className="magnetic-strip"></span>
          <div className="signature"><i>005</i></div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et quis magni magnam nihil temporibus? Facere consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
    </section>
  )
}

export default Page