## Announce

Growl-inspired alerts and message.


## Install

__npm__
```sh
$ npm install
```

__bower__
```sh
$ bower install
```

## Usage

```javascript
let announce = new Announce({
    position: 'bottom-right',
    timeout: 5000
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
