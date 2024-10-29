import OrderDetailArticle from "../modules/orderDetailArticle/orderDetailArticle";

const OrderPage = ({order_id})=> {
    return <OrderDetailArticle order_id={order_id}/>;
}

export default OrderPage;