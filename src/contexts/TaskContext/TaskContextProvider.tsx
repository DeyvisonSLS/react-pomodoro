import { useEffect, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

// Este componente é o responsável por "guardar" o estado global.
// Pense nele como um caixa onde o estado fica armazenado e pode ser acessado por vários componentes.
export function TaskContextProvider({ children }: TaskContextProviderProps) {
    // useState cria uma variável de estado que pode mudar com o tempo.
    // Aqui o estado começa com o valor de initialTaskState.
    const [state, setState] = useState<TaskStateModel>(initialTaskState);

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        // O Provider entrega esse estado para todos os componentes filhos.
        // Qualquer componente dentro dele pode ler ou alterar o estado.
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    );
}