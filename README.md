# emed GJS example

`sudo dnf install gjs-devel glib2-devel pkgconf`

This examples demonstrates

* a GJS program bootstrapped from C
* a single file executable with all data

## Build

```sh
glib-compile-resources --generate-source gresource.xml --target=gresource.c
cc -Os -Wall `pkgconf --cflags gjs-1.0` my-program.c gresource.c -o my-program `pkgconf --libs gjs-1.0`
```

## Run

```
./my-program
```

<!--

## One-liner

```
glib-compile-resources --generate-source gresource.xml --target=gresource.c && cc -Os -Wall `pkgconf --cflags gjs-1.0` my-program.c gresource.c -o my-program `pkgconf --libs gjs-1.0` &&
```

-->