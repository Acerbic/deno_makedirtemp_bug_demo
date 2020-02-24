# makeTempDir issue

`Deno.makeTempDir` and the related `makeTempDirSync`, `makeTempFile`, `makeTempFileSync`
don't work with whitelisted *--allow-write* relative paths. I.e. if you whitelist a relative
path and try to use `makeTempDir` with `MakeTempDirOptions.dir`, the call will fail with 
"Permission Denied" error. Using absolute path in such manner works fine.

## Works

```bash
deno --allow-write=./out mkdir.ts
deno --allow-write=/tmp maketempdir.ts /tmp
deno --allow-write maketempdir.ts ./out
```

## Fails

```bash
deno --allow-write=./out maketempdir.ts ./out
```
