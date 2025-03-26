# Here I try a new setup for ES lint

It should be applied later to a bigger TypeScript Project.
I am testing different configurations.

### Setup:

**install** ES lint:

```shell
npm init @eslint/config@latest
```

follow the **instructions**:

```shell
Need to install the following packages:
@eslint/create-config@1.6.0
Ok to proceed? (y) y


> npx
> create-config

@eslint/create-config: v1.6.0

The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-react
✔ Would you like to install them now? · No / Yes

☕️Installing...

Successfully created /Path/ES-Lint-Config/eslint.config.mjs file.
```

if its not applied correctly in your **tsx** files you can try:

```shell
npm install --save-dev eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

#### It creates a file: eslint.config.js

there I added the configurations.

#### to run it:

```shell
npx eslint "src/**/*.{js,jsx,ts,tsx}"
```

#### If it autocorrects in VS Code its probably the prettier.

How do I change the behaviour in VS Code?

If ESLint automatically corrects the behaviour in VS Code, this is probably due to the settings.

1️⃣ Open the settings (Ctrl + ,)
2️⃣ Search for "editor.codeActionsOnSave"
3️⃣ If you see that ESLint automatically corrects when saving, you can deactivate it:

👉 If ESLint should not autocorrect, set it like this:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": false
}
```

👉 If you only want it to display but not automatically correct, remove "source.fixAll.eslint" : true.

#### Or run ES lint for one file

```shell
npx eslint src/FileName.tsx
```

# test-Project
