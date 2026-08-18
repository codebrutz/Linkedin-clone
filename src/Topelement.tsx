import "./TopElement.css";

const LinkedInLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A2.12 2.12 0 0013 14.19a1.7 1.7 0 00-.06.45V19h-3v-9h3v1.76s.45-.69 1.77-.69c2.07 0 3.4 1.3 3.4 3.87V19z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M14.56 12.44l-2.67-2.67a5.94 5.94 0 10-.88.88l2.67 2.67a.62.62 0 10.88-.88zM6.5 11.5a5 5 0 110-10 5 5 0 010 10z" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 11 7zM20 10.18L12 4.44 4 10.18V18h3v-6h10v6h3v-7.82z" />
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 10.5a3 3 0 100-6 3 3 0 000 6zM3 20v-1.5a4.5 4.5 0 019 0V20H3zm9 0v-1.5a4.5 4.5 0 019 0V20h-9zM6 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM18 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
  </svg>
);

const JobsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2a1 1 0 011 1v13a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h1V4a2 2 0 012-2h6a2 2 0 012 2v2h1zM9 12h2v2H9v-2zm4 0h2v2h-2v-2z" />
  </svg>
);

const MessagingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 4H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4V6.25L8 11l-4 4.75V18h12V6h-8l4 4.75L16 6.25V18z" />
  </svg>
);

const NotificationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7v3.586l-.707.707A1 1 0 004 15h16a1 1 0 00.707-1.707L20 12.586V9a7 7 0 00-7-7zM12 22a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const CaretIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 11L3 6h10l-5 5z" />
  </svg>
);

const BusinessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
  </svg>
);

const navItems = [
  { label: "Home", icon: HomeIcon, active: true },
  { label: "My Network", icon: NetworkIcon },
  { label: "Jobs", icon: JobsIcon },
  { label: "Messaging", icon: MessagingIcon },
  { label: "Notifications", icon: NotificationsIcon },
];

export default function TopElement() {
  return (
    <header className="global-nav">
      <div className="global-nav__content">
        <div className="global-nav__left">
          <a href="#" className="global-nav__logo" aria-label="LinkedIn">
            <LinkedInLogo />
          </a>

          <div className="global-nav__search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="global-nav__search-input"
              aria-label="Search"
            />
          </div>
        </div>

        <nav className="global-nav__primary" aria-label="Primary navigation">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={`global-nav__item${active ? " global-nav__item--active" : ""}`}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}

          <a href="#" className="global-nav__item global-nav__item--me">
            <span className="global-nav__avatar">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23e0e0e0'/%3E%3Ccircle cx='12' cy='9' r='3.5' fill='%23bdbdbd'/%3E%3Cellipse cx='12' cy='19' rx='6' ry='4.5' fill='%23bdbdbd'/%3E%3C/svg%3E"
                alt=""
              />
            </span>
            <span className="global-nav__me-label">
              Me
              <CaretIcon />
            </span>
          </a>

          <a href="#" className="global-nav__item">
            <BusinessIcon />
            <span>
              For Business
              <CaretIcon />
            </span>
          </a>

          <a href="#" className="global-nav__item global-nav__item--premium">
            <span>Try Premium for ₹0</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
