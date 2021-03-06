import React from 'react';

export default class Numbers extends React.Component {
	render() {
		return (
		<section id="numbers">
			<div className="view" id="numbers">
        <img alt className="bg" src="../assets/images/securevote_dark_mark.jpg" /><img alt className="bg" src="../assets/images/securevote_dark_mark.jpg" />
				<div className="content half-size colors-h">
					<div className="container-fluid">
						<h3>Our <span className="highlight">Numbers</span></h3>
						<p className="title"><span className="highlight">Some of the</span> cool facts about us</p>
						<div className="row counters">
							<div className="col-md-3 counter background-35-b">
								<div className="count player row heading background-10-light">210</div>
								<div className="caption">Projects</div>
							</div>
							<div className="col-md-3 counter background-35-h">
								<div className="count player row heading background-10-light">120</div>
								<div className="caption">Clients</div>
							</div>
							<div className="col-md-3 counter background-35-b">
								<div className="count player row heading background-10-light">3459</div>
								<div className="caption">Followers</div>
							</div>
							<div className="col-md-3 counter background-35-h">
								<div className="count player row heading background-10-light">7</div>
								<div className="caption">Years</div>
							</div>
						</div>
					</div>
				</div>
      </div>
    </section>
		)
	}
}
