const WhatsAppButton = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
