// import React, { useRef, useState } from 'react'
// import { Form, Button, Alert} from 'react-bootstrap'
// import { useAuth } from '../contex/AuthContex';
// // import Card from 'react-bootstrap/Card'

// const Nexmo = require('nexmo')
// const nexmo = new Nexmo({
//   apikey: '97f15f70',
//   apiSecret: 'ragtF3UYgTbcnlbs'
// });


// const Signup1 = () => {
//     const emailRef= useRef()
//     const passwordRef= useRef()
//     const passwordConfirmRef= useRef()
//     const { signup, } = useAuth()
//     const [error, seterror] = useState('')
//     const [loading, setLoading] = useState(false)


//     const from = 'Vonage APIs';
//     const to = '7284090630';
//     const text = 'Hello';


//   async function handlesubmit(e){
//             e.preventDefault()

//             if(passwordRef.current.value !== passwordConfirmRef.current.value){
//                 return seterror('Password do not match')
//             }
// try{
//     seterror('')
//     setLoading(true)
//   await signup(emailRef.current.value, passwordRef.current.value)

//   nexmo.message.sendSms(from, to, text);

// }catch{
//     seterror('Failed to create an account')
// }
// setLoading(false)
//     }
//   return (
//     <>
//       {/* <Card>
//           <Card.Body>
//               <h2 className='text-center mb-4'>Sign Up</h2>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handlesubmit}>
//                   <Form.Group id='email'>
//                     <Form.Lable>Email</Form.Lable>
//                     <Form.Control type="email" ref={emailRef} required />
//                   </Form.Group>
//                   <Form.Group id='password'>
//                     <Form.Lable>Password</Form.Lable>
//                     <Form.Control type="password" ref={passwordRef} required />
//                   </Form.Group>
//                   <Form.Group id='password-confirm'>
//                     <Form.Lable>Password Confirmation</Form.Lable>
//                     <Form.Control type="password" ref={passwordConfirmRef} required />
//                   </Form.Group>
//                   <Button disabled={loading} className='w-100 ' type='submit'>SignUp</Button>
//               </Form>
//           </Card.Body>
//       </Card> */}





//       <div class="container">
//        <h1>Log In</h1>
//          <form onSubmit={handlesubmit}>
//        <div className="box">
//         {/* <i class="fa fa-envelope"></i> */}
//             <input type="email" name="email" id="email" ref={emailRef} required placeholder="Enter Your Email"/>
//        </div>
//        <div className="box">
//         {/* <i class="fa fa-key"></i> */}
//             <input type="password" name="password" id="password" ref={passwordRef} placeholder="Enter Your Password"/>
//        </div>
//        <div className="box">
//         {/* <i class="fa fa-key"></i> */}
//             <input type="password" name="password" id="password-confirm" ref={passwordConfirmRef} placeholder="Enter Your Password"/>
//        </div>
//        <button className="btn">Sign In</button>
//        </form>
//    </div>
       



//       <div className="w-100 text-center mt-2">
//           Already have an account? Login
//       </div>
//     </>
//   )
// }

// export default Signup1
