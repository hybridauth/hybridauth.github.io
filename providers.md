---
layout: default
title: "Supported providers"
description: "Listing of supported social networks and identity providers and their enabled features."
---

Supported providers
===================

The table below lists the social networks and identity providers currently supported by Hybridauth 3 and outlines their enabled features (or capabilities).

{% include callout.html content="A provider or IDP means a social network, identity provider or authentication service. An adapter is the actual PHP class implemented by Hybridauth to abstract a provider's API." type="primary" %}

{% include callout.html content="While OpenID providers do not require an application [[1]](https://openid.net/specs/openid-authentication-2_0.html) and thus no action from your part to make their adapters work, OAuth providers requires consumer (or client) websites (e.g., your website) to register an application [[2]](http://tools.ietf.org/html/rfc5849#page-3) [[3]](http://tools.ietf.org/html/rfc6749#section-2). Generally speaking those providers will have a dedicated developer's section or subdomain where you can register yours and apply for a pair of keys (i.e, application credentials )." type="primary" %}

{% include callout.html content="When we mention OpenID, we mean the original v1 or v2 protocols. OpenID Connect is an entirely different specification which is built on top of OAuth; many of the OAuth providers are actually using OpenID Connect also." type="primary" %}

| Adapter Unique Name |  Specs | Authentication | User's Profile | User's Contacts | User's Status | User's Activity Stream |
|:-------------------:|:------:|:--------------:|:--------------:|:---------------:|:-------------:|:----------------------:|
|        [Apple](providers/apple.md)        | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Amazon       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|      AOLOpenID      | OpenID |       [X]      |       [X]      |                 |               |                        |
|      Authentiq      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|      AutoDesk       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|      BitBucket      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Blizzard      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Discord       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Disqus       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Dribbble      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Dropbox       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Facebook      | OAuth2 |       [X]      |       [X]      |       [X]       |               |           [X]          |
|      Foursquare     | OAuth2 |       [X]      |       [X]      |       [X]       |               |                        |
|        GitHub       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        GitLab       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Google       | OAuth2 |       [X]      |       [X]      |       [X]       |               |                        |
|      Instagram      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Keycloak      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       LinkedIn      | OAuth2 |       [X]      |       [X]      |                 |      [X]      |                        |
|       Mastodon      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Medium       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|    MicrosoftGraph   | OAuth2 |       [X]      |       [X]      |       [X]       |               |                        |
|        OpenID       | OpenID |       [X]      |       [X]      |                 |               |                        |
|        ORCID        | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Paypal       | OpenID |       [X]      |       [X]      |                 |               |                        |
|     PaypalOpenID    | OpenID |       [X]      |       [X]      |                 |               |                        |
|        Reddit       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Slack        | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Spotify       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|    StackExchange    | OAuth2 |       [X]      |       [X]      |                 |               |                        |
| StackExchangeOpenID | OpenID |       [X]      |       [X]      |                 |               |                        |
|        Steam        | Hybrid |       [X]      |       [X]      |                 |               |                        |
|        Seznam       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Strava       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|     SteemConnect    | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Telegram      | Hybrid |       [X]      |       [X]      |                 |               |                        |
|        Tumblr       | OAuth1 |       [X]      |       [X]      |       [X]       |      [X]      |                        |
|       TwitchTV      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|       Twitter       | OAuth1 |       [X]      |       [X]      |       [X]       |      [X]      |           [X]          |
|        WeChat       | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|     WindowsLive     | OAuth2 |       [X]      |       [X]      |       [X]       |               |                        |
|      WordPress      | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|        Yahoo        | OAuth2 |       [X]      |       [X]      |                 |               |                        |
|         QQ          | OAuth2 |       [X]      |       [X]      |                 |               |                        |

{% include callout.html content="Some providers such as Paypal and StackExchange may use multiple protocols for their APIs and as naming convention we append the protocol's name to the adapters (Often the case with OpenID adapters as those might be subject to removal by providers in near future due to deprecation of the OpenID protocol)." type="default" %}

<script>
$(function () {
  $("td:contains('[X]')").each(function() {
    var replaced = $(this).html().replace(/\[X\]/g, '<i class="fa fa-check-square fa-2"></i>');
    $(this).html(replaced);
  });
});
</script>
