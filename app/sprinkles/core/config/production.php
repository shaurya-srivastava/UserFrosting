<?php

    /**
     * Default production config file for UserFrosting.  You may override/extend this in your site's configuration file to customize deploy settings.
     *
     */

    return [
        'assets' => [
            'use_raw' => false
        ],
        'cache' => [
            'twig' => true
        ],
        'debug' => [
            'twig' => false,
            'auth' => false,
            'smtp' => false
        ],
        // Slim settings - see http://www.slimframework.com/docs/objects/application.html#slim-default-settings
        'settings' => [
            'routerCacheFile' => \AdminPanel\ROOT_DIR . '/' . \AdminPanel\APP_DIR_NAME . '/' . \AdminPanel\CACHE_DIR_NAME . '/' . 'routes.cache',
            'displayErrorDetails' => false
        ],
        'site' => [
            'analytics' => [
                'google' => [
                    'enabled' => false
                ]
            ],
            'debug' => [
                'ajax' => false,
                'info' => false
            ]
        ]
    ];
