import React from "react"

import "../styles/index.css"

function IndexPage() {
  return (
    <div className="main">
      <div className="blobs">
        <span className="blob-wrapper"></span>
        <span className="blob-one"></span>
        <span className="blob-two"></span>
        <span className="blob-three"></span>
        <span className="blob-four"></span>
      </div>

      <div className="home">
        <div className="head-container">
          <h1 className="swyft-logo">swyft</h1>
          <p className="description">
            Coming soon to your nearest internet and devices.
          </p>
        </div>

        <div className="body-container">
          <p className="description-secondary">
            Are you an investor or own an incubation center? We’re currently
            looking for one. Reach out to us and learn more about the startup.
          </p>
        </div>

        <div className="button-container">
          <button className="cta">
            <span className="small-blob__one"></span>
            <span className="small-blob__two"></span>
            <a className="button" href="mailto:a@osenorth.co">
              Contact us
            </a>
          </button>
        </div>

        <div className="stealth">
          <p className="stealth-description">
            Currently building under stealth mode.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
