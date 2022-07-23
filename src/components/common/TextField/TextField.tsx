type Props = {
  name: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => any;
};

const TextField: React.FC<Props> = ({
  name,
  label,
  ariaLabel,
  placeholder,
  required,
  disabled,
  value,
  onChange
}) => (
  <label>
    {label}
    <input
      type='text'
      name={name}
      aria-label={ariaLabel}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

export default TextField;