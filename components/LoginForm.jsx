// class LoginForm extends React.Component {


//     state = {
//         email: '',
//         password: ''
//     };

//     handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value })
//     }

//     handleSubmit = event => {
//         event.preventDefault()

//         console.log(this.state)
//     }

//     render() {
//         return (
            
//             <form onSubmit={this.handleSubmit} className="row my-5 mx-auto p-3 shadow-lg rounded w-50 bg-light" method="POST" action="#">
//                 <h1 class="h3 mb-3 fw-normal text-center">Login</h1>

//                 <div class="col-md-6 col-sm-12 mb-2">
//                     <input type="email" class="form-control" placeholder="E-mail" onChange={this.handleChange} required/>
//                 </div>
//                 <div class="col-md-6 col-sm-12 mb-2">
//                     <input type="password" class="form-control" placeholder="Senha" onChange={this.handleChange} required/>
//                 </div>
                
//                 <button class="w-100 btn btn-green" type="submit">Entrar</button>
//             </form>
//         )
//     }
// }