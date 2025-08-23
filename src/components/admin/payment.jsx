import TransactionCategories from "./transactionCategory";
import TransactionHistory from "./dashboardElements/transacHistory";
import TransactionButton from "./transactionButton";


function Payment() {

    return ( 
        <div className="payment">
           <TransactionButton head='Payment'/>
            <TransactionCategories/>
            <div className="paymentHistory_main_div">
                <h5>Payment history</h5>
                <TransactionHistory/> 
            </div>
        </div>
     );
}

export default Payment;