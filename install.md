1. System requirements
======================

* PHP 5.4 or above,
* PHP session,
* Curl extension (However it can be substituted with other non Curl clients such as [Guzzle](http://docs.guzzlephp.org/en/latest/index.html))

2. Installation
===============

To install Hybridauth, we recommend using [Composer](https://getcomposer.org/) — the now defacto dependency manager for PHP. Otherwise you may always use the latest release available at [Github](https://github.com/hybridauth/hybridauth/releases).

#### Using Composer

If Composer is not installed on your system yet, you may go ahead and install it using this command line:

```bash
$ curl -sS https://getcomposer.org/installer | php
```

Next, add the following require entry to the `composer.json` file in the root of your project.

```json
{
    "require" : {
        "hybridauth/hybridauth" : "~3.0"
    }
}
```

Finally, instruct Composer to install Hybridauth and its dependencies:

```bash
$ php composer.phar install
```

Composer will then download the latest version of Hybridauth Library and place it inside the `/vendor/` directory.

#### Manual Installation

In case you can't/don't want to use Composer, or if you never heard of it, you can still include Hybridauth in you application 
the traditional way by downloading the library archive and unzipping it into your project's folder.

The required steps are typically the following:

1. Download the latest available release at [https://github.com/hybridauth/hybridauth/releases](https://github.com/hybridauth/hybridauth/releases)
2. Next, simply unzip the archive file to your project's directory.

3. Autoloading
==============

Hybridauth 3 is coded in compliance with [PSR-4](http://www.php-fig.org/psr/psr-4/) which means it relies heavily on namespaces so that
class files can be loaded automatically. 

#### Using Composer

In case you're using Composer, include `vendor/autoload.php` at the top of your script. The autoloader should be able to auto-detect the proper location of Hybridauth source code and auto-load all the required classes.

```php
include __DIR__ . 'vendor/autoload.php';

use Hybridauth\Hybridauth;

$instance = new Hybridauth([ /* ... */ ]);
```

#### Manual Installation

Hybridauth comes bundled with a basic autoloader which can be found on the source folder `src/autoload.php` and it function in a similar way to Composer's.

```php
include __DIR__ . 'hybridauth/src/autoload.php';

use Hybridauth\Hybridauth;

$instance = new Hybridauth([ /* ... */ ]);
```
