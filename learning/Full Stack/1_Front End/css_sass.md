# Syntax
## Statements
- Universal statements
	- variable declarations: $var: value;
	- flow control (@if and @each)
	- @error, @warn, @debug
- css statements
	- style rules
	- css at-rules (@media, @font-face, etc.)
	- mixins, @include
	- @at-root
- top level statements
	- module loads (@use)
	- @import
	- @mixin
	- @function
- others
	- property declarations (inside style rules, css at-rules as usual in css)
	- @extend used only in style rules.

## Expressions (right hand side of a property or variable declaration)
- always produces a value.
- Sass > CSS
- Literals
	- numbers
	- strings
	- colors
	- boolean (true, false)
	- singleton `null`
	- list of values (such as for border: 1px solid Sans-serif) (or [a b])
	- maps: ("background": red, "foreground": pink)
- operations
	- == !=
	- + - * /
	- < <= >= >
	- and or not
	- + - / for concat strings
	- ( ) control precedence order of operations
- others
	- variables like $var
	- function calls
	- special functions
	- parent selector &
	- !important

# Comments
- scss
	- // == single line comment
	- /* */ == multi-line comment
	- /*! */ == multi-line comment that won't be stripped by compression
- sass
	- indentation based; keep the intent the same amouhnt and it will continue commenting
	- // this is a comment.
				this is a comment 2.
	- /* this is a comment.
	- /* this is a comment-2.
				this is also a comment.
	- /*! compressed mode comment.
	- background-color: black /* red */;
- /// == documentation comments

# Special Functions
- url()
	- url("../fonts/roboto")
	- url("#{$roboto-font-path}/Roboto-Thin.woff2")
	- url($roboto-font-path + "/Roboto-Light.woff2")
	- url(#{$roboto-font-path}/Roboto-Regular.woff2)
- calc(), element(), progid:...(), expression()
	- calc() == do math
	- element() == parse IDs as colors
	- progid:...() == legacy function
	- expression() == legacy function
- min(), max()
	- if you don't use it with sass features, it'll use the css

# Style Rules
## Property Declarations
- you can use any Sass expression as a value.
- you can interpolate the property's name, making it possible to dynamically create properties as needed.
	- example: `#{$prefix}-#{$property}`: red;
- nesting: for namespace-esque properties such as font-*, transition-*, etc. you can group them:
	- transition: {
			property: font-size;
			duration: 4s;
			delay: 2s;
		}
- hidden declarations
	- use `null` or empty unquoted string (background-color: ;) to not do the declaration.
- custom properties
	- because of sass variables able to be used in js, they are passed through to css as-is.
	- interpolation removes quotes from strings, so be careful!
		- use meta.inspect to preserve quotes:
		- `--font-family-sans-serif: #{meta.inspect($font-family-sans-serif)};`

## Parent Selector
- parent selector: `&`
- ...

## Placeholder Selectors
- special selector type called `placeholder`
- not added to css, but lets you extend it with more styles
- great for not cluttering up your class namespace


# SASS Variables
- $variable_name
- sass variables are:
	- compiled away by sass; css variables stay in css output
	- sass variables can have only one value at a time; css variables can have multiple values for multiple elements
	- sass variables are imperative: using a variable before it's set won't change its use. CSS variables affect before and after the change!
- !default
	- default value assignment here. If value already exists, don't change it!
		- assign if variable isn't defined or variable = null.
- configuring modules
	- @use 'library' with (
		$black: 222,
		$border-radius: 0.1rem
	)
- sass variables are block scope
	- top level = global
	- inside a block = local
- shadowing
	- local variable name === global variable name
	- use !global to reference the global variable
- variables inside flow control rules
	- not a local block, just uses existing scope
	- you can't create new variables inside a flow control block, so create them beforehand!
- advanced variable functions
	- meta.variable-exists()
	- meta.global-variable-exists()

# Interpolation
- #{} => SassScript expression into css
- usage locations
	- selectors
	- properties
	- strings
	- functions
	- plain css @imports
	- plan css function names
	- comments
- notes
	- interpolation eats the quoted string, meaning the resulting css is missing the quotes.
	- if you're explicitly using this feature, use `string.unquote($my_string)` instead.

# At-Rules
# Values
# Operators
# Built-in modules

# breaking changes
# CLI
# JS API























