# Raa’i portfolio architecture

The browser loads `index.html` from the branch root. Page copy, links, and captions are available on the first load.

## Page map

| Section | Anchor |
| --- | --- |
| Livestock monitoring from the cameras farms already own. | #hero |
| Hackathons and competition results | #awards |
| When a livestock asset dies in silence, a family loses its savings — and the planet inherits an unrecorded methane disaster | #challenge |
| Turning cameras farms already own into a 24/7 veterinary system | #solution |
| Built on a proprietary local dataset and benchmarked hardware, not a hunch | #science |
| Every prediction ships with its reasons — no black-box opacity | #explainability |
| From model to workspace — a dashboard built for the farm floor | #product |
| Workflows in the prototype | #screens |
| A high-margin hardware + software revenue model | #business |
| The stack, end to end | #stack |
| A hands-on technical team that built and shipped the prototype together | #team |

## Styles and assets

`css/base.css` defines the design tokens and typography. `css/layout.css` provides shared layout rules. Each section has a named stylesheet. `css/responsive.css` adapts the layout, and `css/reduced-motion.css` respects system preferences. Visuals are local and Google Fonts has system fallbacks.

## Interactions

`js/navigation.js` toggles the mobile menu, closes it after choosing a section, and returns focus to the button on Escape. `brief-dialog.js` controls the technical brief dialog. The supplied logo and workflow cards are used on the site. The original award photo, diagram, and two edge prototype captures were unavailable.
