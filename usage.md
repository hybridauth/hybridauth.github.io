Basic Usage
===========

To sign in user with a provider, it's possible to either instanciate the provider's adapter directly or to use Hybridauth's unified interface.

### Instantiating Provider's Adapter

```php
include 'vendor/autoload.php'; 

$config = [
    'callback' => 'http://localhost/hybridauth/examples/twitter.php',
    'keys' => [ 'key' => 'your-consumer-key', 'secret' => 'your-consumer-secret' ]
];

$twitter = new Hybridauth\Provider\Twitter($config);

try {
    $twitter->authenticate();

    $userProfile = $twitter->getUserProfile();
    $accessToken = $twitter->getAccessToken();
    $apiResponse = $twitter->apiRequest( 'statuses/home_timeline.json' );
}
catch( Exception $e ){
    echo 'Ooophs, we ran into an issue! '' . $e->getMessage();
}
```

### Unified Interface

```php
include 'vendor/autoload.php'; 

$config = [
    'callback' => 'http://localhost/hybridauth/examples/callback.php',
    'providers' => [
        'Twitter' => [ 'enabled' => true, 'keys' => [ 'key' => '...', 'secret' => '...' ] ],
        'GitHub'  => [ 'enabled' => true, 'keys' => [ 'id'  => '...', 'secret' => '...' ] ]
    ]
];

$hybridauth = new Hybridauth\Hybridauth($config);

try{
    $adapter = $hybridauth->authenticate('GitHub'); // or 'Twitter'

    $userProfile = $adapter->getUserProfile();

    echo 'Hi there ' . $userProfile->displayName;
}
catch(Exception $e){
    echo 'Ooophs, we ran into an issue! '' . $e->getMessage();
}
```
