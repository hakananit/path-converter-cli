# path-converter-cli

Converts between forward/backward slashes depending on the OS.

## Usage

Given Unix path it will convert it to Windows compatible path on Windows patform.

```sh
path-converter-cli 'foo/bar'
```

will return:

```sh
foo\bar
```

Given Windows path it will convert it to Unix compatible path on Unix platform.

```sh
path-converter-cli 'foo\bar'
```

will return:

```sh
foo/bar
```
