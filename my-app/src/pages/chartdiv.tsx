export type CaptionedImage = {
  header: string;
  imageSrc: string;
  caption: string;
  backgroundColor: string;
  pageBackgroundColor: string;
};

export const CI: React.FC<CaptionedImage> = ({
  header,
  imageSrc,
  caption,
  backgroundColor,
}) => {
  return (
    <div className="imgdiv" style={{ backgroundColor }}>
      <h2>{header}</h2>
      <img src={imageSrc} alt={header} className="imgimg"/>
      <div className="capdiv">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default CI;
