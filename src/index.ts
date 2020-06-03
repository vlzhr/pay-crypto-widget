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
        invoiceValue: number
    ) {
        signer.transfer({recipient: this.address, amount: invoiceValue})
            .broadcast()
            .then(console.log)
            .catch(console.log);
    }
}

export const widget = new Widget();
