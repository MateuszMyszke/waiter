import { Card, Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";


const Table = () => {

  return (
    <Card>
      <Card.Body>
        <Row>
          <Row className="align-items-end mb-3">
            <Col className="col-2 d-flex align-items-end justify-content-between">
              <h2 className="mb-0">Table 1</h2>
            </Col>
            <Col className="col-4">
              <strong>Status:</strong> busy {""}
            </Col>
            <Col className="col-6 d-flex justify-content-end">
              <Link to={"/edittable/"}>
              <Button variant="primary" size="sm">
                Show more
              </Button>
              </Link>
            </Col>
          </Row>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Table;