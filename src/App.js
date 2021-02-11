import React, { useState, useEffect } from "react"
import clsx from "clsx"
import CustomerImage from "./assets/customer-service-image.png"
import "./App.css"

const App = () => {
  const [hide, setHide] = useState(false)
  const [message, setMessage] = useState("")
  const goRegistration = () => {
    window.location.href=`https://www.trustedbikebuyers.co.uk/value-your-bike/confirm-bike?vrm=${message}`;
  }

  const toggleChatBox = () => {
    setHide(value => !value)
  }

  useEffect(() => {
    setTimeout(() => {
      setHide(true)
    }, [3000])
  }, [])

  return (
    <div
      className={clsx("chat-box", hide && "open")}
    >
      <div className="mm-chat-window">
        <div className="app-container">
          <div className="close-button" onClick={toggleChatBox}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13" fill="white" stroke="#0084FF" strokeWidth="2"></circle>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.62525 8.42456L8.42531 9.6245L13.225 14.4242L8.42518 19.224L9.62512 20.4239L14.4249 15.6241L19.2248 20.4239L20.4247 19.224L15.6249 14.4242L20.4246 9.6245L19.2246 8.42456L14.4249 13.2242L9.62525 8.42456Z" fill="#0084FF"></path>
            </svg>
          </div>
          <div className={clsx("main", hide && "active")}>
            <div className="window-heading">
              <div className="avatar">
                <img
                  src={CustomerImage}
                  width="50"
                  height="50"
                  alt=""
                />
              </div>
              <div className="window-heading__title-area">
                <div className="window-heading__title">
                  Customer Service Agent
                </div>
              </div>
            </div>
            <div className="chat-display">
              <div className="chat-display__messages">
                <div className="chat-display__timestamp">
                  Just now
                </div>
                <div className="outgoing-message">
                  <div className="avatar outgoing-message__avatar">
                    <img
                      src={CustomerImage}
                      width="32"
                      height="32"
                      alt=""
                    />
                  </div>
                  <div className="outgoing-message__body outgoing-message__body-text">
                    Hey there ✋ Would you like an Instant Valuation on your Motorbike? 🏍️ <br />ENTER YOUR REGISTRATION (WITHOUT SPACES):
                  </div>
                </div>
                <div className="chat-display__bottom-spacer">
                </div>
              </div>
            </div>
            <div className="chat-input-area">
              <div className="chat-input-area__input-row">
                <input
                  className="chat-input-area__input"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      goRegistration()
                    }
                  }}
                />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="chat-input-area__send-button" onClick={goRegistration}>
                  <g clipPath="url(#send_svg__clip0)" fill="#D8D8D8">
                    <path d="M0 11.013l8.188 4.8 4.8 8.188L24 0 0 11.013zm12.909 11.402l-3.993-6.811 2.442-2.442-.519-.52-2.442 2.443-6.81-3.993 19.963-9.16-7.804 7.804.519.519 7.803-7.804-9.16 19.964z">
                    </path>
                    <path d="M11.367 12.113l.52.52 1.585-1.586-.52-.52-1.585 1.586z">
                    </path>
                  </g>
                  <defs>
                    <clipPath id="send_svg__clip0">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="button" className="button--square" onClick={toggleChatBox}>
        <div id="button-img">
          <svg id="shape" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="9" fill="#0084FF"></rect>
          </svg>
          <svg
            id="icon"
            width="33"
            height="44"
            viewBox="0 0 22 31"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
          >
            <path d="M14.734,0.145c0.216,-0.193 0.566,-0.193 0.781,0c1.164,1.046 1.805,2.437 1.805,3.916c0,1.48 -0.641,2.871 -1.805,3.917c-0.108,0.096 -0.249,0.145 -0.391,0.145c-0.141,0 -0.282,-0.049 -0.39,-0.145c-0.216,-0.194 -0.216,-0.508 0,-0.702c0.955,-0.859 1.481,-2 1.481,-3.215c0,-1.214 -0.525,-2.355 -1.481,-3.214c-0.215,-0.194 -0.215,-0.508 0,-0.702Zm-7.151,0.702c0.215,-0.193 0.215,-0.508 -0.001,-0.701c-0.215,-0.194 -0.565,-0.194 -0.78,0c-2.403,2.159 -2.403,5.673 -0.001,7.832c0.108,0.097 0.25,0.145 0.391,0.145c0.141,0 0.283,-0.048 0.39,-0.145c0.216,-0.194 0.216,-0.508 0,-0.702c-1.971,-1.772 -1.971,-4.656 0.001,-6.429Zm4.76,4.523c0.513,-0.307 0.857,-0.869 0.857,-1.511c0,-0.972 -0.788,-1.76 -1.76,-1.76c-0.972,0 -1.76,0.788 -1.76,1.76c0,0.722 0.435,1.343 1.057,1.614l-0.006,4.095l-7.731,0c-1.657,0 -3,1.343 -3,3l0,12.48l0,0.016l0,0.027l0,2.854l0,2.188l2,-0.888l2.698,-1.197l14.302,0c1.657,0 3,-1.343 3,-3l0,-12.48c0,-1.657 -1.343,-3 -3,-3l-6.664,0l0.007,-4.198Zm-4.054,1.272c0.108,0.097 0.249,0.145 0.39,0.145c0.142,0 0.283,-0.048 0.391,-0.145c0.216,-0.194 0.216,-0.508 0,-0.702c-1.152,-1.035 -1.152,-2.72 0,-3.755c0.216,-0.194 0.216,-0.508 0,-0.702c-0.216,-0.194 -0.565,-0.194 -0.781,0c-1.582,1.422 -1.582,3.736 0,5.159Zm5.348,0.145c-0.141,0 -0.283,-0.049 -0.39,-0.145c-0.216,-0.194 -0.216,-0.509 0,-0.702c0.558,-0.502 0.865,-1.169 0.865,-1.878c0,-0.709 -0.307,-1.376 -0.865,-1.877c-0.216,-0.194 -0.216,-0.508 0,-0.702c0.215,-0.194 0.565,-0.194 0.781,0c0.766,0.689 1.188,1.605 1.188,2.579c0,0.974 -0.422,1.891 -1.188,2.58c-0.108,0.096 -0.25,0.145 -0.391,0.145Z" style={{fill: "#ffffff"}}></path>
          </svg>
          <div className="dots">
            <div id="dot-1" className="dot"></div>
            <div id="dot-2" className="dot"></div>
            <div id="dot-3" className="dot"></div>
          </div>
        </div>
        <div id="button-badge" style={{display: "none", opacity: 1}}>1</div>
      </div>
    </div>
  )
}

export default App