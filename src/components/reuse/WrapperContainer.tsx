interface WrapperContainerProps {
  children: React.ReactNode;
}

const WrapperContainer = ({ children }: WrapperContainerProps) => {
  return <div className="w-[95%] mx-auto">{children}</div>;
};

export default WrapperContainer;
