# kiwie

Vue app made with 💚

------

### External dependencies

#### Commitizen

You must follow this steps to install commitizen with emojis properly

```bash
# Step 1
$ npm install --global cz-emoji

# Step 2
# set as default adapter for your projects
$ echo '{ "path": "cz-emoji" }' > ~/.czrc
```

### Commiting culture

To commit a change you must type `git cz`, select the proper option for your change and follow the steps that will be shown

```
? Select the type of change you're committing: (Use arrow keys or type to search)
> feat:      🍻  A new feature
  fix:       💩  A bug fix
  test:      🚓  Testing improved with new or fixed tests
  chore:     🔩  Doesn't modify src or test files
  style:     🎨  Doesn't affect the meaning of the code (white-space, semi-colons, etc)
  docs:      📚  Documentation change
  refactor:  🔧   Neither fixes a bug nor adds a feature
(Move up and down to reveal more choices)
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
