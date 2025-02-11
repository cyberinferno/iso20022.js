import {Party, SWIFTCreditPaymentInstruction} from './lib/types.js';
import {SWIFTCreditPaymentInitiation} from './pain/001/SWIFTCreditPaymentInitiation';

/**
 * Configuration interface for the ISO20022 class.
 * @interface ISO20022Config
 */
export interface ISO20022Config {
    /**
     * The party initiating the ISO20022 messages.
     * This party is typically the sender of the messages or the entity responsible for the transaction.
     * @type {Party}
     */
    initiatingParty: Party;
}

/**
 * Represents an ISO20022 core message creator.
 * This class provides methods to create various basic ISO20022 compliant messages.
 */
class ISO20022 {
    private initiatingParty: Party;

    /**
     * Creates an instance of ISO20022.
     * @param {ISO20022Config} config - The configuration object for ISO20022.
     */
    constructor(config: ISO20022Config) {
        this.initiatingParty = config.initiatingParty;
    }

    /**
     * Creates a SWIFT Credit Payment Initiation message.
     * @param {SWIFTCreditPaymentInstruction[]} paymentInstructions - An array of payment instructions.
     * @returns {SWIFTCreditPaymentInitiation} A new SWIFT Credit Payment Initiation object.
     */
    createSWIFTCreditPaymentInitiation(paymentInstructions: SWIFTCreditPaymentInstruction[]) {
        return new SWIFTCreditPaymentInitiation({
            initiatingParty: this.initiatingParty,
            paymentInstructions: paymentInstructions
        });
    }
}

export default ISO20022;