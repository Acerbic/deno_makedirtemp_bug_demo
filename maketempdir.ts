const dir = Deno.args[0];
console.log(await Deno.makeTempDir({ dir }));

