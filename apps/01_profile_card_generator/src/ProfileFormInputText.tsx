import { useState } from "react";

interface Props {
  title: string;
  value: string;
  inputName: string;
  isTextarea?: boolean;
  setValue: (value: string) => void;
}

export default function ProfileFormInputText({
  title,
  value,
  setValue,
  inputName,
  isTextarea = false,
}: Props) {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="flex flex-col items-start pb-5">
      <label htmlFor="name" className="pb-2">
        {title}
      </label>
      {isTextarea ? (
        <textarea
          className={`border ${isValid ? "border-border" : "border-red-500"}  p-1 rounded-md w-full h-30`}
          id={inputName}
          name={inputName}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          onBlur={() => setIsValid(!!value)}
        ></textarea>
      ) : (
        <input
          className={`border ${isValid ? "border-border" : "border-red-500"}  p-1 rounded-md w-full`}
          type="text"
          id={inputName}
          name={inputName}
          value={value}
          onBlur={() => setIsValid(!!value)}
          onChange={({ target }) => setValue(target.value)}
        />
      )}
    </div>
  );
}
