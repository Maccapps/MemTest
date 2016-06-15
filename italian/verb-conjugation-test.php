<!DOCTYPE html>
<html lang="en-gb">
    <head>
        <meta charset=utf-8>
        <title>Verb Conjugation :: Italian :: MemTest :: Maccapps</title>
        <meta name=description content="">
        <meta name=viewport content="width=device-width,initial-scale=1">
        <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">
		<link rel=stylesheet href="../global/css/reset.css">
		<link rel=stylesheet href="../global/css/app.css"> 
		<link rel=stylesheet href="css/app.css">       
        <script src="../global/js/jquery-2.2.2.min.js"></script>	
    </head>

    <body id="game">

		<div id="holder">
			<div id="deviceheader"></div>
            
                <div class="page active">
                    <div class="header">
                        <p class="back"><a href="verb-conjugation.php">&#x25c0;</a></p>
                        <p class="home">Verb Conjugation</p>
                        <p class="refresh"> &nbsp; </p>
                    </div>

                    <div id="test-read" class="hide">
                        <div class="verb-questions jsVerb">
                            <div class="item verb">
                                <h1> &nbsp; </h1>
                                <h2> &nbsp; </h2>
                            </div>
                        </div>

                        <p class="menu-command">Select correct person</p>
                        <div class="jsPersonList" style="width:100%;">
                            <div class="btn half-width jsBtn" data-person="s1"><p>Io</p></div>
                            <div class="btn half-width jsBtn" data-person="s2"><p>Tu</p></div>
                            <div class="btn half-width jsBtn" data-person="s3"><p>Lei/Lui</p></div>
                            <div class="btn half-width jsBtn" data-person="p1"><p>Noi</p></div>
                            <div class="btn half-width jsBtn" data-person="p2"><p>Voi</p></div>
                            <div class="btn half-width jsBtn" data-person="p3"><p>Loro</p></div>
                        </div>

                        <p class="menu-command hide jsPersonTensesHeader">Select correct tense</p>
                        <div class="person-tenses hide jsPersonTensesList" data-person="s1" style="width:100%;">
                            <div class="btn half-width jsBtn" data-name="present"><p>I am ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_perfect"><p>I have ...</p></div>
                            <div class="btn half-width jsBtn" data-name="imperfect"><p>I used to ...</p></div>
                            <div class="btn half-width jsBtn" data-name="past_perfect"><p>I had ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_conditional"><p>I would ...</p></div>
                            <div class="btn half-width jsBtn" data-name="future_indicative"><p>I will ...</p></div>
                        </div>
                        <div class="person-tenses hide jsPersonTensesList" data-person="s2" style="width:100%;">
                            <div class="btn half-width jsBtn" data-name="present"><p>You are ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_perfect"><p>You have ...</p></div>
                            <div class="btn half-width jsBtn" data-name="imperfect"><p>You used to ...</p></div>
                            <div class="btn half-width jsBtn" data-name="past_perfect"><p>You had ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_conditional"><p>You would ...</p></div>
                            <div class="btn half-width jsBtn" data-name="future_indicative"><p>You will ...</p></div>
                        </div>
                        <div class="person-tenses hide jsPersonTensesList" data-person="s3" style="width:100%;">
                            <div class="btn half-width jsBtn" data-name="present"><p>He/she is ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_perfect"><p>He/she has ...</p></div>
                            <div class="btn half-width jsBtn" data-name="imperfect"><p>He/she used to ...</p></div>
                            <div class="btn half-width jsBtn" data-name="past_perfect"><p>He/she had ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_conditional"><p>He/she would ...</p></div>
                            <div class="btn half-width jsBtn" data-name="future_indicative"><p>He/she will ...</p></div>
                        </div>
                        <div class="person-tenses hide jsPersonTensesList" data-person="p1" style="width:100%;">
                            <div class="btn half-width jsBtn" data-name="present"><p>We are ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_perfect"><p>We have ...</p></div>
                            <div class="btn half-width jsBtn" data-name="imperfect"><p>We used to ...</p></div>
                            <div class="btn half-width jsBtn" data-name="past_perfect"><p>We had ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_conditional"><p>We would ...</p></div>
                            <div class="btn half-width jsBtn" data-name="future_indicative"><p>We will ...</p></div>
                        </div>
                        <div class="person-tenses hide jsPersonTensesList" data-person="p2" style="width:100%;">
                            <div class="btn half-width jsBtn" data-name="present"><p>You all are ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_perfect"><p>You all have ...</p></div>
                            <div class="btn half-width jsBtn" data-name="imperfect"><p>You all used to ...</p></div>
                            <div class="btn half-width jsBtn" data-name="past_perfect"><p>You all had ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_conditional"><p>You all would ...</p></div>
                            <div class="btn half-width jsBtn" data-name="future_indicative"><p>You all will ...</p></div>
                        </div>
                        <div class="person-tenses hide jsPersonTensesList" data-person="p3" style="width:100%;">
                            <div class="btn half-width jsBtn" data-name="present"><p>They are ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_perfect"><p>They have ...</p></div>
                            <div class="btn half-width jsBtn" data-name="imperfect"><p>They used to ...</p></div>
                            <div class="btn half-width jsBtn" data-name="past_perfect"><p>They had ...</p></div>
                            <div class="btn half-width jsBtn" data-name="present_conditional"><p>They would ...</p></div>
                            <div class="btn half-width jsBtn" data-name="future_indicative"><p>They will ...</p></div>
                        </div>

                        <div class="btn last btnCheck"><p>CHECK</p></div>
                        <div class="btn last btnContinueRead active hide"><p>NEXT</p></div>

                    </div>




                    <div id="test-write" class="hide">
                        <div class="verb-questions jsVerb">
                            <div class="item verb"><label> &nbsp; </label>
                                <div>
                                    <span class="col-pronoun"> &nbsp; </span>
                                    <input class="xyz" placeholder="english translation" data-el="translation"/>
                                    <em>?</em>
                                </div>
                            </div>
                        </div>

                        <hr/>
                        <h1> &nbsp; </h1>
                        <h2> &nbsp; </h2>

                        <div class="verb-questions-holder">

                            <div class="verb-questions hide jsTense" data-name="tenses-past_perfect">
                                <div class="item s1"><label>1st Person Singular</label>
                                    <div>
                                        <span class="col-pronoun jsColPronoun">io</span>
                                        <input class="input-1" data-el="0-0"/>
                                        <input class="input-2" data-el="0-1"/>
                                        <em>?</em>
                                    </div>
                                </div>
                            </div>

                            <div class="verb-questions hide jsTense" data-name="tenses-present_perfect">
                                <div class="item s2"><label>2nd Person Singular</label>
                                    <div>
                                        <span class="col-pronoun jsColPronoun">tu</span>
                                        <input class="input-1" data-el="1-0"/>
                                        <input class="input-2" data-el="1-1"/>
                                        <em>?</em>
                                    </div>
                                </div>
                            </div>

                            <div class="verb-questions hide jsTense" data-name="tenses-present">
                                <div class="item s3"><label>3rd Person Singular</label>
                                    <div>
                                        <span class="col-pronoun jsColPronoun">lui/lei</span>
                                        <input class="input-1" data-el="2-0"/>
                                        <input class="input-2" data-el="2-1"/>
                                        <em>?</em>
                                    </div>
                                </div>
                            </div>

                            <div class="verb-questions hide jsTense" data-name="tenses-present_conditional">
                                <div class="item p1"><label>1st Person Plural</label>
                                    <div>
                                        <span class="col-pronoun jsColPronoun">noi</span>
                                        <input class="input-1" data-el="3-0"/>
                                        <input class="input-2" data-el="3-1"/>
                                        <em>?</em>
                                    </div>
                                </div>
                            </div>

                            <div class="verb-questions hide jsTense" data-name="tenses-future">
                                <div class="item p2"><label>2nd Person Plural</label>
                                    <div>
                                        <span class="col-pronoun jsColPronoun">voi</span>
                                        <input class="input-1" data-el="4-0"/>
                                        <input class="input-2" data-el="4-1"/>
                                        <em>?</em>
                                    </div>
                                </div>
                            </div>

                            <div class="verb-questions hide jsTense" data-name="tenses-future_indicative">
                                <div class="item p3"><label>3rd Person Plural</label>
                                    <div>
                                        <span class="col-pronoun jsColPronoun">loro</span>
                                        <input class="input-1" data-el="5-0"/>
                                        <input class="input-2" data-el="5-1"/>
                                        <em>?</em>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="btn last btnContinue active"><p>NEXT</p></div>

                    </div>

                </div>
            
			<div id="devicefooter"></div>
		</div>

        <script src="../global/js/app.js"></script>	
        <script src="js/app.js"></script>	
        <script src="js/app-verb-conjugation-test-functions.js"></script>	
        <script src="js/app-verb-conjugation-test.js"></script>	
    </body>

</html>
