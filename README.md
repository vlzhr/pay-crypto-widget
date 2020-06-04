# Accept token payments on your website

![](https://server.vlzhr.top/hosted/9446628-payment.gif)

Waves Ecosystem is great for [issuing crypto assets](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-creation). 
This tool is designed to provide an easier functionality for purchases with tokens issued on Waves.

Use this widget to accept crypto payments on your website. [Check the demo](https://vlzhr.github.io/pay-crypto-widget/example/)!

## Quick Start 🔥

#### Instantly add widget to your HTML

**1--** Connect [JS file](https://raw.githubusercontent.com/vlzhr/pay-crypto-widget/master/dist/paycrypto.js) to your website

`<script src="paycrypto.js"></script>`

**2--** Initialize and set up widget

`dApp.widget.initWidget("<recipient address or alias>", "<asset id>");`

for example:

`dApp.widget.initWidget("vlzhr", "WAVES");`

**3--** Call payment method when needed

`dApp.widget.initPurchase(TOTALAMOUNT)`

Check the example full [source code](https://github.com/vlzhr/pay-crypto-widget/blob/master/example/index.html)!

#### or use TypeScript module

Import the [Pay Crypto module](https://github.com/vlzhr/pay-crypto-widget/blob/master/src/index.ts) and use  `Widget` class. 
You will need to install Waves Signer and Waves Exchange Provider libraries for this:

`npm i @waves/signer`

`npm i @waves.exchange/provider-web`


## Configuring widget ⚙

You can set following properties of a widget using `initWidget` method:

`recipient: string, assetName?: string`

You can set following properties of a widget using `initPurchase` method:

`invoiceValue: number,
         paymentHandler?: Function,
         errorHandler?: Function,
         invoiceId?: string`

## Call to action 🌱

As you may see, the widget has the functionality of MVP, as for now. 
To make it more useful we need your feedback.
What would you add to it?
For your recommendations there is a simple issue template. 

[Let us know your opinion](https://github.com/vlzhr/pay-crypto-widget/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFEEDBACK%5D) and let's build a great tool together 🚀

## Contacts

- follow me in Twitter: [@vlzhr](https://twitter.com/vlzhr)

- join Waves Dev Commmunity [chat in Telegram](https://ttttt.me/waves_ride_dapps_dev)


Thank you for your interest!
