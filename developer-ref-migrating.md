---
layout: default
title: "Migrating from Hybridauth 2 to Hybridauth 3"
---

Migrating from Hybridauth 2 to Hybridauth 3
===========================================

This is a pretty big release with lots of changes under the hood.
Be sure to read the other pages in this guide for all the new features and API changes.

#### 1. Upgrade to the latest hybridauth (see [Installation](install.html)):

<pre>
composer require 'hybridauth/hybridauth:~3.0'
</pre>

#### 2. Migrate your configuration array (see [Introduction](introduction.html)):

##### Hybridauth 2.x:

<pre>
$config = [
    // "base_url" the url that point to Hybridauth Endpoint (where index.php and config.php are found).
    'base_url' => 'https://mywebsite/path/to/hybridauth/',

    // Providers specifics.
    'providers' => [
        'Twitter' => [
            'enabled' => true,
            'keys' => [
                'key' => '...',
                'secret' => '...',
            ],
        ],
        'Google' => ['enabled' => true, 'keys' => ['id' => '...', 'secret' => '...']],
        'Facebook' => ['enabled' => true, 'keys' => ['id' => '...', 'secret' => '...']],
    ],
];
</pre>

##### Hybridauth 3.x:

<pre>
$config = [
    // Location where to redirect users once they authenticate,
    // For this example we choose to come back to this same script.
    'callback' => 'https://example.com/path/to/this/script.php',

    // Providers specifics.
    'providers' => [
        'Twitter' => [
            'enabled' => true,
            'keys' => [
                'key' => '...',
                'secret' => '...',
            ],
        ],
        'Google' => ['enabled' => true, 'keys' => ['id' => '...', 'secret' => '...']],
        'Facebook' => ['enabled' => true, 'keys' => ['id' => '...', 'secret' => '...']],
    ],
];
</pre>

#### 3. Migrate your OAuth 2.0 Redirect Urls:

Note, that **Hybridauth 2.x** uses `hauth.done={providerId}` in `OAuth 2.0 Redirect Urls` to determine which provider to authenticate.

In **Hybridauth 3.x**, it's not required anymore. Check out [examples](https://github.com/hybridauth/hybridauth/tree/master/examples). 

#### 4. Migrate your authentication (see [User Authentication](developer-ref-user-authentication.html)):

##### Hybridauth 2.x:

<pre>
$hybridauth = new Hybrid_Auth($config);
$adapter = $hybridauth->authenticate('Twitter');
$userProfile = $adapter->getUserProfile();
</pre>

##### Hybridauth 3.x:

<pre>
$hybridauth = new Hybridauth\Hybridauth($config);
$adapter = $hybridauth->authenticate('Twitter');
$userProfile = $adapter->getUserProfile();

// or

$hybridauth = new Hybridauth\Provider\Twitter($config);
$adapter = $hybridauth->authenticate();
$userProfile = $adapter->getUserProfile();
</pre>

#### 5. Migrate custom API calls (see [Providers APIs](developer-ref-providers-apis.html)):

##### Hybridauth 2.x:

<pre>
// Authenticate GitHub's adapter.
$hybridauth = new Hybrid_Auth($config);
$adapter = $hybridauth->authenticate('GitHub');

// Access GitHub API to retrieve the user's public gists.
// See: https://developer.github.com/v3/gists/
$apiResponse = $adapter->api()->get('gists'); // or absolute url: https://api.github.com/gists

// Inspect API's response.
var_dump($apiResponse);
</pre>

##### Hybridauth 3.x:

<pre>
// Authenticate GitHub's adapter.
$hybridauth = new Hybridauth\Hybridauth($config);
$adapter = $hybridauth->authenticate('GitHub');

// Access GitHub API to retrieve the user's public gists.
// See: https://developer.github.com/v3/gists/
$apiResponse = $adapter->apiRequest('gists'); // or absolute url: https://api.github.com/gists

// Inspect API's response.
var_dump($apiResponse);
</pre>

#### 6. Feeling like something is missing? Please [let us know](https://github.com/hybridauth/hybridauth/issues/new).

<br>
<br>

<style>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
