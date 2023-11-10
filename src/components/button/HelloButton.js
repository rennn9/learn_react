export default function HelloButton({ buttonText, buttonText2 }) {
    return (
      <>
        <button
          style={{
            width: "240px",
            height: "36px",
            marginBottom: "12px",
            borderRadius: "8px",
          }}
        >
          {" "}
          {buttonText}{" "}
        </button>
        <button
          style={{
            width: "240px",
            height: "36px",
            borderRadius: "8px",
          }}
        >
          {" "}
          {buttonText2}{" "}
        </button>
      </>
    );
  }


