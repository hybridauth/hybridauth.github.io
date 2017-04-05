User authentication
===================

### Simple authentication:

<pre>
/**
* 2. Build the adapter configuration array
*/
$config = [
    'callback' => 'http://example.com/hybridauth/example.php',

    'keys' => [ 'key' => 'your-twitter-consumer-key', 'secret' => 'your-twitter-consumer-secret' ]
];

/**
* 3. Instantiate Twitter adapter using the array $config we just built.
*/
$twitter = new Hybridauth\Provider\Twitter( $config );

try {
    /**
    * 4. Logging the user in
    *
    * Hybridauth will attempt to negotiate with the Twitter api and authenticate the user. If the process
    * fails for whatever reason, then Hybridauth will throw an exception.
    *
    * If the user is authenticated, then subsequent calls to this method will be ignored (yield a boolean).
    * To know more, refer to Hybridauth full developer api.
    */
    $twitter->authenticate();

    # at this point the authentication process has succeeded, and we can proceed with our application logic.
    # the examples below are meant to give a quick overview for the kind actions that Hybridauth can execute
    # on behalf on the user.

    // Retrieve the oauth access tokens
    $accessToken = $twitter->getAccessToken();

    // Retrieve the user profile
    $userProfile = $twitter->getUserProfile();

    // etc.
}
catch( Exception $e ){
    echo 'Oops, we ran into an issue! ' . $e->getMessage();
}
</pre>

### Authenticating a user with access tokens

Since Hybridauth 3 it's possible to directly authenticate a user with the access token.

<pre>
$config = [
    'callback' => 'http://localhost/hybridauth/example.php',

    'keys' => [ 'key' => 'your-twitter-consumer-key', 'secret' => 'your-twitter-consumer-secret' ],

    // Supply the user access tokens
    'tokens' => [ 'access_token' => 'user-access-token', 'access_token_secret' => 'user-access-token-secret' ]
];

$twitter = new Hybridauth\Provider\Twitter( $config );

try {
    /**
    * Retrieve the user profile
    *
    * Note that we didn't call `$twitter->authenticate()` as we already have the user access tokens and in
    * case these tokens has been revoked or expired, `$twitter->getUserProfile()` will throw an exception.
    * For more information, refer to Hybridauth full developer api.
    */
    $userProfile = $twitter->getUserProfile();
}
catch( Exception $e ){
    echo 'Oops, we ran into an issue! ' . $e->getMessage();
}
</pre>

### Legacy way (Similar to Hybridauth 2)

Hybridauth 3 provides an unified entry point to the various providers it supports which make it easy to authenticate users
with multiple providers.


**Note:** If you were using Hybridauth 2, please refer to [Migrating to 3.0+](developer-ref-migrating.html) to make the
necessary changes to your existing application in order to make it work with HybridAuth 3.

<pre>
$config = [
    'base_url'  => 'http://localhost/hybridauth/callback.php',

    'providers' => [
        'Twitter' => [ 'enabled' => true, 'keys' => [ 'key' => 'twitter-consumer-key' , 'secret' => 'twitter-consumer-secret'   ] ],
        'GitHub'  => [ 'enabled' => true, 'keys' => [ 'id'  => 'github-application-id', 'secret' => 'github-application-secret' ] ]
    ]
];

// Instantiate Hybridauth main class with the config array
$hybridauth = new Hybridauth\Hybridauth( $config );

try{
    // Authenticate with GitHub
    $adapter = $hybridauth->authenticate( 'GitHub' );

    // Retrieve the user github profile
    $userProfile = $adapter->getUserProfile();
}
catch( Exception $e ){
    echo 'Oops, we ran into an issue! ' . $e->getMessage();
}
</pre>
