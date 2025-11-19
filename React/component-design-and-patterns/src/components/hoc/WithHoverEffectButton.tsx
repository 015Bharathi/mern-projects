const style: React.CSSProperties = {
  backgroundColor: "blue",
  color: "white",
};
const WithHoverEffectButton = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithHoverEffectButton;
