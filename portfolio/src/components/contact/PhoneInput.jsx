import { useState } from "react";
import Flag from "react-world-flags";

export const PhoneInput = ({ id, label, value, onChange }) => {
  const [countryCode, setCountryCode] = useState("+33");
  const [country, setCountry] = useState("FR"); // Code ISO du pays

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    setCountryCode(selectedCode);

    switch (selectedCode) {
      case "+33":
        setCountry("FR"); 
        break;
      case "+1":
        setCountry("US"); 
        break;
      case "+44":
        setCountry("GB"); 
        break;
      case "+49":
        setCountry("DE"); 
        break;
      default:
        setCountry("UN"); 
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-800 dark:text-gray-200"
      >
        {label}
      </label>
      <div className="mt-2 relative flex items-center">
        <div className="absolute left-3 top-0 h-full flex items-center">
          <Flag code={country} className="w-6 h-4" />
        </div>

        <select
          value={countryCode}
          onChange={handleCountryChange}
          className="absolute left-12 bg-transparent text-gray-500 dark:text-gray-400 focus:outline-none"
        >
          <option value="+33">+33</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+49">+49</option>
        </select>

        <input
          id={id}
          name={id}
          type="tel"
          value={value}
          onChange=
          {onChange}
          className="w-full pl-28 rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="6 12 34 56 78"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>
    </div>
  );
};