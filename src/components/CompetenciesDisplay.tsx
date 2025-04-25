import {Card, CardHeader, ListGroup} from "react-bootstrap";
import competencies from "../content/competencies.ts";

const CompetenciesDisplay = () => {
    return (
        <Card>
            <CardHeader>Competencies</CardHeader>
            <Card>
                <ListGroup>
                    {competencies.map(c => (
                        <ListGroup.Item>{c.icon.char} {c.label}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Card>
    )
}

export default CompetenciesDisplay;