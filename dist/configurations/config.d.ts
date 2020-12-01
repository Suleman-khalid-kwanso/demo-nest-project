export declare const dbConfig: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
};
