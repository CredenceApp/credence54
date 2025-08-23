import { useState } from "react";

const initialFormData = {
    tittle: '',
    // buyer_role: '',
    // commodity: '',
    delivery_date: '',
    inspecctionDuration: 0,
    grading: "",
    transactionType : "",
    shipping: '',
    shippingFee: '',
    price: 'nan',
    description: '',
    quantity: '',
    category: '',
    status: '',
    buyer:{
        name: '',
        email: '',
        id: '',
        phone: '',
    },
    seller: {
        name: '',
        email: '',
        phone:'',
        id:'',
    },
    // imageUploads: [],
};
const useFormData = ()=>{
    const [formData, setFormdata] = useState(initialFormData)
    return{
        formData, 
        setFormdata,
    };
};
export default useFormData;