// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// // import "bootstrap/dist/css/bootstrap.min.css";

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example;

// // import { useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import Modal from "react-bootstrap/Modal";
// // import { IoMdArrowBack } from "react-icons/io";
// // import { IoMdArrowForward } from "react-icons/io";
// // // import styles from './Modal.scss';
// // // import "bootstrap/dist/css/modal.min.css";
// // import "./Modal.scss";

// // import { IoMdCloseCircle } from "react-icons/io";

// // function ModalPopup({ show, handleClose, handleShow }) {
// //   const [step, setStep] = useState(1);

// //   const handleNext = () => {
// //     setStep((prevStep) => prevStep + 1);
// //   };

// //   const handlePrevious = () => {
// //     setStep((prevStep) => prevStep - 1);
// //   };

// //   return (
// //     <div className="first">
// //       <Modal show={show} onHide={handleClose} className="modal-main-kk">
// //         <Modal.Header className="modal-head-kk">
// //           <Modal.Title>Place Order</Modal.Title>
// //           <div className="close-butt" onClick={handleClose}>
// //             <IoMdCloseCircle />
// //           </div>
// //         </Modal.Header>
// //         <Modal.Body className="modal-body-kk">
// //           <Form className="modal-form-kk">
// //             <div className={`step step-${step}`}>
// //               {step === 1 && (
// //                 <>
// //                   <div className="forward-back">
// //                     <IoMdArrowForward onClick={handleNext} />
// //                   </div>
// //                   <div className="step-content">
// //                     <h2>Step 1</h2>
// //                     <p>Content for Step 1</p>
// //                   </div>
// //                   <Form.Group
// //                     className="mb-3"
// //                     controlId="exampleForm.ControlInput1"
// //                   >
// //                     <Form.Label>Email address</Form.Label>
// //                     <Form.Control
// //                       type="email"
// //                       placeholder="name@example.com"
// //                       autoFocus
// //                     />
// //                   </Form.Group>
// //                   <Form.Group
// //                     className="mb-3"
// //                     controlId="exampleForm.ControlTextarea1"
// //                   >
// //                     <Form.Label>Example textarea</Form.Label>
// //                     <Form.Control as="textarea" rows={3} />
// //                   </Form.Group>
// //                 </>
// //               )}
// //               {step === 2 && (
// //                 <>
// //                   <div className="forward-back">
// //                     <IoMdArrowBack onClick={handlePrevious} />
// //                     <IoMdArrowForward onClick={handleNext} />
// //                   </div>
// //                   <div className="step-content">
// //                     <h2>Step 2</h2>
// //                     <p>Content for Step 2</p>
// //                   </div>
// //                 </>
// //               )}
// //               {step === 3 && (
// //                 <>
// //                   <div className="forward-back">
// //                     <IoMdArrowBack onClick={handlePrevious} />
// //                   </div>
// //                   <div className="step-content">
// //                     <h2>Step 3</h2>
// //                     <p>Content for Step 3</p>
// //                   </div>
// //                 </>
// //               )}
// //             </div>
// //           </Form>
// //         </Modal.Body>
// //         <Modal.Footer className="modal-foot-kk">
// //           {/* <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button> */}
// //           <Button variant="primary" onClick={handleClose}>
// //             Save Changes
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </div>
// //   );
// // }

// // export default ModalPopup;
