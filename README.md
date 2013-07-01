# js-montreal.org

Docpad-based version of the js-montreal.org website. We would be happy happy
happy to have people skilled at design make this nicer.

## Getting Started

1. [Install DocPad](https://github.com/bevry/docpad)

1. Clone the project and run the server

	``` bash
	git clone git://github.com/docpad/twitter-bootstrap.docpad.git
	cd twitter-bootstrap.docpad
	npm install
	docpad run
	```

1. [Open http://localhost:9778/](http://localhost:9778/)

1. Start hacking away by modifying the `src` directory

## I'm getting 'undefined is not a function' on the Archive page

Open up node_modules/docpad-plugin-haml/out/haml.plugin.js and change this:

	opts.content = haml.render(opts.content, {
		locals: templateData
	});

into this:

	opts.content = haml(opts.content)(templateData);


Restart DocPad as plugins are cached and must be reloaded.

## I'm getting EMFILE errors

[See here for the reason why and the solution](http://docpad.org/docs/troubleshoot#i-m-getting-emfile-too-many-open-files)