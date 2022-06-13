import axios from "axios";

const backendURL = "http://localhost:3001/mercadopago/new"

const MpPaymentHandler = async () => {
  const response = await axios.post(backendURL);
  window.location.href = response.data.init_point;
};

const MpButton = (props) => {
  return (
    <button className="box-border w-40 bg-emerald-900 text-white p-2 rounded-xl"
      variant="contained"
      color="primary"
      onClick={() => MpPaymentHandler(props.cookies)}
    >
      🍪 Buy Now! 🍪
    </button>
  );
};

export default MpButton;