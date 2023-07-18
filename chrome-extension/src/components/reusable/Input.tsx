// @ts-nocheck
import { Option, Select } from "@material-tailwind/react";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string | number;
  onChange: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => void;
  type?: string;
  options?: Array<any>;
  keys?: {
    text: string;
    value: string;
  };
  placeholder?: string;
  required?: boolean;
  unit?: string;
  name: string;
}

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  options,
  keys,
  placeholder,
  required = true,
  unit,
  name,
}: Props) {
  return (
    <div className="w-full">
      <p className="text-white text-base font-normal">{label}</p>

      {type === "textarea" ? (
        <>
          <textarea
            value={value}
            onChange={onChange}
            className="bg-[#181F30] border border-[#5B6178] rounded-md outline-none text-[#E9EAF6] px-3 py-2 mt-1 w-full text-base"
            placeholder={placeholder}
            maxLength={200}
            required={required}
            name={name}
          />
          <p className="text-sm text-[#43495E]">
            {value.toString().length}/200 Characters
          </p>
        </>
      ) : type === "select" && keys ? (
        <Select
          value={value}
          required={required}
          onClick={(e: any) => onChange(e)}
          name={name}
          label=""
          variant="standard"
          className="[&_span]:top-[37%] [&_span]:left-[10px]  bg-[#181F30] text-[#E9EAF6] border rounded-md border-[#5B6178] "
        >
          {label === "Origin*"
            ? options?.map((option: any) => (
                <Option value={option.value} className="">
                  {option.label}
                </Option>
              ))
            : options?.map((option: any) => (
                <Option value={option[keys.value]}>{option[keys.text]}</Option>
              ))}
        </Select>
      ) : (
        <div className="bg-[#181F30] border border-[#5B6178] px-3 rounded-md flex items-center gap-1 mt-1">
          <input
            type={type}
            min={0}
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            autoComplete="off"
            className="bg-transparent outline-none text-[#E9EAF6] py-2 w-full text-base"
          />
          {unit && (
            <span className="text-[#E9EAF6] text-sm font-light">{unit}</span>
          )}
        </div>
      )}
    </div>
  );
}
