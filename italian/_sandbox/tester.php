<?php

$data = json_decode(file_get_contents('pao.json'), TRUE);

$suits = 'CDHS';
$suitIdx = rand(0,3);
$suit[] = $suits[$suitIdx];
$suitIdx = rand(0,3);
$suit[] = $suits[$suitIdx];
$suitIdx = rand(0,3);
$suit[] = $suits[$suitIdx];
#echo '<pre>'.var_export($suit, TRUE).'</pre>';

$ranks = 'ABCDEFGHIJKLMN';
$rankIdx = rand(0,11);
$rank[] = $ranks[$rankIdx];
$rankIdx = rand(0,11);
$rank[] = $ranks[$rankIdx];
$rankIdx = rand(0,11);
$rank[] = $ranks[$rankIdx];

#echo '<pre>'.var_export($rank, TRUE).'</pre>';


for($i=0; $i<strlen($ranks); $i++) {
    echo "<br/>" . $ranks[$i]. ' ' . ($i + 1);
}
echo "<br/>";
echo "<br/>";

echo "<br/>" . $data[$suit[0]][$rank[0]]['P'];
echo "<br/>" . $data[$suit[1]][$rank[1]]['A'];
echo "<br/>" . $data[$suit[2]][$rank[2]]['O'];
?>