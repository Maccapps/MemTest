<?php

 function readFolderContents($folder = './', $type = 'all', $recursive = false, $exclusions = null) {

    if ($handle = opendir($folder)) {

        $contents = array();
        while (false !== ($item = readdir($handle))) {
            if ($item != '.' AND $item != '..') {
                $filepath = $folder.DIRECTORY_SEPARATOR.$item;
                $info = pathinfo($filepath);
                $data['type'] = is_dir($filepath) ? 'directory' : 'file';
                $data['name'] = $item;
                $data['path'] = substr($folder, 0, 2) == './' ? substr($folder, 2) . '/' . $data['name'] : $folder.'/'.$data['name'];
                if ($data['type'] === 'file') {
                    $data['extension'] = $info['extension'];
                    $data['filename'] = $info['filename'];
                    $data['filesize'] = filesize($filepath);
                    $data['md5'] = md5(file_get_contents($filepath));
                }
                if ($data['type'] === 'file' AND in_array(strtoupper($data['extension']), array('BMP', 'GIF', 'JPG', 'JPEG', 'PNG'))) {
                    $image_info = getimagesize($filepath);
                    $data['image_width'] = $image_info[0];
                    $data['image_height'] = $image_info[1];
                    $data['image_mime'] = $image_info['mime'];
                }
                $includeThisFile = ($type == 'all' OR $type == $data['type']);
                if (is_array($exclusions) AND isset($exclusions[$data['type']]) AND in_array($data['path'], $exclusions[$data['type']])) {
                    $includeThisFile = false;
                }
                if ($includeThisFile) {
                    $contents[] = $data;
                }
                if ($data['type'] === 'directory' AND $recursive === true) {
                    $contents = array_merge($contents, readFolderContents($folder.'/'.$data['name'], $type, $recursive, $exclusions));
                }
            }
        }
        closedir($handle);
        return $contents;
    }

    return false;
}

?>