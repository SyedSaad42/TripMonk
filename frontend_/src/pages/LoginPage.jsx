import RightSide from "../component/LoginPage/RightSide";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        marginRight: "23px",
        height: "100vh",
        backgroundImage: `url("https://res.cloudinary.com/dctdi6x4e/image/upload/v1747154322/zgxrxdhsmwedl0l01v60.svg")`,
        backgroundSize: "cover",           // optional, but recommended
        backgroundPosition: "center",      // optional, to center the image
        backgroundRepeat: "no-repeat",   // optional, prevents tiling
        
        
      }}
    >
      <RightSide />
    </div>
  );
};

export default LoginPage;
