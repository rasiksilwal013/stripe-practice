import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51IflKoDMlu0drNNd5dg31QmxaaxOU8PwD88FaV3HUwdBRzvz57jUOmj2r7NbQicaU5RWCRjaJag9Y4KseyOMbEB900QZeEh6gJ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}