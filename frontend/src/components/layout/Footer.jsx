export default function Footer() {
  return (
    <footer>
      <img
        src="/assets/cultura-inglesa-logo.png"
        alt="Cultural Inglesa San Martín"
        onError={(e) => {
          e.currentTarget.hidden = true;
        }}
      />
      <span>
        © {new Date().getFullYear()} Cultural Inglesa San Martín · Prototipo de
        rediseño
      </span>
    </footer>
  );
}
