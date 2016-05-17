<?php

$data[] = 'Christina agueillera
';$data[] = 'Christian Bale
';$data[] = 'Charlie Chaplin
';$data[] = 'Cara Delivigne
';$data[] = 'Charles Darwin
';$data[] = 'Carmen Electra
';$data[] = 'Carrie fisher
';$data[] = 'Che guevara
';$data[] = 'Chris Hoy
';$data[] = 'Charles I
';$data[] = 'Chuck Jones
';$data[] = 'Calvin klein
';$data[] = 'Carl Lewis
';$data[] = 'Claude monet
';$data[] = 'Damon Albarn
';$data[] = 'Dan Ackroyd
';$data[] = 'David Beckham
';$data[] = 'David Copperfield
';$data[] = 'Danny devito
';$data[] = 'Duke ellington
';$data[] = 'Dawn french
';$data[] = 'Danny glover
';$data[] = 'Daryl hannah
';$data[] = 'David Israel
';$data[] = 'David jason
';$data[] = 'Donna Karen
';$data[] = 'Dalai lama
';$data[] = 'Demi moore
';$data[] = 'Hells Angel
';$data[] = 'Halle berry
';$data[] = 'Harold Bishop
';$data[] = 'Hilary Clinton
';$data[] = 'Harley Davdison
';$data[] = 'Humpty dumpty
';$data[] = 'Harry Enfield
';$data[] = 'Hilary Fisher
';$data[] = 'Happy gilmore
';$data[] = 'Heather graham
';$data[] = 'Hugh Grant
';$data[] = 'Harry Houdini
';$data[] = 'Henry I
';$data[] = 'Hugh Jackman
';$data[] = 'Harvey Keitel
';$data[] = 'Heath Ledger
';$data[] = 'Hank Marvin
';$data[] = 'Sean aston
';$data[] = 'Sponge bob
';$data[] = 'Sean bean
';$data[] = 'Santa Claus
';$data[] = 'Steve Davis
';$data[] = 'Salvador dali
';$data[] = 'Scooby doo
';$data[] = 'Sheena Easton
';$data[] = 'Steven Fry
';$data[] = 'Steven Gerrard
';$data[] = 'Sherlock Holmes
';$data[] = 'Steven hawking
';$data[] = 'Saddam Houssein
';$data[] = 'Steve Irwin
';$data[] = 'Steve Jobs
';$data[] = 'Stephen King
';$data[] = 'Stan Laurel
';$data[] = 'Steve mcqueen';

$ary = array();

foreach($data as $name) {

    $item = array();

    $name = trim($name);
    $parts = explode(' ', $name);
    $firstName = ucwords(array_shift($parts));
    $surName = ucwords(implode(' ', $parts));

    $idx1 = $firstName[0];
    $idx2 = $surName[0];
    //$item
    $ary[$idx1][$idx2]['P'] = $firstName . ' ' . $surName;
    $ary[$idx1][$idx2]['A'] = 'XXX';
    $ary[$idx1][$idx2]['O'] = 'XXX';

}
echo json_encode($ary, TRUE);