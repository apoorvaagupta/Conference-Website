$(document).ready(function () {

  const mainWrapper = $('#main-wrapper');

    $('#homeButton').click(function () {
        console.log(1);
        mainWrapper.empty();
        mainWrapper.append(`<div style="background-color: white; ">

                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Overview</h1>

                        <div class="overview-description" style="text-align: center;">
                            &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="background-color: white; color: black; font-size: 14pt;">Welcome to the &nbsp;</span><br><b
                                style="background-color: white; color: black; font-size: 14pt;"><span
                                style="color: #385623; font-size: 15pt;">2018 International Conference <br> Towards Extensible and Adaptable Methods in Computing (TEAMC 2018) </span></b>
                            <b style="background-color: white; color: black; font-size: 14pt;"></b><span
                                style="background-color: white; color: black; font-size: 14pt;">&nbsp; <br> organized by&nbsp;</span>
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
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
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
            </div>`);
  });

    $('#copButton').click(function () {
        mainWrapper.empty();
        mainWrapper.append(`            <div style="background-color: white;width: 100%; ">


                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        Call For Papers</h1>

                    <span>We invite authors to submit their papers under the tracks given below. Each track includes several topics listed below,  but is not necessarily limited to them.
                        <br><br></span>
                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#track1">TRACK 1 - ASD</a>
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
                                                Dr Rashina Hoda<br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Ritu Sibal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
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
                                                Dr Anand Gupta, <br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
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
                                                Dr Sushma Nagpal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
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
                                                Dr Pinaki Chakraborty,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
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
                                                Dr Raman Arora<br>
                                                John Hopkins University<br>
                                                United States of America<br>
                                            </div>
                                            <div class="col" style="color: red; font-size: 18px">
                                                Dr Swati Aggarwal,<br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
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
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            We welcome full-length paper submissions of maximum 12 pages in the CCIS one-column page format. Short papers of at most 8 pages will also be considered. Submissions should strictly adhere to the <a
                                                href="http://www.springer.com/series/7899"> Springer Communications in Computer and Information Science (CCIS)</a> format. Submissions will be accepted through <a
                                                href="https://ocs.springer.com/ocs/"> Springer Online Conference Service (OCS).</a>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="academicEthicsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Please do not submit work that has been already published or accepted for publication or is currently under review for other conferences or journals. All manuscripts submitted to TEAMC 2018 will be subjected to plagiarism detection software to ensure originality. Qualifying papers will undergo a double blind review process by at least three reviewers. Please ensure that your manuscript clearly brings forth the innovative ideas in it, the results obtained and relevance of the contribution. Accepted papers must be presented at the conference.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="registrationRequirementTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            At least one of the authors of each accepted paper must register by paying the full registration fee as applicable for the author, on or before the deadline for camera ready submission.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="awardsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
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
                                <div class="col-md-10">
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
        mainWrapper.append(`            <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#EA4335; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        REGISTRATION</h1>

                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active nav-style a-style pl-0 pr-0" data-toggle="tab"
                                   href="#onlineRegistrationTab">ONLINE REGISTRATION</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#visaSupportTab">VISA SUPPORT</a>
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
                        <div class="tab-pane fade show active" id="onlineRegistrationTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            We welcome full-length paper submissions of maximum 12 pages in the CCIS one-column page format. Short papers of at most 8 pages will also be considered. Submissions should strictly adhere to the <a
                                                href="http://www.springer.com/series/7899"> Springer Communications in Computer and Information Science (CCIS)</a> format. Submissions will be accepted through <a
                                                href="https://ocs.springer.com/ocs/"> Springer Online Conference Service (OCS).</a>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="visaSupportTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Please do not submit work that has been already published or accepted for publication or is currently under review for other conferences or journals. All manuscripts submitted to TEAMC 2018 will be subjected to plagiarism detection software to ensure originality. Qualifying papers will undergo a double blind review process by at least three reviewers. Please ensure that your manuscript clearly brings forth the innovative ideas in it, the results obtained and relevance of the contribution. Accepted papers must be presented at the conference.

                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="registrationRequirementTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            At least one of the authors of each accepted paper must register by paying the full registration fee as applicable for the author, on or before the deadline for camera ready submission.
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="awardsTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
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
                                <div class="col-md-10">
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
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#conCom">Conference Committee</a>
                            </li>
                            <li class="nav-item">

                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#adBoard">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Advisory Board</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#techCom">Technical Program Committee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#orgCom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Organizing Committee</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                          <div class="tab-pane fade show active" id="conCom" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12" style="color : black;">
                                    <br>
                                    <h3 style=" color:#EA4335;"> Honorary Conference Chair</h3>
                                    Prof. J.P. Saini, Director NSIT 
                                    <br>
                                    </div>
                            </div>
                        </div>
                        
                      
                        
                           
                        <div class="tab-pane fade" id="adBoard" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                <br>
                                <ul>
                                <li>Prof. Anshul Kumar, Indian Institute of Technology-Delhi</li>
                                <li>Prof Saroj Kaushik,  Indian Institute of Technology Delhi</li>
                                <li>Prof K.K.Biswas, Indraprastha Institute of Information Technology,  New Delhi</li>
                                <li>Prof S.S. Mantha, All India Council for Technical Education</li>
                                <li> Prof Anjali Agarwal, Concordia University, Canada</li>
                                <li>Prof. Yenumula B. Reddy, Grambling State University, LA, USA</li>
                                <li>Prof Sumit Dua, Louisiana Tech University, USA</li>
                                <li>Prof. M. N. Hoda, BVICAM, New Delhi</li>
                                 <li> Prof. M. P. Pooniya, All India Council for Technical Education</li>
                                  <li>  Dr. Anil Goel, Hana Data Platform, SAP, USA</li>
                                   <li> Prof. P. C. Saxena, Jawaharlal Nehru University</li>
                                </ul>                                                                    
                                </div>
                            </div>
                        </div>
                        
                     
                        
                        
                         <div class="tab-pane fade" id="techCom" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                  <br>
                                  
                                  <ul>
                                 <li> Prof Pradeep Atrey,State University of New York, Albany, NY, USA</li>
                                  <li>   Prof Sumeet Dua, Louisiana Tech University, USA</li>
                                  <li>Prof. Yenumula B. Reddy, Grambling State University, LA, USA</li>
                                  <li>Dr. Anil Goel, Hana Data Platform, SAP, USA</li>
                                  <li>Prof. P. C. Saxena, Jawaharlal Nehru University, New Delhi</li>
                                  <li>Prof Sanjay Misra, Covenant University, OTA, Nigeria</li>
                                  <li>Dr. Rashina Hoda, University of Auckland, New Zealand</li>
                                  <li>Dr Atul Jain, Texas Instruments, Dallas, USA</li>
                                  <li>Dr Rajiv Jain, Wells Fargo, USA</li>
                                  <li>Dr Himanshu Bhatnagar, HB Software Solutions, USA</li>
                                  <li>Dr Anil Goel, Hana Data Platform, SAP, USA</li>
                                  <li>Ms Rashmi Dravid, University of Northampton, UK</li>
                                  <li>Dr. Lalit Garg, University of Malta, Malta</li>
                                  <li>Prof Sonajharia Minz, JNU</li>
                                  <li>Prof Sangeeta Sabharwal, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Prof K.K.Biswas, Indraprastha Institute of Information Technology,  New Delhi</li>
                                  <li>Prof Poonam Bedi, Delhi University</li>
                                  <li>Prof Anjana Gosain, Guru Govind Indrapratstha Univ</li>
                                  <li>Dr Anil Kumar, Samsung</li>
                                  <li>Prof. M.P.S. Bhatia, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Mr Vaibhav Mittal, Facebook USA</li>
                                  <li>Prof. Manoj Gaur, Indian Institute of Technology-Jammu</li>
                                  <li>Prof Shampa Chakraverty, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Prof Daya Gupta, Delhi Technical University</li>
                                  <li>Prof. B.K. Singh, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Mr Animesh Mishra, Principal Engineer, Intel Corp., USA</li>
                                  <li>Prof Satbir Jain, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Dr Anubhav Mathur, Million Sparks Foundation,</li>
                                  <li>Dr Naveen Kumar, Delhi University</li>
                                  <li>Dr Syed Akhtar Hossain, Daffodil University, Bangladesh</li>
                                  <li>Prof. Jitender Kumar Chhabra, NIT Kurukshetra</li>
                                  <li>Dr Sushil Kumar Azad, Delhi University</li>
                                  <li>Dr Mona Mathur, Million Sparks Foundation</li>
                                  <li>Mr Chetan Oberoi, CEO MphRx</li>
                                  <li>Dr. Ritu Sibal, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Dr. Anand Gupta, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Dr Krishnan Seetharaman, University of Massachusetts Lowell, USA</li>
                                  <li>Dr Dilip Kumar Yadav, NIT Jamshedpur</li>
                                  <li>Dr. Sushma Nagpal, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Prof Tarun Kumar Singhal, Symbiosis</li>
                                  <li>Dr. Swati Agarwal, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Dr Suresh P.V., IGNOU</li>
                                  <li>Dr. Pinaki Chakrabarti, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Prof Amit Prakash, Guru Govind Indrapratstha Univ, India</li>
                                  <li>Dr. Vasudha Bhatnagar, Delhi University</li>
                                  <li>Dr. Naveen Kumar,Delhi University</li>
                                  <li>Ms Monadhika, Pinterest, USA</li>
                                  <li>Prof Lalit Sensharma, Jammu University</li>
                                  <li>Prof Goldie Gabrani, BML, Munjal University</li>
                                  <li>Prof. S.K. Dhurandhar, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Dr Vikash Mashelkar, Netaji Subhas Inst of Technology, New Delhi</li>
                                  <li>Dr Latesh Mallick, Raisoni College of Engineering, Nagpur</li>
                                  <li>Prof. Rajeev Srivastava, Indian Institute of Technology Banaras Hindu University, Varanasi</li>
                                  <li>Prof. O.P. Verma, Delhi Technological University</li>
                                  <li>Ms Rakshita, Microsoft, USA</li>
                                  <li>Dr. D.K. Tayal, Indira Gandhi Delhi Technical Univ. for Women, New Delhi</li>
                                  <li>Prof Manu Sood, Himachal Pradesh University , Shimla</li>
                                  <li>Prof. Arvinder Kaur, USICT</li>
                                  <li>Dr. Anju Saha, USICT, Guru Govind Singh Indraprastha University, New Delhi</li>
                                  <li>Dr Akshi Kumar, Delhi Technological University</li>
                                  <li>Dr Bharti Suri, USICT, Guru Govind Singh Indraprastha University, New Delhi</li>
                                  <li>Dr Vishal Jain, Bhartiya Vidyapeeth Inst of Computer Applications and Management</li>
                                  <li>Prof Amita Dev, Bhai Parmanand Inst of Business Studies, Guru Govind Singh Indraprasth University, New Delhi</li>
                                  <li>Dr. Rajni Jindal, Delhi Technological University</li>
                                  <li>Dr. Sandeep Kumar Garg, Indian Institute of Technology Roorkee</li>
                                  <li>Dr. Ritu Garg, NIT kurukshetra</li>
                                  <li>Dr. Ankita Bansal, Netaji Subhas Inst of Technology</li>
                                  <li>Dr. Seema Bawa, Thapar Univ, Patiala</li>
                                  <li>Dr. Naresh Chauhan, YMCA Univ. of Science and Technology, Faridabad</li>
                                  <li>Dr Deepali Virmani, Guru Govind Singh Indraprasth University, New Delhi</li>
                                  <li>Prof Payal Pahwa, Guru Govind Singh Indraprasth University, New Delhi</li>
                                  <li>Mr Manusheel Gupta, CEO Aspiring Investments, India</li>
                                  <li>Dr. Namita Mittal, Malviya National Inst. of Technology, Jaipur</li>
                                  <li>Dr Nand Kumar, Manav Rachna University</li>
                                  <li>Prof Poonam Bansal, Maharaja Surajmal Institute of Technology</li>
                                  <li>Dr H.M.N. Dilum Bandara,University of Moratuwa</li>
                                  <li>Dr. Rajesh Purohit, J.N.V. Univ., Jodhpur</li>
                                  <li>Dr Amritanjali</li>
                                  <li>Dr. Priyank Thakkar, Nirma University</li>
                                  <li>Dr Rama Krishnan</li>
                                  <li>Dr Maitreyee Dutta,</li>
                                  <li>Dr Shruti Garg</li>
                                  <li>Dr. Sangeeta Srivastava, Bhaskaracharya College of Applied Sciences</li>
                                  <li>Dr. Savita Gupta, UIET, Punjab Univ.</li>
                                  </ul>
                                  
                                  
                                </div>
                            </div>
                        </div>
                        
                    
                     
                       
                        <div class="tab-pane fade" id="orgCom" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                  
               
                                   <h3 style=" color:#EA4335; padding-top:25px;">General Chair </h3>
                                   Prof. Shampa Chakraverty, NSIT
                                   <br><br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Organizing Co-Chairs </h3>
                                   Prof. M. P. S. Bhatia, NSIT<br>
                                    Dr Ritu Sibal, NSIT<br><br>
                                     <h3 style=" color:#EA4335; padding-top:25px;">TPC Co-Chairs</h3>
                                     Dr Anil Kumar Goel, SAP, USA<br>
                                    Prof. Sangeeta Sabharwal, NSIT<br><br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Publication Chair</h3>
                                   Anand Gupta<br><br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Design Contest Co-Chair</h3>
                                  Manusheel Gupta<br>
                                   Manusheel Gupta<br><br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Workshop Chair</h3>
                                      Prof Bijender Kumar<br><br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Industry Liaison Co-Chairs</h3>
                                   Industry Liaison Co-Chairs<br>
                                   Rajeev Kumar<br><br>
                                   <h3 style=" color:#EA4335; padding-top:25px;">Sponsorship Chair</h3>
                                   Prof M.P.S. Bhatia<br><br>   
                                   <h3 style=" color:#EA4335; padding-top:25px;">Publicity Co-chairs</h3>
                                    Savita Yadav<br>
                                   Poonam Rana
                                   <br><br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Finance Chair</h3>
                                  V.P. Ranjan<br><br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Website Chair</h3>
                                   Khushil Saini<br><br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Hospitality Co-Chairs</h3>
                                   Preeti Kaur<br>
                                   Aastha Singh
                                   <br><br> 
                                   <h3 style=" color:#EA4335; padding-top:25px;">Internal Arrangements Chair</h3>
                                   Anil Arora<br><br>    
                                                          
                                </div>
                            </div>
                        </div>
                      
                     
                     

                </div>
            </div>
`);
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
                        <span style="color: black; font-size: 14pt;">
                            Dear Technology Leader, <br/><br/>
In the ongoing saga of the digital revolution, the new mantra - Extend and Adapt,  has produced ripples of excitement in the industry and academia! Indeed, there is a fresh lease of energy enthusing technology drivers as they take every possible step to equip more and more people with the technological means to take new initiatives and learn continuously, to reach out and connect, and to realize their full potential at all times. And thereby, stands the fresh challenge for today - build applications and systems that recognize this core element of change - in requirements, data, surrounding context and user preferences; and adapt to the change gracefully, seamlessly.<br/><br/>
The International Conference Towards Extensible and Adaptable Methods in Computing -TEAMC-2018, aims to bring together professionals and students from all parts of the globe on a common platform to address different aspects of this very challenge of creating extensible and adaptable systems and applications:<br/><br/>

                        </span>
                    </div>

                    <ul class="sponsorshipList">
                        <li>There is an ever-exploding nebula of data in the cyberspace that must crystallize into
                            meaningful compendiums of knowledge backing myriad applications.
                        </li>
                        <li>
                            Software development processes must be flexible enough to adapt quickly to the changing
                            expectations and scales of businesses.
                        </li>
                        <li>
                            Applications such as e-learning must offer personalized features and adapt to the changing
                            preferences and capabilities of users.
                        </li>
                        <li>
                            The web, rife with textual and multimedia content, must be harnessed to gather cogent
                            information.
                        </li>
                        <li>
                            Indeed, the world of computing must evolve and learn to sync with human intelligence.
                        </li>
                    </ul>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
                            TEAMC-2018 will be hosted by Netaji Subhas Institute of Technology, a premier seat of higher learning in technology that attracts the best students to pursue its UG, PG and Doctoral programs. It is spread over a beautifully landscaped campus of 145 acres that houses all facilities to create an excellent academic environment. The committee of professionals dedicated towards the conference is striving to achieve a high quality technical program with Tracks on <b>Data management, Agile software development, Web intelligence, Computing in education, and Machine learning.</b> It will feature the following components:
                        <br/><br/>
                        </span>
                    </div>

                    <ul class="sponsorshipList">
                        <li>
                            Regular Technical Sessions
                        </li>
                        <li>
                            Keynote speeches
                        </li>
                        <li>
                            Workshops
                        </li>
                        <li>
                            Panel discussions
                        </li>
                        <li>
                            Design contest
                        </li>
                        <li>
                            Exhibits
                        </li>
                    </ul>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        <span style="color: black; font-size: 14pt;"><br></span>
                        <span style="color: black; font-size: 14pt;">
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
                                <a class="nav-link nav-style a-style" data-toggle="tab"
                                   href="#contactUS">Contact US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#accommodation">Accommodation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#localGuide">Local guide</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#reachUS">How to reach</a>
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
                                               <span style="color:#177731; font-family:Lato, sans-serif;"> <b>Dr Ritu Sibal</b> </span>  <br>
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
                                    <br> 
                                    For any assistance required on booking your accommodation or queries, please directly contact hotel
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
                        </div>
                      
                </div>
            </div>
<div id="map"></div>

`);


    initMap();
    const $map = $('#map');
    $map.css('visibility', 'visible');
    $map.css('height', '400px');
    // $("#map").css('width', '100%');


  });



});
