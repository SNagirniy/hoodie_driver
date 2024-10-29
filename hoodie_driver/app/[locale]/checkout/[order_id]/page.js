import OrderPage from "@/components/templates/OrderPage";


const OrderDetails = async({params:{order_id}})=> {
   
    return <OrderPage order_id={order_id}/>
}

export default OrderDetails;