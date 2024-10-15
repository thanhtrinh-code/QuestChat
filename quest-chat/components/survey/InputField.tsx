import Image from "next/image";

interface Props {
  field: string;
}

const InputField: React.FC<Props> = ({ field }) => {
  return (
    <p>hello {field}</p>
  );
};

export default InputField;