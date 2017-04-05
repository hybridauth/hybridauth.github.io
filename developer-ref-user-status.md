Update User Status
==================

**Important** Currently only Facebook, Twitter and LinkedIn do support this feature. Others providers will throw an
exception (`NotImplementedException`: Provider does not support this feature), when `setUserStatus()` is called.


**Twitter example :**

<pre>
// Instantiate Twitter Adapter
$twitter = new Hybridauth\Provider\Twitter($config);

// Authenticate with the user
$twitter->authenticate();

// Update the user status
$twitter->setUserStatus( "Hello world!" );
</pre>


**Facebook example :**

Facebook supports few extra parameters when posting a new user status :

<pre>
// Instantiate Facebook Adapter
$facebook = new Hybridauth\Provider\Facebook($config);

// Authenticate with the user
$facebook->authenticate();

// Update the user status
$twitter->setUserStatus(
    array(
        'message' => 'Hello world!',
        'link'    => 'https://example.com/link/to/page',
        'picture' => 'https://example.com/link/to/picture.jpg'
    )
);
</pre>
