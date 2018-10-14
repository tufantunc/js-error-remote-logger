# JSERL JS Error Remote Logger
> Provides remote logging for JS errors from user's browser by sending a post request to developer specified api endpoint.

## USAGE
Include jserl.js file and run `init()` initializer in the `<head>` section of your page. Don't forget to set api url.

```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <script src="dist/jserl.min.js"></script>
	<script>
	  jserl.waitForErrors({url: 'http://localhost:3000/log'});
	</script>
  </head>
  <body>
    <!-- Page elements -->
  </body>
</html>
```

## License
jserl is MIT-licensed.