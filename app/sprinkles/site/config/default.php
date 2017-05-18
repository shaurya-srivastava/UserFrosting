<?php

    /**
     * Sample site configuration file for UserFrosting.  You should definitely set these values!
     *
     */
    return [
        'address_book' => [
            'admin' => [
                'name'  => 'jspadmin'
            ]
        ],    
        'debug' => [
            'auth' => true
        ],
        'site' => [
            'author'    =>      'JSpectrum Software Ltd.',
            'title'     =>      'LBS Admin Panel',
            // URLs
            'uri' => [
                'author' => 'http://www.jspectrum.com'
            ]
        ],
	'path'    => [
            'document_root'     => str_replace(DIRECTORY_SEPARATOR, \UserFrosting\DS, $_SERVER['DOCUMENT_ROOT']),
            'public_relative'   => dirname($_SERVER['SCRIPT_NAME'])      // The location of `index.php` relative to the document root.  Use for sites installed in subdirectories of your web server's document root.
        ],
	'title'     =>      'AdminPanel',
        // URLs
	'uri' => [
                'base' => [
                    'host'              => isset($_SERVER['SERVER_NAME']) ? trim($_SERVER['SERVER_NAME'], '/') : 'localhost',
                    'scheme'            => empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off' ? 'http' : 'https',
                    'port'              => isset($_SERVER['SERVER_PORT']) ? (int) $_SERVER['SERVER_PORT'] : null,
                    'path'              => isset($_SERVER['SCRIPT_NAME']) ? trim(dirname($_SERVER['SCRIPT_NAME']), '/\\') : ''
                ],
                'author'            => 'http://www.jspectrum.com',
                'publisher'         => ''
	], 
        'timezone' => 'Asia/Singapore'        
    ];
