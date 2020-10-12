---
layout: default
title: "How to Sign in with Apple"
description: "Describes how to sign in with Apple provider."
---

Apple
==========================

## Dependencies
- `composer require firebase/php-jwt`
- `composer require phpseclib/phpseclib`

## Online documentation
- [https://developer.apple.com/sign-in-with-apple/get-started](https://developer.apple.com/sign-in-with-apple/get-started)
- [https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple](https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple)
- [https://sarunw.com/posts/sign-in-with-apple-2](https://sarunw.com/posts/sign-in-with-apple-2)

## Enable email delivery

Sign in to [https://developer.apple.com/account/resources](https://developer.apple.com/account/resources)

Click on "More ..." and add domains and email addresses (requires SPF and DKIM, probably also an Apple ID in .well-known)

## Keys & IDs

Sign in to [https://developer.apple.com/account/resources](https://developer.apple.com/account/resources)

### Identifiers

#### App ID

Create the primary ID for "Sign in" service.

#### Service ID

Create a service ID of the type *Sign in with Apple* and assign it to the app ID, then fill in your domains.

The Apple Service ID is **your OAuth2 Client ID**.

### Key ID and private key

Create a new key for your Sign-In Service.
This gets you a **key ID** (under details) and the **private key** (download)

#### Hints:

* Don't forget to fill in the key name (there will be no error message if you forget).
* Downloading the privacy key is only possible once.

### Team ID

This is your Account ID at the top right of the account information (2nd line)

## Notes

* The secret is generated from a signed [JWT (JSON Web Token)](https://jwt.io). Instead of a secret you have to provide your *team_id*, *key_id* and *key_file* or *key_content* in your configuration. You don't need to generate a secret yourself.

```
    "providers" => [
        "Apple" => [
            "enabled" => true,
            "keys" => [
                "id" => "Your Apple ID",
                "team_id" => "Your Apple team id",
                "key_id" => "Your Apple key id",
                "key_content" => "Your Apple key (content including BEGIN and END lines)"
                "key_file" => "Full path to your Apple key file (alternative to key_content)"
            ],
            "scope" => "name email",
            "verifyTokenSignature" => true
        ]
    ]
```

* The token returned after authentication is a signed JWT.  Validating requires an a additional library. It can be disabled by setting   `"verifyTokenSignature" => false`
in the configuration.

* The current default value for `response_mode` is `form_post` (you can overrule it with `query` or `fragment` if you don't have a scope defined).
If a scope is defined, Apple **always** sends the `code` value as a **POST** request (Facebook and Google return the code as a query parameter).

### FAQs / reasons for authentication failures
* Missing first/last/display name in getUserProfile(): Apple sends this information only on the very first time the user authorizes the app (see https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple), so you have only one change to save this information. To receive this data for a second time, you have to revoke your authorization first: https://stackoverflow.com/questions/58018184/how-to-revoke-sign-in-with-apple-credentials-for-a-specific-app
* Have the right id (= Service ID, usually in reverse domain name notation e.g. "org.foo.bar"), team id, key id and the full path to your private key file configured.
* Make sure you have your domain(s) configured correctly in your Service ID.
* Your server must have the time set correctly (use ntpdate), otherwise signature validation might fail
