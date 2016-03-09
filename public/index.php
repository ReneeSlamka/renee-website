<?php

require (__DIR__ .'/vendor/autoload.php');

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

// Return false for any URIs that should be handled as static files so the PHP server will serve them.
// Don't ask too many questions about this little hack.
if (strpos($_SERVER['SCRIPT_NAME'], '.css')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.js')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.png')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.jpg')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.otf')) return false;
if (strpos($_SERVER['SCRIPT_NAME'], '.ttf')) return false;

$app->get('/', function () use ($app) {
    $app->render('/pages/home.twig');
});

$app->get('/about', function () use ($app) {
    $app->render('/pages/about.twig');
});

$app->get('/resume', function () use ($app) {
    $app->render('/pages/resume.twig');
});

$app->get('/projects', function () use ($app) {
    $app->render('/pages/projects.twig');
});

$app->get('/art-portfolio', function () use ($app) {
    $app->render('/pages/art-portfolio.twig');
});

$app->get('/contact', function () use ($app) {
    $app->render('/pages/contact.twig');
});


/*== Project Page Links ==*/

$app->get('/blog-board', function () use ($app) {
    $app->render('/pages/blog-board.twig');
});

$app->get('/falling-myo', function () use ($app) {
    $app->render('/pages/falling-myo.twig');
});

$app->get('/personal-website', function () use ($app) {
    $app->render('/pages/personal-website.twig');
});

$app->get('/project-euler', function () use ($app) {
    $app->render('/pages/project-euler.twig');
});

$app->get('/tether-car', function () use ($app) {
    $app->render('/pages/tether-car.twig');
});

$app->get('/telephone-app', function () use ($app) {
    $app->render('/pages/telephone-app.twig');
});

$app->get('/heart-rate-monitor', function () use ($app) {
    $app->render('/pages/heart-rate-monitor.twig');
});

$app->get('/student-budgeting-app', function () use ($app) {
    $app->render('/pages/student-budgeting-app.twig');
});

$app->get('/future-projects', function () use ($app) {
    $app->render('/pages/future-projects.twig');
});


$app->run();