import { FaXmark } from "react-icons/fa6";

function CookiesModal({ handleAcceptedCookies, modalRef }) {

  return (
    <div className="cookies-modal-overlay">
      <div ref={modalRef} tabIndex={-1} role="dialog" id="cookies_modal" aria-labelledby="cookies_modal_title" aria-describedby="cookies_modal_description"
        aria-modal="true" className="cookies-modal">
        <div className="cookies-modal-header">
          <h1 id="cookies_modal_title" className="cookies-modal-title">Cookie notice</h1>
          <button type="button" id="cookies_close" className="cookies-close-button" aria-label="Close cookie notice"
            onClick={handleAcceptedCookies}><span><FaXmark /></span></button>
        </div>
        <div id="cookies_modal_description">
          <p>This website uses cookies to enhance your experience. By continuing to browse the site, you agree to our use of
            cookies.</p>
        </div>
        <div className="cookies-modal-button">
          <button type="button" id="cookies_accept" className="cookies-accept-button"
            onClick={handleAcceptedCookies}>Accept</button>
        </div>
      </div>
    </div>
  )
}

export default CookiesModal