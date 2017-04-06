<?php

    /**
     * Default testing config file for UserFrosting.  You may override/extend this in your site's configuration file to customize deploy settings.
     *
     */

    return [
        'cache' => [
            'illuminate' => [
                'default' => 'array',
            ]
        ],
        'session' => [
            'handler'       => 'array',
        ],
        'settings' => [
            'displayErrorDetails' => false
        ],
    ];
