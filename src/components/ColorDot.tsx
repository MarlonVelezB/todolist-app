export interface ColorDoprops {
  color: string;
}

const ColorDot: React.FC<ColorDoprops> = ({ color }) => (
  <span
    style={{
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: color,
      marginLeft: "8px",
    }}
  />
);

export default ColorDot;
