import { Card, CardHeader, ListGroup } from "react-bootstrap";
import competencies from "../content/competencies.ts";

const CompetenciesDisplay = () => {
    return (
        <Card className="bodySection mt-2 mb-0">
            <CardHeader>Competencies</CardHeader>
            <ListGroup className="bodySection mb-0 bodySection">
                {competencies.map(c => (
                    <ListGroup.Item className="competenciesItem blackText">
                        {c.icon.char} {c.label}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    )
}

export default CompetenciesDisplay;