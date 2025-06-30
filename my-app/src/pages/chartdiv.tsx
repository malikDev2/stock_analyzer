export type CaptionedImage = {
    header: string;
    imageSrc: string;
    caption: string;
    backgroundColor: string;
    pageBackgroundColor: string;
    onSelect?: (color: string) => void;
}

export const CI: React.FC<CaptionedImage> = ({
    header,
    imageSrc,
    caption,
    backgroundColor,
    pageBackgroundColor,
    onSelect,
}) => {
    return (
        <div className="imgdiv" style = {{backgroundColor}} onClick={() => onSelect?.(pageBackgroundColor)}>
            <h2>{header}</h2>
            <img src={imageSrc} alt={header} />
            <p>{caption}</p>
        </div>

    );
};