import { footerLinks } from "../../Constants"

const Footer = () => {
  return (
<footer className="footer-container">
  <div className="footer-info">
    <p>More ways to shop. Find Limo near you;</p>
  </div>

  <hr className="footer-hr" />

  <div className="footer-links">
    <p>© 2026 UrbanLimo.</p>

    <ul>
      {footerLinks.map(({ label, link }) => (
        <li key={label}>
          <a href={link}>{label}</a>
        </li>
      ))}
    </ul>
  </div>
</footer>
  )
}

export default Footer