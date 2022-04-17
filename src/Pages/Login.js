import React from 'react'

function Login() {
  return (
	<div className="container-lg">
        <div className="row" style={{minHeight: '100vh'}}>
            <div className="col-6 d-flex align-items-center justify-content-center">
                <img class="img-fluid" src={require('../Assets/Signin.jpg')}/>
			</div>
			<div className="col-6 d-flex align-items-center justify-content-center">
			  <div style={{width:'100%'}}>
				 <center> 
				 <div className="h1 mb-3">Login</div> 	
                 <div style={{width:'80%'}}>
					<div className="mb-3">
						<div className="col-sm-10">
						   <input type="text" class="form-control" id="Email" placeholder='Email'/>
						</div>
					</div>
				 </div>
				 <div style={{width:'80%'}}>
					<div className="mb-3">
						<div className="col-sm-10">
						   <input type="password" class="form-control" id="inputPassword" placeholder='Password'/>
						</div>
					</div>
				 </div>
				 <button className="btn btn-primary">Submit</button>
				 </center>
		      </div>		 
			</div>
		</div>
	</div>
  )
}

export default Login