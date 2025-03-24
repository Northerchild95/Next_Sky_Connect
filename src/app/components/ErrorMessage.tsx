const ErrorMessage = ({ text, color = "text-red-500" }: { text: string; color?: string }) => {
    return <p className={`text-center ${color} mt-10 font-semibold`}>{text}</p>;
  };
  
  export default ErrorMessage;
  