const Image=({
  src,
  alt = "image",
  className = "",
  width,
  height,
  onClick,
  style, // Adding style support for dynamic positioning
})=> {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      className={`${className}`}
      style={{ 
        ...style 
      }}
    />
  );
}
export default Image;