export interface ThemeColors {
    primary: string;
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
}
export declare const colors: ThemeColors;
export declare const globalStyles: {
    title: {
        fontSize: number;
        fontWeight: "bold";
        color: string;
    };
    subTitle: {
        fontSize: number;
        fontWeight: "bold";
        color: string;
    };
    mainContainer: {
        flex: number;
        backgroundColor: string;
    };
    globalMargin: {
        paddingHorizontal: number;
        flex: number;
    };
    btnPrimary: {
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        alignItems: "center";
    };
    btnPrimaryText: {
        color: string;
        fontSize: number;
    };
};
