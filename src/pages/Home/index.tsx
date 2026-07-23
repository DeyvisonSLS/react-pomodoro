import { Container } from "../../components/Container";
import { Cronometer } from "../../components/Cronometer";
import { Cycles } from "../../components/Cycles";
import { TaskForm } from "../../components/TaskForm";

function Home() {
    return (
        <>
            {/* Cronometer */}
            <Container>
                <Cronometer>00:00:00</Cronometer>
            </Container>

            {/* Cycles + Taskform component */}
            <Container>
                <Cycles />
                <TaskForm />
            </Container>
        </>
    );
}

export default Home;
