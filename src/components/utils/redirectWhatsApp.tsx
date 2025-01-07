export const redirectWhatsApp = (encodedURL: string) => {
    window.open(`https://wa.me/5577936180390/?text=${encodedURL}`, "_blank");
};
