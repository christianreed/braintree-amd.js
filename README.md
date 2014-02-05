# Braintree-AMD.js

This is a fork of the Braintree.js script that enhances its AMD implementation by defining it anonymously and only defining globaly if define isn't present. In addition, it will use jQuery on form submission instead of the fallback when running in an AMD enviroment where jQuery isn't defined as a global.

NOTE: It assumes the presence of a 'jquery' module. If someone knows how to check for the presence of a 'jquery' module, I'd love to roll that in to make it more robust.

While this could replace braintree.js even for folks running without AMD, I strongly recommend that you don't do that and instead use the official script, since that will keep you up to date with the latest release, and this one relies on my updating.

The next major release of Braintree.js plans to take AMD into account at which point I'll discontinue maintenance of this fork. For now, though, the version numbers of this script will move in lock step with where it stands with respect to the Braintree.js version. Currently it is up to date with 1.3.9.

For what its worth, we're rolling this in to our main.js file to avoid timeouts on this script that would cause a payment failure. Your mileage may vary.

See the [Braintree.js](https://github.com/braintree/braintree.js) for more information on the core of this script.
