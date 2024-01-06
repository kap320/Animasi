import React from "react";
import {
  FaDiscord,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
export default function SocialLinks() {
  return (
    <div className="social-links-wrapper">
      <span
        style={{ backgroundColor: "#6f85d5" }}
        className="d-flex a-center j-center"
      >
        <a
          href="https://www.facebook.com/profile.php?id=61553376716857&mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <FaRedditAlien size={22} />
        </a>
      </span>
      <span
        style={{ backgroundColor: "#ff3c1f" }}
        className="d-flex a-center j-center"
      >
        <a
          href="https://discord.com/invite/kP5mRMq8"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord size={22} />
        </a>
      </span>
      <span
        style={{ backgroundColor: "#08c" }}
        className="d-flex a-center j-center"
      >
        <a
          href="https://t.me/rizanotsepuh"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane size={22} />
        </a>
      </span>
      <span
        style={{ backgroundColor: "#1d9bf0" }}
        className="d-flex a-center j-center"
      >
        <a
          href="https://Instagram/rizaedtz01"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={22} />
        </a>
      </span>
    </div>
  );
}
