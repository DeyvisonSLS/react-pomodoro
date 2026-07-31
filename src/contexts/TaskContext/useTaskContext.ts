import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// Este hook é uma forma mais simples de pegar o valor do contexto.
// Em vez de escrever useContext(TaskContext) sempre, você escreve useTaskContext().
// Isso deixa o código mais limpo e mais fácil de ler.
export function useTaskContext(){
    return useContext(TaskContext);
}