import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

// Aqui estamos dizendo: "este contexto vai compartilhar dois dados principais".
// - state: o estado atual do pomodoro
// - setState: a função usada para alterar esse estado
// Isso é o contrato do contexto.
type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionModel>,
}

// Este objeto é o valor padrão do contexto.
// Ele serve como segurança, caso algum componente use o contexto antes de um Provider existir.
const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
}

// Criamos o contexto verdadeiro.
// A partir daqui, qualquer componente pode se conectar a ele.
export const TaskContext = createContext<TaskContextProps>(initialContextValue)

