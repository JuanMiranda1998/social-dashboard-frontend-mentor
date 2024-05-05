// Hacer el format para los numberos que superen el num 10000 sean 10K
export default function formatter (value){
    let formattedValue = null
    if (value>=10000){
        formattedValue = `${Math.floor(value/1000)}k`
        return formattedValue;
    } else {
        return value;
    }
}