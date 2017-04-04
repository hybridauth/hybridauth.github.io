<?php
    $base_url = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . str_replace('generate_all.php', '', $_SERVER['REQUEST_URI']);

    if ($handle = opendir('.')) {
        while (false !== ($entry = readdir($handle))) {
            if (strpos($entry, '.md') !== false) {
                $page = str_replace('.md', '.html', $entry);
                file_get_contents($base_url.$page);
            }
        }

        closedir($handle);
    }
