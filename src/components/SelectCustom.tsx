import { Select } from "antd";
import ColorDot from "./ColorDot";
import { DropdownProps } from "../types/ComponentTypes";

const SelectCustom: React.FC<DropdownProps> = ({handleChange, options}) => {

    return (
        <Select
        defaultValue="normal"
        style={{ width: 150 }}
        onChange={handleChange}
      >
        {options.map((option) => (
          <Select.Option
            key={option.value}
            value={option.value}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {option.label}
              <ColorDot color={option.color} />
            </span>
          </Select.Option>
        ))}
      </Select>
    )
}

export default SelectCustom;