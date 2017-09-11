/**
 * Created by bhavyaagg on 08/9/17.
 */

$(document).ready(function () {

  const mainWrapper = $('#main-wrapper');

  $('#homeButton').click(function () {
    console.log(1)
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white;">
                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Overview</h1>

                        <div class="overview-description" style="text-align: center;">
                            &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="background-color: white; color: #999999; font-size: 14pt;">Welcome to the&nbsp;</span><b
                                style="background-color: white; color: #999999; font-size: 14pt;"><span
                                style="color: #385623; font-size: 14pt;">2018 International Conference Towards Extensible and Adaptable Methods in Computing</span></b>
                            <b
                                    style="background-color: white; color: #999999; font-size: 14pt;"></b><span
                                style="background-color: white; color: #999999; font-size: 14pt;">&nbsp;organized by&nbsp;</span>
                        </div>


                        <div style="background: white; line-height: 18pt; margin: 0in; text-align: center;">
                            <div style="text-align: center;">
                                <b><span style="color: #002060; font-size: 14pt;">TEAMC 2018</span></b></div>
                            <div style="text-align: center;">
                                <b><span style="color: #002060; font-size: 14pt;">Netaji Subhas Institute of Technology, Dwarka, Delhi, India.</span></b>
                            </div>
                        </div>


                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: #999999; font-size: 14pt;"><br></span>
                            <span style="color: #999999; font-size: 14pt;">
                            The International Conference, Towards Extensible and Adaptable Methods in Computing – TEAMC 2018, will be held during 26-28 March, 2018 under the aegis of Netaji Subhas Institute of Technology (NSIT), New Delhi.<br/><br/>
Extensible and adaptable computing refers to the array of methods and techniques that systematically tackle the future growth of systems and respond proactively and seamlessly to change. This conference will provide an excellent opportunity to researchers, practitioners and students to share ideas, discuss best practices and collaborate together to solve problems in convergent domains of computing that strive towards extensibility and adaptability.
    <br/><br/>
                                TEAMC 2018 includes the following tracks:
                            </span>
                        </div>
                        <br/>
                        <div class="home-list">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Agile Software Development
                                </li>
                                <li class="list-group-item">
                                    Data Management
                                </li>
                                <li class="list-group-item">
                                    Web Intelligence
                                </li>
                                <li class="list-group-item">
                                    Computing for Education
                                </li>
                                <li class="list-group-item">
                                    Machine Learning
                                </li>
                            </ul>
                        </div>

                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: #999999; font-size: 14pt;"><br></span>
                            <span style="color: #999999; font-size: 14pt;">
                            The conference will feature regular technical sessions, keynote speeches, workshops, panel discussions and a design contest.
                            </span>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <div id="carouselExampleIndicators" style="width: 100%;" class="carousel slide" data-ride="carousel" data-interval="2000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block img-fluid" src="./images/5.jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/_MG_9209.JPG" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/_MG_9377.JPG" alt="Third slide">
                                </div>

                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC06193.JPG" alt="Fourth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_0408.jpg" alt="Fifth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_0441.jpg" alt="Sixth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_6735.jpg" alt="Seventh slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/IMG_20150826_222421.jpg" alt="Eighth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/india%20gate%20with%20chatri.jpg" alt="Ninth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/indiagate.jpg" alt="Tenth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/jantar%20mantar.png" alt="Eleventh slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/lotus%20temple%20.jpg" alt="Twelveth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/qutub%20minar%20slice%20of%20history.jpg" alt="Thirteen slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/qutub%20minar%202.png" alt="Fourteenth slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/surajkundm_mela2.jpg" alt="Fifteenth slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`)
  })
});
