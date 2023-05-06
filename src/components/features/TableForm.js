import { useForm } from "react-hook-form";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllStatus } from "../../redux/tablesStatusRedux";

const TableForm = ({ action, actionText, ...props }) => {

  const statusInfo = useSelector(getAllStatus)
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount|| '');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount|| '');
  const [statusError, setStatusError] = useState(false);
  const [status, setStatus] = useState(props.status || '');
  const [bill, setBill] = useState(props.bill || '');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
 
  const { id } = useParams();

  const handleSubmit =  () => {
    setStatusError(!status);
    action({ id, peopleAmount, maxPeopleAmount, bill, status })
  };

if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount)
if (maxPeopleAmount > 10) setMaxPeopleAmount("10")

  return (
    <div style={{width: 350,}}>
      <Row className="mb-5">
        <h1>Table {id} </h1>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3"
            style={{ width: "200px"}}
            controlId="formBasicEmail">
            <Form.Label><strong>Status</strong></Form.Label>
            <Form.Select  value={status}
              onChange={(e) => setStatus(e.currentTarget.value)} >
              <option>Select category</option>
                {statusInfo.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                ))}
                  {statusError && (
                  <small className="d-block form-text text-danger mt-2">
                    Please choose status
                  </small>
                )}
            </Form.Select>
          </Form.Group>

      <Row className="mb-3 w-50 ">
        <Form.Group className="mb-3" as={Col} controlId="formPeopleAmount" >
          <Form.Label><strong>People</strong></Form.Label>
          <Form.Control 
          {...register("people Amount", { required: true })}
          value={peopleAmount}
          onChange={e => setPeopleAmount(e.target.value)}
          type="number" min="0" placeholder="Enter people Amount"
          />
        </Form.Group>
/
        <Form.Group as={Col} controlId="maxPeopleAmount"
          style={{ width: "150px"}}>
          <Form.Label><strong>Max</strong></Form.Label>
          <Form.Control 
          {...register("people Amount", { required: true })}
          value={maxPeopleAmount}
          onChange={e => setMaxPeopleAmount(e.target.value)}
          type="number" min="0" placeholder="Enter people Amount"
          />
            {errors.peopleAmount && (
                <small className="d-block form-text text-danger mt-2">
                  This field is required
                </small>
            )}
            {errors.maxPeopleAmount && (
                <small className="d-block form-text text-danger mt-2">
                  This field is required
                </small>
            )}
        </Form.Group>
      </Row>
        {status === "Busy" && (
        <Form.Group style={{display: !status === "Busy" }} className="w-20" controlId="formBasicEmail">
          <Form.Label><strong>Bill $</strong></Form.Label>
          <Form.Control
            {...register("Bill ", { required: true, minLength: 1 })}
            value={status === "Busy" ? bill : 0}
            onChange={e => setBill(e.target.value)}
            type="number" placeholder="Enter bill"
          />      
        </Form.Group>
        )}
        </Form>
      </Row>
   
    <Button type="submit" variant="primary" onClick={handleSubmit}>
        {actionText}
      </Button>
  </div>
  
  );
}

export default TableForm;