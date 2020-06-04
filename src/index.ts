import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

export const signer = new Signer();
signer.setProvider(new Provider());


class Widget {
    address: string = "";
    assetName: string = "";

    constructor() {}

    initWidget (
        recipient: string,
        assetName?: string
    ) {
        this.address = recipient;
        this.assetName = assetName;
    }

    initPurchase (
        invoiceValue: number,
        paymentHandler?: any,
        errorHandler?: any,
        invoiceId?: string
    ) {
        signer.transfer({recipient: this.address, amount: invoiceValue, attachment: (invoiceId ? invoiceId : "")})
            .broadcast()
            .then(paymentHandler ? paymentHandler : console.log)
            .catch(errorHandler ? errorHandler : console.log);
    }
}

export const widget = new Widget();
