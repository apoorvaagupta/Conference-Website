$(document).ready(function () {

  const mainWrapper = $('#main-wrapper');

  $('#toggleNav').click(function () {
    const jumbotron = $('#jumbotron');
    if (jumbotron.css('margin-top') == '80px') {
      jumbotron.css('margin-top', 375);
    } else {
      jumbotron.css('margin-top', 80);
    }
  });

  $('#teamc18logo').css('height', $('#nsit-logo').height);

  $('#homeButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white; ">
                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #EA4335; border-bottom: solid 1px #bbb;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Overview</h1>

                        <div class="overview-description" style="text-align: center;">
                            &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="background-color: white; color: black; font-size: 14pt;"><img src="images/springer-logo.jpg" height="50px">&nbsp;&nbsp;Welcome to the &nbsp;</span><br><b
                                style="background-color: white; color: black; font-size: 14pt;"><span
                                style="color: #385623; font-size: 15pt;">2018 Springer International Conference <br> Towards Extensible and Adaptable Methods in Computing <br> TEAMC 2018 </span></b>
                            <!--<b style="background-color: white; color: black; font-size: 14pt;"></b><span-->
                                <!--style="background-color: white; color: black; font-size: 14pt;">&nbsp; <br> organized by&nbsp;</span>-->
                        </div>


                        <div style="background: white; line-height: 18pt; margin: 0in; text-align: center;">
                            <div style="text-align: center;">
                            </div>
                            <div style="text-align: center;">
                                <b><span style="color: #002060; font-size: 15pt;">Netaji Subhas Institute of Technology, Dwarka, Delhi, India.</span></b>
                            </div>
                        </div>


                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
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
                                    <b style="color: #002060;">Agile Software Development</b>
                                </li>
                                <li class="list-group-item">
                                    <b style="color: #002060;">Data Management</b>
                                </li>
                                <li class="list-group-item">
                                    <b style="color: #002060;">Web Intelligence</b>
                                </li>
                                <li class="list-group-item">
                                    <b style="color: #002060;">Computing for Education</b>
                                </li>
                                <li class="list-group-item">
                                    <b style="color: #002060;">Machine Learning</b>
                                </li>
                            </ul>
                        </div>

                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            The conference will feature regular technical sessions, keynote speeches, workshops, panel discussions and a Hackathon/Design contest.
                            </span>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12" style="padding: 30px;">
                        <div id="carouselExampleIndicators" style="width: 100%;" class="carousel slide"
                             data-ride="carousel" data-interval="3000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                    class="active"></li>
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
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block img-fluid" src="./images/5.jpg" alt="First slide">
                                    <div class="carousel-caption d-md-block">
                                        <!--<div class="d-none" style="background-color: #6c757d;opacity: 0.4;position: absolute;width: 100%;height:100%;margin-top: -20px;padding-bottom: 20px" ></div>-->
                                         <h1>HUMAYUN'S TOMB</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/Red_Fort_in_Delhi_03-2016_img3.jpg"
                                         alt="Second slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>RED FORT</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/surajkundm_mela2.jpg"
                                         alt="Third slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>SURAJ KUND</h1>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC06193.JPG"
                                         alt="Fourth slide">
                                    <div class="carousel-caption d-block">
                                        <h1>NSIT</h1>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_0441.jpg"
                                         alt="Sixth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>NUKKAD NATAK, NSIT</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_6735.jpg"
                                         alt="Seventh slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>QUTUB MINAR</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid"
                                         src="./images/india-gate-night-hd-pictures.jpg" alt="Ninth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>INDIA GATE</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/-77044_7004.jpg"
                                         alt="Tenth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>LOTUS TEMPLE</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/Jama_Masjid_-_In_the_Noon.jpg"
                                         alt="Eleventh slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>JAMA MASJID</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/diwan-i-khas-inside-view-red-fort-delhi.jpg"
                                         alt="Twelveth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>DIWAN-I-KHAS</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid"
                                         src="./images/v__processed_original.jpg"
                                         alt="Thirteen slide">
                                    <div class="carousel-caption d-md-block">
                                        <h1>JANTAR MANTAR</h1>
                                    </div>
                                </div>

                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `);
  });

  $('#copButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`            
    <div style="background-color: white;width: 100%; ">


                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        Call For Papers</h1>

                    <span>We invite authors to submit their papers under the tracks given below. Each track includes several topics listed below,  but is not necessarily limited to them.
                        <br><br></span>
                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style active" data-toggle="tab"
                                   href="#track1">TRACK 1 -ASD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track2">TRACK 2 - DM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track3">TRACK 3 - WI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track4">TRACK 4 - CiE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track5">TRACK 5 - ML</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="track1" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#177731;"> Agile Software Development</h3>
                                    <div>
                                        <p style="color: #444">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Pradeep Atrey,<br>
                                                State University of New York<br>
                                                 Albany, NY, USA
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #444">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Agile software processes and methodologies
                                            </li>
                                            <li class="list-group-item">Agile approaches to requirements engineering
                                            </li>
                                            <li class="list-group-item">Testing in agile environment
                                            </li>
                                            <li class="list-group-item">Agile project management
                                            </li>
                                            <li class="list-group-item">Agile methodologies for web development
                                            </li>
                                            <li class="list-group-item">Agile methodologies for developing embedded software
                                            </li>
                                            <li class="list-group-item">Design and architectural patterns
                                            </li>
                                            <li class="list-group-item">Aspect oriented programming
                                            </li>
                                            <li class="list-group-item">Agile model driven design
                                            </li>
                                            <li class="list-group-item">Agile practices for component based software development
                                            </li>
                                            <li class="list-group-item">Tools and techniques for agile development
                                            </li>
                                            <li class="list-group-item">Risk assessment in agile environment
                                            </li>
                                            <li class="list-group-item">Estimation in agile software development
                                            </li>
                                            <li class="list-group-item">Adopting agile and lean practices in large projects
                                            </li>
                                            <li class="list-group-item">Software metrics for agile projects, agile processes, agile teams
                                            </li>
                                            <li class="list-group-item">Agile methods in education, pedagogy and research
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track2" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#177731;">  Data Management</h3>
                                    <div>
                                        <p style="color: #444">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Sumit Dua<br>
                                                Louisiana Tech. University<br>
                                                United States of America<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Anand Gupta, <br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Pradeep Atrey,<br>
                                                State University of New York<br>
                                                 Albany, NY, USA
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #444">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Data interoperability in emerging applications
                                            </li>
                                            <li class="list-group-item">Metadata management
                                            </li>
                                            <li class="list-group-item">Data models and frameworks for Big Data
                                            </li>
                                            <li class="list-group-item">Web data management
                                            </li>
                                            <li class="list-group-item">Mobile data management
                                            </li>
                                            <li class="list-group-item">Migration to cloud and integration of legacy databases
                                            </li>
                                            <li class="list-group-item">Agile data management with No-SQL
                                            </li>
                                            <li class="list-group-item">Spatio-temporal databases
                                            </li>
                                            <li class="list-group-item">Distributed databases
                                            </li>
                                            <li class="list-group-item">Adaptable data security
                                            </li>
                                            

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track3" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#177731;"> Web Intelligence</h3>
                                    <div>
                                        <p style="color: #444">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Sanjay Mishra<br>
                                                Covenant University, OTA<br>
                                                Nigeria<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Sushma Nagpal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Pradeep Atrey,<br>
                                                State University of New York<br>
                                                 Albany, NY, USA
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #444">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Adaptive and context-aware web applications
                                            </li>
                                            <li class="list-group-item
">Collective intelligence
                                            </li>
                                            <li class="list-group-item
">Ontology discovery and management
                                            </li>
                                            <li class="list-group-item
">Web personalization
                                            </li>
                                            <li class="list-group-item
">Agent based web systems
                                            </li>
                                            <li class="list-group-item
">Context aware recommender systems
                                            </li>
                                            <li class="list-group-item
">Web analytics
                                            </li>
                                            <li class="list-group-item
">Opinion mining and sentiment analysis
                                            </li>
                                            <li class="list-group-item
">Social network analysis
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track4" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#177731;"> Computing in Education</h3>
                                    <div>
                                        <p style="color: #444">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Ms Rashmi Dravid<br>
                                                University of Northampton<br>
                                                United Kingdom<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Pinaki Chakraborty,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Pradeep Atrey,<br>
                                                State University of New York<br>
                                                 Albany, NY, USA
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #444">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Personalized and adaptive e-learning
                                            </li>
                                            <li class="list-group-item
">Mobile technologies for education
                                            </li>
                                            <li class="list-group-item
">Case studies on computer-aided education in developed and developing countries
                                            </li>
                                            <li class="list-group-item
">Learning analytics
                                            </li>
                                            <li class="list-group-item
">Collaborative and social networks based learning approaches
                                            </li>
                                            <li class="list-group-item
">Computing methods for constructivist learning
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="track5" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#177731;">Machine Learning</h3>
                                    <div>
                                        <p style="color: #444">Track Co-chairs</p>
                                        <div class="row">
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Raman Arora<br>
                                                John Hopkins University<br>
                                                United States of America<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr. Swati Aggarwal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Prof Pradeep Atrey,<br>
                                                State University of New York<br>
                                                 Albany, NY, USA
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #444">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Rough, fuzzy and neuro computing
                                            </li>
                                            <li class="list-group-item
">Cognitive systems
                                            </li>
                                            <li class="list-group-item
">Deep learning applications
                                            </li>
                                            <li class="list-group-item
">ML driven adaptive applications
                                            </li>
                                            <li class="list-group-item
">Evolutionary and nature inspired techniques
                                            </li>
                                            <li class="list-group-item
">Multi-lingual knowledge Acquisition
                                            </li>
                                            <li class="list-group-item
">Adaptive Natural Language Processing
                                            </li>
                                            <li class="list-group-item
">Ontology engineering and applications
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
`);
  });

  $('#subButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`
    <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        Submission</h1>

                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active nav-style a-style pl-0 pr-0" data-toggle="tab"
                                   href="#submissionMethodTab">SUBMISSION METHOD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#academicEthicsTab">ACADEMIC
                                    ETHICS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#registrationRequirementTab">REGISTRATION
                                    REQUIREMENT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#awardsTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    AWARDS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#publishingTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    PUBLISHING</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="submissionMethodTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-indent: 0.5in;">
                                        <br>
                                        <span style="color: black; font-size: 14pt;"> - We welcome full-length paper submissions of maximum 12 pages in the CCIS one-column page format.</span>
                                        <br>
                                         <span style="color: black; font-size: 14pt;"> - Short papers of at most 8 pages will also be considered.</span>
                                         <br>
                                          <span style="color: black; font-size: 14pt;"> - Submissions should strictly adhere to the <a href="http://www.springer.com/series/7899"> Springer Communications in Computer and Information Science (CCIS) </a> format.</span> <br>
                                                 <span style="color: black; font-size: 14pt;"> - Submissions will be accepted through <a
                                                href="https://ocs.springer.com/ocs/"> Springer Online Conference Service (OCS).</a>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="academicEthicsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            <span style="color: black; font-size: 14pt;"> - Please do not submit work that has been already published or accepted for publication or is currently under review for other conferences or journals.</span><br/>
                                             <span style="color: black; font-size: 14pt;"> - All manuscripts submitted to TEAMC 2018 will be subjected to plagiarism detection software to ensure originality.</span><br/>
                                              <span style="color: black; font-size: 14pt;"> - Qualifying papers will undergo a double blind review process by at least three reviewers.</span><br/>
                                               <span style="color: black; font-size: 14pt;"> - Please ensure that your manuscript clearly brings forth the innovative ideas in it, the results obtained and relevance of the contribution.</span><br/>
                                                <span style="color: black; font-size: 14pt;"> - Accepted papers must be presented at the conference.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="registrationRequirementTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            At least one of the authors of each accepted paper must register by paying the full registration fee as applicable for the author, on or before the deadline for camera ready submission.
                            </span><br><br>
                            <span style="color: black; font-size: 14pt;">
                                            Please register at this <a href="http://nsit.ac.in/TEAMC/Registration">Registration Link.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="awardsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Best paper award will be presented to high quality papers.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="publishingTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Publishing
We are in active engagement with Springer India for publishing accepted papers of the conference in the CCIS book series, subject to approval by CCIS Board. The publication will be indexed by ISI Proceedings, Ei – Compendex,  DBLP,  SCOPUS, Google Scholar and Springer link.
We are also contacting other publishers for journal publications and will share emerging developments on this website.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`);
  });

  $('#regButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`            
    <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        REGISTRATION</h1>

                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active nav-style a-style pl-0 pr-0" data-toggle="tab"
                                   href="#onlineRegistrationTab">&nbsp;&nbsp; ONLINE &nbsp;&nbsp;&nbsp;&nbsp;
                                    REGISTRATION</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#visaSupportTab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    VISA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SUPPORT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#registrationFeesTab">&nbsp;&nbsp; REGISTRATION &nbsp; FEES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#studentRegistrationTab">
                                    STUDENT
                                    REGISTRATION</a>
                            </li>

                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="onlineRegistrationTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Please register at this <a href="http://nsit.ac.in/TEAMC/Registration">Registration Link.</a>
<br/><br/>
<span style="color: black; font-size: 14pt;"> - Every accepted article (full paper/ short paper) to appear in the proceedings should be registered by at least one author by paying the full registration fee applicable.</span><br> 
<span style="color: black; font-size: 14pt;"> - If an author has got more than one accepted papers, each paper has to be registered separately.</span><br> 
<span style="color: black; font-size: 14pt;"> - Each article will be assigned a Paper ID upon submission which must be quoted at the time of registration.</span>
<br>
<span style="color: black; font-size: 14pt;"> - The conference registration covers conference proceedings, conference kit, admission to all workshops, coffee breaks, and lunch. The registration doesn’t cover accommodation, travel costs etc

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="visaSupportTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;"> - Only registered authors who have paid the full registration fees will be provided VISA  letters upon request.</span>
                                         <br>
                                         <span style="color: black; font-size: 14pt;"> - After completing the registration process, please send your request for VISA letter, quoting the registered paper ID, the paper title, the complete list of authors and the track under which the paper is accepted to teamc2018registration@nsit.ac.in.</span>
<br/><br/>
<span style="color: black; font-size: 14pt;"> The registration will not refundable once the VISA process starts.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="registrationFeesTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10 pt-4 text-center">
                                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #177731;line-height: 1.2;margin-bottom: 15px;font-size: 30px;text-transform: uppercase;">
                                        Registration fees for Indian delegates
                                    </h1>
                                    <table class="table table-bordered table-responsive">
                                        <thead class="thead-default">
                                        <tr>
                                            <th>Delegate Category</th>
                                            <th>Early Bird</th>
                                            <th>Standard</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">Faculty/Industry authors</th>
                                            <td>Rs 6000</td>
                                            <td>Rs 7000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Students</th>
                                            <td>
                                                Rs 4000
                                            </td>
                                            <td>
                                                Rs 5000
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Others</th>
                                            <td>
                                                Rs 4000
                                            </td>
                                            <td>
                                                Rs 5000
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-sm-12 col-md-10 pt-4 text-center">
                                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #177731;line-height: 1.2;margin-bottom: 15px;font-size: 30px;text-transform: uppercase;">
                                        Registration fees for Foreign delegates
                                    </h1>
                                    <table class="table table-bordered table-responsive">
                                        <thead class="thead-default">
                                        <tr>
                                            <th>Delegate Category</th>
                                            <th>Early Bird</th>
                                            <th>Standard</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">Faculty/Industry authors</th>
                                            <td>
                                                $300
                                            </td>
                                            <td>
                                                $350
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Students</th>
                                            <td>
                                                $250
                                            </td>
                                            <td>
                                                $300
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Others</th>
                                            <td>
                                                $250
                                            </td>
                                            <td>
                                                $300
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h3 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 18px;text-transform: uppercase;">
                                    *CSI, ACM and IEEE Members will be given a discount of 15%
                                </h3>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="studentRegistrationTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Students must submit a scanned copy of their Institute identity card at the time of registration and produce their original Identity card and a bonafide certificate from the Head of Institution/Department upon arrival at the conference reception desk.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
`);
  });

  $('#programButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`
    <div style="background-color: white;">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        PROGRAM</h1>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
                            Program Will Be Announced Soon
                        </span>
                    </div>
                </div>
            </div>
`);
  });

  $('#committeeButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white;width: 100%; ">


                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Committees</h1>
                  <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            
                            <li class="nav-item">

                                <a class="nav-link nav-style a-style active" data-toggle="tab" href="#adBoard">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ADVISORY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BOARD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#techCom">TECHNICAL PROGRAM COMMITTEE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#orgCom"> &nbsp;&nbsp; ORGANISING &nbsp;&nbsp; COMMITTEE</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                      
                        <div class="tab-pane fade show active" id="adBoard" role="tabpanel">
                            <div class="row justify-content-center">
                              <div class="col-sm-12">
                                <br>
                                <h3 style="color:#EA4335;">Honorary Conference Chair</h3>
                                <p>Prof. J.P. Saini, Director NSIT</p> 
                                <br>
                                <h3 style="color:#EA4335;">Members</h3>`+
`<ul class="list-group">`+
`<li class="list-group-item">Prof S.S. Mantha, All India Council for Technical Education</li>`
+`<li class="list-group-item">Prof Sumit Dua, Louisiana Tech University, USA</li>`
+`<li class="list-group-item">Prof Anshul Kumar, Indian Institute of Technology-Delhi</li>`+
`<li class="list-group-item">Dr Anil Goel, Hana Data Platform, SAP, USA</li>`
+`<li class="list-group-item">Prof K.K.Biswas, Indraprastha Institute of Information Technology, New Delhi</li>`
+`<li class="list-group-item">Prof Anjali Agarwal, Concordia University, Canada</li>`
+'<li class="list-group-item">Prof Yenumula B. Reddy, Grambling State University, LA, USA</li>'+`<li class="list-group-item">Prof Saroj Kaushik, Indian Institute of Technology Delhi</li>`+'<li class="list-group-item">Prof M. N. Hoda, BVICAM, New Delhi</li>'
+'<li class="list-group-item">Prof M. P. Pooniya, All India Council for Technical Education</li>'+'<li class="list-group-item">Prof P. C. Saxena, Jawaharlal Nehru University</li>'
+
    `</ul>                                                                    
                                </div>
                              </div>
                            </div>
                       
                         <div class="tab-pane fade" id="techCom" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                  <br>
                                  <h3 style="color:#EA4335;">Members</h3>
                                  
                                  <ul class="list-group">
                                <li class="list-group-item">Prof Pradeep Atrey, State University of New York, Albany, NY, USA</li>
                                <li class="list-group-item">Dr Bindu Chandna, MITRE, Greater Boston Area, USA</li>
                                <li class="list-group-item">Prof Sanjay Misra, Covenant University, OTA, Nigeria</li>
                                <li class="list-group-item">Dr Rashina Hoda, University of Auckland, New Zealand</li>
                                <li class="list-group-item">Prof Sonajharia Minz, Jawahar Lal University, India</li>
                                <li class="list-group-item">Dr Atul Jain, Texas Instruments, Dallas, USA</li>
                                <li class="list-group-item">Dr H.M.N. Dilum Bandara,University of Moratuwa, Sri lanka</li>
                                <li class="list-group-item">Dr Rajiv Jain, Wells Fargo, USA</li>
                                <li class="list-group-item">Ms Rashmi Dravid, University of Northampton, UK</li>
                                <li class="list-group-item">Mr Animesh Mishra, Intel Corp., San Francisco Bay Area, USA</li>
                                <li class="list-group-item">Dr Krishnan Seetharaman, University of Massachusetts Lowell, USA</li>
                                <li class="list-group-item">Dr Lalit Garg, University of Malta, Malta</li>
                                <li class="list-group-item">Dr Himanshu Bhatnagar, HB Software Solutions, USA</li>
                                <li class="list-group-item">Prof K.K.Biswas, Indraprastha Institute of Information Technology,  New Delhi, India</li>
                                <li class="list-group-item">Mr Vaibhav Mittal, Facebook USA</li>
                                <li class="list-group-item">Ms Rakshita, Microsoft, USA</li>
                                <li class="list-group-item">Prof Poonam Bedi, Delhi University, India</li>
                                <li class="list-group-item">Ms Monadhika, Pinterest, USA</li>
                                <li class="list-group-item">Prof Anjana Gosain, Guru Govind Indrapratstha Univ, India</li>
                                <li class="list-group-item">Dr Anil Kumar, Samsung, India</li>
                                <li class="list-group-item">Prof M.P.S. Bhatia, Netaji Subhas Institute of Technology, New Delhi, India</li>
                                <li class="list-group-item">Prof Manoj Gaur, Indian Institute of Technology-Jammu, India</li>
                                <li class="list-group-item">Prof Sangeeta Sabharwal, Netaji Subhas Inst of Technology, New Delhi, India</li>
                                <li class="list-group-item">Prof Daya Gupta, Delhi Technical University, India</li>
                                <li class="list-group-item">Prof B.K. Singh, Netaji Subhas Institute of Technology, New Delhi, India</li>
                                <li class="list-group-item">Prof Satbir Jain, Netaji Subhas Institute of Technology, New Delhi, India</li>
                                <li class="list-group-item">Dr Anubhav Mathur, Million Sparks Foundation, India</li>
                                <li class="list-group-item">Dr Naveen Kumar, Delhi University, India</li>
                                <li class="list-group-item">Dr Syed Akhtar Hossain, Daffodil University, Bangladesh, India</li>
                                <li class="list-group-item">Prof Jitender Kumar Chhabra, NIT Kurukshetra, India</li>
                                <li class="list-group-item">Dr Sushil Kumar Azad, Delhi University, India</li>
                                <li class="list-group-item">Dr Mona Mathur, Million Sparks Foundation, India</li>
                                <li class="list-group-item">Mr Chetan Oberoi, CEO MphRx, India</li>
                                <li class="list-group-item">Dr Ritu Sibal, Netaji Subhas Inst of Technology, New Delhi, India</li>
                                <li class="list-group-item">Dr Anand Gupta, Netaji Subhas Inst of Technology, New Delhi, India</li>
                                <li class="list-group-item">Dr Dilip Kumar Yadav, NIT Jamshedpur, India</li>
                                <li class="list-group-item">Dr Sushma Nagpal, Netaji Subhas Institute of Technology, New Delhi, India</li>
                                <li class="list-group-item">Prof Tarun Kumar Singhal, Symbiosis, India</li>
                                <li class="list-group-item">Dr Swati Agarwal, Netaji Subhas Institute of Technology, New Delhi, India</li>
                                <li class="list-group-item">Dr Suresh P.V., Indira Ganghi National Open University , India</li>
                                <li class="list-group-item">Dr Pinaki Chakrabarti, Netaji Subhas Institute of Technology, New Delhi, India</li>
                                <li class="list-group-item">Prof Amit Prakash, Guru Govind Indrapratstha Univ, India</li>
                                <li class="list-group-item">Dr Vasudha Bhatnagar, Delhi University, India</li>
                                <li class="list-group-item">Prof Lalit Sensharma, Jammu University, India</li>
                                <li class="list-group-item">Prof Goldie Gabrani, BML, Munjal University, India</li>
                                <li class="list-group-item">Prof S.K. Dhurandhar, Netaji Subhas Inst of Technology, New Delhi, India</li>
                                <li class="list-group-item">Dr Vikash Mashelkar, Netaji Subhas Inst of Technology, New Delhi, India</li>
                                <li class="list-group-item">Dr Latesh Mallick, Raisoni College of Engineering, Nagpur, India</li>
                                <li class="list-group-item">Prof Rajeev Srivastava, IIT, Banaras Hindu University, India</li>
                                <li class="list-group-item">Prof O.P. Verma, Delhi Technological University, India</li>
                                <li class="list-group-item">Dr D.K. Tayal, Indira Gandhi Delhi Technical Univ. for Women, New Delhi, India</li>
                                <li class="list-group-item">Prof Manu Sood, Himachal Pradesh University , Shimla, India</li>
                                <li class="list-group-item">Prof Arvinder Kaur, USICT, Guru Govind Singh Indraprastha University, India</li>
                                <li class="list-group-item">Dr Anju Saha, USICT, Guru Govind Singh Indraprastha University, India</li>
                                <li class="list-group-item">Dr Akshi Kumar, Delhi Technological University, India</li>
                                <li class="list-group-item">Dr Bharti Suri, USICT, Guru Govind Singh Indraprastha University, India</li>
                                <li class="list-group-item">Dr Vishal Jain, Bhartiya Vidyapeeth Inst of Computer Applications and Management, India</li>
                                <li class="list-group-item">Prof Amita Dev, BPIBS, Guru Govind Singh Indraprasth University, India</li>
                                <li class="list-group-item">Dr Rajni Jindal, Delhi Technological University, India</li>
                                <li class="list-group-item">Dr Sandeep Kumar Garg, Indian Institute of Technology Roorkee, India</li>
                                <li class="list-group-item">Dr Ritu Garg, NIT Kurukshetra, India</li>
                                <li class="list-group-item">Dr Ankita Bansal, Netaji Subhas Inst of Technology, India</li>
                                <li class="list-group-item">Dr Seema Bawa, Thapar Univ, Patiala, India</li>
                                <li class="list-group-item">Dr Naresh Chauhan, YMCA Univ. of Science and Technology, Faridabad, India</li>
                                <li class="list-group-item">Dr Deepali Virmani, Guru Govind Singh Indraprasth University, India</li>
                                <li class="list-group-item">Prof Payal Pahwa, Guru Govind Singh Indraprasth University, India</li>
                                <li class="list-group-item">Mr Manusheel Gupta, CEO Aspiring Investments, India</li>
                                <li class="list-group-item">Dr Namita Mittal, Malviya National Inst. of Technology, Jaipur, India</li>
                                <li class="list-group-item">Dr Nand Kumar, Manav Rachna University, India</li>
                                <li class="list-group-item">Prof Poonam Bansal, Maharaja Surajmal Institute of Technology, India</li>
                                <li class="list-group-item">Dr Rajesh Purohit, JNV University, Jodhpur, India</li>
                                <li class="list-group-item">Dr Amritanjali, BIT MESRA, Ranchi, India</li>
                                <li class="list-group-item">Dr Priyank Thakkar, Nirma University, India</li>
                                <li class="list-group-item">Dr Rama Krishnan, K.L. University, Guntur, India</li>
                                <li class="list-group-item">Dr Maitreyee Dutta, NITTR Chandigarh, India</li>
                                <li class="list-group-item">Dr Shruti Garg, BIT MESRA, Ranchi, India</li>
                                <li class="list-group-item">Dr Sangeeta Srivastava, Bhaskaracharya College of Applied Sciences, India</li>
                                <li class="list-group-item">Dr Savita Gupta, UIET, Punjab University, India</li>

                                  </ul>
                                  
                                  
                                </div>
                            </div>
                        </div>
                        
                    
                     
                       
                        <div class="tab-pane fade" id="orgCom" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                  
               
                                   <h3 style=" color:#EA4335; padding-top:25px;">General Chair </h3>
                                   Shampa Chakraverty, NSIT
                                   <br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Organizing Co-Chairs </h3>
                                   M. P. S. Bhatia, NSIT<br>
                                    Ritu Sibal, NSIT<br>
                                     <h3 style=" color:#EA4335; padding-top:25px;">TPC Co-Chairs</h3>
                                     Anil Kumar Goel, SAP, USA<br>
                                    Sangeeta Sabharwal, NSIT<br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Publication Chair</h3>
                                   Anand Gupta<br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Design Contest Co-Chair</h3>
                                  Manusheel Gupta<br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Workshop Chair</h3>
                                      Bijender Kumar<br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Industry Liaison Co-Chairs</h3>
                                   Satbir Jain<br>
                                   Rajeev Kumar<br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Sponsorship Chair</h3>
                                   M.P.S. Bhatia<br>  
                                   <h3 style=" color:#EA4335; padding-top:25px;">Publicity Co-chairs</h3>
                                    Savita Yadav<br>
                                   Poonam Rana
                                   <br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Finance Chair</h3>
                                  V.P. Ranjan<br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Website Chair</h3>
                                   Khushil Saini<br>
                                   Abhishek Faujdar<br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Hospitality Co-Chairs</h3>
                                   Preeti Kaur<br>
                                   Veenu
                                   <br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Internal Arrangements Chair</h3>
                                   Anil Arora<br>
                                   Aastha<br>    
                                                          
                                </div>
                            </div>
                        </div>
                      
                     
                     

                </div>
            </div>`);
  });

  $('#sponsorButton').click(function () {
    mainWrapper.empty();
    mainWrapper.append(`
                <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        SPONSORSHIP</h1>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;     font-family: 'Raleway', sans-serif">
                            Dear Technology Leader, <br/><br/>
In the ongoing saga of the digital revolution, the new mantra - Extend and Adapt,  has produced ripples of excitement in the industry and academia! Indeed, there is a fresh lease of energy enthusing technology drivers as they take every possible step to equip more and more people with the technological means to take new initiatives and learn continuously, to reach out and connect, and to realize their full potential at all times. And thereby, stands the fresh challenge for today - build applications and systems that recognize this core element of change - in requirements, data, surrounding context and user preferences; and adapt to the change gracefully, seamlessly.<br/><br/>
The International Conference Towards Extensible and Adaptable Methods in Computing -TEAMC-2018, aims to bring together professionals and students from all parts of the globe on a common platform to address different aspects of this very challenge of creating extensible and adaptable systems and applications:<br/><br/>

                        </span>
                    </div>

                    <ul class="sponsorshipList">
                        <li style="    font-family: 'Raleway', sans-serif">There is an ever-exploding nebula of data in the cyberspace that must crystallize into
                            meaningful compendiums of knowledge backing myriad applications.
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Software development processes must be flexible enough to adapt quickly to the changing
                            expectations and scales of businesses.
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Applications such as e-learning must offer personalized features and adapt to the changing
                            preferences and capabilities of users.
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            The web, rife with textual and multimedia content, must be harnessed to gather cogent
                            information.
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Indeed, the world of computing must evolve and learn to sync with human intelligence.
                        </li>
                    </ul>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;font-family: 'Raleway', sans-serif">
                            TEAMC-2018 will be hosted by Netaji Subhas Institute of Technology, a premier seat of higher learning in technology that attracts the best students to pursue its UG, PG and Doctoral programs. It is spread over a beautifully landscaped campus of 145 acres that houses all facilities to create an excellent academic environment. The committee of professionals dedicated towards the conference is striving to achieve a high quality technical program with Tracks on <b>Data management, Agile software development, Web intelligence, Computing in education, and Machine learning.</b> It will feature the following components:
                        <br/><br/>
                        </span>
                    </div>

                    <ul class="sponsorshipList">
                        <li style="    font-family: 'Raleway', sans-serif">
                            Regular Technical Sessions
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Keynote speeches
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Workshops
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Panel discussions
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Design contest
                        </li>
                        <li style="    font-family: 'Raleway', sans-serif">
                            Exhibits
                        </li>
                    </ul>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt; font-family: 'Raleway', sans-serif">
                            As a spearheading force in the industry driving forward this revolution, TEAMC-2018 provides just the right platform and visibility to showcase your company, its vision and its technological offerings to a wide spectrum of professionals. Your participation will give an opportunity to nurture the talent pool and spur a collaborative atmosphere necessary for progress.<br/><br/>
Kindly see the various sponsorship packages and offers and give us an opportunity to collaborate on this initiative and work together for its success right from the outset.<br/><br/>
Yours sincerely<br/><br/>
General Chair<br/><br/>
Sponsorship Chairs<br/><br/>
Industry Liaison Chair<br/><br/>
Finance Chair<br/><br/>
                        </span>
                    </div>

                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.1;margin-bottom: 15px;font-size: 22px;text-transform: uppercase;">
                        For detailed information, <a href="http://www.nsit.ac.in/sponsorships">please see here.</a>
                    </h1>

                </div>
            </div>
`);
  });

  $('#infoButton').click(function () {


    // AIzaSyDBqAJQ9d0sn9iRRrjJjjUtRbbAsBS-0uU
    mainWrapper.empty();
    mainWrapper.append(`
        <div style="background-color: white;width: 100%;">

                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Information</h1>
                  <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style active" data-toggle="tab"
                                   href="#contactUS">CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#accommodation">ACCOMODATION</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#localGuide">LOCAL GUIDE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#reachUS">HOW TO REACH</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                          <div class="tab-pane fade show active" id="contactUS" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12" style="color : black;">
                                    <br>
                                    <h3 style=" color:#EA4335;"> Website </h3>
                                    www.nsit.ac.in/TEAMC2018
                                    <br>
                                    Email Id- teamc2018@nsit.ac.in
                                    <div>
                                       
                                      <h3 style=" color:#EA4335; padding-top:25px;"> General Chair </h3>
                                       
                                        <div class="row"">
                                            <div class="col" style="color: black; font-size: 18px">
                                             <span style="color:#177731; font-family:Lato, sans-serif;"> <b>Prof Shampa Chakraverty</b> </span>  <br>
                                                Mobile: 9205475009<br>
                                                Email: apmahs.nsit@nsit.ac.in<br>
                                            </div>
                                        </div>
                                        
                                        
                                         <h3 style=" color:#EA4335; padding-top:25px;"> Organizing Co-Chairs </h3>
                                        <div class="row">
                                            <div class="col" style="color: black; font-size: 18px">
                                               <span style="color:#177731; font-family:Lato, sans-serif;"> <b>Prof MPS Bhatia</b> </span>  <br>
                                                Mobile: 9205475008<br>
                                                Email: bhatia.mps@gmail.com<br>
                                            </div>
                                            <div class="col" style="color: black; font-size: 18px">
                                               <span style="color:#177731; font-family:Lato, sans-serif;"> <b>Dr. Ritu Sibal</b> </span>  <br>
                                                Mobile: 9871598390<br>
                                                Email: ritusib@hotmail.com<br>
                                            </div>                                        </div>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      
                        
                           
                        <div class="tab-pane fade" id="accommodation" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                   
                                   <p style="padding-top:5px;">
                                   <br>
                                   The conference venue, Netaji Subhas Institute of Technology, is located in Dwarka, New Delhi.
                                    It is a sub-city in itself and has developed into an educational hub boasting many schools and Institutions of higher learning.<br>
                                    <br>
                                    Dwarka has many accommodation options to suit varied preferences and budgets which are within
                                     5-10 minutes drive from the venue.
                                      Online Taxi services are available round the clock. 
                                      You can also search for other options using global search sites like 
                                      <a href="https://www.tripadvisor.in/"> Tripadvisor.com</a> and 
                                      <a href="https://www.booking.com/">Booking.com</a>. 
                                  
                                   </p>
                                   
                                   <p>
                                    Some of the accommodation options in Dwarka are:<br>
                                    <span style="color:#177731; "> <b>5 Star Hotels:</b></span>
                                    Radisson Blu, Welcome Hotel, Vivanta by Taj
                                    <br>
                                    <span style="color:#177731; "><b> Budget Hotels:</b></span>
                                    Shhaurya Hotel, La Wisteria Hotel, Royal Star Hotel
                                   </p>
                                   <p>
                                    <h3 style=" color:#EA4335; padding-top:25px;"> On Campus </h3>
                                    <ul>
                                      <li>
                                      Limited number of hostel rooms can be made available upon request on single/double sharing, chargeable and first-come-first-served basis.
                                      </li>
                                      <li>
                                      Hostel accommodation requests can be made at the time of registration.
                                      </li>
                                      <li>
                                      The charges of accommodation are not included in the registration fee.
                                      </li>
                                    </ul>
                                   </p>
                                   
                                </div>
                            </div>
                        </div>
                        
                     
                        
                        
                         <div class="tab-pane fade" id="localGuide" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                   <p>
                                   <h3 style=" color:#EA4335; padding-top:25px;"> Venue </h3>
                                   <address style="font-style: italic">Netaji Subhas Institute of Technology
                                   <br> Dwarka, Sector 3
                                   <br> New Delhi - 110078<br> India.</address>       
                                   </p> 
                                   
                                   
                                   <p>
                                     <h3 style=" color:#EA4335; padding-top:25px;"> About NSIT </h3>
                                     An autonomous institution under Govt. of NCT of Delhi and affiliated to University of Delhi,
                                      Netaji Subhas Institute of Technology is a reputed seat of higher education in India.
                                       Over a period of time, the institute has carved a niche for itself, both nationally and internationally, 
                                       for excellence in engineering education and research.<br>

                                        NSIT has a  145 acre, beautifully landscaped, sprawling campus. The campus life is always abuzz with
                                        activity by a  number of societies and clubs. The campus houses the Main Administrative
                                         block, Academic blocks, Central Library, Medical Center, Students’ Activity Center, 
                                         Faculty and Staff residences, Student hostels, Banks, ATM, Post Office, Sports Complex 
                                         and Shopping Complex.
                                   </p>
                                   
                                   
                                   <p>
                                   <h3 style=" color:#EA4335; padding-top:25px;"> About Delhi </h3>
                                   Delhi is not just a city – it is a universe of its own. Churned by a rich tapestry of historical 
                                   events, Delhi vibrates today with cultures of diverse hues, architectural masterpieces, lush green
                                    landscapes and lively hubs of eclectic activities. <br>
                                    Delhi will never fail to surprise you with what it can offer. Seep in the aura of Mughal glory in 
                                    Red Fort, view the majestic Rashtrapati Bhavan on Raisina Hills from the vantage point of India Gate,
                                     embrace the iron tower in Qutub Minar complex to fulfil a wish, take a heritage walk in Lodhi Gardens,
                                      marvel at the serene beauty of Lotus temple, Saint James Church, Akshardham temple and Bangla Sahib
                                       Gurudwara, swing to the pulsating Qawwali beats in Nizamuddin Dargah, enjoy night street food in 
                                       Chandni Chauk, or simply take a peaceful stroll in Connaught Place Central Park – every nook and
                                        corner of the Capital city has a story to tell.
                                   </p>
                                 
                                </div>
                            </div>
                        </div>
                        
                    
                     
                       
                        <div class="tab-pane fade" id="reachUS" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                  
                                  <p>
                                   <h3 style=" color:#EA4335; padding-top:25px;">By Air </h3>
                                   Indira Gandhi International Airport (IGI) in Delhi serves both domestic and international
                                    flights. There are frequent flights to Delhi from all metro cities. Situated in Palam, the
                                     airport is about 20 kilometers away from the NSIT. While there are regular Delhi Transport 
                                     Corporation buses (DTC) plying from outside the airport, one can take airport metro express
                                      to Sector 21 dwarka and change there for blue line metro that drops you at Dwarka Mor 
                                      station - closest to the campus. Along with Uber and Ola, government registered pre-paid
                                       taxis can also be hired from the taxi counters at the airport to reach the venue.
                                    </p>
                                    <p>
                                   <h3 style=" color:#EA4335; padding-top:25px;">By Train </h3> 
                                   The capital city Delhi is primarily served by four railway stations—New Delhi Railway Station (NDLS),
                                    Old Delhi Railway Station (DLI), Hazrat Nizamuddin Railway Station (NZM) and Anand Vihar Railway Terminal (ANVT). 
                                    All railway stations are well connected by metro stations and DTC buses to the venue. For more information visit   
                                    <a href="http://www.delhimetrorail.com/"> Delhi metro website </a>.
                                    </p>                          
                                </div>
                            </div>
                            <div id="map"></div>
                        </div>
                      
                </div>
            </div>
`);


    initMap();
    const $map = $('#map');
    $map.css('visibility', 'visible');
    $map.css('height', '400px');
    // $("#map").css('width', '100%');


  });

});
