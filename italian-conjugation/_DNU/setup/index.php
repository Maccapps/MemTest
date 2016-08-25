<?php
require_once 'config.php';
require_once 'functions.php';

$folder = 'data';
$files = readFolderContents($folder);


$MASTER = array();


foreach($files as $file) {

    if (!array_key_exists($file['filename'], $fileSettings)) {
        continue;
    }

    if ($fileSettings[$file['filename']]['hasPronouns'] === true) {
        processPronounFile($file);
    } else {
        processFile($file);
    }
}

die(json_encode($MASTER));
echo '<pre>' . var_export($MASTER, TRUE) . '</pre>';
die('<pre>Exit at Line '.__LINE__.' of <span title="'.__FILE__.'">'.str_replace(array(__DIR__, '\\'), '', __FILE__).'</span> @ '.date('H:i:s'));


function processPronounFile($file) {
    $lineIdx = 0;
    $verbIdx = 0;
    $pronounIdx = 0;
    $lines = file($file['path']);
    foreach ($lines as $line_num => $line) {
                $line = encodeChars(preg_replace( "/\r|\n/", "", $line));
        if ($lineIdx % 2 == 0) {
            $lang = 'it';
            #echo "<br />\n [$verbIdx $pronounIdx $lang] $line";
        } else {
            $lang = 'en';
            #echo ' &nbsp; = &nbsp; ' . "[$verbIdx $pronounIdx $lang] $line";
        }
        $GLOBALS['MASTER'][$file['filename']]['hasPronouns'] = true;
        $GLOBALS['MASTER'][$file['filename']]['data'][$verbIdx][$pronounIdx][$lang] = $line;
        $lineIdx++;
        if ($lang == 'en') {
            $pronounIdx++;
        }
        if ($pronounIdx > count($GLOBALS['pronouns']) - 1) {
            $pronounIdx = 0;
            $verbIdx++;
        }
    }
    #echo '<pre>' . var_export($GLOBALS['MASTER'], TRUE) . '</pre>';die('<pre>Exit at Line '.__LINE__.' of <span title="'.__FILE__.'">'.str_replace(array(__DIR__, '\\'), '', __FILE__).'</span> @ '.date('H:i:s'));
}


function processFile($file) {
    $lineIdx = 0;
    $verbIdx = 0;
    $pronounIdx = 0;
    $lines = file($file['path']);
    foreach ($lines as $line_num => $line) {
                $line = encodeChars(preg_replace( "/\r|\n/", "", $line));
        if ($lineIdx % 2 == 0) {
            $lang = 'it';
            #echo "<br />\n [$verbIdx $pronounIdx $lang] $line";
        } else {
            $lang = 'en';
            #echo ' &nbsp; = &nbsp; ' . "[$verbIdx $pronounIdx $lang] $line";
        }
        $GLOBALS['MASTER'][$file['filename']]['hasPronouns'] = false;
        $GLOBALS['MASTER'][$file['filename']]['data'][$verbIdx][$lang] = $line;
        $lineIdx++;
        if ($lang == 'en') {
            $pronounIdx++;
            $verbIdx++;
        }
    }
    #echo '<pre>' . var_export($GLOBALS['MASTER'], TRUE) . '</pre>';die('<pre>Exit at Line '.__LINE__.' of <span title="'.__FILE__.'">'.str_replace(array(__DIR__, '\\'), '', __FILE__).'</span> @ '.date('H:i:s'));
}



function encodeChars($string)
{
    return mb_convert_encoding($string, "UTF-8", "HTML-ENTITIES");
}

?>