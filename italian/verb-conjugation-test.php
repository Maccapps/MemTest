<!DOCTYPE html>
<html lang="en-gb">
    <head>
        <meta charset=utf-8>
        <title>Verb Conjugation :: Italian :: MemTest :: Maccapps</title>
        <meta name=description content="">
        <meta name=viewport content="width=device-width,initial-scale=1">
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
            
			<div id="devicefooter"></div>
		</div>

        <script src="../global/js/app.js"></script>	
        <script src="js/app.js"></script>	
        <script src="js/app-verb-conjugation-test-functions.js"></script>	
        <script src="js/app-verb-conjugation-test.js"></script>	
    </body>

</html>
