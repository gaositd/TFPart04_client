import axios from "axios";

const backendURL = "http://localhost:3001/mercadopago/new"

const MpPaymentHandler = async (cookies) => {
  console.log(cookies);
  const response = await axios.post(
    backendURL,
    { cookies: cookies }
  );
  window.location.href = response.data.init_point;
};

const MpButton = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => MpPaymentHandler(props.cookies)}
    >
      🍪 Buy Now! 🍪
    </Button>
  );
};

export default MpButton;