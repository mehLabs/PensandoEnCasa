
export interface Pago {
    id:                        string;
    dateCreated:               string;
    dateApproved:              string;
    dateLastUpdated:           string;
    moneyReleaseDate:          string;
    collectorId:               number;
    operationType:             string;
    payer:                     PagoPayer;
    binaryMode:                boolean;
    liveMode:                  boolean;
    order:                     Order;
    externalReference:         string;
    description:               string;
    metadata:                  Metadata;
    currencyId:                string;
    transactionAmount:         number;
    transactionAmountRefunded: number;
    couponAmount:              number;
    transactionDetails:        TransactionDetails;
    feeDetails:                FeeDetail[];
    status:                    string;
    statusDetail:              string;
    captured:                  boolean;
    paymentMethodId:           string;
    issuerId:                  string;
    paymentTypeId:             string;
    card:                      Card;
    statementDescriptor:       string;
    installments:              number;
    notificationUrl:           string;
    refunds:                   any[];
    additionalInfo:            AdditionalInfo;
    processingMode:            string;
    entregando:                 boolean;
    eliminando:                 boolean;
}

export interface AdditionalInfo {
    items:     Item[];
    payer:     AdditionalInfoPayer;
    ipAddress: string;
}

export interface Item {
    id:          string;
    title:       string;
    description: string;
    pictureUrl:  string;
    categoryId:  string;
    quantity:    number;
    unitPrice:   number;
}

export interface AdditionalInfoPayer {
    firstName: string;
    lastName: string;
    email:string;
    phone: {
        areaCode:number;
        number:number;
    };
    identification: {
        type:string;
        number:number;
    };
    address:{
        streetName:string;
        streetNumber:number;
        zipCode:number;
        floor:number;
        dto:string;
        notes:string;
    }
}

export interface Address{
    streetName: string;
    streetNumber: string;
    zipCode: string;
}

export interface Phone {
    number: string;
}

export interface Card {
    expirationMonth: number;
    expirationYear:  number;
    firstSixDigits:  string;
    lastFourDigits:  string;
    cardholder:      Cardholder;
    dateCreated:     string;
    dateLastUpdated: string;
}

export interface Cardholder {
    name:           string;
    identification: Identification;
}

export interface Identification {
    number: string;
    type:   string;
}

export interface FeeDetail {
    type:     string;
    feePayer: string;
    amount:   number;
}

export interface Metadata {
}

export interface Order {
    type: string;
    id:   number;
}

export interface PagoPayer {
    id:             string;
    email:          string;
    identification: Identification;
    phone:          Metadata;
}

export interface TransactionDetails {
    netReceivedAmount: number;
    totalPaidAmount:   number;
    installmentAmount: number;
    overpaidAmount:    number;
}
