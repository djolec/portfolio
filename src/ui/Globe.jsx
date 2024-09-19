const Globe = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        overflow: "hidden",
        willChange: "transform",
      }}
    >
      <div
        className="globe"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(30deg)",
          height: "100%",
          width: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "inset 0px 0px 0px 0.125rem white",
        }}
      >
        <div
          className="circle1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            height: "100%",
            width: "100%",
            boxShadow: "inset 0.1rem 0px 0px 0.08rem white",
            fontSize: ".75rem",
            animationDelay: "-1.8s",
          }}
        />
        <div
          className="circle1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            height: "100%",
            width: "100%",
            boxShadow: "inset 0.1rem 0px 0px 0.08rem white",
            fontSize: ".75rem",
            animationDelay: "-0.9s",
          }}
        />
        <div
          className="circle1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            height: "100%",
            width: "100%",
            boxShadow: "inset 0.1rem 0px 0px 0.08rem white",
            fontSize: ".75rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "150%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            height: "55%",
            boxShadow: "inset 0px 0px 0px 0.15rem white",
            fontSize: "0.75rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "150%",
            transform: "translate(-50%, -50%)",
            borderRadius: "0%",
            height: "0.15rem",
            backgroundColor: "white",
            fontSize: "0.75rem",
          }}
        />
      </div>
    </div>
  );
};

export default Globe;
