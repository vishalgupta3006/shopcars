export const OPEN_MODEL = "OPEN_MODEL";
export const CLOSE_MODEL = "CLOSE_MODEL";

export function openTheModel(){
    return{
        type: "OPEN_MODEL",
    }
}
export function closeTheModel(){
    return{
        type: "CLOSE_MODEL",
    }
}