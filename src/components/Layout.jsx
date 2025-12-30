const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        color: "#fff"
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
