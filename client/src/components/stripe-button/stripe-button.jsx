import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KcWEvFcE4KAuxEPivwhtfJNCNUT33g7P4Msw7EIwU0N8VY0JGA1CGQdN9PcICubUoQCIL1YKwmGQYocAFGG1v5U00hpxwYwVW";

    const onToken = token => {
        axios({
            url: "payment",
            method: "POST",
            data: {
                token,
                amount: priceForStripe
            }
        }).then(response => {

        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error))
            alert("There were an issue during the payment. Please, make sure you correctly use the provided credit card")
        })
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton