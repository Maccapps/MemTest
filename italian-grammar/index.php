<?php require_once '../global/functions/_import.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Basic Italian</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../global/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="app.css">
    <script src="../global/js/jquery-2.2.2.min.js"></script>
    <script src="../global/bootstrap/js/bootstrap.min.js"></script>
</head>

    <body>

        <div class="container">
          <h1>Basic Italian</h1>

            <ul>
            <?php
            $files = readFolderContents('chapters', 'file');
            foreach($files as $file) {
                echo '<li><a href="#'.md5($file['filename']).'">'.$file['filename'].'</a></li>';
            }
            ?>
            </ul>

            <?php
            foreach($files as $file) {
                echo '<h2 id="'.md5($file['filename']).'">'.$file['filename'].'</h2>';
                echo file_get_contents($file['path']);
            }
            ?>

        </div>

    </body>

</html>