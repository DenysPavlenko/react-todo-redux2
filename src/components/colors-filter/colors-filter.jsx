import { colors, capitalize } from "../../store/todos-filters/colors";

const ColorsFilters = () => {
  return (
    <>
      {colors.map((color) => (
        <label key={color} style={{ display: "block" }}>
          <input type="checkbox" />
          <span
            style={{
              background: color,
              width: "10px",
              height: "10px",
              display: "inline-block"
            }}
          />
          <span>{capitalize(color)}</span>
        </label>
      ))}
    </>
  );
};

export default ColorsFilters;
