WineOh


##Setup

    # First time - ensure NPM dependencies are installed
    $ npm install

    # Any other time - ensure runtime JS exist
    $ bower install


##Running

    # Fire up the server (in dev mode)
    $ grunt serve

    # Fire up the server (against built artifacts)
    $ grunt server:dist


##Capturing a build

    # Generate a build (it gets put in the "dist" folder)
    $ grunt clean build
    $ cd dist
    $ rm -rf bower_components  # the build doesn't use this folder
    $ cd ..
    # The dist folder now (should) have all of the artifacts for releasing
