## Announce

Growl-inspired alerts and message.


## Development

__Install Dependencies__

npm
```sh
$ npm install
```

bower
```sh
$ bower install
```

## Include
Javascript
```
<script src="announce.js"></script>
```

CSS
```
<link rel="stylesheet" href="announce.css"/>
```

## Usage

``` javascript
var announce = new Announce({
    position: 'bottom-right',
    timeout: true,
    timeoutDelay: 3000
});
  
announce.post({
  text: 'This is an announcement!',
  type: 'notice'
});
```

[API documentation](https://thatguyhughesy.github.io/announce/docs)

[Demo](https://thatguyhughesy.github.io/announce/)


## Contributing

Contributions of any kind are encouraged. If you would like to contribute in any way, please check out the [guidelines for contributing](CONTRIBUTING.md).


## License
Copyright &copy; 2016 Conor Hughes - [MIT License](LICENSE)
