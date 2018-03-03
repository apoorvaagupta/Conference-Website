$(document).ready(function () {

  const mainWrapper = $('#main-wrapper');

  function f1() {
    ;
    $('#announcement').animate({marginLeft: "50px"}, 6000, function () {
      let annWidth = $('body').width() - $('#announcement').width()
      $('#announcement').animate({marginLeft: annWidth - 50}, 6000, f1);
    });
  }

  let annWidth = $('body').width() - $('#announcement').width();
  console.log(annWidth);

  $('#announcement').animate({marginLeft: annWidth - 50}, 6000, f1);

  $('#toggleNav').click(function () {
    const jumbotron = $('#jumbotron');
    if (jumbotron.css('margin-top') == '80px') {
      //jumbotron.css('margin-top', 375);
    } else {
    //  jumbotron.css('margin-top', 80);
    }
  });

  $('#moveToIndustryTrack').click(function () {
    $('#copButton').click();
    $('a[href="#track6"]').click();
  });


  $('#moveToSpeakers').click(function () {
    $('#programButton').click();
  });

  $('#moveToHackeamTab').click(function () {
    $('#hackeamButton').click();
  });

  $('#moveToHackeamWebsite').click(function () {
    var win = window.open('http://hackeam.teamc18.com/', '_blank');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  });

  $('#moveToRegistrations').click(function () {
    var win = window.open('https://www.imsnsit.org/imsnsit/elearn_fdpconference_new.php', '_blank');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  });


  $('#moveToRegistration').click(function () {
    $('#regButton').click();
    $('a[href="#registrationFeesTab"]').click();
  });

  $('#teamc18logo').css('height', $('#nsit-logo').height);

  $('#homeButton').click(function () {
    $('#speakers-row').show();
    console.log("reached");
    $('#announcement').css("display", "block");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white; ">
                <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #555; border-bottom: solid 1px #bbb;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            Overview</h1>

                        <div class="overview-description" style="text-align: center;"><br>
                            <a href="http://www.springer.com/in/"><img src="images/Springer-CCIS.jpg" width="40%"></a>&nbsp;&nbsp;
              <a href="http://www.ictacademy.in/pages/index.aspx"><img src="images/ictacademy_logo_hi_color_jpg.jpg" width="40%"></a>
                            <br>
                            <!--<span style="background-color: white; color: black; font-size: 14pt;">Welcome to the</span><br><b-->
                                <!--style="background-color: white; color: black; font-size: 14pt;"><span-->
                                <!--style="color: #385623; font-size: 15pt;">2018 International Conference <br> Towards Extensible and Adaptable Methods in Computing <br> TEAMC 2018 </span></b>-->
                            <!--<b style="background-color: white; color: black; font-size: 14pt;"></b><span-->
                            <!--style="background-color: white; color: black; font-size: 14pt;">&nbsp; <br> organized by&nbsp;</span>-->
                        </div>


                        <!--<div style="background: white; line-height: 18pt; margin: 0in; text-align: center;">-->
                            <!--<div style="text-align: center;">-->
                            <!--</div>-->
                            <!--<div style="text-align: center;">-->
                                <!--<b><span style="color: #002060; font-size: 15pt;">Netaji Subhas Institute of Technology, Dwarka, Delhi, India.</span></b>-->
                            <!--</div>-->
                        <!--</div>-->


                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            The International Conference, Towards Extensible and Adaptable Methods in Computing – TEAMC 2018, will be held during 26-28 March, 2018 under the aegis of Netaji Subhas Institute of Technology (NSIT), New Delhi.
This conference will provide an excellent opportunity to researchers, practitioners and students to share ideas, discuss best practices and collaborate together to solve problems in convergent domains of computing that strive towards extensibility and adaptability.
    <br/><br/>
                                TEAMC 2018 includes Agile Software Development, Data Management, Web Intelligence, Computing in Education and Machine Learning as its tracks.<br/>

                            </span>

                            
                        </div>



                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            The conference will feature regular technical sessions, keynote speeches, Industry and PhD forums, workshops, panel discussions and a Hackathon/Design contest.
                            </span>
                        </div>

<div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            An autonomous institution under the Government of NCT, Delhi, Netaji Subhas Institute of Technology is among the most reputed institutions in the domain of engineering education in India. it is affiliated to Delhi University.
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
                                         <h2><i>HUMAYUN'S TOMB</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/Red_Fort_in_Delhi_03-2016_img3.jpg"
                                         alt="Second slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>RED FORT</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/surajkundm_mela2.jpg"
                                         alt="Third slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>SURAJ KUND</i></h2>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC06193.JPG"
                                         alt="Fourth slide">
                                    <div class="carousel-caption d-block">
                                        <h2><i>NSIT, DWARKA</i></h2>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/DSC_0441.jpg"
                                         alt="Sixth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>NUKKAD NATAK, NSIT</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/Qutub-Minar-Delhi-1024x681.jpg"
                                         alt="Seventh slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>QUTUB MINAR</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid"
                                         src="./images/india-gate-night-hd-pictures.jpg" alt="Ninth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>INDIA GATE</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/-77044_7004.jpg"
                                         alt="Tenth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>LOTUS TEMPLE</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/Jama_Masjid_-_In_the_Noon.jpg"
                                         alt="Eleventh slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>JAMA MASJID</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="./images/diwan-i-khas-inside-view-red-fort-delhi.jpg"
                                         alt="Twelveth slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>DIWAN-I-KHAS</i></h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid"
                                         src="./images/v__processed_original.jpg"
                                         alt="Thirteen slide">
                                    <div class="carousel-caption d-md-block">
                                        <h2><i>JANTAR MANTAR</i></h2>
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
            </div>`);

    $('#moveToIndustryTrack').click(function () {
      $('#copButton').click();
      $('a[href="#track6"]').click();
    });

    $('#moveToRegistration').click(function () {
      $('#regButton').click();
      $('a[href="#registrationFeesTab"]').click();
    });
  });

  $('#copButton').click(function () {
    $('#speakers-row').hide();
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`            
    <div style="background-color: white;width: 100%; ">


                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        Call For Papers</h1>

                    <span>We invite authors to submit their papers under the tracks given below. Each track includes several topics listed below,  but is not necessarily limited to them.
                        <br><br></span>
                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style active" data-toggle="tab"
                                   href="#track1">TRACK 1 - ASD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track2">TRACK 2 - DM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track3">TRACK 3 - WI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track4">TRACK 4 - CE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track5">TRACK 5 - ML</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#track6">TRACK 6 - IND</a>
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
                                        <p style="color: #002060">Track Co-chairs</p>
                                        <div class="row text-center">
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Rashina Hoda</b><br>
                                                University of Auckland<br>
                                                New Zealand<br>
                                            </div>
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Ritu Sibal</b><br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Prof Sanjay Misra</b><br>
                                                Covenant University OTA<br>
                                                Nigeria
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #002060">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Agile Software Processes And Methodologies
                                            </li>
                                            <li class="list-group-item">Agile Approaches To Requirements Engineering
                                            </li>
                                            <li class="list-group-item">Testing In Agile Environment
                                            </li>
                                            <li class="list-group-item">Agile Project Management
                                            </li>
                                            <li class="list-group-item">Design and use of games in ASD
                                            </li>
                                            <li class="list-group-item">Agile Methodologies For web Development
                                            </li>
                                            <li class="list-group-item">Agile Methodologies For Developing Embedded Software
                                            </li>
                                            <li class="list-group-item">Design and architectural patterns as applicable to ASD 
                                            </li>
                                            <li class="list-group-item">Agile Model Driven Design
                                            </li>
                                            <li class="list-group-item">Agile Practices For Component Based Software Development
                                            </li>
                                            <li class="list-group-item">Tools And Techniques For Agile Development
                                            </li>
                                            <li class="list-group-item">Risk Assessment In Agile Environment
                                            </li>
                                            <li class="list-group-item">Estimation In Agile Software Development
                                            </li>
                                            <li class="list-group-item">Adopting Agile And Lean Practices In Large Projects
                                            </li>
                                            <li class="list-group-item">Software Metrics For Agile Projects, Agile Processes, Agile Teams
                                            </li>
                                            <li class="list-group-item">Agile Methods In Education, Pedagogy And Research
                                            </li>
                                            <li class="list-group-item">Application of agile in non software domains
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
                                        <p style="color: #002060">Track Co-chairs</p>
                                        <div class="row text-center">
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Prof Sumeet Dua</b><br>
                                                Louisiana Tech. University<br>
                                                United States of America<br>
                                            </div>
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Anand Gupta</b><br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                        </div>
                                        <br>
                                        <p style="color: #002060">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item">Data Interoperability In Emerging Applications
                                            </li>
                                            <li class="list-group-item">Metadata Management
                                            </li>
                                            <li class="list-group-item">Data Models And Frameworks For Big Data
                                            </li>
                                            <li class="list-group-item">Web Data Management
                                            </li>
                                            <li class="list-group-item">Mobile Data Management
                                            </li>
                                            <li class="list-group-item">Migration To Cloud And Integration Of Legacy Databases
                                            </li>
                                            <li class="list-group-item">Agile Data Management With No-SQL
                                            </li>
                                            <li class="list-group-item">Spatio-Temporal Databases
                                            </li>
                                            <li class="list-group-item">Distributed Databases
                                            </li>
                                            <li class="list-group-item">Adaptable Data Security
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
                                        <p style="color: #002060">Track Co-chairs</p>
                                        <div class="row text-center">
                                            <div class="col" style="color: #333; font-size: 18px">
                                               <b>Prof Pradeep Atrey</b><br>
                                               State University of New York<br>
                                               Albany, NY, USA
                                            </div>
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Sushama Nagpal</b><br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                           
                                        </div>
                                        <br>
                                        <p style="color: #002060">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Adaptive And Context-Aware Web Applications
                                            </li>
                                            <li class="list-group-item
">Collective Intelligence
                                            </li>
                                            <li class="list-group-item
">Ontology Discovery and Management
                                            </li>
                                            <li class="list-group-item
">Web Personalization
                                            </li>
                                            <li class="list-group-item
">Agent Based Web Systems
                                            </li>
                                            <li class="list-group-item
">Context Aware Recommender Systems
                                            </li>
                                            <li class="list-group-item
">Web Analytics
                                            </li>
                                            <li class="list-group-item
">Opinion Mining And Sentiment Analysis
                                            </li>
                                            <li class="list-group-item
">Social Network Analysis
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
                                        <p style="color: #002060">Track Co-chairs</p>
                                        <div class="row text-center">
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Ms Rashmi Dravid</b><br>
                                                University of Northampton<br>
                                                United Kingdom<br>
                                            </div>
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Pinaki Chakraborty</b><br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            
                                        </div>
                                        <br>
                                        <p style="color: #002060">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item
">Personalized And Adaptive E-Learning
                                            </li>
                                            <li class="list-group-item
">Mobile Technologies For Education
                                            </li>
                                            <li class="list-group-item text-capitalize
">Case Studies On Computer-Aided Education In developed And Developing Countries
                                            </li>
                                            <li class="list-group-item
 text-capitalize">Learning analytics
                                            </li>
                                            <li class="list-group-item text-capitalize
">Collaborative and social networks based learning approaches
                                            </li>
                                            <li class="list-group-item text-capitalize
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
                                        <p style="color: #002060">Track Co-chairs</p>
                                        <div class="row text-center">
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Raman Arora</b><br>
                                                John Hopkins University<br>
                                                United States of America<br>
                                            </div>
                                            <div class="col" style="color: #333; font-size: 18px">
                                                <b>Dr. Swati Aggarwal</b><br>
                                                Netaji Subhas Institute of Technology<br>
                                                India
                                            </div>
                                            
                                        </div>
                                        <br>
                                        <p style="color: #002060">Topics</p>
                                        <ul class="list-group">
                                            <li class="list-group-item text-capitalize">Rough, fuzzy and neuro computing
                                            </li>
                                            <li class="list-group-item text-capitalize">Cognitive systems
                                            </li>
                                            <li class="list-group-item text-capitalize">Deep learning applications
                                            </li>
                                            <li class="list-group-item text-capitalize">ML driven adaptive applications
                                            </li>
                                            <li class="list-group-item text-capitalize">Evolutionary and nature inspired techniques
                                            </li>
                                            <li class="list-group-item text-capitalize">Multi-lingual knowledge Acquisition
                                            </li>
                                            <li class="list-group-item text-capitalize">Adaptive Natural Language Processing
                                            </li>
                                            <li class="list-group-item text-capitalize">Ontology engineering and applications
                                            </li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane fade" id="track6" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                    <br>
                                    <h3 style="padding-bottom: 10px; color:#177731;"> Industry Track</h3>
                                    <div>
                                        <p style="color: #002060">
                                          The Industry Track aims at bridging the gap between academia and industry. We invite short papers of 4-8 pages on real-life case studies, experience on state-of-the-art technologies and work-in-progress in the industry. 
                                        </p>
                                        
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
    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "block");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`
    <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
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
                                    PUBLICATION</a>
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
                                        <span style="color: black; font-size: 14pt;">We welcome full-length paper submissions of 12-14 pages in the CCIS one-column page format. Short papers of 6-8 pages will also be considered.</span>
                                        <br><br><span style="color: black; font-size: 14pt;">Submissions will be accepted through <a
                                                href="https://ocs.springer.com/ocs/" target="_blank"> Springer Online Conference Service (OCS).</a>
                            </span><br><br>
                                          <span style="color: black; font-size: 14pt;">Submissions should strictly adhere to the <a href="http://www.springer.com/series/7899" target="_blank"> Springer Communications in Computer and Information Science (CCIS) </a> format.</span> <br>
                                                 <br><span style="color: black; font-size: 14pt;">Due to the <b>Double Blind Review Process</b>, please do not include the names​ or affiliations of the authors​ on the first page of the paper​. 
No where in the paper ​should the ​identities of the authors be revealed. When referring to one's own work, use the third person​.</span> <br>
                                                 <br>
                            <span style="color: black; font-size: 14pt;">For the <b>Industry Track</b>, we invite papers of minimum 4 pages, describing ongoing developments / technology insights in the industry and works in progress. Accepted papers in this category will be published in the Conference Proceedings with ISBN. </span>
                                        <br><br>
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
                                            <span style="color: black; font-size: 14pt;">Please do not submit work that has been already published or accepted for publication or is currently under review for other conferences or journals.</span><br/><br>
                                             <span style="color: black; font-size: 14pt;"><b>All manuscripts submitted to TEAMC 2018 will be subjected to plagiarism detection software to ensure originality. Authors are strongly advised to perform a plagiarism check at their own end before submitting their paper. The following Research Gate link provides useful guidelines on checking plagiarism freely: <a href="https://www.researchgate.net/post/How_to_check_for_the_plagiarism_of_a_document_freely" target="_blank">Click Here</a></b>
</span><br/><br>
                                              <span style="color: black; font-size: 14pt;">Qualifying papers will undergo a double blind review process by at least three reviewers.</span><br/><br>
                                               <span style="color: black; font-size: 14pt;">Please ensure that your manuscript clearly brings forth the innovative ideas in it, the results obtained and relevance of the contribution.</span><br/><br>
                                                <span style="color: black; font-size: 14pt;">Accepted papers must be presented at the conference.</span>
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
                                            Please register at this <a href="#">Registration Link(to be opened soon).</a>
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
                                <div class="col-md-12">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <h3 style="padding-bottom: 10px; color:#177731;"> Publication</h3>
                                        <span style="color: black; font-size: 14pt;">
                                       
                                           The best among peer reviewed and accepted papers (full length and short papers) of the conference will be published in the prestigious Springer Communication in Computer and Information Science (CCIS) book series, subject to approval - conditional acceptance received.
                                            <br><b>The Springer CCIS is in the list of UGC approved Journals.</b><br>The remaining accepted papers will be published in the Conference Proceedings with ISBN.  
<br>We will share ongoing developments on publishing extended versions of accepted papers in reputed journals.
                            </span><br><br>
                            <h3 style="padding-bottom: 10px; color:#177731;"> About CCIS</h3>
                                        <span style="color: black; font-size: 14pt;">
                                           The CCIS book series is abstracted/indexed in DBLP, Google Scholar, EI-Compendex, Mathematical Reviews, SCImago, Scopus. CCIS is a LNCS Satellite series. 
The H-Index of CCIS is 29.<br>
For more details on Springer CCIS Series, see <br><a target="_blank" href="http://www.springer.com/series/7899"> http://www.springer.com/series/7899</a>
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

    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`            
    <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
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
                                            Please register at this <a href="https://www.imsnsit.org/imsnsit/elearn_fdpconference_new.php" target="_blank">Registration Link.</a>
<br/><br/>
<span style="color: black; font-size: 14pt;">Every accepted article (full paper/ short paper) to appear in the proceedings should be registered by at least one author by paying the full registration fee applicable.</span><br> <br>
<span style="color: black; font-size: 14pt;">If an author has got more than one accepted papers, each paper has to be registered separately.</span><br> <br>
<span style="color: black; font-size: 14pt;">Each article will be assigned a Paper ID upon submission which must be quoted at the time of registration.</span><br>
<br>
<span style="color: black; font-size: 14pt;">The conference registration covers conference proceedings, conference kit, admission to all workshops, coffee breaks, and lunch. The registration doesn’t cover accommodation, travel costs etc.

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
                                        <span style="color: black; font-size: 14pt;">Only registered authors who have paid the full registration fees will be provided VISA  letters upon request.</span>
                                         <br><br>
                                         <span style="color: black; font-size: 14pt;">After completing the registration process, please send your request for VISA letter, quoting the registered paper ID, the paper title, the complete list of authors and the track under which the paper is accepted to teamc2018@nsit.ac.in.</span>
<br/><br/>
<span style="color: black; font-size: 14pt;"> The registration fee will be refunded if VISA is denied by the embassy.

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
                                            <th scope="row">Students/Others</th>
                                            <td>
                                                Rs 4000
                                            </td>
                                            <td>
                                                Rs 5000
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <span style="color: red;text-align: left">CSI, ACM, IEEE & ISTE Members will be given a discount of 20%.</span>
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
                                            <th scope="row">Authors/Delegates from Developing countries</th>
                                            <td>
                                                $100
                                            </td>
                                            <td>
                                                $100
                                            </td>
                                        </tr>
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
                                            <th scope="row">Students/Others</th>
                                            <td>
                                                $250
                                            </td>
                                            <td>
                                                $300
                                            </td>
                                        </tr>
                                        
                                        </tbody>
                                    </table>
                                
                               <span style="color: red;text-align: left">CSI, ACM, IEEE & ISTE Members will be given a discount of 20%.</span><br><br>
                               <span style="color: blue;text-align: left">For foreign registrations the fee amount may be transferred to the following bank account:</span><br><br>
                                    <table>
                                        <tr>
                                            <th scope="row">
                                                Nomenclature of the Account:&nbsp;&nbsp;&nbsp;
                                            </th>
                                            <td>
                                                Director, NSIT &nbsp;&nbsp;&nbsp;
                                                Cultural Activity A/C
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Account No.:
                                            </th>
                                            <td>
                                                133010100022197
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                IFSC:
                                            </th>
                                            <td>
                                                ANDB0001330
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Bank Name:
                                            </th>
                                            <td>
                                                Andhra Bank
                                            </td>
                                        </tr>
                                    </table>
                               
                               
                           </div> </div>
                        </div>
                        <div class="tab-pane fade" id="studentRegistrationTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Students must submit a scanned copy of their Institute identity card at the time of registration. They must produce their original identity card upon arrival.
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

  $('#reg2button').click(function () {
    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`            
    <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
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
                                            Please register at this <a href="https://www.imsnsit.org/imsnsit/elearn_fdpconference_new.php" target="_blank">Registration Link(to be opened soon).</a>
<br/><br/>
<span style="color: black; font-size: 14pt;">Every accepted article (full paper/ short paper) to appear in the proceedings should be registered by at least one author by paying the full registration fee applicable.</span><br> <br>
<span style="color: black; font-size: 14pt;">If an author has got more than one accepted papers, each paper has to be registered separately.</span><br> <br>
<span style="color: black; font-size: 14pt;">Each article will be assigned a Paper ID upon submission which must be quoted at the time of registration.</span><br>
<br>
<span style="color: black; font-size: 14pt;">The conference registration covers conference proceedings, conference kit, admission to all workshops, coffee breaks, and lunch. The registration doesn’t cover accommodation, travel costs etc

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
                                        <span style="color: black; font-size: 14pt;">Only registered authors who have paid the full registration fees will be provided VISA  letters upon request.</span>
                                         <br><br>
                                         <span style="color: black; font-size: 14pt;">After completing the registration process, please send your request for VISA letter, quoting the registered paper ID, the paper title, the complete list of authors and the track under which the paper is accepted to teamc2018@nsit.ac.in.</span>
<br/><br/>
<span style="color: black; font-size: 14pt;"> The registration fee will be refunded if VISA is denied by the embassy.

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

                               <span style="color: red">* CSI, ACM, IEEE & ISTE Members will be given a discount of 20%.</span>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="studentRegistrationTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12 col-md-10">
                                    <div class="overview-description"
                                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                                        <span style="color: black; font-size: 14pt;"><br></span>
                                        <span style="color: black; font-size: 14pt;">
                                            Students must submit a scanned copy of their Institute identity card at the time of registration. They must produce their original identity card upon arrival.
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
    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white;"><div style="padding: 30px; font-size: 14pt; color: black">` +
      `<h1 style="font-family: 'Roboto Condensed', sans-serif;color:#555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;">
                       PROGRAM</h1>

                    <div class="overview-description"
                         style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                        
                        </div>
                        
                        <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style active" data-toggle="tab"
                                   href="#speakers">SPEAKERS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#events">EVENTS</a>
                            </li>
                            
                        </ul>
                    </div>

                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="speakers" role="tabpanel">
                        <br/>
                        <ul class="list-unstyled">
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/rashmi.jpg" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Ms. Rashmi Dravid</h4>
                              <span class="bio">Ms. Rashmi Dravid is the Head of Partnership Programmes at University of Northampton. 
                                She is  an experienced senior academic with particular experience of quality assurance and enhancement,  collaborative and International partnerships and outreach besides subject discipline of computer networks.
                              </span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/Anil_Headshot_2017.jpg" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Dr. Anil Goel</h4>
                              <span class="bio">Anil K Goel is a Vice President at SAP where he works with the globally distributed SAP HANA Platform
                                and Database engineering team to drive forward looking architectures, vision, strategy and execution
                                for several SAP data management products and technologies. In particular, Anil heads global software
                                development for SAP HANA Tooling, SAP IQ for SAP HANA dynamic tiering, and SAP Vora persistency
                                technologies. He oversees collaborative research and internship programs with universities in Canada.
                                His interests include database system architecture, in-memory and very large scale distributed
                                computing, self-management of software systems and cost modelling.
                                Anil earned a PhD in CS from the University of Waterloo. He also holds M. Tech. (CS) from Indian
                                Institute of Technology, Delhi and B.E. (Electronics and Communications Engineering) from University of
                                Delhi.</span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/opverma.jpg" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. O.P. Verma</h4>
                              <span class="bio">Currently Prof. Verma is Principal of GB Pant Govt. Engineering College. Prior to this, he was head at Department of CSE, DTU, Delhi. He has a wide professional experience of 25 years along with distinguished research activities. His current research area includes applied of computing evolutionary algorithms and many more.
                                He has successfully completed various academic and administrative positions. He was chairman for b-tech admissions committe from 2011-14 and 2016-17. He has also successfully established campus wide area network (wires and Wi-Fi) in DTU. Additionally, he is a member of various goverment projects and committies. 
                              </span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/manusood.jpg" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. Manu Sood</h4>
                              <span class="bio">
                                Prof. Manu Sood is Professor & Chairman,
                                Department of Computer Science & Director, UIIT. 
                                He has completed his B.E. (Electronics & Telecommunications) from Government Engineering College, Jabalpur, M.P. (Rani Durgawati University, Jabalpur) in 1988. Post Graduate Diploma in Computers Management (Software) in 1991. M. Tech. (INFORMATION SYSTEMS) from Division of Computer Engineering, Netaji Subhas Institute of Technology, Dwarka, New Delhi in 2001 with Delhi Chief Minister’s Gold Medal. 
                                Ph.D. from the Division of Computer Engineering, Netaji Subhas Institute of Technology, Dwarka, New Delhi under the Faculty of Technology, Delhi University, Delhi, the title being “Requirements Model: A Basis for Computation of Metrics and Derivation of Class Diagram and Test Cases” in February 2008
                              </span>
                            </div>
                          </li>
                          <br/><br/>
                          
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/sangeeta.png" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Ms. Sangeeta Gulati</h4>
                              <span class="bio">Ms Sangeeta Gulati is Head of Mathematics Department, Sanskriti School, New
                                Delhi. A teacher of mathematics for the past twenty-six years, she has been
                                teaching students in grade 11 and 12. Awardee of ‘National Award for using ICT
                                for Innovation in Teaching, 2016’ and a Google Education Certified Innovator,
                                Sangeeta has been actively involved in exploring the use of technology in
                                teaching and learning of mathematics and has contributed to several
                                Professional Development and Technology Orientation Program all over India.
                                She conducts workshop on GeoGebra, Desmos, Google Apps and Online
                                Resources.
                                Sangeeta is a resource person with NCERT in developing ICT material and has
                                developed video lessons for class XI & XII with Central Institute of Educational
                                Technology, NCERT.
                                An Edmodo Certified Trainer and Global Teacher Accreditation (British
                                Council) award winner Sangeeta was awarded Fulbright Distinguished Award
                                in Teaching in 2011. The wikispace : dynamath.wikispaces.com was started as
                                part of her fellowship and is a great resource for math teachers.</span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/kkbiswas.png" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. K.K. Biswas</h4>
                              <span class="bio">
                              He was Former Professor, IIT Delhi, Machine Learning, Computer Vision
Research interest is Image and Video Processing, Machine Learning with applications in activity recognition and Bio-informatics

Also has interest in Software Engineering, where he is trying to discover ambiguities in Requirements Engineering documents.
                              </span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/pradipsarkar.png" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. Pradip Sarkar</h4>
                              <span class="bio">
                              Professor Pradip Kumar Sarkar graduated in Civil Engineering from Bengal Engineering
College, Calcutta University in 1974, presently known as Indian Institute of Science and
Technolgy(IEST) and completed his Post Graduation in Town Planning with specialization
in Traffic and Transportation Planning from the School of Planning and Architecture in
1977. He was awarded Commonwealth Scholarship to pursue higher studies in Transport
Engineering at Newcastle Upon Tyne, UK in 1981. He was awarded Ph.D. in Planning in
2002 from School of Planning and Architecture, New Delhi. He was in UK on
Commonwealth fellowship Programme at Newcastle University in 2013. He is presently
Professor and Heading the Department of Transport Planning and is engaged in teaching
and research and consulting work in the area of Transport Planning in the School of
Planning and Architecture. He has been actively involved as an expert member as well as
Advisor on various consultancy projects in areas of Transport Planning and Design, Urban
Planning, Environment Planning and Highway Design Study, Feasibility Studies and Road
Safety Auditing.
                              </span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/sanjaymisra.png" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. Sanjay Misra</h4>
                              <span class="bio">Sanjay Misra is full Professor of Computer Engineering at Covenant University, Ota, Nigeria. He has 25 years of wide experience in academic administration and researches in various universities in Asia, Europe and Africa. He is Ph.d. in Information and Know. Engg (Software Engineering) from University of Alcala, Spain and M.Tech.(Software Engineering) from Motilal Nehru National Institute of Technology, India.He has author/coauthor in around 300 papers- (with colleagues from nearly 30 countries) and majority the publications are in ISI Web of Sciences and got several awards for outstanding publications e.g. Institute of Engineering and Technology(IET), United Kingdom awarded him ‘2014 IET Software Premium Award’  for Best Paper published in last two years. </span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/pktulsi.jpg" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. P.K. Tulsi</h4>
                              <span class="bio">
                              Prof. (Dr.) PK Tulsi is working in the Department of Education and Educational
Management of National Institute of Technical Teachers’ Training and Research
since 1986. She was the Director Incharge of the institute from January to August,
2017; Dean, Research &amp; Development from June 2013-June 2016; headed the
Department of Education &amp; Educational Management from 2004 to 2011 and
remained Faculty Incharge of Distance Learning Cell from 1996 to 2004. She is a
recipient of Best Faculty Award from ISTE Chapter in 2014. Her major
responsibilities as faculty include education &amp; training of teachers working in
technical institutions, developing instructional material, undertaking research in the
area of technical education and providing customized services to institutions and
organizations.
                              </span>
                            </div>
                          </li>
                          <br/><br/>
                          <li class="media">
                            <img class="d-flex mr-3 align-self-center" src="images/bchandra.jpg" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. B. Chandra</h4>
                              <span class="bio">
                              B.Chandra is currently an Adjunct Professor with the School of IT at the Indian Institute of
Technology, Delhi. She has been with the Computer Science group of the Department of
Mathematics, Indian Institute of Technology, Delhi for three decades and now she is a
machine Learning expert in a multi national company. She was the Department Chair from
2004 to 2007. Her specialization is in the area of Data Mining, Neural Networks, Machine
Learning and feature selection for Gene Expression data. She has been a visiting professor
for a year at the University of Pittsburgh, USA and Penn State University, USA. She has also
been a visiting scientist at NIST, Gaithersburg, Maryland during Summer 2012. She has
published a large number of research papers in the area of Machine Learning, Classification,
Clustering and Deep Learning in International Journals of repute. She has been the chairman
of many sessions in Data Mining and Machine Learning in international conferences
organized in USA, UK, Canada, Singapore and France. She has been a principal investigator
of many sponsored research projects in the area of Clustering of Gene Expression Data,
Pattern classification, Feature Selection and consultancy projects with Stock Market
Company and Twitter Company.
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-pane fade" id="events" role="tabpanel">
                      <br>
                      <br>
                      <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">TEAMC 2018 TENTATIVE PROGRAM,  26-28 MARCH, 2018</h4>
                      <br>
                        <img src="images/prog1.png" style="width:100%">
                        <img src="images/prog2.png" style="width:100%">
                        <img src="images/prog3.png" style="width:100%">
                      </div>
                        
                    </div>

                        
                        
                        
                        </div></div>`);
  });

  $('#committeeButton').click(function () {
    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`<div style="background-color: white;width: 100%; ">


                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
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
                                <h3 style="color:#177731">Honorary Conference Chair</h3>
                                <p>Prof. J.P. Saini, Director NSIT</p> 
                                <br>
                                <h3 style="color:#177731"> Advisory Board Members</h3>` +
      `<ul class="list-group">` +
      `<li class="list-group-item">Prof S.S. Mantha, All India Council for Technical Education</li>`
      + `<li class="list-group-item">Prof Sumeet Dua, Louisiana Tech University, USA</li>`
      + `<li class="list-group-item">Prof Anshul Kumar, Indian Institute of Technology-Delhi</li>` +
      `<li class="list-group-item">Dr Anil Goel, Hana Data Platform, SAP, USA</li>`
      + `<li class="list-group-item">Prof K.K.Biswas, Indraprastha Institute of Information Technology, New Delhi</li>`
      + `<li class="list-group-item">Prof Anjali Agarwal, Concordia University, Canada</li>`
      + '<li class="list-group-item">Prof Yenumula B. Reddy, Grambling State University, LA, USA</li>' + `<li class="list-group-item">Prof Saroj Kaushik, Indian Institute of Technology Delhi</li>` + '<li class="list-group-item">Prof M. N. Hoda, BVICAM, New Delhi</li>'
      + '<li class="list-group-item">Prof M. P. Pooniya, All India Council for Technical Education</li>' + '<li class="list-group-item">Prof P. C. Saxena, Jawaharlal Nehru University</li>'
      +
      `</ul>                                                                    
                                </div>
                              </div>
                            </div>
                       
                         <div class="tab-pane fade" id="techCom" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                  <br>
                                  <h3 style="color:#177731">Members</h3>
                                  
                                  <ul class="list-group">
                                  
                                <li class="list-group-item">Animesh Mishra, Intel Corp., USA</li>
                                <li class="list-group-item">Rajiv Jain, Wells Fargo, USA</li>
                                <li class="list-group-item">Suraj Ajit, University of Northampton, UK</li>
                                <li class="list-group-item">Krishnan Seetharaman, University of Massachusetts Lowell, USA</li>
                                <li class="list-group-item">Mu Mu, University of Northampton, UK</li>
                                <li class="list-group-item">M.P.S. Bhatia, NSIT</li>
                                <li class="list-group-item">Priti Bansal, NSIT</li>
                                <li class="list-group-item">Himanshu Bhatnagar, HB Software Solutions, USA</li>
                                <li class="list-group-item">Bizender Kumar, NSIT</li>
                                <li class="list-group-item">Satbir Jain, NSIT</li>
                                <li class="list-group-item">Nand Kumar, Manav Rachna University, India</li>
                                <li class="list-group-item">Rajesh Purohit, J.N.V. University, Jodhpur</li>
                                <li class="list-group-item">Amritanjali, B.I.T.S. MESRA, Ranchi</li>
                                <li class="list-group-item">Priyank Thakkar, Nirma University</li>
                                <li class="list-group-item  text-capitalize">Jeyasekar A, SRM University, India</li>
                                <li class="list-group-item  text-capitalize">Parkavi A, India</li>
                                <li class="list-group-item  text-capitalize">jafar ababneh, the world islamic science & education university, Jordan</li>
                                <li class="list-group-item  text-capitalize">Anuja Arora, India</li>
                                <li class="list-group-item  text-capitalize">Tanvi Arora, College of Engineering, Chandigarh college of engineering, India</li>
                                <li class="list-group-item  text-capitalize">Chamundeswari Arumugam, SSN college of engg, India</li>
                                <li class="list-group-item  text-capitalize">Dilum Bandara, University of Moratuwa, Sri Lanka</li>
                                <li class="list-group-item  text-capitalize">Poonam Bansal, MSIT, India</li>
                                <li class="list-group-item  text-capitalize">Roli Bansal, University of Delhi, Keshav MV, India</li>
                                <li class="list-group-item  text-capitalize">Shivani Batra, G D Goenka university, India</li>
                                <li class="list-group-item  text-capitalize">Geetika Bhatia, India</li>
                                <li class="list-group-item  text-capitalize">Ashutosh Bhatia, BITS, India</li>
                                <li class="list-group-item  text-capitalize">Rakesh Mohan Bhatt, HNB Garhwal University, India</li>
                                <li class="list-group-item  text-capitalize">Vandana bhattacharjee, Birla Institute Of Technology, India</li>
                                <li class="list-group-item  text-capitalize">Kanad Biswas, IIIT-D, India</li>
                                <li class="list-group-item  text-capitalize">Deepak Chahal, Jagan Institute of Management Studies, India</li>
                                <li class="list-group-item  text-capitalize">Bindu Chandna, Mitre, USA</li>
                                <li class="list-group-item  text-capitalize">Ajay Chaudhary, IIT Roorkee, India</li>
                                <li class="list-group-item  text-capitalize">Naresh Chauhan, YMCAUST Faridabad, India</li>
                                <li class="list-group-item  text-capitalize">Rajender Chhillar, MDU Rohtak, India</li>
                                <li class="list-group-item  text-capitalize">Tapan Das, VIT University, India</li>
                                <li class="list-group-item  text-capitalize">Suma Dawn, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">Amita Dev, Ambedkar institute of technology, India</li>
                                <li class="list-group-item  text-capitalize">Dhiraj Dhane, Indian Institute of Information Technology Pune, India</li>
                                <li class="list-group-item  text-capitalize">Sanjay K Dhurandher, NSIT, India</li>
                                <li class="list-group-item  text-capitalize">Rashmi Dravid, University of Northampton, United Kingdom</li>
                                <li class="list-group-item  text-capitalize">Amit Dua, BITS Pilani, India</li>
                                <li class="list-group-item  text-capitalize">Poovammal Eswaran, SRM University, India</li>
                                <li class="list-group-item  text-capitalize">Subha Fernando, University of Moratuwa, Sri Lanka</li>
                                <li class="list-group-item  text-capitalize">Rudolf Fleischer, GUtech, Oman</li>
                                <li class="list-group-item  text-capitalize">goldie gabrani, BML Munjal University, India</li>
                                <li class="list-group-item  text-capitalize">Charu Gandhi, Jaypee Institute of Information Technology, India</li>
                                <li class="list-group-item  text-capitalize">T V Gopal, Anna University, India</li>
                                <li class="list-group-item  text-capitalize">Mukta Goyal, JIIT,Noida, India</li>
                                <li class="list-group-item  text-capitalize">Namita Gupta, MAIT, India</li>
                                <li class="list-group-item  text-capitalize">Bhavna Gupta, Keshav Mahavidyalaya, DU, India</li>
                                <li class="list-group-item  text-capitalize">Manu Gupta, SEETA, India</li>
                                <li class="list-group-item  text-capitalize">Daya Gupta, DTU, India</li>
                                <li class="list-group-item  text-capitalize">nishi gupta, India</li>
                                <li class="list-group-item  text-capitalize">Sanjay H A, India</li>
                                <li class="list-group-item  text-capitalize">Rashina Hoda, The University of Auckland, New Zealand</li>
                                <li class="list-group-item  text-capitalize">Syed Akhter Hossain, Daffodil International University, Bangladesh</li>
                                <li class="list-group-item  text-capitalize">Chittaranjan Hota, BITS, Pilani Hyderabad Campus, India</li>
                                <li class="list-group-item  text-capitalize">Anurag Jain, GGSIP University, India</li>
                                <li class="list-group-item  text-capitalize">Shikha Jain, Jiit, India</li>
                                <li class="list-group-item  text-capitalize">Sanjay Jain</li>
                                <li class="list-group-item  text-capitalize">Vishal Jain, BVICAM, India</li>
                                <li class="list-group-item  text-capitalize">Amita Jain, AIACTR DELHI, India</li>
                                <li class="list-group-item  text-capitalize">Jagadish Kallimani, MSRIT, India</li>
                                <li class="list-group-item  text-capitalize">Triantafyllos Kanakis, University of Northampton, United Kingdom</li>
                                <li class="list-group-item  text-capitalize">Rahul Katarya, DTU, India</li>
                                <li class="list-group-item  text-capitalize">Parmeet Kaur, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">Gagandeep Kaur, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">Vidhi Khanduja, NSIT, India</li>
                                <li class="list-group-item  text-capitalize">Payal Khurana Batra, JIIT, Noida, India</li>
                                <li class="list-group-item  text-capitalize">Haribabu Kotakula, BITS Pilani, India</li>
                                <li class="list-group-item  text-capitalize">Rama Krishna Challa, NITTTR, India</li>
                                <li class="list-group-item  text-capitalize">Vallidevi Krishnamurthy, SSN College of Engineering, India</li>
                                <li class="list-group-item  text-capitalize">Naveen Kumar, University of Delhi, India</li>
                                <li class="list-group-item  text-capitalize">Prakash Kumar, Jaypee Institute of Info. Technology , India</li>
                                <li class="list-group-item  text-capitalize">Kuldeep Kumar, BITS Pilani, India</li>
                                <li class="list-group-item  text-capitalize">Sandeep Kumar, IIT Roorkee, India</li>
                                <li class="list-group-item  text-capitalize">Sushil Kumar, Rajdhani College, University of Delhi, India</li>
                                <li class="list-group-item  text-capitalize">Akshi Kumar, DTU, India</li>
                                <li class="list-group-item  text-capitalize">Viraj Kumar, PES, Chandigarh, India</li>
                                <li class="list-group-item  text-capitalize">anil kumar, Samsung, India</li>
                                <li class="list-group-item  text-capitalize">Chandan Kundu, IntelliH Analytics & Software Pvt. Ltd. , India</li>
                                <li class="list-group-item  text-capitalize">Ramesh Loganathan, IIIT Hyderabad, India</li>
                                <li class="list-group-item  text-capitalize">Anusha M, THRC, India</li>
                                <li class="list-group-item  text-capitalize">Vikas Maheshkar, NSIT, India</li>
                                <li class="list-group-item  text-capitalize">D. Malathi, SRM University, India</li>
                                <li class="list-group-item  text-capitalize">Shikha Mehta, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">Sangeeta Mittal, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">A K Mohapatra, IGDTUW, India</li>
                                <li class="list-group-item  text-capitalize">Michael Opoku Agyeman, University of Northampton, United Kingdom</li>
                                <li class="list-group-item  text-capitalize">Payal Pahwa, BPIT, India</li>
                                <li class="list-group-item  text-capitalize">Kavita Pandey, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">Upasana Pandey, IMS Engineering College, India</li>
                                <li class="list-group-item  text-capitalize">Raghu Vamsi Potukuchi, Jaypee Institute of Information Technology, India</li>
                                <li class="list-group-item  text-capitalize">Deepika Prakash, Central University of Rajasthan, India</li>
                                <li class="list-group-item  text-capitalize">Rajesh Purohit, JNV University, India</li>
                                <li class="list-group-item  text-capitalize">Shashank Pushkar, BIT, Mesra, India</li>
                                <li class="list-group-item  text-capitalize">Geeta Rani, GD Goenka University, India</li>
                                <li class="list-group-item  text-capitalize">Hemant Rathore, BITS Pilani, India</li>
                                <li class="list-group-item  text-capitalize">SRN Reddy Reddy, IGDTU, India</li>
                                <li class="list-group-item  text-capitalize">Nicolas Rougier, INRIA, France</li>
                                <li class="list-group-item  text-capitalize">Shelly Sachdeva, JIIT, India</li>
                                <li class="list-group-item  text-capitalize">anju saha, ggsipu, India</li>
                                <li class="list-group-item  text-capitalize">Neetu Sardana, Jaypee Institute of Information technology, India</li>
                                <li class="list-group-item  text-capitalize">Vikas saxena, JIIT,Noida, India</li>
                                <li class="list-group-item  text-capitalize">Kapil Sharma, Delhi Technological University, India</li>
                                <li class="list-group-item  text-capitalize">Arun Sharma, IGDTUW, India</li>
                                <li class="list-group-item  text-capitalize">Chayanika Sharma, NSIT, India</li>
                                <li class="list-group-item  text-capitalize">Richa Sharma, India</li>
                                <li class="list-group-item  text-capitalize">Mahendra Pratap Singh, National Institute of Technology Karnataka, India</li>
                                <li class="list-group-item  text-capitalize">Krishna Singh, Amity University, Noida, India</li>
                                <li class="list-group-item  text-capitalize">Anurag Singh, NIT Delhi India, India</li>
                                <li class="list-group-item  text-capitalize">Yudhvir Singh, India</li>
                                <li class="list-group-item  text-capitalize">Hardeep Singh, India</li>
                                <li class="list-group-item  text-capitalize">Indu Singh, Delhi Technological University, Delhi, India</li>
                                <li class="list-group-item  text-capitalize">Poonam Singh, NITTR, India</li>
                                <li class="list-group-item  text-capitalize">Amitoj Singh, India</li>
                                <li class="list-group-item  text-capitalize">Amit Singh, Guru Gobind Singh Indraprastha University, India</li>
                                <li class="list-group-item  text-capitalize">Anita Singhrova, DCRUST,  Murthal , India</li>
                                <li class="list-group-item  text-capitalize">Arun solanki, Gautam Buddha University, India</li>
                                <li class="list-group-item  text-capitalize">Durvasula Somayajulu, National Institute of Technology, Warangal, India</li>
                                <li class="list-group-item  text-capitalize">Manu Sood, Himachal Pradesh University, Shimla, India</li>
                                <li class="list-group-item  text-capitalize">Sangeeta Srivastava, BCAS, India</li>
                                <li class="list-group-item  text-capitalize">Sridhar Subra, SRM University, India</li>
                                <li class="list-group-item  text-capitalize">Bharti Suri, GGSIPU, India</li>
                                <li class="list-group-item  text-capitalize">JayPrakash T L, IITB, India</li>
                                <li class="list-group-item  text-capitalize">Mirnalinee T T, SSN College of Engineering, India</li>
                                <li class="list-group-item  text-capitalize">Hardeo Kumar Thakur, Manav Rachna University, India</li>
                                <li class="list-group-item  text-capitalize">Anjali Thukral, Keshav Mahavidyalaya, DU, India</li>
                                <li class="list-group-item  text-capitalize">op verma, DTU, India</li>
                                <li class="list-group-item  text-capitalize">Deepali Virmani, BPIT, India</li>
                                <li class="list-group-item  text-capitalize">Bimlesh Wadhwa, National University of Singapore, Singapore</li>
                                <li class="list-group-item  text-capitalize">Yanghua Xiao, Fudan University, China</li>
                                <li class="list-group-item  text-capitalize">Rama Krishnan, K.L. University, Guntur</li>
                                <li class="list-group-item  text-capitalize">Maitreyee Dutta, N.I.T.T.R. Chandigarh</li>
                                <li class="list-group-item  text-capitalize">Shruti Garg, B.I.T.S. MESRA, Ranchi</li>
                                <li class="list-group-item  text-capitalize">Savita Gupta, UIET, Punjab Univ.</li>
                                <li class="list-group-item  text-capitalize">Latesh Mallick, Raisoni College of Engineering, Nagpur</li>
                                  </ul>
                                  
                                  
                                </div>
                            </div>
                        </div>
                       
                        <div class="tab-pane fade" id="orgCom" role="tabpanel">
                            <div class="row justify-content-center" style="padding-top: 20px;">
                               
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/spc/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Shampa-Chakraverty.png" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Shampa Chakraverty, NSIT</h5>
                                          <p class="card-text" style="margin:0">General Chair</p>
                                          <p class="card-text">Panel Discussion Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/mps/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/mps.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">M. P. S. Bhatia, NSIT</h5>
                                          <p class="card-text" style="margin:0">Organizing Co-Chairs</p>
                                          <p class="card-text">Sponsorship Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/rts/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Ritu-Sibal.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Ritu Sibal, NSIT</h5>
                                          <p class="card-text">Organizing Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="https://in.linkedin.com/in/anilkgoel" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Anil-Kumar-Goel.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Anil Kumar Goel, SAP, USA</h5>
                                          <p class="card-text">TPC Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/sas/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Sangeeta-Sabharwal.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Sangeeta Sabharwal, NSIT</h5>
                                          <p class="card-text">TPC Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/ag/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Anand-Gupta.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Anand Gupta</h5>
                                          <p class="card-text">Publication Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/pnc/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Pinaki-Chakraborty.png" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Pinaki Chakraborty</h5>
                                          <p class="card-text">Design Contest Co-Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://seeta.in/j/team.html" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Manusheel-Gupta.gif" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Manusheel Gupta</h5>
                                          <p class="card-text">Design Contest Co-Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/bks/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Bijendra-Kumar.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Bijender Kumar</h5>
                                          <p class="card-text">Workshop Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/stj/" class="card-link">                                   
                                        <img class="card-img-top" src="images/organising-committee/Satbir-Jain.png" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Satbir Jain</h5>
                                          <p class="card-text">Industry Liaison Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/rjk/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Rajeev-Kumar.png" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Rajeev Kumar</h5>
                                          <p class="card-text">Industry Liaison Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/sty/" class="card-link">                                   
                                        <img class="card-img-top" src="images/organising-committee/Savita-Yadav.png" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Savita Yadav</h5>
                                          <p class="card-text">Publicity Co-chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/pnr/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Poonam%20Rani.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Poonam Rani</h5>
                                          <p class="card-text">Publicity Co-chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="" class="card-link">                                   
                                        <img class="card-img-top" src="http://via.placeholder.com/350x450?text=V.+P.+Ranjan" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">V.P. Ranjan</h5>
                                          <p class="card-text">Finance Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/kss/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Khushil-Saini.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Khushil Saini</h5>
                                          <p class="card-text">Website Chair</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="http://www.nsit.ac.in/faculty/ptk/" class="card-link">                                   
                                        <img class="card-img-top" src="./images/organising-committee/Preeti-Kaur.jpg" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Preeti Kaur</h5>
                                          <p class="card-text">Hospitality Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                                <div class="col-sm-10">
                                  <div class="card-deck">
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="" class="card-link">                                   
                                        <img class="card-img-top" src="http://via.placeholder.com/350x450?text=Aastha+Singh" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Aastha Singh </h5>
                                          <p class="card-text">Hospitality Co-Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="card mb-4 border-primary text-center">
                                      <a target="_blank" href="" class="card-link">                                   
                                        <img class="card-img-top" src="http://via.placeholder.com/350x450?text=Anil+Arora" alt="Card image cap">
                                        <div class="card-body">
                                          <h5 class="card-title">Anil Arora</h5>
                                          <p class="card-text">Internal Arrangements Chairs</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>                                
                                </div>
                                
                            </div>
                        </div>
                      
                     
                     

                </div>
            </div>`);
  });

  $('#sponsorButton').click(function () {
    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    mainWrapper.empty();
    mainWrapper.append(`
                <div style="background-color: white; ">

                <div style="padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                        SPONSORSHIP</h1>
                        
                        
                    <div style="padding: 0; width: 100%">
                        <ul class="nav nav-tabs nav-justified " role="tablist">
                            
                            <li class="nav-item">

                                <a class="nav-link nav-style a-style active" data-toggle="tab" href="#sponsTab">SPONSORSHIP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#brochureTab">BROCHURE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-style a-style" data-toggle="tab" href="#packagesTab">PACKAGES</a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                      
                        <div class="tab-pane fade show active" id="sponsTab" role="tabpanel">
                          <div class="row justify-content-center">
                            <div class="col-sm-12">
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
Shampa Chakraverty, General Chair<br/><br/>
M.P.S. Bhatia, Sponsorship Chair<br/><br/>
Satbir Jain and Rajeev Kumar, Industry Liaison Chairs<br/><br/>
V.P. Ranjan, Finance Chair<br/><br/>
                        </span>
                    </div>

                    

                </div>                                                   
                            </div>
                          </div>

                       
                        <div class="tab-pane fade" id="brochureTab" role="tabpanel">
                          <div class="row justify-content-center">
                            <div class="col-sm-12">
                              
                              <br>
                              <a href="https://drive.google.com/file/d/0Byw1iy4lyiGYdnJyUkZGSDVCeVk/view?usp=drivesdk" target="_blank">
                        Please click here for the Brochure.</a>
                              
                            </div>
                          </div>
                        </div>
                        
                    
                     
                       
                        <div class="tab-pane fade" id="packagesTab" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-sm-12">
                                <br>
                                <a href="http://www.nsit.ac.in/static/images/TEAMC2018/sponsorship%20packages%20without%20items.pdf" target="_blank">
                                Please click here for the Packages.
                                </a>
                                </div>
                            </div>
                        </div>    
                        
                    <div>
                        
                    
            </div>
`);
  });

  $('#infoButton').click(function () {

    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");
    // AIzaSyDBqAJQ9d0sn9iRRrjJjjUtRbbAsBS-0uU
    mainWrapper.empty();
    mainWrapper.append(`
        <div style="background-color: white;width: 100%;">

                <div style="width: 100%; padding: 30px; font-size: 14pt; color: black">
                    <h1 style="font-family: 'Roboto Condensed', sans-serif;color:#555; border-bottom: solid 1px #bbb; line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
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
                                    <h3 style=" color:#177731;"> Website </h3>
                                    <a href="http://www.teamc18.com">www.teamc18.com</a>
                                    <br>
                                    Email Id- teamc2018@nsit.ac.in
                                    <div>
                                       
                                      <h3 style=" color:#177731; padding-top:25px;"> General Chair </h3>
                                       
                                        <div class="row"">
                                            <div class="col" style="color: black; font-size: 18px">
                                             <span style="color:#002060; font-family:Lato, sans-serif;"> <b>Prof Shampa Chakraverty</b> </span>  <br>
                                                Mobile: 9205475009<br>
                                                Email: shampa@nsit.ac.in<br>
                                            </div>
                                        </div>
                                        
                                        
                                         <h3 style=" color:#177731; padding-top:25px;"> Organizing Co-Chairs </h3>
                                        <div class="row">
                                            <div class="col" style="color: black; font-size: 18px">
                                               <span style="color:#002060; font-family:Lato, sans-serif;"> <b>Prof MPS Bhatia</b> </span>  <br>
                                                Mobile: 9205475008<br>
                                                Email: bhatia.mps@gmail.com<br>
                                            </div>
                                            <div class="col" style="color: black; font-size: 18px">
                                               <span style="color:#002060; font-family:Lato, sans-serif;"> <b>Dr. Ritu Sibal</b> </span>  <br>
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
                                      <a href="https://www.tripadvisor.in/" target="_blank"> Tripadvisor.com</a> and 
                                      <a href="https://www.booking.com/" target="_blank">Booking.com</a>. 
                                  
                                   </p>
                                   
                                   <p>
                                    Some of the accommodation options in Dwarka are:<br>
                                    <span style="color:#177731; "> <b>5 Star Hotels:</b></span>
                                    <a href="https://www.radissonblu.com/en/hotel-newdelhidwarka">Radisson Blu</a>, <a href="https://www.itchotels.in/hotels/new-delhi/welcomhoteldwarka.html">Welcome Hotel</a>, <a href="https://vivanta.tajhotels.com/en-in/dwarka-new-delhi/">Vivanta by Taj</a>
                                    <br>
                                    <span style="color:#177731; "><b> Budget Hotels:</b></span>
                                    <a href="http://www.lawisteria.com/index.php">La Wisteria Hotel</a>, <a href="http://www.hotelroyalstar.com/">Royal Star Hotel</a>
                                   </p>
                                   <p>
                                    <h3 style=" color:#177731; padding-top:25px;"> On Campus </h3>
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
                                   <h3 style=" color:#177731; padding-top:25px;"> Venue </h3>
                                   <address>Netaji Subhas Institute of Technology,
                                   <br> Azad Hind Fauz Marg,
                                   <br> Dwarka, Sector 3
                                   <br> New Delhi - 110078<br> India.</address>       
                                   </p> 
                                   
                                   
                                   <p>
                                     <h3 style=" color:#177731; padding-top:25px;"> About NSIT </h3>
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
                                   <h3 style=" color:#177731; padding-top:25px;"> About Delhi </h3>
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
                                   <h3 style=" color:#177731; padding-top:25px;">By Air </h3>
                                   Indira Gandhi International Airport (IGI) in Delhi serves both domestic and international
                                    flights. There are frequent flights to Delhi from all metro cities. Situated in Palam, the
                                     airport is about 20 kilometers away from the NSIT. While there are regular Delhi Transport 
                                     Corporation buses (DTC) plying from outside the airport, one can take airport metro express
                                      to Sector 21 dwarka and change there for blue line metro that drops you at Dwarka Mor 
                                      station - closest to the campus. Along with Uber and Ola, government registered pre-paid
                                       taxis can also be hired from the taxi counters at the airport to reach the venue.
                                    </p>
                                    <p>
                                   <h3 style=" color:#177731; padding-top:25px;">By Train </h3> 
                                   The capital city Delhi is primarily served by four railway stations—New Delhi Railway Station (NDLS),
                                    Old Delhi Railway Station (DLI), Hazrat Nizamuddin Railway Station (NZM) and Anand Vihar Railway Terminal (ANVT). 
                                    All railway stations are well connected by metro stations and DTC buses to the venue. For more information visit   
                                    <a href="http://www.delhimetrorail.com/" target="_blank"> Delhi metro website </a>.
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

  $('#hackeamButton').click(function () {
    $('#speakers-row').css("display", "none");
    console.log("reached");
    $('#announcement').css("display", "none");
    console.log("reached");

    mainWrapper.empty();
    mainWrapper.append(`
      <div style="background-color: white; ">
        <div class="row">
                    <div class="col-md-12" style="padding: 30px;">
                        <h1 style="font-family: 'Roboto Condensed', sans-serif;color: #555; border-bottom: solid 1px #bbb;line-height: 1.2;margin-bottom: 15px;font-size: 36px;text-transform: uppercase;">
                            HACKEAM 2018</h1>

                        <div class="overview-description"
                             style="background: white; line-height: 18pt; margin: 0; text-align: justify; text-indent: 0.5in;">
                            <span style="color: black; font-size: 14pt;"><br></span>
                            <span style="color: black; font-size: 14pt;">
                            HACKEAM 2018 is a unique design contest cum hackathon that
                                proceeds through phases and leads to the International Conference
                                      TEAMC 2018.<br/><br/>
                              As teams of multi-disciplinary talents go through these phases, they
                                will experience the joys of visiting various places, interacting with
                                people, reporting, designing, coding and paper writing.
                    <br/><br/>
                            <b>There are awards to be grabbed after each stage!</b>
                            <br/><br/>
                            
                            All teams wishing to participate in the hackathon must register
  themselves by the last date. Please visit the 
            <a target="_blank" href="http://hackeam.teamc18.com">HACKEAM website</a> to register.
                            <br/><br/>
                            <span style="color: red">Last Date of Registration: 10 Jan,  2018</span>
                            <br/>
                            <br/>
                            Teams must strictly adhere to the rules as set by the organisers.
                            </span><br/><br/>
                   <h3 style="color: #177731">Phase 1: The Treks begin</h3>
                            <br>
<span style="color: black; font-size: 14pt;">The registered teams need to visit a Place of Interest (POI) which
may be:</span>
<ul>
<li style="color: black; font-size: 14pt;"> A rural or semi-urban area for the  Rural  Trek</li>
 <li style="color: black; font-size: 14pt;">A healthcare centre for the Health Trek</li>
<li style="color: black; font-size: 14pt;"> A School or institution for Education Trek.</li>
</ul>
<span style="color: black; font-size: 14pt;">
The POI to be explored may or may be one of the pre-designated
areas listed by the organizers or chosen by the participants
themselves.
Participants will document their visit by reporting their experiences
on,</span>
<ul>
 <li style="color: black; font-size: 14pt;">Interacting with/ interviewing the locals and stakeholders</li>
<li style="color: black; font-size: 14pt;"> Analysing the results of the interviews to understand their
problems</li>
 <li style="color: black; font-size: 14pt;">Identifying a specific problem to solve.</li>
</ul>
<span style="color: black; font-size: 14pt;">
An Experience Report (max 5 pages, 2-column, 10 font) must be
submitted, using Text, Geo-tagged photographs, Graphics.<br/>
<br/>
<b>Timeline of the Phase 1: From date of registration till 10 Jan, 2018</b><br/><br/>
<span style="color: red;"><b>Three best entries will be awarded for Best Reporting Skills.</b></span></span>
<br><br> 
<h3 style="color: #177731">Phase 2: Hackathon at NSIT</h3><br>
<span style="color: black; font-size: 14pt;">
Teams will design a solution to their identified problem and prepare
a <span style="color: red;">Technical Report</span> of their design. All teams will be invited to be a
part of the hackathon at NSIT during 27-28 Jan, 2018. The
implementation will be done during the hackathon.<br><br/>
<b>Timeline of the Phase 2: From 10 Jan, 2018 to 28 Jan, 2018</b><br/><br/>
<span style="color: red"><b>The best three teams will be given Best Tech Awards.</b></span> <br><br>
   </span>
<h3 style="color: #177731">Phase 3: Paper presentation</h3>
<br/>
<span style="color: black; font-size: 14pt;">
All teams will add experimental results and final conclusions to
their Technical Reports and combine the two reports (Experience
and Technical), to prepare a composite research paper (max 10
pages, 10-font, single column).<br><br/>
<b>
Deadline for submitting paper: 10 Feb, 2018</b><br><br/>
The submitted papers will be reviewed. Selected papers will get an
opportunity to showcase their work in the prestigious International
Conference TEAMC 2018 during March 26-28, 2018 at NSIT to an
large audience.<br><br/>
<em><b>
At least one member of each team will have to register for TEAMC
2018 if they wish to present their paper.</b></em><br><br/>
<span style="color: red;"><b>The best paper will be given the Best Paper Award in Hackathon
category.</b></span></span>
                        </div>
                    </div>
                </div>
      </div>
    
    `)
  })

});


//<h3 style="font-family: 'Roboto Condensed', sans-serif;color: #50514f;line-height: 1.2;margin-bottom: 15px;font-size: 18px;text-transform: uppercase;">
//     *CSI, ACM and IEEE Members will be given a discount of 15%
// </h3>


// <li class="media">
//     <img class="d-flex mr-3 align-self-center" src="images/pradipsarkar.png" style="width: 30%; border-radius: 50%" alt="Generic placeholder image">
//     <div class="media-body">
//     <h4 class="mt-0 mb-1 text-center" style="color: #1E7635">Prof. Pradip Sarkar</h4>
// <span class="bio"></span>
//     </div>
//     </li>
//     <br/><br/>


// <div class="col-sm-12">
//
//
//   <h3 style=" color:#177731; padding-top:25px;">General Chair </h3>
// Shampa Chakraverty, NSIT
// <br>
// <h3 style=" color:#177731; padding-top:25px;">Organizing Co-Chairs </h3>
// M. P. S. Bhatia, NSIT<br>
// Ritu Sibal, NSIT<br>
// <h3 style=" color:#177731; padding-top:25px;">TPC Co-Chairs</h3>
// Anil Kumar Goel, SAP, USA<br>
// Sangeeta Sabharwal, NSIT<br>
// <h3 style=" color:#177731; padding-top:25px;">Publication Chair</h3>
// Anand Gupta<br>
// <h3 style=" color:#177731; padding-top:25px;">Design Contest Co-Chair</h3>
// Pinaki Chakraborty<br>
// Manusheel Gupta<br>
// <h3 style=" color:#177731; padding-top:25px;">Workshop Chair</h3>
// Bijender Kumar<br>
// <h3 style=" color:#177731; padding-top:25px;">Industry Liaison Co-Chairs</h3>
// Satbir Jain<br>
// Rajeev Kumar<br>
// <h3 style=" color:#177731 ;padding-top:25px;">Sponsorship Chair</h3>
// M.P.S. Bhatia<br>
// <h3 style=" color:#177731; padding-top:25px;">Publicity Co-chairs</h3>
// Savita Yadav<br>
// Poonam Rana
// <br>
// <h3 style=" color:#177731 ;padding-top:25px;">Finance Chair</h3>
// V.P. Ranjan<br>
// <h3 style=" color:#177731; padding-top:25px;">Website Chair</h3>
// Khushil Saini<br>
// <h3 style=" color:#177731; padding-top:25px;">Panel Discussion Chair</h3>
// Shampa Chakraverty<br>
// <h3 style=" color:#177731; padding-top:25px;">Hospitality Co-Chairs</h3>
// Preeti Kaur<br>
// Aastha Singh
// <br>
// <h3 style=" color:#177731; padding-top:25px;">Internal Arrangements Chairs</h3>
// Anil Arora<br>
// </div>
