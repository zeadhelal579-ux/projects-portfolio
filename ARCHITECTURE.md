# METHIX portfolio architecture

The browser loads `index.html` from the branch root. Page copy, links, and captions are available on the first load.

## Page map

| Section | Anchor |
| --- | --- |
| See what drives cattle methane. | Opening section |
| You can weigh a cow. You can't see her methane. | #challenge |
| Four steps, one traceable line from cow to decision. | #solution |
| Built on published research, not a hunch. | #science |
| Every prediction comes with its reasons. | Opening section |
| A dashboard that moves from herd to cow to decision. | #product |
| The product, as it actually runs. | #screens |
| Cleaner herds shouldn't cost farmers money. They should make them money. | #business |
| The stack, and the checks that keep it honest. | #stack |
| Three people, three disciplines, one deadline. | #team |
| Let's build something. | #contact |

## Styles and assets

`css/base.css` defines the design tokens and typography. `css/layout.css` provides shared layout rules. Each section has a named stylesheet. `css/responsive.css` adapts the layout, and `css/reduced-motion.css` respects system preferences. Visuals are local and Google Fonts has system fallbacks.

## Interactions

`js/navigation.js` toggles the mobile menu, closes it after choosing a section, and returns focus to the button on Escape.
