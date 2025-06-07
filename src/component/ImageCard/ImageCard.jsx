export const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className="image-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img
        src={src}
        alt={alt}
        width="300"
        height="200"
        style={{
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
};
