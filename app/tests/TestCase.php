<?php

namespace UserFrosting\Tests;

use Slim\App;
use Slim\Container;
use PHPUnit\Framework\TestCase as BaseTestCase;
use UserFrosting\Sprinkle\Core\Initialize\SprinkleManager;

use Dotenv\Exception\InvalidPathException;
use Illuminate\Database\Capsule\Manager as Capsule;

class TestCase extends BaseTestCase
{
    /**
     * The Illuminate application instance.
     *
     * @var \Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * The callbacks that should be run after the application is created.
     *
     * @var array
     */
    protected $afterApplicationCreatedCallbacks = [];

    /**
     * The callbacks that should be run before the application is destroyed.
     *
     * @var array
     */
    protected $beforeApplicationDestroyedCallbacks = [];

    /**
     * Indicates if we have made it through the base setUp function.
     *
     * @var bool
     */
    protected $setUpHasRun = false;

    /**
     * Setup the test environment.
     *
     * @return void
     */
    protected function setUp()
    {
        if (! $this->app) {
            $this->refreshApplication();
        }

        foreach ($this->afterApplicationCreatedCallbacks as $callback) {
            call_user_func($callback);
        }

        $this->setUpHasRun = true;
    }

    /**
     * Refresh the application instance.
     *
     * @return void
     */
    protected function refreshApplication()
    {
        // First, we create our DI container
        $container = new Container;

        // Attempt to fetch list of Sprinkles
        $sprinkles = loadSprinkleSchema()->base;

        // Set up sprinkle manager service and list our Sprinkles.  Core sprinkle does not need to be explicitly listed.
        $container['sprinkleManager'] = function ($c) use ($sprinkles) {
            return new SprinkleManager($c, $sprinkles);
        };

        // Now, run the sprinkle manager to boot up all our sprinkles
        $container->sprinkleManager->init();

        // Next, we'll instantiate the application.  Note that the application is required for the SprinkleManager to set up routes.
        $this->app = new App($container);
    }

    /**
     * Clean up the testing environment before the next test.
     *
     * @return void
     */
    protected function tearDown()
    {
        if ($this->app) {
            foreach ($this->beforeApplicationDestroyedCallbacks as $callback) {
                call_user_func($callback);
            }

            // Need to manually remove locator streams
            // PHP native stream_wrapper_register won't allow wrappers to be redefined on the next test otherwise
            // We use `StreamBuilder` remove function to remove each defined scheme
            $ci = $this->app->getContainer();
            $streamBuilder = $ci->streamBuilder;
            foreach ($streamBuilder->getStreams() as $scheme => $handler) {
                $streamBuilder->remove($scheme);
            }

            $this->app = null;
        }

        $this->setUpHasRun = false;

        $this->afterApplicationCreatedCallbacks = [];
        $this->beforeApplicationDestroyedCallbacks = [];
    }

    /**
     * Register a callback to be run after the application is created.
     *
     * @param  callable  $callback
     * @return void
     */
    public function afterApplicationCreated(callable $callback)
    {
        $this->afterApplicationCreatedCallbacks[] = $callback;

        if ($this->setUpHasRun) {
            call_user_func($callback);
        }
    }

    /**
     * Register a callback to be run before the application is destroyed.
     *
     * @param  callable  $callback
     * @return void
     */
    protected function beforeApplicationDestroyed(callable $callback)
    {
        $this->beforeApplicationDestroyedCallbacks[] = $callback;
    }
}