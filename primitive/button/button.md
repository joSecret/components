# Button

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Bootstrap Documentation

https://getbootstrap.com/docs/5.3/components/buttons/

## Available Properties:

- `button_tag`: The HTML tag to use for the button (button | a). Defaults to `button`.
- `url`: URL link for the button when the HTML tag is an anchor link.
- `color`: Bootstrap includes several predefined button styles, each serving its own
  semantic purpose, with a few extras thrown in for more control.
  (primary | secondary | success | danger | warning | info | dark | light | link)
- `outline`: (true|false) In need of a button, but not the hefty background colors they bring?
  Replace the default modifier classes with the `.btn-outline-*` ones to remove all
  background images and colors on any button.
- `size`: (btn-sm | btn-lg) Bootstrap button size
- `disabled`: (true|false) Disabled button
- `button_uc`: An array of utility classes.

## Available Slots:

- `content`: The content for the button

## Examples

**Example #1:** Primary button

```twig
  {%
    include 'edwt:button' with {
      button_tag: 'button',
      color: 'primary',
      content: 'Login'
    }
  %}
```

**Example #2:** Anchor button as Read more link in a Card

```twig
 {%
  include 'edwt:button' with {
      button_tag: 'a',
      color: 'primary',
      outline: true,
      content: 'Read more',
      url: '/blog/test-blog1',
      button_uc: ['card-link', 'float-end', 'mt-3', 'read-more']
    }
  %}
```

**Example #3:** Disabled Anchor button

```twig
  {%
    include 'edwt:button' with {
      button_tag: 'a',
      color: 'primary',
      content: 'Read more',
      url: '#',
      disabled: true,
    }
  %}
```
