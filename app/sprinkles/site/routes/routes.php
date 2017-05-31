<?php

global $app;

$app->get('/index', 'UserFrosting\Sprinkle\Site\Controller\PageController:pageIndex')->setName('indexAdminPanel');
$app->get('/sign-in', 'UserFrosting\Sprinkle\Site\Controller\PageController:pageSignInAdminPanel')->setName('loginAdminPanel');;
$app->post('/loginAdminPanel', 'UserFrosting\Sprinkle\Site\Controller\AccountControllerAdminPanel:loginAdminPanel');
$app->get('/logoutAdminPanel', 'UserFrosting\Sprinkle\Site\Controller\AccountControllerAdminPanel:logoutAdminPanel')->add('authGuard');
$app->get('/settings', 'UserFrosting\Sprinkle\Site\Controller\AccountControllerAdminPanel:settingsAdminPanel');

$app->get('/campaign-records', 'UserFrosting\Sprinkle\Site\Controller\PageController:pageCampaignRecordsAdminPanel');
$app->get('/health-check', 'UserFrosting\Sprinkle\Site\Controller\PageController:pageHealthCheckAdminPanel');
$app->get('/log-records', 'UserFrosting\Sprinkle\Site\Controller\PageController:pageLogRecordsAdminPanel');

?>