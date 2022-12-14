const ViewContent = ({ children }: { children: JSX.Element }) => {
  return (
    <div style={{ margin: "12px", padding: "12px", background: "#fff" }}>
      {children}
    </div>
  );
};

export default ViewContent;
