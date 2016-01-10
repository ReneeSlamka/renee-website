<?php

require __DIR__ .'/vendor/autoload.php';

$app = new \Slim\Slim();

$app->view(new \Slim\Views\Twig());

$app->view->setTemplatesDirectory(__DIR__ . '/../templates');

$app->view->parserOptions = array(
    'charset' => 'utf-8',
    'auto_reload' => true,
    'strict_variables' => true,
    'autoescape' => true
);

$app->view->parserExtensions = array(new \Slim\Views\TwigExtension());


// This file is ONLY used by the PHP built-in web server. It MUST be named index.php.
// Don't rename it or use it in production.

if (php_sapi_name() != 'cli-server') {
    die ('index.php is only for use with the built-in PHP web server.');
}

// Return false for any URIs that should be handled as static files so the PHP server will serve them.
// Don't ask too many questions about this little hack.
if (strpos($_SERVER['SCRIPT_NAME'], '.css')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.js')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.png')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.jpg')) return false;

$app->get('/', function () use ($app) {

    $app->render('/pages/home.twig');
});


$app->run();