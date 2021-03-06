import React from 'react';

export default class Contact extends React.Component {
	render() {
		return (
		<section id="contact">
			<div className="view">
				<div className="content full-size colors-h">
					<div className="container">
						<h2>Contact</h2>
						<p className="header-details">Keep In Touch</p>
						<div className="row">
							<div className="col-md-6">
								<div className="text-right scroll-in-animation" data-animation="fadeInLeft">
									<p className="big-font uppercase">
										Tel: <strong className="highlight">+1 (234) 567-6789</strong>
									</p>
									<p className="big-font uppercase">
										500 Unicorn Park Dr, 21st Floor
										<br/> Woburn, MA 01801, United States
									</p>
									<p className="big-font">
										<b>
											<a href="mailto:info@ouraddress.com">info@ouraddress.com</a><br/>
											<a href="https://www.ouraddress.com">www.ouraddress.com</a>
										</b>
									</p>
									<p className="big-font">
										<a rel="noopener noreferrer" target="_blank" href="https://blog.xo1.io/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-medium fa-stack-1x text-background"></i></span></a>                    
										<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Secure_Vote"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-twitter fa-stack-1x text-background"></i></span></a>
										<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/SecureVote/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-facebook fa-stack-1x text-background"></i></span></a>
										<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/18001068/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-linkedin fa-stack-1x text-background"></i></span></a>
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="text-left scroll-in-animation" data-animation="fadeInRight">
									<form className="ajax-form" data-message-classname="colors-e background-95 border heading" action="" method="post">
										<div className="row">
											<div className="col-md-6 control-group">
												<div className="alt-placeholder">Name</div>
												<input type="text" name="your-name" value="" size="40" placeholder="Name" data-validation-required-message="Please fill the required field." />
												<div className="help-block"></div>
											</div>
											<div className="col-md-6 control-group">
												<div className="alt-placeholder">Email</div>
												<input type="email" name="your-email" value="" size="40" placeholder="Email" data-validation-required-message="Please fill the required field." />
												<div className="help-block"></div>
											</div>
											<div className="col-md-12 control-group">
												<div className="alt-placeholder">Message</div>
												<textarea name="your-message" placeholder="Message" data-validation-required-message="Please fill the required field." />
												<div className="help-block"></div>
											</div>
											<div className="col-md-12 form-actions">
												<input className="button" type="submit" value="Send" />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		)
	}
}
