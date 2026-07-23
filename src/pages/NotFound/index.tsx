import { Container } from "../../components/Container";
import GenericHtml from "../../components/GenericHtml";

function NotFound() {
    return (
        <Container>
            <GenericHtml>
                <p>404 page not found.</p>
            </GenericHtml>
        </Container>
    );
}

export default NotFound;
