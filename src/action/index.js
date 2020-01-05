// export const ARTTIR = 'ARTTIR';
// export const AZALT ='AZALT';


// export function sayiArttir() {
//     return({ type: ARTTIR});
// }

// export function sayiAzalt() {
//     return({ type: AZALT});
// }

export const YAZI_RENK = 'YAZI_RENK';
export const ARKA_PLAN_RENK = 'ARKA_PLAN_RENK'

export function yaziRengiDegister(renk) {
    return ({type:YAZI_RENK,payload:{'renk':renk}});
}

export function arkaPlanDegistir(renk) {
    return ({type:ARKA_PLAN_RENK,payload:{'renk':renk}});
}